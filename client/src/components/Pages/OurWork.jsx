import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GeoAlt,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BeforeAfterSlider = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setPosition(percent);
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={sliderRef}
      className="before-after"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => {
        setIsDragging(true);
        updatePosition(e.clientX);
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={(e) => {
        setIsDragging(true);
        updatePosition(e.touches[0].clientX);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      <img src={after} alt="After result" className="after-img" loading="lazy" />

      <div
        className="before-img-wrap"
        style={{ width: `${position}%` }}
      >
        <img src={before} alt="Before condition" loading="lazy" />
      </div>

      <div className="slider-line" style={{ left: `${position}%` }}></div>

      <div
        className={`slider-handle ${isDragging ? "dragging" : ""}`}
        style={{ left: `${position}%` }}
      >
        <ChevronLeft size={17} />
        <ChevronRight size={17} />
      </div>

      <span className="image-label before-label">Before</span>
      <span className="image-label after-label">After</span>
    </div>
  );
};

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const categories = [
    "All Projects",
    "Garden Clearance",
    "Lawn Restoration",
    "Landscaping",
    "Hedges & Trees",
    "Commercial",
  ];

  const projects = [
    {
      title: "Overgrown Garden Transformed",
      category: "Garden Clearance",
      location: "Guildford, Surrey",
      quote: "Completely transformed in one day. Could not believe the result.",
      client: "Sarah M.",
      before: "/Images/w1.png",
      after: "/Images/w2.png",
    },
    {
      title: "Lawn Restoration Programme",
      category: "Lawn Restoration",
      location: "Godalming, Surrey",
      quote: "From patchy and yellow to lush and green. Incredible work.",
      client: "James R.",
      before: "/Images/w13.png",
      after: "/Images/w14.png",
    },
    {
      title: "Full Garden Landscaping",
      category: "Landscaping",
      location: "Woking, Surrey",
      quote: "Designed and built our dream garden. Absolutely brilliant.",
      client: "Helen T.",
      before: "/Images/ho5.png",
      after: "/Images/ho6.png",
    },
    {
      title: "Overgrown Hedge Restoration",
      category: "Hedges & Trees",
      location: "Farnham, Surrey",
      quote: "Hedges that had not been touched in years. Unrecognisable.",
      client: "Peter G.",
      before: "/Images/w9.png",
      after: "/Images/w10.png",
    },
    {
      title: "Office Grounds Maintenance",
      category: "Commercial",
      location: "Guildford Business Park",
      quote: "Our grounds look immaculate. Staff and clients always comment.",
      client: "Linda K.",
      before: "/Images/w11.png",
      after: "/Images/w12.png",
    },
    {
      title: "Spring Garden Clearance",
      category: "Garden Clearance",
      location: "Dorking, Surrey",
      quote: "Ready for summer in just one visit. Fantastic service.",
      client: "Carol W.",
      before: "/Images/w3.png",
      after: "/Images/w4.png",
    },
    {
      title: "Patio and Border Landscaping",
      category: "Landscaping",
      location: "Esher, Surrey",
      quote: "Exactly what we had in mind. Professional from start to finish.",
      client: "David H.",
      before: "/Images/w5.png",
      after: "/Images/w6.png",
    },
    {
      title: "Estate Grounds Programme",
      category: "Commercial",
      location: "Weybridge, Surrey",
      quote: "Consistent, reliable, and always to a high standard.",
      client: "Estate Manager, Weybridge",
      before: "/Images/w7.png",
      after: "/Images/w8.png",
    },
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <main className="our-work-page">
      <style>{`
        .our-work-page {
          font-family: Arial, sans-serif;
          color: #243126;
          background: #ffffff;
        }

        .sage-bg {
          background: #eef4ec;
        }

        .hero-section {
          background: #eef4ec;
          padding: 90px 0 55px;
          text-align: center;
        }

        .breadcrumb-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #6d776c;
          margin-bottom: 20px;
        }

        .breadcrumb-row a {
          color: #6d776c;
          text-decoration: none;
        }

        .breadcrumb-row a:hover {
          color: #4a7c59;
        }

        .hero-title {
          font-family: Georgia, serif;
          font-size: 42px;
          color: #1f2a21;
          margin-bottom: 14px;
        }

        .hero-subtitle {
          max-width: 620px;
          margin: 0 auto;
          color: #6d776c;
          font-size: 18px;
          line-height: 1.6;
        }

        .hero-small {
          color: #6d776c;
          font-size: 14px;
          font-style: italic;
          opacity: 0.75;
          margin-top: 14px;
        }

        .section-padding {
          padding: 65px 0;
        }

        .filter-wrap {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }

        .filter-btn {
          border: 1px solid #dfe8dc !important;
          background: #ffffff !important;
          color: #6d776c !important;
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: #4a7c59 !important;
          border-color: #4a7c59 !important;
          color: #ffffff !important;
        }

        .showing-text {
          text-align: center;
          font-size: 12px;
          color: #6d776c;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 35px;
        }

        .project-card {
          border: 1px solid #dfe8dc;
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          height: 100%;
          box-shadow: 0 4px 18px rgba(0,0,0,0.04);
          transition: 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 40px rgba(74, 124, 89, 0.12);
        }

        .before-after {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: #eef4ec;
          cursor: ew-resize;
          user-select: none;
          touch-action: none;
        }

        .before-after img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          pointer-events: none;
        }

        .after-img {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .before-img-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 2;
          transition: width 0.08s linear;
        }

        .before-img-wrap img {
          width: 100%;
          min-width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ffffff;
          z-index: 4;
          transform: translateX(-50%);
          transition: left 0.08s linear;
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          width: 46px;
          height: 46px;
          background: #ffffff;
          border: 2px solid #4a7c59;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4a7c59;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18);
          z-index: 5;
          transition: left 0.08s linear, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .before-after:hover .slider-handle,
        .slider-handle.dragging {
          transform: translate(-50%, -50%) scale(1.08);
          box-shadow: 0 6px 22px rgba(0,0,0,0.25);
        }

        .image-label {
          position: absolute;
          bottom: 16px;
          z-index: 6;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 6px 12px;
          border-radius: 50px;
          backdrop-filter: blur(8px);
          pointer-events: none;
        }

        .before-label {
          left: 16px;
          background: rgba(32, 61, 42, 0.85);
        }

        .after-label {
          right: 16px;
          background: rgba(74, 124, 89, 0.9);
        }

        .project-content {
          padding: 28px;
        }

        .category-badge {
          background: #dfeedd !important;
          color: #4a7c59 !important;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 7px 12px;
          border-radius: 50px;
        }

        .location-text {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #6d776c;
          font-size: 13px;
        }

        .project-title {
          font-family: Georgia, serif;
          font-size: 24px;
          color: #1f2a21;
          margin: 22px 0 12px;
        }

        .project-quote {
          font-family: Georgia, serif;
          font-style: italic;
          color: #6d776c;
          font-size: 17px;
          line-height: 1.6;
        }

        .project-footer {
          border-top: 1px solid #eef4ec;
          margin-top: 24px;
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
        }

        .stars {
          color: #c99a2e;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .client-name {
          font-size: 13px;
          font-weight: 600;
          color: #243126;
          margin: 5px 0 0;
        }

        .quote-link {
          color: #4a7c59;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: 0.3s;
          white-space: nowrap;
        }

        .quote-link:hover {
          color: #386646;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 34px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .before-after {
            height: 230px;
          }

          .project-content {
            padding: 22px;
          }

          .project-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="hero-section">
        <Container>
          <div className="breadcrumb-row">
            <Link to="/">Home</Link>
            <ArrowRight size={13} />
            <span>Our Work</span>
          </div>

          <h1 className="hero-title">Our Work</h1>
          <p className="hero-subtitle">
            Real gardens across Surrey and South West London. Drag the slider to
            compare.
          </p>
          <p className="hero-small">
            Every project shown is from a real garden we have worked on.
          </p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="filter-wrap">
            {categories.map((cat, index) => (
              <Button
                key={index}
                className={`filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="showing-text">
            Showing {filteredProjects.length} projects
          </div>

          <Row className="g-4">
            {filteredProjects.map((project, index) => (
              <Col lg={6} key={index}>
                <Card className="project-card border-0">
                  <BeforeAfterSlider
                    before={project.before}
                    after={project.after}
                  />

                  <div className="project-content">
                    <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                      <Badge className="category-badge">
                        {project.category}
                      </Badge>

                      <div className="location-text">
                        <GeoAlt size={14} />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-quote">"{project.quote}"</p>

                    <div className="project-footer">
                      <div>
                        <div className="stars">★★★★★</div>
                        <p className="client-name">— {project.client}</p>
                      </div>

                      <Link to="/contact" className="quote-link">
                        Get a similar quote <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default OurWork;