import { useEffect, useState } from "react";

const messiImage =
  "https://pngfre.com/wp-content/uploads/lionel-messi-1-781x1024.png";

const worldCupImage =
  "https://wallpapercave.com/wp/wp16249313.webp";

const timeline = [
  {
    year: "1987",
    title: "THE BEGINNING",
    place: "Rosario, Argentina",
    description:
      "Lionel Andrés Messi was born on June 24, 1987, in Rosario, Argentina. His extraordinary football journey began with a childhood love for the game.",
    icon: "bi-balloon",
    image: messiImage,
  },
  {
    year: "1995",
    title: "THE FIRST DREAM",
    place: "Newell's Old Boys",
    description:
      "Messi developed his skills in youth football in Rosario. His talent, close control and left foot began attracting attention.",
    icon: "bi-dribbble",
    image: messiImage,
  },
  {
    year: "2000",
    title: "A NEW CHAPTER",
    place: "Barcelona, Spain",
    description:
      "At the age of 13, Messi moved to Spain to join Barcelona's youth academy, La Masia, taking a major step toward his professional dream.",
    icon: "bi-airplane",
    image: messiImage,
  },
  {
    year: "2004",
    title: "THE PROFESSIONAL DEBUT",
    place: "FC Barcelona",
    description:
      "Messi made his official La Liga debut for Barcelona in October 2004. A remarkable senior career was underway.",
    icon: "bi-lightning-charge",
    image: messiImage,
  },
  {
    year: "2008",
    title: "OLYMPIC GOLD",
    place: "Argentina",
    description:
      "Messi helped Argentina win the men's football gold medal at the Beijing Olympic Games.",
    icon: "bi-award",
    image: messiImage,
  },
  {
    year: "2021",
    title: "COPA AMÉRICA GLORY",
    place: "Argentina",
    description:
      "Argentina defeated Brazil in the Copa América final. Messi celebrated his first major senior international title with his country.",
    icon: "bi-trophy",
    image: messiImage,
  },
  {
    year: "2022",
    title: "THE WORLD CHAMPION",
    place: "Qatar World Cup",
    description:
      "Messi captained Argentina to the FIFA World Cup title in Qatar, completing one of football's most celebrated journeys.",
    icon: "bi-stars",
    image: worldCupImage,
  },
  {
    year: "2023",
    title: "A NEW ADVENTURE",
    place: "Inter Miami CF",
    description:
      "Messi began a new chapter in Major League Soccer with Inter Miami, bringing his experience and creativity to American football.",
    icon: "bi-globe-americas",
    image: messiImage,
  },
  {
    year: "2024",
    title: "CONTINENTAL CHAMPION",
    place: "Copa América",
    description:
      "Argentina won the Copa América again, adding another major international title to Messi's career.",
    icon: "bi-flag",
    image: messiImage,
  },
];

const achievements = [
  {
    icon: "bi-globe",
    number: "1",
    title: "FIFA WORLD CUP",
    detail: "Argentina • 2022",
  },
  {
    icon: "bi-trophy",
    number: "2",
    title: "COPA AMÉRICA",
    detail: "2021 & 2024",
  },
  {
    icon: "bi-award",
    number: "8",
    title: "BALLON D'OR",
    detail: "Individual awards",
  },
  {
    icon: "bi-stars",
    number: "1",
    title: "OLYMPIC GOLD",
    detail: "Beijing • 2008",
  },
];

