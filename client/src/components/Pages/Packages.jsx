import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const residentialPackages = [
  {
    label: "Essential",
    price: "£85",
    period: "/month",
    frequency: "Monthly visits",
    badgeClass: "badge-light",
    buttonClass: "outline-accent",
    link: "/contact?package=essential#quote-form",
    bestFor: "Small, low-maintenance gardens",
    features: [
      "Lawn mowing and edging",
      "Path and patio sweep",
      "Litter and debris removal",
      "Basic weed control",
      "End of visit tidy",
      "Monthly visit report",
    ],
  },
  {
    label: "Most Popular",
    title: "Standard",
    price: "£140",
    period: "/month",
    frequency: "Fortnightly visits",
    popular: true,
    badgeClass: "badge-accent",
    buttonClass: "solid-accent",
    link: "/contact?package=standard#quote-form",
    bestFor: "Average family gardens",
    features: [
      "Everything in Essential",
      "Hedge trimming (seasonal)",
      "Bed weeding and tidying",
      "Seasonal planting advice",
      "Priority booking",
      "Fortnightly visit report",
      "Direct gardener contact",
    ],
  },
  {
    label: "Premium",
    price: "£280",
    period: "/month",
    frequency: "Weekly visits",
    badgeClass: "badge-forest",
    buttonClass: "outline-forest",
    link: "/contact?package=premium#quote-form",
    bestFor: "Larger or show gardens",
    features: [
      "Everything in Standard",
      "Full lawn treatment programme",
      "Seasonal planting and colour",
      "Full pruning programme",
      "Dedicated named gardener",
      "Annual garden health report",
      "Winter structural planning",
    ],
  },
];

const commercialPackages = [
  {
    title: "Grounds Basic",
    price: "£180",
    period: "/month",
    frequency: "Fortnightly",
    tags: ["Offices", "Retail", "Clinics"],
    buttonClass: "outline-accent",
    link: "/contact?package=grounds-basic#quote-form",
    features: [
      "Lawn care and maintenance",
      "Path and entrance maintenance",
      "Litter picking",
      "Basic hedge and shrub care",
      "Monthly completion report",
    ],
  },
  {
    title: "Grounds Full",
    price: "£350",
    period: "/month",
    frequency: "Weekly",
    tags: ["Schools", "Hotels", "Housing"],
    featured: true,
    buttonClass: "solid-accent",
    link: "/contact?package=grounds-full#quote-form",
    features: [
      "Full maintenance programme",
      "Seasonal planting displays",
      "Compliance documentation",
      "Account manager assigned",
      "Weekly completion reports",
      "24/7 contact line",
    ],
  },
  {
    title: "Estate Management",
    price: "POA",
    period: "",
    frequency: "Bespoke contract",
    tags: ["Councils", "Developers", "Housing Assoc."],
    buttonClass: "outline-forest",
    link: "/contact?package=estate-management#quote-form",
    features: [
      "Full estate management",
      "Multiple crew deployment",
      "Full H&S documentation",
      "Monthly management reports",
      "Reactive maintenance included",
      "Direct management contact",
    ],
  },
];

