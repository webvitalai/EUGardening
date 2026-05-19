import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Shield,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

const seasonData = {
  label: "Spring",
  headline: "Spring is Here —\nIs Your Garden Ready?",
  description:
    "The perfect time to clear, feed and plant. Get your garden looking its best for the season ahead.",
  services: [
    "Garden Clearance & Tidy",
    "Lawn Scarification & Feeding",
    "New Planting & Borders",
    "Patio Cleaning",
  ],
  cta: "Book Spring Garden Clearance",
};

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / 60);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
};

const HeroSlider = () => {
  const images = ["/Images/h1.jpeg", "/Images/h2.jpeg", "/Images/h3.jpeg"];
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={`Hero ${i + 1}`}
          className={`hero-img ${active === i ? "active" : ""}`}
        />
      ))}

      <div className="slider-dots">
        {images.map((_, i) => (
          <span key={i} className={`dot ${active === i ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
};

const BeforeAfterSlider = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  const [drag, setDrag] = useState(false);
  const ref = useRef(null);

  const move = (clientX) => {
    const box = ref.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  return (
    <div
      ref={ref}
      className="ba-slider"
      onMouseDown={(e) => {
        setDrag(true);
        move(e.clientX);
      }}
      onMouseMove={(e) => drag && move(e.clientX)}
      onMouseUp={() => setDrag(false)}
      onMouseLeave={() => setDrag(false)}
      onTouchStart={(e) => {
        setDrag(true);
        move(e.touches[0].clientX);
      }}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onTouchEnd={() => setDrag(false)}
    >
      <img src={after} alt="After" className="ba-img" />

      <div
        className="ba-before-layer"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={before} alt="Before" className="ba-img-inner" />
      </div>

      <div className="ba-line" style={{ left: `${position}%` }}>
        <div className="ba-handle">
          <ChevronLeft size={15} />
          <ChevronRight size={15} />
        </div>
      </div>

      <span className="ba-label before">Before</span>
      <span className="ba-label after">After</span>
    </div>
  );
};

export default function Home() {
  const data = seasonData;

  const projects = [
    {
      title: "Overgrown Garden Clearance",
      location: "Guildford, Surrey",
      before: "/Images/ho1.png",
      after: "/Images/ho2.png",
    },
    {
      title: "Lawn Restoration",
      location: "Godalming, Surrey",
      before: "/Images/ho3.png",
      after: "/Images/ho4.png",
    },
    {
      title: "Garden Landscaping",
      location: "Woking, Surrey",
      before: "/Images/ho5.png",
      after: "/Images/ho6.png",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');

        :root {
          --forest: #183923;
          --accent: #4a7c59;
          --accent-hover: #3d684a;
          --sage: #f1f7f3;
          --light-green: #e8f4ec;
          --border-light: #dce8d5;
          --text-dark: #102416;
          --text-muted: #6b7b6e;
          --gold: #d6a742;
        }

        .home-page {
          padding-top: 80px;
          font-family: 'Poppins', sans-serif;
          color: var(--text-dark);
          background: white;
        }

        .main-container {
          max-width: 1200px;
        }

        .hero-section {
          background: linear-gradient(135deg, var(--sage), #fff, var(--light-green));
          padding: 55px 0 95px;
        }

        .badge-soft {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          padding: 6px 14px;
          border-radius: 50px;
          background: var(--light-green);
          color: var(--accent);
          border: 1px solid var(--border-light);
          font-size: 12px;
          font-weight: 600;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 54px;
          line-height: 1.08;
          font-weight: 800;
          margin: 18px 0 16px;
          color: var(--text-dark);
          letter-spacing: -0.8px;
        }

        .hero-text {
          max-width: 480px;
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 22px;
        }

        .pill {
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 50px;
          padding: 6px 14px;
          font-size: 12px;
          color: var(--text-dark);
        }

        .btn-main,
        .btn-outline-main {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          padding: 13px 25px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: .25s ease;
        }

        .btn-main {
          background: var(--accent);
          color: white;
        }

        .btn-main:hover {
          background: var(--accent-hover);
          color: white;
          transform: translateY(-2px);
        }

        .btn-outline-main {
          border: 1px solid var(--accent);
          color: var(--accent);
          background: transparent;
        }

        .btn-outline-main:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-2px);
        }

        .phone-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 18px;
          color: var(--text-muted);
          font-size: 13px;
          text-decoration: none;
        }

        .hero-image-box {
          position: relative;
          height: 410px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(26,46,28,.12);
        }

        .hero-slider {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity .4s ease;
        }

        .hero-img.active {
          opacity: 1;
        }

        .slider-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
          z-index: 5;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 30px;
          background: rgba(255,255,255,.55);
        }

        .dot.active {
          width: 24px;
          background: white;
        }

        .rating-card {
          position: absolute;
          bottom: -24px;
          left: -24px;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 13px;
          padding: 16px 18px;
          box-shadow: 0 4px 24px rgba(0,0,0,.1);
          z-index: 10;
        }

        .gold {
          color: var(--gold);
        }

        .forest-section {
          background: var(--forest);
          color: white;
        }

        .trust-section {
          padding: 35px 0;
        }

        .trust-card {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .trust-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(74,124,89,.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-title {
          font-size: 13px;
          font-weight: 700;
        }

        .trust-desc {
          font-size: 11px;
          color: rgba(255,255,255,.6);
        }

        .season-section {
          background: var(--sage);
          padding: 90px 0;
        }

        .season-title,
        .section-title,
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--text-dark);
        }

        .season-title {
          font-size: 38px;
          line-height: 1.15;
          white-space: pre-line;
          margin: 18px 0;
        }

        .season-desc {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.7;
          max-width: 500px;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .season-card {
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 4px 14px rgba(0,0,0,.05);
        }

        .season-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .focus-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .focus-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .focus-title {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .focus-desc {
          font-size: 12px;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }

        .simple-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: var(--accent);
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        .work-section {
          padding: 55px 0 80px;
          background: white;
        }

        .section-kicker {
          color: var(--accent);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-weight: 700;
        }

        .section-title {
          font-size: 36px;
          margin: 8px 0;
        }

        .muted-text {
          color: var(--text-muted);
          font-size: 13px;
          margin: 0;
        }

        .ba-slider {
          position: relative;
          height: 260px;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid var(--border-light);
          cursor: ew-resize;
          user-select: none;
          touch-action: none;
          box-shadow: 0 4px 14px rgba(0,0,0,.06);
        }

        .ba-img,
        .ba-before-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .ba-img,
        .ba-img-inner {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ba-before-layer {
          z-index: 5;
        }

        .ba-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: white;
          z-index: 20;
        }

        .ba-handle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--accent);
          color: var(--accent);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,.15);
        }

        .ba-label {
          position: absolute;
          bottom: 13px;
          z-index: 30;
          padding: 5px 10px;
          border-radius: 40px;
          color: white;
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .ba-label.before {
          left: 13px;
          background: rgba(26,46,28,.85);
        }

        .ba-label.after {
          right: 13px;
          background: rgba(74,124,89,.9);
        }

        .work-title {
          font-size: 13px;
          font-weight: 700;
          margin: 14px 0 3px;
        }

        .work-location {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--text-muted);
          font-size: 12px;
          margin: 0;
        }

        .review-section {
          padding: 55px 0;
        }

        .review-card {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          border-left: 3px solid var(--accent);
          border-radius: 16px;
          padding: 24px;
          height: 100%;
          transition: .25s ease;
        }

        .review-card:hover {
          transform: translateY(-4px);
        }

        .review-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 18px;
          line-height: 1.6;
        }

        .review-author {
          color: #dce8d5;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin: 0;
        }

        .stats-wrap {
          border-top: 1px solid rgba(255,255,255,.1);
          border-bottom: 1px solid rgba(255,255,255,.1);
          padding: 45px 0;
          margin: 40px 0;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          line-height: 1;
          font-weight: 700;
        }

        .stat-label {
          color: rgba(255,255,255,.6);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-top: 8px;
        }

        .cta-title {
          color: white;
          font-size: 42px;
        }

        .white-outline {
          border-color: white;
          color: white;
        }

        .white-outline:hover {
          background: white;
          color: var(--forest);
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 40px;
          }

          .hero-image-box {
            height: 300px;
          }

          .season-title,
          .section-title {
            font-size: 30px;
          }
        }

        @media (max-width: 575px) {
          .home-page {
            padding-top: 64px;
          }

          .hero-section {
            padding: 42px 0 65px;
          }

          .hero-title {
            font-size: 34px;
          }

          .hero-image-box {
            height: 240px;
          }

          .rating-card {
            display: none;
          }

          .season-section {
            padding: 55px 0;
          }

          .btn-main,
          .btn-outline-main {
            width: 100%;
          }

          .stat-number {
            font-size: 32px;
          }

          .cta-title {
            font-size: 30px;
          }
        }
      `}</style>

      <main className="home-page">
        <section className="hero-section">
          <Container className="main-container">
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <div className="badge-soft">🌿 Serving Surrey Since 2011</div>

                <h1 className="hero-title">
                  Professional Garden
                  <br />
                  Care You Can Trust
                </h1>

                <p className="hero-text">
                  From weekly maintenance to full garden transformations — all
                  work guaranteed.
                </p>

                <div className="pill-wrap">
                  <span className="pill">✓ RHS Qualified</span>
                  <span className="pill">✓ Fully Insured</span>
                  <span className="pill">✓ Free Quotes</span>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link to="/contact" className="btn-main">
                    Get a Free Quote
                  </Link>
                  <Link to="/our-work" className="btn-outline-main">
                    View Our Work
                  </Link>
                </div>

                <a href="tel:01483726400" className="phone-link">
                  <Phone size={14} color="#4a7c59" />
                  01483 726 400
                </a>
              </Col>

              <Col lg={6}>
                <div className="position-relative">
                  <div className="hero-image-box">
                    <HeroSlider />
                  </div>

                  <div className="rating-card">
                    <div className="gold small mb-1">★★★★★</div>
                    <div className="fw-bold small">4.9/5 · 180+ Reviews</div>
                    <div className="small text-muted">Guildford & Surrey</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="forest-section trust-section">
          <Container className="main-container">
            <Row className="g-4">
              {[
                { icon: Shield, title: "RHS Qualified", desc: "Horticulturists" },
                { icon: Award, title: "£5M Insurance", desc: "Public Liability" },
                { icon: Clock, title: "Since 2011", desc: "Locally Established" },
                { icon: CheckCircle2, title: "Satisfaction", desc: "Guaranteed" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Col xs={6} md={3} key={i}>
                    <div className="trust-card">
                      <div className="trust-icon">
                        <Icon size={18} color="#4a7c59" />
                      </div>
                      <div>
                        <div className="trust-title">{item.title}</div>
                        <div className="trust-desc">{item.desc}</div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>

        <section className="season-section">
          <Container className="main-container">
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <div className="badge-soft">● Right Now — {data.label}</div>

                <h2 className="season-title">{data.headline}</h2>

                <p className="season-desc">{data.description}</p>

                <Row className="g-3 my-4">
                  {data.services.map((service) => (
                    <Col md={6} key={service}>
                      <div className="service-item">
                        <CheckCircle2 size={15} color="#4a7c59" />
                        {service}
                      </div>
                    </Col>
                  ))}
                </Row>

                <Link to="/contact?service=spring" className="btn-main">
                  {data.cta}
                </Link>
              </Col>

              <Col lg={6}>
                <div className="season-card">
                  <h3>What we focus on this Spring:</h3>

                  {data.services.map((service, index) => (
                    <div key={service}>
                      <div className="focus-item">
                        <div className="focus-num">{index + 1}</div>
                        <div>
                          <div className="focus-title">{service}</div>
                          <p className="focus-desc">
                            Essential spring maintenance to keep your garden
                            healthy and beautiful.
                          </p>
                        </div>
                      </div>

                      {index !== data.services.length - 1 && <hr />}
                    </div>
                  ))}

                  <Link to="/contact" className="simple-link w-100 mt-4">
                    Get a Spring quote <ArrowRight size={15} />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="work-section">
          <Container className="main-container">
            <div className="text-center mb-5">
              <div className="section-kicker">Our Work</div>
              <h2 className="section-title">Gardens We Have Transformed</h2>
              <p className="muted-text">
                Real gardens. Real results. Drag the slider to compare.
              </p>
            </div>

            <Row className="g-4">
              {projects.map((project) => (
                <Col sm={6} lg={4} key={project.title}>
                  <BeforeAfterSlider
                    before={project.before}
                    after={project.after}
                  />

                  <h4 className="work-title">{project.title}</h4>
                  <p className="work-location">
                    <MapPin size={12} /> {project.location}
                  </p>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <Link to="/our-work" className="simple-link">
                View All Our Work <ArrowRight size={15} />
              </Link>
            </div>
          </Container>
        </section>

        <section className="forest-section review-section">
          <Container className="main-container">
            <Row className="g-4">
              {[
                {
                  quote:
                    "Transformed our completely overgrown garden into something we are genuinely proud of. The team were brilliant.",
                  author: "Emma T., Farnham",
                },
                {
                  quote:
                    "Reliable, professional, and always tidy. Our garden has never looked better.",
                  author: "Mark R., Godalming",
                },
                {
                  quote:
                    "Office grounds have never looked better. The team arrive on time and never need chasing.",
                  author: "Office Manager, Woking",
                },
              ].map((review) => (
                <Col md={4} key={review.author}>
                  <div className="review-card">
                    <div className="gold mb-3">★★★★★</div>
                    <p className="review-text">"{review.quote}"</p>
                    <p className="review-author">— {review.author}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="stats-wrap">
              <Row className="g-4 text-center">
                <Col xs={6} md={3}>
                  <div className="stat-number">
                    <Counter end={500} />+
                  </div>
                  <div className="stat-label">Gardens</div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="stat-number">
                    <Counter end={13} />
                  </div>
                  <div className="stat-label">Years</div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="stat-number">
                    <Counter end={180} />+
                  </div>
                  <div className="stat-label">Reviews</div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="stat-number">4.9★</div>
                  <div className="stat-label">Rating</div>
                </Col>
              </Row>
            </div>

            <div className="text-center mx-auto" style={{ maxWidth: 600 }}>
              <h2 className="cta-title mb-4">Ready for a Beautiful Garden?</h2>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link to="/contact" className="btn-main">
                  Get a Free Quote →
                </Link>

                <Link to="/packages" className="btn-outline-main white-outline">
                  View Our Packages
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}