function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-screen">
      <div className="loader-flag" />

      <div className="loader-content">
        <div className="loader-orbit">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="loader-ball">
            <i className="bi bi-dribbble" />
          </div>
        </div>

        <p className="loader-kicker">ARGENTINA • FOOTBALL LEGEND</p>
        <h1>MESSI</h1>
        <p className="loader-subtitle">THE LIFE CIRCLE</p>

        <div className="loader-track">
          <div className="loader-progress" />
        </div>

        <span className="loader-caption">LOADING THE LEGACY...</span>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top messi-nav">
      <div className="container">
        <a className="navbar-brand brand-logo" href="#home">
          <span className="brand-mark">10</span>
          <span>
            MESSI<span className="brand-light">.</span>
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#messiNavbar"
          aria-controls="messiNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="messiNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#journey">
                Life Journey
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achievements">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#legacy">
                Legacy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link argentina-button" href="#journey">
                Explore Journey <i className="bi bi-arrow-up-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function ArgentinaBackground() {
  return (
    <div className="argentina-background" aria-hidden="true">
      <div className="flag-band flag-band-top" />
      <div className="flag-band flag-band-bottom" />

      <div className="bg-glow glow-one" />
      <div className="bg-glow glow-two" />

      <div className="floating-ball ball-one">
        <i className="bi bi-dribbble" />
      </div>

      <div className="floating-ball ball-two">
        <i className="bi bi-stars" />
      </div>

      <div className="floating-ball ball-three">
        <i className="bi bi-circle" />
      </div>

      <div className="stadium-lines" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <ArgentinaBackground />

      <div className="container hero-container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7 hero-copy">
            <div className="hero-label" data-aos="fade-down">
              <span className="live-dot" />
              THE ARGENTINA LEGEND
            </div>

            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              ONE DREAM.
              <br />
              ONE <span>LEGEND.</span>
            </h1>

            <p
              className="hero-description"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              From the streets of Rosario to the top of world football.
              Discover the life, passion and unforgettable journey of Lionel
              Andrés Messi.
            </p>

            <div
              className="hero-actions"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <a href="#journey" className="btn btn-argentina">
                EXPLORE HIS JOURNEY
                <i className="bi bi-arrow-down-right ms-2" />
              </a>

              <a href="#achievements" className="btn btn-outline-light">
                <i className="bi bi-trophy me-2" />
                HIS ACHIEVEMENTS
              </a>
            </div>

            <div className="hero-meta" data-aos="fade-up" data-aos-delay="450">
              <div>
                <strong>24 JUN</strong>
                <span>1987 • BORN</span>
              </div>
              <div className="meta-divider" />
              <div>
                <strong>ROSARIO</strong>
                <span>ARGENTINA</span>
              </div>
              <div className="meta-divider" />
              <div>
                <strong>NO. 10</strong>
                <span>THE LEGACY</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 hero-visual"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="hero-image-wrap">
              <div className="hero-circle hero-circle-one" />
              <div className="hero-circle hero-circle-two" />

              <div className="hero-number">10</div>

              <img
                src={messiImage}
                className="hero-image"
                alt="Lionel Messi in Argentina colours"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />

              <div className="image-bottom-gradient" />

              <div className="image-caption">
                <span className="caption-line" />
                <div>
                  <small>THE GOAT</small>
                  <strong>LIONEL MESSI</strong>
                </div>
              </div>

              <div className="floating-badge badge-top">
                <i className="bi bi-stars" />
                <span>THE MAGIC</span>
              </div>

              <div className="floating-badge badge-bottom">
                <i className="bi bi-trophy-fill" />
                <span>WORLD CHAMPION</span>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-indicator" href="#journey">
          <span>SCROLL TO DISCOVER</span>
          <i className="bi bi-arrow-down" />
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-heading text-center" data-aos="fade-up">
      <span className="section-eyebrow">{eyebrow}</span>

      <h2>
        {title} <span>{highlight}</span>
      </h2>

      <p>{description}</p>
    </div>
  );
}

