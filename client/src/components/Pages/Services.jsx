import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Scissors,
  Trash2,
  Sparkles,
  Crop,
  Droplets,
  RefreshCw,
  PenTool,
  Grid3X3,
  Flower2,
  AlignJustify,
  TreePine,
  Axe,
  Building2,
  MapPin,
  Wind,
  Phone,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "Garden Maintenance",
    desc: "Weekly or fortnightly garden care programmes",
    price: "From £45/visit",
    category: "Maintenance",
    badge: "Most Popular",
    icon: Scissors,
  },
  {
    title: "Garden Clearance",
    desc: "One-off complete garden clear and tidy service",
    price: "From £150",
    category: "Maintenance",
    icon: Trash2,
  },
  {
    title: "Patio & Path Cleaning",
    desc: "Pressure washing and weed removal",
    price: "From £80",
    category: "Maintenance",
    icon: Sparkles,
  },
  {
    title: "Lawn Mowing & Edging",
    desc: "Professional cut, edge and strim service",
    price: "From £35/visit",
    category: "Lawn Care",
    badge: "Most Requested",
    icon: Crop,
  },
  {
    title: "Lawn Treatment",
    desc: "Feeding, weed control and moss treatment",
    price: "From £60/treatment",
    category: "Lawn Care",
    icon: Droplets,
  },
  {
    title: "Lawn Restoration",
    desc: "Scarification, aeration and overseeding",
    price: "From £180",
    category: "Lawn Care",
    icon: RefreshCw,
  },
  {
    title: "Garden Design",
    desc: "Bespoke design consultations and planting",
    price: "From £150/consultation",
    category: "Landscaping",
    badge: "Free Initial Chat",
    icon: PenTool,
  },
  {
    title: "Patio Installation",
    desc: "Natural stone, porcelain and block paving",
    price: "From £1,800",
    category: "Landscaping",
    icon: Grid3X3,
  },
  {
    title: "Planting & Borders",
    desc: "Seasonal colour and perennial planting",
    price: "From £95",
    category: "Landscaping",
    icon: Flower2,
  },
  {
    title: "Hedge Trimming",
    desc: "Precise shaping for all hedge types",
    price: "From £65",
    category: "Trees & Hedges",
    icon: AlignJustify,
  },
  {
    title: "Tree Pruning & Shaping",
    desc: "Skilled pruning for health and appearance",
    price: "From £120",
    category: "Trees & Hedges",
    icon: TreePine,
  },
  {
    title: "Tree & Stump Removal",
    desc: "Safe removal with full site clearance",
    price: "From £280",
    category: "Trees & Hedges",
    badge: "Free Assessment",
    icon: Axe,
  },
  {
    title: "Grounds Maintenance",
    desc: "Contract maintenance for offices and retail",
    price: "From £180/month",
    category: "Commercial",
    badge: "Contracts Available",
    icon: Building2,
  },
  {
    title: "Estate Management",
    desc: "Management for housing developments",
    price: "POA",
    category: "Commercial",
    icon: MapPin,
  },
  {
    title: "Leaf Clearance",
    desc: "Autumn leaf collection and disposal service",
    price: "From £65",
    category: "Maintenance",
    icon: Wind,
  },
];

