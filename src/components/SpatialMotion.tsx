import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const depthTargets = '.depth-card, .skill-group, .portrait-frame, .system-map, .education-list article';

/** CSS 3D geometry, scroll-linked depth, and pointer tilt without a WebGL loop. */
export default function SpatialMotion() {
  const [enabled, setEnabled] = useState(() => {
    try { return localStorage.getItem('portfolio-motion') !== 'paused'; } catch { return true; }
  });
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const running = enabled && !reduced;

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('motion-off', !running);
    try { localStorage.setItem('portfolio-motion', enabled ? 'running' : 'paused'); } catch { /* Optional preference. */ }
    if (!running) return;

    let frame = 0;
    let scrollFrame = 0;
    let target: HTMLElement | null = null;
    const animations = new Set<Animation>();
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const resetTilt = () => {
      target?.style.removeProperty('--tilt-x');
      target?.style.removeProperty('--tilt-y');
      target = null;
    };
    const move = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType === 'touch') return;
      const next = event.target instanceof Element ? event.target.closest<HTMLElement>(depthTargets) : null;
      if (next !== target) resetTilt();
      target = next;
      cancelAnimationFrame(frame);
      if (!next) return;
      const { clientX, clientY } = event;
      frame = requestAnimationFrame(() => {
        const rect = next.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (clientX - rect.left) / rect.width * 2 - 1));
        const y = Math.max(-1, Math.min(1, (clientY - rect.top) / rect.height * 2 - 1));
        next.style.setProperty('--tilt-x', `${-y * 4}deg`);
        next.style.setProperty('--tilt-y', `${x * 5}deg`);
      });
    };
    const scroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        root.style.setProperty('--scene-scroll', `${window.scrollY * .025}deg`);
        scrollFrame = 0;
      });
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const animation = entry.target.animate([
          { opacity: .25, transform: 'perspective(1100px) translate3d(0, 28px, -45px) rotateX(5deg)' },
          { opacity: 1, transform: 'perspective(1100px) translate3d(0, 0, 0) rotateX(0deg)' },
        ], { duration: 750, easing: 'cubic-bezier(.2,.7,.2,1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: .08 });
    document.querySelectorAll('.section-heading, .about-copy, .timeline > li, .education-list article, .program-card, .testimonial, .project-tile, .contact-section h2').forEach(element => observer.observe(element));
    const visibility = () => root.classList.toggle('motion-hidden', document.hidden);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', resetTilt);
    window.addEventListener('blur', resetTilt);
    window.addEventListener('scroll', scroll, { passive: true });
    document.addEventListener('visibilitychange', visibility);
    scroll();
    visibility();
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', resetTilt);
      window.removeEventListener('blur', resetTilt);
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('visibilitychange', visibility);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      resetTilt();
    };
  }, [running, enabled]);

  return <>
    <div className="spatial-scene" aria-hidden="true">
      {[0, 1, 2].map(index => <div className={`cube-position cube-position-${index}`} key={index}><div className="spatial-cube">{['front', 'back', 'left', 'right', 'top', 'bottom'].map((face, faceIndex) => <span className={`cube-face ${face}`} key={face}>{faceIndex === 0 ? ['</>', 'SAP', '.NET'][index] : '+'}</span>)}</div></div>)}
      <div className="spatial-orbit orbit-one" /><div className="spatial-orbit orbit-two" />
    </div>
    <button className="motion-control" onClick={() => setEnabled(!enabled)} aria-label={reduced ? 'Animations disabled by reduced motion preference' : running ? 'Pause 3D animations' : 'Play 3D animations'} aria-pressed={running} disabled={reduced}>
      {running ? <Pause size={13} /> : <Play size={13} />}<span>{reduced ? 'Reduced motion' : running ? '3D motion on' : '3D motion off'}</span>
    </button>
  </>;
}
