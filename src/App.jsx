import { useEffect, useRef, useState } from 'react';
import ParallaxSection from './components/ParallaxSection';

const WHATSAPP_NUMBER = '573003484934';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const ASSET_VERSION = '20260421-1840';

const images = {
  hero: '/background-bloque1.jpeg',
  issue: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80',
  services1: '/genetica_lechera.jpeg',
  services2: '/genetica_exposicion.jpeg',
  services3: '/tecnicacion_pastos.jpeg',
  value: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
  diff1: '/fondo-frase-destacada.jpeg',
  diff2: '/genetica_exposicion.jpeg',
  diff3: '/tecnicacion_pastos.jpeg',
  cta: '/sobre_nosotros_01.png',
};

const problemItems = [
  {
    icon: `/icono_comprar_ganado.png?v=${ASSET_VERSION}`,
    title: 'Comprar ganado debería ser una decisión segura, no una apuesta.',
    description:
      'El mercado está lleno de vendedores que especulan con los precios y ocultan información. Encontrar un proveedor confiable no debería ser un juego de azar.',
  },
  {
    icon: `/icono-proveedores.png?v=${ASSET_VERSION}`,
    title: 'Muchos proveedores hacen promesas de producción que el animal nunca cumple.',
    description:
      'Un animal sin la genética adecuada no va a rendir lo que le dijeron y eso se traduce directamente en pérdidas para la finca.',
  },
  {
    icon: `/icono-tecnificacion.png?v=${ASSET_VERSION}`,
    title: 'Hay mejores formas de manejar una finca, pero no siempre es claro por dónde empezar.',
    description:
      'La tecnificación del campo existe y está disponible; el problema es acceder a ella de forma práctica y con acompañamiento real.',
  },
];

const services = [
  {
    title: 'Genética Lechera',
    icon: 'milk',
    image: images.services1,
    description:
      'Vacas seleccionadas genéticamente para maximizar la producción de leche. Cada animal viene con trazabilidad y respaldo técnico para que la inversión rinda desde el primer día.',
    cta: 'Consultar disponibilidad',
  },
  {
    title: 'Genética de Exposición',
    icon: 'award',
    image: images.services2,
    description:
      'Animales de élite con genética superior, aptos para exposición ganadera y reproducción de alto valor. Para el ganadero que busca los mejores ejemplares del mercado.',
    cta: 'Consultar disponibilidad',
  },
  {
    title: 'Tecnificación de Pastos y Forrajes',
    icon: 'tractor',
    image: images.services3,
    description:
      'No basta con tener buen ganado si el pasto no rinde. Asesoramos en el mejoramiento, manejo y productividad de pasturas con herramientas y protocolos modernos.',
    cta: 'Consultar disponibilidad',
  },
];

const differentiators = [
  {
    icon: 'map',
    title: 'No tiene que salir del Eje Cafetero',
    image: images.diff1,
    text: 'Accede a genética de calidad y asesoría técnica especializada sin necesidad de desplazarse fuera de la región. Garantías, cambios y seguimiento se resuelven cerca.',
  },
  {
    icon: 'trust',
    title: 'Confianza que se gana en el campo, no en la vitrina',
    image: images.diff2,
    text: 'En un mercado plagado de especulación, nuestro mayor activo es la reputación. Llevamos décadas en la industria y eso no se finge.',
  },
  {
    icon: 'tech',
    title: 'Tecnología que se ve en los resultados',
    image: images.diff3,
    text: 'Mejorar los pastos y forrajes de una finca no es un gasto; es la base de una ganadería que produce más con los mismos recursos.',
  },
];

const testimonialVideos = [
  {
    src: '/testimonio_02.mp4',
    poster: '/poster_testimonio_02.jpg',
    title: 'Testimonio GANATECH 1',
  },
  {
    src: '/testimonio_01.mp4',
    poster: '/poster_testimonio_01.jpg',
    title: 'Testimonio GANATECH 2',
  },
];

const aboutGalleryImages = [
  {
    src: '/sobre_nosotros_01.png',
    alt: 'Campo y operación GANATECH',
  },
  {
    src: '/sobre_nosotros_02.png',
    alt: 'Ganadería y tecnología GANATECH',
  },
  {
    src: '/sobre_nosotros_03.png',
    alt: 'Equipo y campo GANATECH',
  },
  {
    src: '/sobre_nosotros_04.png',
    alt: 'Paisaje ganadero GANATECH',
  },
];

