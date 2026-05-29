import { useEffect, useRef } from 'react';

function asCssVarValue(value) {
  if (!value) {
    return 'none';
  }
  return value;
}

export default function ParallaxSection({
  id,
  className = '',
  backgroundImage,
  overlay,
  bgSpeed = 0.2,
  contentSpeed = 0.08,
  children,
}) {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const section = sectionRef.current;

      if (section) {
        section.style.setProperty('--parallax-bg-y', '0px');
        section.style.setProperty('--parallax-content-y', '0px');
      }

      return undefined;
    }

    const updateParallax = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const centered = progress - 0.5;

      section.style.setProperty('--parallax-bg-y', `${Math.round(centered * 220 * bgSpeed)}px`);
      section.style.setProperty('--parallax-content-y', `${Math.round(centered * 140 * contentSpeed)}px`);
    };

    const onScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        updateParallax();
        frameRef.current = null;
      });
    };

    updateParallax();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [bgSpeed, contentSpeed]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`parallax-section ${className}`.trim()}
      style={{ '--section-bg-image': backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      <div className="parallax-layer parallax-image" aria-hidden="true" />
      <div className="parallax-layer parallax-grain" aria-hidden="true" />
      <div className="parallax-layer parallax-overlay" aria-hidden="true" style={{ background: asCssVarValue(overlay) }} />
      <div className="parallax-content">{children}</div>
    </section>
  );
}