const categories = [
  "All",
  "Maintenance",
  "Lawn Care",
  "Landscaping",
  "Trees & Hedges",
  "Commercial",
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const getQuoteLink = (serviceTitle) =>
    `/contact?service=${encodeURIComponent(serviceTitle)}#quote-form`;

  return (
    <main className="services-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');

        :root{
          --forest:#183923;
          --accent:#4a7c59;
          --accent-hover:#3d684a;
          --sage:#f1f7f3;
          --light-green:#e8f4ec;
          --border-light:#dce8d5;
          --text-dark:#102416;
          --text-muted:#6b7b6e;
          --card-bg:#ffffff;
          --whatsapp:#25D366;
        }

        .services-page{
          padding-top:80px;
          font-family:'Poppins',sans-serif;
          color:var(--text-dark);
          background:#fff;
        }

        .main-container{
          max-width:1200px;
        }

        h1,h2,h3{
          font-family:'Playfair Display',serif;
          font-weight:700;
        }

        .services-hero{
          background:var(--sage);
          padding:70px 0 48px;
          text-align:center;
        }

        .breadcrumb-small{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          font-size:13px;
          color:var(--text-muted);
          margin-bottom:18px;
        }

        .services-title{
          font-size:42px;
          color:var(--text-dark);
          margin-bottom:14px;
        }

        .services-subtitle{
          font-size:18px;
          color:var(--text-muted);
          max-width:600px;
          margin:0 auto 24px;
          line-height:1.7;
        }

        .hero-actions{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:14px;
          flex-wrap:wrap;
        }

        .btn-main,
        .btn-outline-main{
          border-radius:50px;
          padding:13px 28px;
          font-size:15px;
          font-weight:700;
          text-decoration:none;
          transition:.25s ease;
          display:inline-flex;
          align-items:center;
          justify-content:center;
        }

        .btn-main{
          background:var(--accent);
          color:#fff;
        }

        .btn-main:hover{
          background:var(--accent-hover);
          color:#fff;
          transform:translateY(-2px);
        }

        .btn-outline-main{
          border:1px solid var(--accent);
          color:var(--accent);
          background:transparent;
        }

        .btn-outline-main:hover{
          background:var(--accent);
          color:#fff;
          transform:translateY(-2px);
        }

        .services-list-section{
          padding:58px 0;
          background:#fff;
        }

        .filter-tabs{
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:12px;
          margin-bottom:44px;
        }

        .filter-btn{
          border:1px solid var(--border-light);
          background:#fff;
          color:var(--text-muted);
          border-radius:50px;
          padding:10px 20px;
          font-size:14px;
          font-weight:600;
          transition:.25s ease;
        }

        .filter-btn:hover,
        .filter-btn.active{
          background:var(--accent);
          border-color:var(--accent);
          color:#fff;
          transform:translateY(-2px);
        }

        .service-card{
          background:var(--card-bg);
          border:1px solid var(--border-light);
          border-radius:22px;
          padding:28px;
          height:100%;
          display:flex;
          flex-direction:column;
          gap:22px;
          transition:.3s ease;
        }

        .service-card:hover{
          transform:translateY(-6px);
          box-shadow:0 18px 45px rgba(74,124,89,.14);
        }

        .service-card-top{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:12px;
        }

        .service-icon{
          width:46px;
          height:46px;
          border-radius:50%;
          background:var(--light-green);
          color:var(--accent);
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          transition:.3s ease;
        }

        .service-card:hover .service-icon{
          transform:scale(1.12);
        }

        .service-badge{
          background:var(--light-green);
          color:var(--accent);
          font-size:11px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:.07em;
          padding:6px 10px;
          border-radius:50px;
          text-align:right;
        }

        .service-card h3{
          font-size:22px;
          color:var(--text-dark);
          margin:0 0 8px;
        }

        .service-card p{
          color:var(--text-muted);
          font-size:14px;
          line-height:1.7;
          margin:0;
        }

        .service-card-bottom{
          margin-top:auto;
          display:flex;
          flex-direction:column;
          gap:16px;
        }

        .service-price{
          color:var(--accent);
          font-size:20px;
          font-weight:800;
        }

        .quote-btn{
          width:100%;
          border:1px solid var(--accent);
          color:var(--accent);
          border-radius:50px;
          padding:12px 18px;
          text-align:center;
          text-decoration:none;
          font-size:14px;
          font-weight:700;
          transition:.25s ease;
        }

        .quote-btn:hover{
          background:var(--accent);
          color:#fff;
        }

        .support-section{
          background:var(--forest);
          padding:48px 0;
        }

        .support-wrap{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:28px;
        }

        .support-title{
          color:#fff;
          font-size:28px;
          margin:0;
        }

        .support-actions{
          display:flex;
          gap:14px;
          flex-wrap:wrap;
        }

        .support-btn{
          min-width:150px;
          border-radius:50px;
          padding:13px 26px;
          color:#fff;
          text-decoration:none;
          font-weight:700;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          transition:.25s ease;
        }

        .support-btn.call{
          background:var(--accent);
        }

        .support-btn.whatsapp{
          background:var(--whatsapp);
        }

        .support-btn:hover{
          color:#fff;
          transform:translateY(-2px);
          opacity:.95;
        }

        @media(max-width:991px){
          .support-wrap{
            flex-direction:column;
            text-align:center;
          }

          .service-card{
            padding:24px;
          }
        }

        @media(max-width:767px){
          .services-page{
            padding-top:64px;
          }

          .services-hero{
            padding:55px 0 36px;
          }

          .services-title{
            font-size:34px;
          }

          .services-subtitle{
            font-size:16px;
          }

          .btn-main,
          .btn-outline-main{
            width:100%;
          }

          .filter-tabs{
            gap:8px;
            margin-bottom:34px;
          }

          .filter-btn{
            font-size:12px;
            padding:8px 14px;
          }

          .support-actions{
            width:100%;
            flex-direction:column;
          }

          .support-btn{
            width:100%;
          }
        }
      `}</style>

      <section className="services-hero">
        <Container className="main-container">
          <div className="breadcrumb-small">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <span>Services</span>
          </div>

          <h1 className="services-title">Our Services</h1>

          <p className="services-subtitle">
            Everything your garden needs, handled with care and expertise.
          </p>

          <div className="hero-actions">
            <Link to="/contact#quote-form" className="btn-main">
              Get a Free Quote
            </Link>
            <Link to="/packages" className="btn-outline-main">
              View Packages
            </Link>
          </div>
        </Container>
      </section>

      <section className="services-list-section">
        <Container className="main-container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <Row className="g-4">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <Col sm={6} lg={4} key={service.title}>
                  <div className="service-card">
                    <div className="service-card-top">
                      <div className="service-icon">
                        <Icon size={22} />
                      </div>

                      {service.badge && (
                        <span className="service-badge">{service.badge}</span>
                      )}
                    </div>

                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>

                    <div className="service-card-bottom">
                      <div className="service-price">{service.price}</div>

                      <Link
                        to={getQuoteLink(service.title)}
                        className="quote-btn"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="support-section">
        <Container className="main-container">
          <div className="support-wrap">
            <h2 className="support-title">Not sure what you need?</h2>

            <div className="support-actions">
              <a href="tel:07496786474" className="support-btn call">
                <Phone size={17} /> Call Us
              </a>

              <a
                href="https://wa.me/447496786474"
                target="_blank"
                rel="noreferrer"
                className="support-btn whatsapp"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}