const links = [
  { href: '#servicios', label: 'Nuestros servicios' },
  { href: '#nosotros', label: 'Sobre nosotros' },
  { href: '#diferenciales', label: 'Por qué elegir Ganatech' },
  { href: '#testimonios', label: 'Nuestros clientes' },
];

const heroSubtitle = 'Vacas de alta producción, genética de exposición y tecnificación de pastos, todo en Risaralda, cerca de vos.';
const quoteText = '“En GANATECH trabajamos para que ninguno de estos problemas frene el crecimiento de tu operación.”';
const quoteWords = [
  { text: '“En' },
  { text: 'GANATECH', className: 'quote-word--brand' },
  { text: 'trabajamos' },
  { text: 'para' },
  { text: 'que' },
  { text: 'ninguno' },
  { text: 'de' },
  { text: 'estos' },
  { text: 'problemas' },
  { text: 'frene' },
  { text: 'el' },
  { text: 'crecimiento' },
  { text: 'de' },
  { text: 'tu', className: 'quote-word--underlined' },
  { text: 'operación.”' },
];

function AnimatedQuoteText() {
  const quoteRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  let characterIndex = 0;

  useEffect(() => {
    const quote = quoteRef.current;

    if (!quote) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.45,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    observer.observe(quote);

    return () => observer.disconnect();
  }, []);

  return (
    <p ref={quoteRef} className={`quote-showcase-text ${isVisible ? 'is-visible' : ''}`} aria-label={quoteText}>
      {quoteWords.map((word, wordIndex) => (
        <span className={`quote-word ${word.className || ''}`.trim()} aria-hidden="true" key={`${word.text}-${wordIndex}`}>
          {word.text.split('').map((character) => {
            const index = characterIndex;
            characterIndex += 1;

            return (
              <span className="quote-char" data-char={character} style={{ '--quote-char-index': index }} key={`${character}-${index}`}>
                {character}
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}

const differentiatorTitleStart = 'Lo que nos hace diferentes no es marketing, ';
const differentiatorTitleEmphasis = 'es experiencia';
const differentiatorTitleLines = [
  {
    start: 'Lo que nos hace diferentes no es',
    emphasis: '',
  },
  {
    start: 'marketing, ',
    emphasis: 'es experiencia',
  },
];

function AnimatedDifferentialsTitle() {
  const titleRef = useRef(null);
  const fullText = differentiatorTitleLines.map((line) => `${line.start}${line.emphasis}`).join(' ');
  const [hasStarted, setHasStarted] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const title = titleRef.current;

    if (!title) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.65,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || displayCount >= fullText.length) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setDisplayCount((currentCount) => currentCount + 1);
    }, 42);

    return () => window.clearTimeout(timer);
  }, [displayCount, fullText.length, hasStarted]);

  const isComplete = displayCount >= fullText.length;
  let remainingCharacters = displayCount;

  return (
    <h2 ref={titleRef} className={`differentials-title ${isComplete ? 'is-complete' : ''}`} aria-label={fullText}>
      {differentiatorTitleLines.map((line, index) => {
        const lineStart = line.start.slice(0, Math.max(0, remainingCharacters));
        remainingCharacters -= lineStart.length;

        const lineEmphasis = line.emphasis.slice(0, Math.max(0, remainingCharacters));
        remainingCharacters -= lineEmphasis.length;

        return (
          <span className="differentials-title-line" key={`${line.start}-${index}`}>
            <span>{lineStart}</span>
            <span className="differentials-title-emphasis">{lineEmphasis}</span>
          </span>
        );
      })}
      <span className="typing-caret" aria-hidden="true" />
    </h2>
  );
}

function App() {
  const issuesRef = useRef(null);
  const servicesRef = useRef(null);
  const credentialsRef = useRef(null);
  const differentialsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const resultRef = useRef(null);
  const finalCtaRef = useRef(null);
  const [issuesVisible, setIssuesVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [credentialsVisible, setCredentialsVisible] = useState(false);
  const [differentialsVisible, setDifferentialsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);
  const [aboutImageIndex, setAboutImageIndex] = useState(Math.floor(aboutGalleryImages.length / 2));

  useEffect(() => {
    const section = issuesRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIssuesVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.26,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = servicesRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = credentialsRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCredentialsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = differentialsRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDifferentialsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = testimonialsRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.24,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = resultRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResultVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.38,
        rootMargin: '0px 0px -16% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = finalCtaRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFinalCtaVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.36,
        rootMargin: '0px 0px -14% 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAboutImageIndex((currentIndex) => (currentIndex + 1) % aboutGalleryImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const handleAboutNext = () => {
    setAboutImageIndex((currentIndex) => (currentIndex + 1) % aboutGalleryImages.length);
  };

  const handleAboutPrev = () => {
    setAboutImageIndex((currentIndex) => (currentIndex - 1 + aboutGalleryImages.length) % aboutGalleryImages.length);
  };

  const handleIssueCardPointer = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
    card.style.setProperty('--glow-opacity', '1');
  };

  const handleIssueCardLeave = (event) => {
    event.currentTarget.style.setProperty('--glow-opacity', '0');
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#inicio" className="logo-wrap" aria-label="Ir al inicio">
            <img src="/logo_transparente.png" alt="Logo GANATECH" className="logo" />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="phone-chip" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Contáctanos</a>
        </div>
      </header>

      <main>
        <ParallaxSection
          id="inicio"
          className="hero"
          backgroundImage={images.hero}
          overlay="linear-gradient(180deg, rgba(11, 12, 14, 0.44) 0%, rgba(11, 12, 14, 0.66) 100%), radial-gradient(ellipse at center, rgba(6, 8, 10, 0.2) 0%, rgba(6, 8, 10, 0.45) 58%, rgba(6, 8, 10, 0.72) 100%)"
          bgSpeed={0.24}
          contentSpeed={0.08}
        >
          <div className="hero-inner">
            <div className="hero-title-scene">
              <span className="eyebrow">Inteligencia ganadera premium</span>
              <h1>
                Tu ganadería más
                <br />
                rentable empieza con la
                <br />
                <span>genética y tecnología</span>
                <br />
                correctas
              </h1>
            </div>
            <p className="hero-subtitle" aria-label={heroSubtitle}>
              {heroSubtitle.split(' ').map((word, index) => (
                <span className="hero-subtitle-word" style={{ '--word-index': index }} aria-hidden="true" key={`${word}-${index}`}>
                  {word}
                </span>
              ))}
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Contáctanos por WhatsApp <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-muted" href="#servicios">
                Conoce nuestros servicios <span aria-hidden="true">⌄</span>
              </a>
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="problemas"
          className="issues"
          overlay="linear-gradient(180deg, rgba(19, 19, 19, 0.98) 0%, rgba(19, 19, 19, 0.98) 100%)"
          bgSpeed={0.24}
          contentSpeed={0.08}
        >
          <div ref={issuesRef} className={`container issues-shell ${issuesVisible ? 'is-visible' : ''}`}>
            <div className="section-head">
              <h2>Estos son los problemas más comunes en el sector ganadero</h2>
              <div className="line" />
            </div>

            <div className="cards-grid issue-grid">
              {problemItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`card issue-card issue-card--${index + 1}`}
                  onPointerMove={handleIssueCardPointer}
                  onPointerLeave={handleIssueCardLeave}
                >
                  <div className="issue-card-head">
                    <div className="issue-icon-wrap">
                      <img className="item-icon" src={item.icon} alt="" aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="frase-destacada"
          className="quote-showcase"
          backgroundImage="/fondo-frase-destacada.jpeg"
          overlay="linear-gradient(180deg, rgba(7, 9, 11, 0.42) 0%, rgba(7, 9, 11, 0.62) 100%)"
          bgSpeed={0.55}
          contentSpeed={0.14}
        >
          <div className="container quote-showcase-shell">
            <div className="quote-showcase-inner">
              <AnimatedQuoteText />
              <div className="quote-ornament" aria-hidden="true">
                <span className="quote-line" />
                <span className="quote-dot" />
                <span className="quote-line" />
              </div>
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="servicios"
          className="services"
          overlay="linear-gradient(170deg, rgba(28, 27, 27, 0.95), rgba(19, 19, 19, 0.98))"
          bgSpeed={0.18}
          contentSpeed={0.09}
        >
          <div ref={servicesRef} className={`container services-shell ${servicesVisible ? 'is-visible' : ''}`}>
            <div className="section-head">
              <h2>Nuestros servicios</h2>
              <div className="line" />
            </div>

            <div className="cards-grid services-grid">
              {services.map((service) => (
                <article className="card service-card" key={service.title}>
                  <div className="service-media">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <div className="service-media-fade" aria-hidden="true" />
                  </div>
                  <div className="service-copy">
                    <div className="service-heading">
                      <span className="service-icon" aria-hidden="true">
                        {service.icon === 'milk' && (
                          <svg viewBox="0 0 24 24" role="presentation">
                            <path d="M12 2c1 1.7 2.5 3 4.3 3.8l.3 2.2c2.7 1.7 4.4 4.5 4.4 7.7 0 4.9-4 8.8-9 8.8s-9-3.9-9-8.8c0-3.2 1.7-6 4.4-7.7l.3-2.2C9.5 5 11 3.7 12 2zm0 7.2c-2.8 0-5 2.3-5 5.1 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.8-2.2-5.1-5-5.1z" />
                          </svg>
                        )}
                        {service.icon === 'award' && (
                          <svg viewBox="0 0 24 24" role="presentation">
                            <path d="M8 3h8v9l-4 2-4-2V3zm2 2v5.8l2 .9 2-.9V5h-4zm-1 10l-2.2 5 5.2-2.2L17 20l-2.1-5.1-2.9 1.4-3-1.3z" />
                          </svg>
                        )}
                        {service.icon === 'tractor' && (
                          <svg viewBox="0 0 24 24" role="presentation">
                            <path d="M10 4h3l1 4h4l3 3v5h-2a3 3 0 11-6 0H9a3 3 0 11-6 0H1V9h7l2-5zm-4 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6-4h8l-1.4-1.4H12.5L12 7h-1.1L10 11z" />
                          </svg>
                        )}
                      </span>
                      <h3>{service.title}</h3>
                    </div>
                    <p>{service.description}</p>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      {service.cta} →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="contact-strip">
              <p>Para conocer qué servicio se adapta mejor a tu operación, contáctanos:</p>
              <a className="btn btn-primary contact-bounce-btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                → Escríbenos a WhatsApp
              </a>
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="nosotros"
          className="value"
          backgroundImage={aboutGalleryImages[aboutImageIndex].src}
          overlay="linear-gradient(130deg, rgba(19, 19, 19, 0.93) 35%, rgba(19, 19, 19, 0.76) 100%)"
          bgSpeed={0.26}
          contentSpeed={0.07}
        >
          <div className="container split two-col">
            <div>
              <h2>
                <span className="brand-highlight">GANATECH:</span> Genética, tecnología y campo en un solo lugar
              </h2>
              <p>
                GANATECH nació en Santa Rosa de Cabal con un propósito claro: llevar tecnología de vanguardia al
                ganadero colombiano, sin importar el tamaño de su finca ni el reconocimiento de su marca.
              </p>
              <p>
                Somos un equipo con más de 30 años de experiencia operativa en ganadería de leche, carne y manejo de
                pastos. No vendemos promesas, vendemos resultados respaldados por conocimiento real del campo.
              </p>
            </div>

            <aside className="value-panel value-carousel" aria-label="Galería sobre GANATECH">
              <div className="value-carousel-track">
                {aboutGalleryImages.map((image, index) => {
                  const offset = index - aboutImageIndex;
                  const total = aboutGalleryImages.length;
                  let position = (offset + total) % total;

                  if (position > Math.floor(total / 2)) {
                    position -= total;
                  }

                  const isCenter = position === 0;
                  const isAdjacent = Math.abs(position) === 1;

                  return (
                    <button
                      className={`value-carousel-item ${isCenter ? 'is-center' : ''}`}
                      type="button"
                      key={image.src}
                      onClick={() => setAboutImageIndex(index)}
                      aria-label={`Ver imagen ${index + 1} de la galería`}
                      style={{
                        '--carousel-position': position,
                        '--carousel-scale': isCenter ? 1 : 0.98,
                        '--carousel-opacity': isCenter ? 1 : 0,
                        '--carousel-blur': '0px',
                        '--carousel-z': isCenter ? 10 : isAdjacent ? 5 : 1,
                        '--carousel-visibility': isCenter ? 'visible' : 'hidden',
                      }}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </button>
                  );
                })}
              </div>
              <button className="value-carousel-nav value-carousel-nav--prev" type="button" onClick={handleAboutPrev} aria-label="Imagen anterior">
                ‹
              </button>
              <button className="value-carousel-nav value-carousel-nav--next" type="button" onClick={handleAboutNext} aria-label="Imagen siguiente">
                ›
              </button>
            </aside>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="credenciales"
          className="credentials"
          overlay="linear-gradient(180deg, rgba(28, 27, 27, 0.98), rgba(19, 19, 19, 0.98))"
          bgSpeed={0.16}
          contentSpeed={0.06}
        >
          <div ref={credentialsRef} className={`container metrics-grid metrics-shell ${credentialsVisible ? 'is-visible' : ''}`}>
            <article className="metric">
              <img className="metric-icon" src="/icono_30_anos.png" alt="" aria-hidden="true" />
              <span>+30 años</span>
              <strong>de experiencia</strong>
              <p>operativa en ganadería colombiana</p>
            </article>
            <article className="metric">
              <img className="metric-icon" src="/icono_certificado.png" alt="" aria-hidden="true" />
              <span>Equipo certificado</span>
              <strong>con respaldo técnico</strong>
              <p>formado para dar asesoría real, no teórica</p>
            </article>
            <article className="metric">
              <img className="metric-icon" src="/icono_ubicacion.png" alt="" aria-hidden="true" />
              <span>Ubicados en Risaralda</span>
              <strong>Santa Rosa de Cabal</strong>
              <p>servicio local con garantía cercana</p>
            </article>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="diferenciales"
          className="differentials"
          overlay="linear-gradient(160deg, rgba(19, 19, 19, 0.95), rgba(19, 19, 19, 0.97))"
          bgSpeed={0.2}
          contentSpeed={0.1}
        >
          <div ref={differentialsRef} className={`container differentials-shell ${differentialsVisible ? 'is-visible' : ''}`}>
            <div className="section-head">
              <AnimatedDifferentialsTitle />
              <div className="line" />
            </div>
            <div className="cards-grid diff-grid">
              {differentiators.map((item) => (
                <article className="card diff-card" key={item.title}>
                  <img className="diff-media" src={item.image} alt={item.title} loading="lazy" />
                  <div className="diff-overlay" />
                  <div className="diff-copy">
                    <span className="diff-icon" aria-hidden="true">
                      {item.icon === 'map' && (
                        <svg viewBox="0 0 24 24" role="presentation">
                          <path d="M15 5l-6 2-4-2v14l4 2 6-2 4 2V7l-4-2zm0 2.2v9.6l-6 2V9.2l6-2z" />
                        </svg>
                      )}
                      {item.icon === 'trust' && (
                        <svg viewBox="0 0 24 24" role="presentation">
                          <path d="M12 2l8 4v6c0 5.2-3.5 8.9-8 10-4.5-1.1-8-4.8-8-10V6l8-4zm-1 6.5V11H8v2h3v2.5h2V13h3v-2h-3V8.5h-2z" />
                        </svg>
                      )}
                      {item.icon === 'tech' && (
                        <svg viewBox="0 0 24 24" role="presentation">
                          <path d="M11 2h2v4h-2V2zm0 16h2v4h-2v-4zM2 11h4v2H2v-2zm16 0h4v2h-4v-2zM5.6 4.2l1.4-1.4 2.8 2.8-1.4 1.4-2.8-2.8zm8.6 12.6l1.4-1.4 2.8 2.8-1.4 1.4-2.8-2.8zM4.2 18.4l-1.4-1.4 2.8-2.8 1.4 1.4-2.8 2.8zm12.6-8.6l-1.4-1.4 2.8-2.8 1.4 1.4-2.8 2.8zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                      )}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="testimonios"
          className="testimonials"
          overlay="linear-gradient(180deg, rgba(19, 19, 19, 0.95), rgba(19, 19, 19, 0.99))"
          bgSpeed={0.2}
          contentSpeed={0.08}
        >
          <div ref={testimonialsRef} className={`container testimonials-shell ${testimonialsVisible ? 'is-visible' : ''}`}>
            <div className="section-head">
              <h2>Lo que dicen quienes ya trabajan con nosotros</h2>
              <div className="line" />
            </div>

            <div className="testimonial-video-grid">
              {testimonialVideos.map((video, index) => (
                <article className="testimonial-video-card" key={video.src}>
                  <div className="testimonial-video-aura" aria-hidden="true" />
                  <span className="testimonial-video-badge">Testimonio {String(index + 1).padStart(2, '0')}</span>
                  <video src={video.src} poster={video.poster} title={video.title} controls preload="metadata" playsInline />
                </article>
              ))}
            </div>

            <article
              ref={resultRef}
              className={`result-card ${resultVisible ? 'is-visible' : ''}`}
              aria-label="Resultado medible de alto rendimiento"
            >
              <div className="result-main">
                <h3>
                  Resultado medible de <span>alto rendimiento</span>
                </h3>
                <div className="result-title-line" aria-hidden="true" />
                <p className="result-lead">
                  Genética de élite que se traduce en más eficiencia y más kilos, todos los días.
                </p>
              </div>

              <figure className="result-visual-card">
                <img src="/resultados_medibles_kpi.png" alt="Ganancia de peso aproximada de un kilogramo por día" />
              </figure>

              <p className="result-terms">
                La ganancia de peso por día aproximada depende de factores como: el cuidado del animal, la altura,
                el clima o la ubicación de la finca.
              </p>

              <div className="result-benefits" aria-label="Beneficios medibles">
                <div className="result-benefit">
                  <span className="result-benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M4 18h3v-5H4v5Zm6 0h3V9h-3v9Zm6 0h3V5h-3v13Z" />
                      <path d="M4 8.6 10.7 5l3.6 3.1L20 3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p>Crecimiento <strong>acelerado</strong></p>
                </div>
                <span className="result-benefit-divider" aria-hidden="true" />
                <div className="result-benefit">
                  <span className="result-benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M7.2 4.2c3 2.7 6.6 3.3 9.6 6 2.2 2 2.2 5.6 0 7.6M16.8 4.2c-3 2.7-6.6 3.3-9.6 6-2.2 2-2.2 5.6 0 7.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M8 8h8M7 12h10M8 16h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p>Trazabilidad <strong>genética</strong></p>
                </div>
              </div>
            </article>
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="contacto"
          className="final-cta"
          backgroundImage={images.cta}
          overlay="linear-gradient(180deg, rgba(19, 19, 19, 0.84), rgba(19, 19, 19, 0.95))"
          bgSpeed={0.3}
          contentSpeed={0.08}
        >
          <div ref={finalCtaRef} className={`container final-box ${finalCtaVisible ? 'is-visible' : ''}`}>
            <h2 className="final-title" aria-label="¿Listo para tecnificar su ganadería?">
              {['¿Listo', 'para', 'tecnificar', 'su', 'ganadería?'].map((word, index) => (
                <span className="final-title-word" style={{ '--word-index': index }} aria-hidden="true" key={word}>
                  {word}
                </span>
              ))}
            </h2>
            <p>
              Estamos en el kilómetro 5, vía 2 Quebradas, Santa Rosa de Cabal, Risaralda. Visítenos o escríbanos,
              con gusto los asesoramos sin compromiso.
            </p>
            <a className="btn btn-primary final-button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Escríbenos
            </a>
          </div>
        </ParallaxSection>
      </main>

      <ParallaxSection
        id="footer"
        className="footer-block"
        overlay="linear-gradient(180deg, rgba(14, 14, 14, 0.95), rgba(10, 10, 10, 0.98))"
        bgSpeed={0.12}
        contentSpeed={0.04}
      >
        <footer className="site-footer">
          <div className="container">
            <small>© 2026 GANATECH — Todos los derechos reservados</small>
          </div>
        </footer>
      </ParallaxSection>
    </>
  );
}

export default App;
