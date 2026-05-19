import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    service: "",
    postcode: "",
    name: "",
    phone: "",
    message: "",
    consent: false,
  });

  const services = [
    "Garden Maintenance Package",
    "One-Off Garden Clear",
    "Lawn Care",
    "Landscaping Project",
    "Tree or Hedge Work",
    "Commercial Grounds",
    "Not Sure — Just Enquiring",
  ];

  const faqs = [
    {
      q: "How quickly can you start?",
      a: "For one-off work, we can often start within 3-5 days. For regular maintenance, we arrange your first visit at a convenient time.",
    },
    {
      q: "Do I need a contract?",
      a: "No. We're flexible — one-off visits, fortnightly, weekly, or monthly. Cancel anytime with 7 days notice.",
    },
    {
      q: "Are you insured and qualified?",
      a: "Yes. We're RHS-qualified with £5m public liability insurance. All our team are trained professionals.",
    },
    {
      q: "What if I'm not happy?",
      a: "Your satisfaction is guaranteed. Tell us within 24 hours and we'll make it right — no arguments.",
    },
    {
      q: "Do you cover my area?",
      a: "We cover Guildford, Surrey and South West London. Just ask if you're nearby.",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const canSubmit =
    formData.service &&
    formData.postcode &&
    formData.name &&
    formData.phone &&
    formData.consent;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted successfully.");
  };

  return (
    <main className="contact-page">
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

        .contact-page{
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

        .hero-contact{
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

        .contact-title{
          font-size:42px;
          color:var(--text-dark);
          margin-bottom:14px;
        }

        .contact-subtitle{
          font-size:18px;
          color:var(--text-muted);
          margin-bottom:22px;
        }

        .booking-badge{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:8px 16px;
          border-radius:50px;
          background:var(--light-green);
          color:var(--accent);
          font-size:13px;
          font-weight:600;
        }

        .contact-cards-section{
          background:#fff;
          padding:58px 0 52px;
        }

        .contact-card{
          background:var(--card-bg);
          border:1px solid var(--border-light);
          border-radius:22px;
          padding:32px;
          height:100%;
          text-align:center;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:18px;
          transition:.3s ease;
        }

        .contact-card:hover{
          transform:translateY(-6px);
          box-shadow:0 20px 45px rgba(24,57,35,.08);
        }

        .contact-icon{
          width:46px;
          height:46px;
          border-radius:50%;
          background:var(--light-green);
          color:var(--accent);
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        }

        .contact-icon.whatsapp{
          background:rgba(37,211,102,.1);
          color:var(--whatsapp);
        }

        .contact-card h3{
          font-size:20px;
          margin:0;
        }

        .contact-btn{
          width:100%;
          min-height:52px;
          border-radius:50px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          text-decoration:none;
          font-size:15px;
          font-weight:700;
          transition:.25s ease;
        }

        .call-btn{
          background:var(--accent);
          color:#fff;
        }

        .call-btn:hover{
          background:var(--accent-hover);
          color:#fff;
        }

        .whatsapp-btn{
          background:var(--whatsapp);
          color:#fff;
        }

        .whatsapp-btn:hover{
          color:#fff;
          opacity:.9;
        }

        .email-btn{
          border:1px solid var(--accent);
          color:var(--accent);
          background:#fff;
        }

        .email-btn:hover{
          background:var(--accent);
          color:#fff;
        }

        .muted-text{
          color:var(--text-muted);
          font-size:13px;
          line-height:1.7;
          margin:0;
        }

        .mini-divider{
          width:48px;
          height:1px;
          background:var(--border-light);
          margin:2px auto;
        }

        .small-bold{
          font-size:14px;
          font-weight:700;
          color:var(--text-dark);
          margin:0;
        }

        .photo-box{
          background:var(--sage);
          border:1px solid var(--border-light);
          border-radius:14px;
          padding:14px;
          color:var(--text-muted);
          font-size:13px;
          line-height:1.6;
        }

        .faq-quote-section{
          background:var(--sage);
          padding:64px 0;
          border-top:1px solid var(--border-light);
        }

        .faq-card,
        .quote-card{
          background:#fff;
          border:1px solid var(--border-light);
          border-radius:28px;
          padding:34px;
          box-shadow:0 12px 30px rgba(24,57,35,.06);
          height:100%;
        }

        .faq-head{
          margin-bottom:24px;
        }

        .faq-head h3{
          font-size:26px;
          margin-bottom:6px;
        }

        .faq-head p{
          font-size:14px;
          color:var(--text-muted);
          margin:0;
        }

        .faq-item{
          background:rgba(241,247,243,.65);
          border:1px solid var(--border-light);
          border-radius:12px;
          overflow:hidden;
          margin-bottom:12px;
        }

        .faq-item summary{
          list-style:none;
          cursor:pointer;
          padding:16px 18px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:12px;
          font-weight:600;
          font-size:14px;
          color:var(--text-dark);
        }

        .faq-item summary::-webkit-details-marker{
          display:none;
        }

        .faq-arrow{
          color:var(--accent);
          transition:.25s ease;
          flex-shrink:0;
        }

        .faq-item[open] .faq-arrow{
          transform:rotate(90deg);
        }

        .faq-answer{
          padding:0 18px 18px;
          color:var(--text-muted);
          font-size:14px;
          line-height:1.7;
        }

        .quote-head{
          text-align:center;
          margin-bottom:30px;
        }

        .quote-head h2{
          font-size:30px;
          margin-bottom:8px;
        }

        .quote-head p{
          color:var(--text-muted);
          margin:0;
        }

        .form-label-main{
          font-size:17px;
          font-weight:700;
          color:var(--text-dark);
          margin-bottom:14px;
        }

        .service-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:12px;
          margin-bottom:28px;
        }

        .service-option{
          border:1px solid var(--border-light);
          border-radius:14px;
          padding:14px;
          text-align:center;
          font-size:14px;
          font-weight:600;
          cursor:pointer;
          transition:.25s ease;
          color:var(--text-dark);
          background:#fff;
        }

        .service-option input{
          display:none;
        }

        .service-option.active,
        .service-option:hover{
          border-color:var(--accent);
          background:var(--light-green);
          color:var(--accent);
        }

        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:22px;
        }

        .form-group{
          margin-bottom:22px;
        }

        .form-group label{
          font-size:14px;
          font-weight:700;
          margin-bottom:8px;
          display:block;
          color:var(--text-dark);
        }

        .form-control-custom{
          width:100%;
          height:52px;
          border:1px solid var(--border-light);
          border-radius:14px;
          padding:0 16px;
          font-size:15px;
          outline:none;
          transition:.25s ease;
          font-family:'Poppins',sans-serif;
        }

        .form-control-custom:focus,
        .textarea-custom:focus{
          border-color:var(--accent);
          box-shadow:0 0 0 4px rgba(74,124,89,.12);
        }

        .helper-text{
          font-size:11px;
          color:var(--text-muted);
          margin-top:6px;
        }

        .textarea-custom{
          width:100%;
          border:1px solid var(--border-light);
          border-radius:14px;
          padding:14px 16px;
          font-size:15px;
          outline:none;
          resize:none;
          font-family:'Poppins',sans-serif;
        }

        .photo-link{
          display:inline-block;
          color:var(--accent);
          font-size:13px;
          font-weight:600;
          text-decoration:none;
          margin-top:8px;
        }

        .consent-row{
          display:flex;
          gap:12px;
          align-items:flex-start;
          margin:22px 0;
          cursor:pointer;
        }

        .consent-row input{
          margin-top:5px;
          accent-color:var(--accent);
        }

        .consent-row span{
          font-size:13px;
          color:var(--text-muted);
          line-height:1.5;
        }

        .submit-btn{
          width:100%;
          height:56px;
          border:none;
          border-radius:50px;
          font-size:16px;
          font-weight:700;
          transition:.25s ease;
          font-family:'Poppins',sans-serif;
        }

        .submit-btn.active{
          background:var(--accent);
          color:#fff;
          cursor:pointer;
        }

        .submit-btn.active:hover{
          background:var(--accent-hover);
          transform:translateY(-2px);
        }

        .submit-btn.disabled{
          background:var(--border-light);
          color:var(--text-muted);
          cursor:not-allowed;
        }

        .location-note{
          margin-top:28px;
          text-align:center;
          color:var(--text-muted);
          font-size:14px;
        }

        @media(max-width:991px){
          .faq-card,
          .quote-card{
            padding:28px 22px;
          }

          .service-grid,
          .form-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:767px){
          .contact-page{
            padding-top:64px;
          }

          .hero-contact{
            padding:55px 0 34px;
          }

          .contact-title{
            font-size:34px;
          }

          .contact-subtitle{
            font-size:16px;
          }

          .contact-card{
            padding:26px 20px;
          }

          .faq-quote-section{
            padding:46px 0;
          }

          .faq-card,
          .quote-card{
            border-radius:22px;
          }

          .quote-head h2{
            font-size:24px;
          }
        }
      `}</style>

      <section className="hero-contact">
        <Container className="main-container">
          <div className="breadcrumb-small">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <span>Contact</span>
          </div>

          <h1 className="contact-title">Get In Touch</h1>

          <p className="contact-subtitle">
            Free quotes, no obligation. We respond within a few hours.
          </p>

          <div className="booking-badge">
            🌿 Currently booking spring garden work — slots available
          </div>
        </Container>
      </section>

      <section className="contact-cards-section">
        <Container className="main-container">
          <Row className="g-4">
            <Col md={4}>
              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>

                <h3>Call Us</h3>

                <a href="tel:01483726400" className="contact-btn call-btn">
                  📞 +44 7496 786 474
                </a>

                <div>
                  <p className="muted-text">Mon-Fri 7:30am – 5:30pm</p>
                  <p className="muted-text">Saturday 8:00am – 3:00pm</p>
                  <div className="mini-divider"></div>
                  <p className="muted-text">
                    <em>
                      <u>Sunday: We answer enquiries by WhatsApp</u>
                    </em>
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="contact-card">
                <div className="contact-icon whatsapp">
                  <MessageCircle size={20} />
                </div>

                <h3>WhatsApp Us</h3>

                <a
                  href="https://wa.me/447496786474?text=Hi Verdant, I would like a quote for my garden"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn whatsapp-btn"
                >
                  💬 Send a WhatsApp Message
                </a>

                <p className="small-bold">+44 7496 786 474</p>

                <div className="photo-box">
                  <p className="mb-2">
                    📸 Send us a photo of your garden for a faster, more
                    accurate quote.
                  </p>
                  <p className="mb-0" style={{ opacity: 0.7, fontSize: 12 }}>
                    We reply within a few hours.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>

                <h3>Email Us</h3>

                <a
                  href="mailto:hello@verdantgardens.co.uk"
                  className="contact-btn email-btn"
                >
                  ✉️ hello@eugardening.co.uk
                </a>

                <p className="muted-text">
                  For detailed enquiries and commercial contract discussions.
                </p>

                <p className="muted-text" style={{ opacity: 0.75 }}>
                  Response within 4 working hours.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq-quote-section" id="quote-form">
        <Container className="main-container">
          <Row className="g-4 align-items-stretch">
            <Col lg={5}>
              <div className="faq-card">
                <div className="faq-head">
                  <h3>Frequently Asked Questions</h3>
                  <p>Quick answers to common questions</p>
                </div>

                {faqs.map((faq, index) => (
                  <details className="faq-item" key={index}>
                    <summary>
                      <span>{faq.q}</span>
                      <ArrowRight size={16} className="faq-arrow" />
                    </summary>
                    <div className="faq-answer">{faq.a}</div>
                  </details>
                ))}
              </div>
            </Col>

            <Col lg={7}>
              <div className="quote-card">
                <div className="quote-head">
                  <h2>Request a Free Quote</h2>
                  <p>No obligation. We respond within a few hours.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-label-main">What can we help with?</div>

                  <div className="service-grid">
                    {services.map((service) => (
                      <label
                        key={service}
                        className={`service-option ${
                          formData.service === service ? "active" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleChange}
                        />
                        {service}
                      </label>
                    ))}
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Your postcode</label>
                      <input
                        type="text"
                        name="postcode"
                        placeholder="e.g. GU1 4SZ"
                        required
                        value={formData.postcode}
                        onChange={handleChange}
                        className="form-control-custom"
                      />
                      <div className="helper-text">
                        So we can confirm we cover your area
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Your name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control-custom"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Best number to reach you</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 07700 123456"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control-custom"
                    />
                  </div>

                  <div className="form-group">
                    <label>Tell us about your garden (optional)</label>
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="e.g. A medium sized back garden in Guildford. Looking for regular maintenance."
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea-custom"
                    />

                    <a
                      href="https://wa.me/447496786474"
                      target="_blank"
                      rel="noreferrer"
                      className="photo-link"
                    >
                      📸 Got a photo? Send it on WhatsApp for a faster quote →
                    </a>
                  </div>

                  <label className="consent-row">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      I'm happy to be contacted by EU Gardening Services about
                      my enquiry.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`submit-btn ${
                      canSubmit ? "active" : "disabled"
                    }`}
                  >
                    Request My Free Quote →
                  </button>
                </form>
              </div>
            </Col>
          </Row>

          <div className="location-note">
            📍 1341 Ashton old Rd, Openshaw, Manchester M11 1JT ,Uk
          </div>
        </Container>
      </section>
    </main>
  );
}