function LifeCircle() {
  const [selected, setSelected] = useState(0);

  const active = timeline[selected];

  return (
    <section id="journey" className="journey-section section-space">
      <div className="container">
        <SectionHeading
          eyebrow="THE STORY OF A LEGEND"
          title="THE LIFE"
          highlight="CIRCLE"
          description="Every great journey begins with a dream. Explore the defining moments that shaped Messi's football story."
        />

        <div className="life-layout">
          <div className="circle-column" data-aos="zoom-in">
            <div className="life-orbit">
              <div className="orbit-ring orbit-ring-outer" />
              <div className="orbit-ring orbit-ring-inner" />

              <div className="orbit-center">
                <span className="orbit-ten">10</span>
                <span className="orbit-name">MESSI</span>
                <span className="orbit-country">ARGENTINA</span>
              </div>

              {timeline.map((item, index) => {
                const angle = (index / timeline.length) * 2 * Math.PI - Math.PI / 2;

                return (
                  <button
                    key={item.year}
                    type="button"
                    className={`orbit-node ${
                      selected === index ? "active" : ""
                    }`}
                    style={{
                      left: `${50 + 43 * Math.cos(angle)}%`,
                      top: `${50 + 43 * Math.sin(angle)}%`,
                    }}
                    onClick={() => setSelected(index)}
                    aria-label={`View ${item.year}: ${item.title}`}
                    aria-pressed={selected === index}
                    title={`${item.year} — ${item.title}`}
                  >
                    <span>{item.year.slice(2)}</span>
                  </button>
                );
              })}
            </div>

            <p className="circle-hint">
              <i className="bi bi-cursor me-2" />
              SELECT A YEAR TO EXPLORE
            </p>
          </div>

          <div className="life-detail-column" data-aos="fade-left">
            <div className="life-detail-card" key={active.year}>
              <div className="detail-topline">
                <span className="detail-icon">
                  <i className={`bi ${active.icon}`} />
                </span>
                <span className="detail-year">{active.year}</span>
              </div>

              <span className="detail-place">{active.place}</span>

              <h3>{active.title}</h3>

              <p>{active.description}</p>

              <div className="detail-footer">
                <span>
                  <i className="bi bi-flag me-2" />
                  THE MESSI STORY
                </span>

                <div className="detail-controls">
                  <button
                    type="button"
                    className="circle-control"
                    aria-label="Previous year"
                    onClick={() =>
                      setSelected(
                        (selected - 1 + timeline.length) % timeline.length
                      )
                    }
                  >
                    <i className="bi bi-arrow-left" />
                  </button>

                  <button
                    type="button"
                    className="circle-control next-control"
                    aria-label="Next year"
                    onClick={() =>
                      setSelected((selected + 1) % timeline.length)
                    }
                  >
                    <i className="bi bi-arrow-right" />
                  </button>
                </div>
              </div>

              <div className="detail-progress">
                <div
                  style={{
                    width: `${((selected + 1) / timeline.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="timeline-counter">
              <span>CHAPTER {String(selected + 1).padStart(2, "0")}</span>
              <span>OF {String(timeline.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="achievements-section section-space">
      <div className="container">
        <SectionHeading
          eyebrow="MOMENTS THAT MADE HISTORY"
          title="A LEGACY"
          highlight="OF GREATNESS"
          description="A selection of landmark achievements from Messi's extraordinary career."
        />

        <div className="row g-4 achievement-grid">
          {achievements.map((item, index) => (
            <div
              className="col-6 col-lg-3"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className={`bi ${item.icon}`} />
                </div>

                <span className="achievement-number">{item.number}</span>

                <h3>{item.title}</h3>
                <p>{item.detail}</p>

                <div className="achievement-line" />
              </div>
            </div>
          ))}
        </div>

        <div className="world-cup-feature" data-aos="zoom-in">
          <div className="world-cup-image">
            <img
              src={worldCupImage}
              alt="Lionel Messi celebrating Argentina's World Cup triumph"
              loading="lazy"
            />
          </div>

          <div className="world-cup-copy">
            <span className="section-eyebrow">18 DECEMBER 2022</span>
            <h3>THE DREAM BECAME REALITY.</h3>
            <p>
              Argentina conquered the world in Qatar. For Messi and millions of
              fans, the World Cup victory became an unforgettable chapter in
              football history.
            </p>

            <a
              href="https://www.fifa.com/tournaments/mens/worldcup"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              EXPLORE WORLD CUP HISTORY
              <i className="bi bi-arrow-up-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Legacy() {
  return (
    <section id="legacy" className="legacy-section section-space">
      <div className="container">
        <div className="legacy-card" data-aos="fade-up">
          <div className="legacy-watermark">10</div>

          <span className="section-eyebrow">MORE THAN FOOTBALL</span>

          <h2>
            THE JOURNEY
            <br />
            NEVER <span>ENDS.</span>
          </h2>

          <p>
            Talent creates moments. Hard work builds a career. Passion inspires
            generations. Lionel Messi's journey reminds the world to believe
            in the dream and keep moving forward.
          </p>

          <a href="#home" className="btn btn-argentina">
            BACK TO THE BEGINNING
            <i className="bi bi-arrow-up ms-2" />
          </a>

          <div className="legacy-stars">
            <i className="bi bi-stars" />
            <i className="bi bi-stars" />
            <i className="bi bi-stars" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="messi-footer">
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-md-6">
            <a href="#home" className="footer-brand">
              MESSI<span>.</span>
            </a>
            <p className="footer-caption">
              A FAN-MADE TRIBUTE TO A FOOTBALL LEGEND.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <a className="footer-link" href="#home">
              HOME
            </a>
            <a className="footer-link" href="#journey">
              JOURNEY
            </a>
            <a className="footer-link" href="#achievements">
              ACHIEVEMENTS
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MESSI LIFE CIRCLE</span>
          <span>MADE WITH PASSION <i className="bi bi-heart-fill" /></span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 900,
        once: false,
        offset: 80,
        easing: "ease-out-cubic",
        mirror: true,
      });
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LifeCircle />
        <Achievements />
        <Legacy />
      </main>

      <Footer />
    </>
  );
}