export default function Packages() {
  return (
    <main className="packages-page">
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
        }

        .packages-page{
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

        .packages-hero{
          background:var(--sage);
          padding:70px 0 48px;
          text-align:center;
        }

        .breadcrumb-small{
          color:var(--text-muted);
          font-size:13px;
          margin-bottom:18px;
        }

        .page-title{
          font-size:42px;
          color:var(--text-dark);
          margin-bottom:14px;
        }

        .page-subtitle{
          font-size:18px;
          color:var(--text-muted);
          max-width:620px;
          margin:0 auto 18px;
          line-height:1.7;
        }

        .whatsapp-help{
          color:var(--text-muted);
          text-decoration:none;
          font-size:14px;
          transition:.25s ease;
        }

        .whatsapp-help:hover{
          color:var(--accent);
        }

        .packages-section{
          padding:64px 0;
          background:#fff;
        }

        .section-head{
          text-align:center;
          margin-bottom:46px;
        }

        .section-kicker{
          color:var(--accent);
          font-size:12px;
          font-weight:700;
          letter-spacing:.12em;
          text-transform:uppercase;
        }

        .section-title{
          font-size:34px;
          color:var(--text-dark);
          margin:10px 0 8px;
        }

        .section-subtitle{
          color:var(--text-muted);
          margin:0;
          font-size:15px;
        }

        .package-card{
          display:flex;
          flex-direction:column;
          height:100%;
          border-radius:24px;
          padding:32px;
          border:1px solid var(--border-light);
          background:var(--card-bg);
          transition:.3s ease;
        }

        .package-card:hover{
          transform:translateY(-6px);
          box-shadow:0 18px 45px rgba(74,124,89,.14);
        }

        .package-card.popular{
          border:2px solid var(--accent);
          box-shadow:0 8px 40px rgba(74,124,89,.15);
          transform:scale(1.03);
          position:relative;
          z-index:2;
        }

        .package-card.popular:hover{
          transform:scale(1.03) translateY(-6px);
        }

        .package-badge{
          width:max-content;
          padding:6px 14px;
          border-radius:50px;
          font-size:11px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:.08em;
          margin-bottom:24px;
        }

        .badge-light{
          background:var(--light-green);
          color:var(--accent);
        }

        .badge-accent{
          background:var(--accent);
          color:#fff;
        }

        .badge-forest{
          background:var(--forest);
          color:#fff;
        }

        .price-wrap{
          margin-bottom:22px;
        }

        .price-line{
          display:flex;
          align-items:baseline;
          gap:5px;
        }

        .price-prefix{
          font-size:14px;
          color:var(--text-muted);
        }

        .price{
          font-family:'Playfair Display',serif;
          font-size:52px;
          line-height:1;
          color:var(--text-dark);
          font-weight:700;
        }

        .period{
          font-size:18px;
          color:var(--text-muted);
        }

        .frequency{
          font-size:14px;
          color:var(--text-muted);
          margin-top:8px;
        }

        .divider{
          height:1px;
          background:var(--border-light);
          width:100%;
          margin-bottom:24px;
        }

        .included-title{
          font-size:13px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:.06em;
          margin-bottom:14px;
        }

        .feature-list{
          list-style:none;
          padding:0;
          margin:0 0 28px;
          display:flex;
          flex-direction:column;
          gap:12px;
        }

        .feature-list li{
          display:flex;
          gap:10px;
          align-items:flex-start;
          font-size:14px;
          line-height:1.45;
        }

        .check-icon{
          color:var(--accent);
          flex-shrink:0;
          margin-top:3px;
        }

        .package-bottom{
          margin-top:auto;
          padding-top:18px;
          border-top:1px solid rgba(220,232,213,.65);
        }

        .best-for{
          color:var(--text-muted);
          font-size:13px;
          margin-bottom:22px;
        }

        .best-for strong{
          color:var(--text-dark);
        }

        .package-btn{
          width:100%;
          border-radius:50px;
          padding:14px 20px;
          text-align:center;
          text-decoration:none;
          font-size:14px;
          font-weight:700;
          transition:.25s ease;
          display:flex;
          justify-content:center;
          align-items:center;
          gap:8px;
        }

        .solid-accent{
          background:var(--accent);
          color:#fff;
          border:1px solid var(--accent);
        }

        .solid-accent:hover{
          background:var(--accent-hover);
          color:#fff;
        }

        .outline-accent{
          border:1px solid var(--accent);
          color:var(--accent);
          background:#fff;
        }

        .outline-accent:hover{
          background:var(--accent);
          color:#fff;
        }

        .outline-forest{
          border:1px solid var(--forest);
          color:var(--forest);
          background:#fff;
        }

        .outline-forest:hover{
          background:var(--forest);
          color:#fff;
        }

        .bespoke-card{
          max-width:620px;
          margin:50px auto 0;
          background:var(--sage);
          border:1px solid var(--border-light);
          border-radius:24px;
          padding:32px;
          text-align:center;
        }

        .bespoke-card h3{
          font-size:24px;
          margin-bottom:12px;
        }

        .bespoke-card p{
          color:var(--text-muted);
          font-size:15px;
          line-height:1.7;
          margin-bottom:22px;
        }

        .bespoke-actions{
          display:flex;
          justify-content:center;
          gap:14px;
          flex-wrap:wrap;
        }

        .small-btn{
          border:1px solid var(--accent);
          color:var(--accent);
          text-decoration:none;
          border-radius:50px;
          padding:11px 22px;
          font-size:14px;
          font-weight:700;
          transition:.25s ease;
        }

        .small-btn:hover{
          background:var(--accent);
          color:#fff;
        }

        .commercial-section{
          background:var(--sage);
          padding:64px 0;
        }

        .commercial-card{
          background:#fff;
          border:1px solid var(--border-light);
          border-radius:24px;
          padding:28px;
          height:100%;
          display:flex;
          flex-direction:column;
          gap:18px;
          transition:.3s ease;
        }

        .commercial-card.featured{
          border:2px solid var(--accent);
          box-shadow:0 14px 36px rgba(74,124,89,.12);
        }

        .commercial-card:hover{
          transform:translateY(-5px);
        }

        .tag-wrap{
          display:flex;
          flex-wrap:wrap;
          gap:7px;
        }

        .tag{
          background:var(--light-green);
          color:var(--accent);
          border-radius:8px;
          padding:4px 9px;
          font-size:11px;
          font-weight:600;
        }

        .commercial-card h3{
          font-size:22px;
          margin:0;
        }

        .commercial-price{
          display:flex;
          align-items:baseline;
          gap:5px;
        }

        .commercial-price .price{
          font-size:34px;
        }

        .commercial-frequency{
          color:var(--accent);
          font-size:13px;
          font-weight:700;
        }

        .commercial-features{
          border-top:1px solid var(--sage);
          border-bottom:1px solid var(--sage);
          padding:18px 0;
          margin:0;
        }

        .commercial-note{
          text-align:center;
          color:var(--text-muted);
          font-size:14px;
          margin-top:28px;
        }

        @media(max-width:991px){
          .package-card.popular{
            transform:none;
          }

          .package-card.popular:hover{
            transform:translateY(-6px);
          }
        }

        @media(max-width:767px){
          .packages-page{
            padding-top:64px;
          }

          .packages-hero{
            padding:55px 0 36px;
          }

          .page-title{
            font-size:34px;
          }

          .page-subtitle{
            font-size:16px;
          }

          .package-card,
          .commercial-card{
            padding:24px;
          }

          .price{
            font-size:44px;
          }

          .bespoke-actions{
            flex-direction:column;
          }

          .small-btn{
            width:100%;
          }
        }
      `}</style>

      <section className="packages-hero">
        <Container className="main-container">
          <div className="breadcrumb-small">Home / Garden Packages</div>

          <h1 className="page-title">Garden Packages</h1>

          <p className="page-subtitle">
            Regular garden care made simple. Choose a plan, we do the rest.
          </p>

          <a
            href="https://wa.me/447496786474"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-help"
          >
            💬 Not sure which suits you? WhatsApp us a photo
          </a>
        </Container>
      </section>

      <section className="packages-section">
        <Container className="main-container">
          <div className="section-head">
            <div className="section-kicker">RESIDENTIAL</div>
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">
              All plans include free consultation, written quote, and
              satisfaction guarantee.
            </p>
          </div>

          <Row className="g-4 pt-2">
            {residentialPackages.map((pkg) => (
              <Col md={4} key={pkg.label}>
                <div className={`package-card ${pkg.popular ? "popular" : ""}`}>
                  <div className={`package-badge ${pkg.badgeClass}`}>
                    {pkg.label}
                  </div>

                  <div className="price-wrap">
                    <div className="price-line">
                      <span className="price-prefix">From</span>
                      <span className="price">{pkg.price}</span>
                      <span className="period">{pkg.period}</span>
                    </div>
                    <div className="frequency">{pkg.frequency}</div>
                  </div>

                  <div className="divider"></div>

                  <div>
                    <h4 className="included-title">What's included:</h4>
                    <ul className="feature-list">
                      {pkg.features.map((feature) => (
                        <li key={feature}>
                          <Check size={15} className="check-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-bottom">
                    <p className="best-for">
                      <strong>Best for:</strong> {pkg.bestFor}
                    </p>

                    <Link to={pkg.link} className={`package-btn ${pkg.buttonClass}`}>
                      Get Started <span>→</span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="bespoke-card">
            <h3>Your Garden, Your Terms</h3>

            <p>
              For large estates, unusual gardens, or requirements that do not
              fit a standard plan — we build a completely bespoke programme
              around your garden's specific needs.
            </p>

            <div className="bespoke-actions">
              <a href="tel:01483726400" className="small-btn">
                📞 Call to Discuss
              </a>

              <a
                href="https://wa.me/447496786474"
                target="_blank"
                rel="noreferrer"
                className="small-btn"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="commercial-section">
        <Container className="main-container">
          <div className="section-head">
            <div className="section-kicker">COMMERCIAL</div>
            <h2 className="section-title">Commercial Grounds Contracts</h2>
            <p className="section-subtitle">
              Reliable, professional grounds maintenance for businesses across
              Surrey.
            </p>
          </div>

          <Row className="g-4">
            {commercialPackages.map((pkg) => (
              <Col md={4} key={pkg.title}>
                <div
                  className={`commercial-card ${
                    pkg.featured ? "featured" : ""
                  }`}
                >
                  <div className="tag-wrap">
                    {pkg.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3>{pkg.title}</h3>

                  <div className="commercial-price">
                    <span className="price-prefix">From</span>
                    <span className="price">{pkg.price}</span>
                    {pkg.period && <span className="period">{pkg.period}</span>}
                  </div>

                  <div className="commercial-frequency">{pkg.frequency}</div>

                  <ul className="feature-list commercial-features">
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={pkg.link} className={`package-btn ${pkg.buttonClass}`}>
                    {pkg.price === "POA" ? "Get in Touch" : "Request a Quote"}
                  </Link>
                </div>
              </Col>
            ))}
          </Row>

          <div className="commercial-note">
            📋 All commercial contracts include: Written SLA · Insurance
            documentation · Method statements · Regular reporting
          </div>
        </Container>
      </section>
    </main>
  );
}
