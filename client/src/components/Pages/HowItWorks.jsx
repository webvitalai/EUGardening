import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  ClipboardList,
  Calendar,
  Sparkles,
  Star,
  Clock,
  Check,
  Shield,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: 1,
    time: "2 minutes",
    icon: Phone,
    title: "Get in Touch",
    desc: "Call us, send a WhatsApp, or fill in the quote form. Tell us about your garden and what you need.",
    points: [
      "Call 01483 726 400",
      "WhatsApp 07700 900 284",
      "Use our instant quote form",
    ],
  },
  {
    number: 2,
    time: "30 minutes",
    icon: ClipboardList,
    title: "We Visit & Assess",
    desc: "We come to your garden at a time that suits you. We assess what needs doing and discuss options.",
    points: [
      "Free, no-obligation visit",
      "We listen to your priorities",
      "We explain all options",
    ],
  },
  {
    number: 3,
    time: "Same day",
    icon: Calendar,
    title: "Receive Your Quote",
    desc: "Within 24 hours, often same day, you get a detailed written quote with clear pricing.",
    points: ["Written quote emailed", "No hidden extras", "Price guaranteed"],
  },
  {
    number: 4,
    time: "Your schedule",
    icon: Sparkles,
    title: "Work Begins",
    desc: "Once you're happy, we book a date. Our team arrives on time, works neatly, and leaves your garden tidy.",
    points: ["Uniformed, professional team", "Fully insured", "We clean up after"],
  },
  {
    number: 5,
    time: "Ongoing",
    icon: Star,
    title: "After Care",
    desc: "We don't just finish and leave. We offer ongoing care plans and seasonal advice to keep your garden thriving.",
    points: ["Follow-up support", "Maintenance plans available", "Seasonal tips"],
  },
];

const trustItems = [
  ["RHS Qualified", "Horticulturists"],
  ["£5M Insurance", "Public Liability"],
  ["Since 2011", "Locally Established"],
  ["Satisfaction", "Guaranteed"],
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "For one-off work, we can often start within 3-5 days. For regular maintenance, we arrange your first visit at a convenient time.",
  },
  {
    q: "Do you come every week?",
    a: "That's completely up to you. We offer weekly, fortnightly, or monthly visits. Many clients start fortnightly and adjust as needed.",
  },
  {
    q: "What happens if I'm not happy?",
    a: "Your satisfaction is guaranteed. If something isn't right, tell us within 24 hours and we'll make it right — no arguments.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We have £5 million public liability insurance. We're also fully qualified — our team includes RHS-qualified horticulturists.",
  },
  {
    q: "What if I only need a one-off tidy?",
    a: "We do one-off visits too. There's no minimum contract. Just tell us what you need and we'll quote accordingly.",
  },
  {
    q: "Do you cover my area?",
    a: "We cover Guildford, Surrey, and South West London. If you're close to our area, just ask — we're often flexible.",
  },
];

export default function HowItWorks() {
  return (
    <main className="how-page">
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
        }

        .how-page{
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

        .hero-section{
          background:var(--sage);
          padding:70px 0 48px;
          text-align:center;
        }

        .breadcrumb{
          color:var(--text-muted);
          font-size:13px;
          margin-bottom:18px;
        }

        .hero-title{
          font-size:42px;
          margin-bottom:14px;
        }

        .hero-text{
          font-size:18px;
          color:var(--text-muted);
          max-width:620px;
          margin:0 auto 24px;
          line-height:1.7;
        }

        .hero-actions{
          display:flex;
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
          gap:8px;
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

        .process-section{
          padding:64px 0;
          background:#fff;
        }

        .section-head{
          text-align:center;
          margin-bottom:52px;
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
          margin:10px 0 8px;
        }

        .section-subtitle{
          color:var(--text-muted);
          margin:0;
        }

        .steps-wrap{
          max-width:1000px;
          margin:0 auto;
          display:flex;
          flex-direction:column;
          gap:34px;
        }

        .step-row{
          display:flex;
          align-items:flex-start;
          gap:42px;
          position:relative;
        }

        .step-left{
          width:80px;
          flex-shrink:0;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:9px;
        }

        .step-num{
          width:64px;
          height:64px;
          border-radius:50%;
          background:var(--accent);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:'Playfair Display',serif;
          font-size:28px;
          font-weight:700;
        }

        .step-time{
          display:flex;
          align-items:center;
          gap:4px;
          font-size:12px;
          color:var(--text-muted);
          white-space:nowrap;
        }

        .step-line{
          position:absolute;
          left:31px;
          top:82px;
          width:2px;
          height:68px;
          background:var(--border-light);
        }

        .step-card{
          flex:1;
          background:rgba(241,247,243,.58);
          border:1px solid var(--border-light);
          border-radius:22px;
          padding:28px;
        }

        .step-card-head{
          display:flex;
          gap:16px;
          align-items:flex-start;
          margin-bottom:18px;
        }

        .step-icon{
          width:42px;
          height:42px;
          border-radius:50%;
          background:var(--light-green);
          color:var(--accent);
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        }

        .step-card h3{
          font-size:22px;
          margin:0 0 8px;
        }

        .step-card p{
          color:var(--text-muted);
          font-size:15px;
          line-height:1.7;
          margin:0;
        }

        .step-points{
          border-top:1px solid var(--border-light);
          padding-top:16px;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px;
        }

        .step-point{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:13px;
          font-weight:600;
          color:var(--text-dark);
        }

        .trust-section{
          background:var(--forest);
          padding:58px 0;
        }

        .trust-card{
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.1);
          border-radius:16px;
          padding:24px;
          text-align:center;
          height:100%;
        }

        .trust-card svg{
          color:var(--accent);
          margin-bottom:12px;
        }

        .trust-card h4{
          color:#fff;
          font-size:18px;
          font-weight:700;
          margin-bottom:4px;
        }

        .trust-card p{
          color:rgba(255,255,255,.6);
          margin:0;
          font-size:14px;
        }

        .faq-section{
          background:var(--sage);
          padding:64px 0;
        }

        .faq-wrap{
          max-width:800px;
          margin:0 auto;
        }

        .faq-item{
          background:#fff;
          border:1px solid var(--border-light);
          border-radius:14px;
          margin-bottom:14px;
          overflow:hidden;
        }

        .faq-item summary{
          list-style:none;
          cursor:pointer;
          padding:20px 24px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:14px;
          font-weight:700;
          font-size:17px;
        }

        .faq-item summary::-webkit-details-marker{
          display:none;
        }

        .faq-icon{
          width:32px;
          height:32px;
          border-radius:50%;
          background:var(--sage);
          color:var(--accent);
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          transition:.25s ease;
        }

        .faq-item[open] .faq-icon{
          transform:rotate(90deg);
        }

        .faq-answer{
          padding:0 24px 22px;
          color:var(--text-muted);
          line-height:1.7;
        }

        .still-card{
          margin-top:34px;
          background:#fff;
          border:1px solid var(--border-light);
          border-radius:22px;
          padding:30px;
          text-align:center;
        }

        .still-card h3{
          font-size:22px;
          margin-bottom:10px;
        }

        .still-card p{
          color:var(--text-muted);
          margin-bottom:22px;
        }

        .final-cta{
          padding:64px 0;
          background:#fff;
          text-align:center;
        }

        .final-cta h2{
          font-size:34px;
          margin-bottom:14px;
        }

        .final-cta p{
          color:var(--text-muted);
          font-size:18px;
          margin-bottom:24px;
        }

        .location-note{
          margin-top:18px;
          font-size:14px;
          color:var(--text-muted);
        }

        @media(max-width:767px){
          .how-page{
            padding-top:64px;
          }

          .hero-section{
            padding:55px 0 36px;
          }

          .hero-title{
            font-size:34px;
          }

          .hero-text{
            font-size:16px;
          }

          .btn-main,
          .btn-outline-main{
            width:100%;
          }

          .section-title{
            font-size:28px;
          }

          .step-row{
            gap:18px;
          }

          .step-left{
            width:64px;
          }

          .step-num{
            width:54px;
            height:54px;
            font-size:24px;
          }

          .step-time{
            font-size:10px;
          }

          .step-line{
            left:26px;
            top:72px;
            height:74px;
          }

          .step-card{
            padding:20px;
          }

          .step-card-head{
            flex-direction:column;
            gap:12px;
          }

          .step-points{
            grid-template-columns:1fr;
          }

          .faq-item summary{
            padding:17px;
            font-size:15px;
          }

          .faq-answer{
            padding:0 17px 18px;
            font-size:14px;
          }

          .final-cta h2{
            font-size:28px;
          }

          .final-cta p{
            font-size:16px;
          }
        }
      `}</style>

      <section className="hero-section">
        <Container className="main-container">
          <div className="breadcrumb">Home / How It Works</div>

          <h1 className="hero-title">How It Works</h1>

          <p className="hero-text">
            Simple, straightforward garden care. No stress, no hidden extras.
          </p>

          <div className="hero-actions">
            <Link to="/contact#quote-form" className="btn-main">
              Get a Free Quote
            </Link>

            <a href="tel:01483726400" className="btn-outline-main">
              Call +44 7496 786 474
            </a>
          </div>
        </Container>
      </section>

      <section className="process-section">
        <Container>
          <div className="section-head">
            <div className="section-kicker">OUR PROCESS</div>
            <h2 className="section-title">
              From First Contact to Beautiful Garden
            </h2>
            <p className="section-subtitle">Five simple steps. That's it.</p>
          </div>

          <div className="steps-wrap">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="step-row" key={step.number}>
                  <div className="step-left">
                    <div className="step-num">{step.number}</div>
                    <div className="step-time">
                      <Clock size={13} /> {step.time}
                    </div>
                  </div>

                  {index !== steps.length - 1 && <div className="step-line" />}

                  <div className="step-card">
                    <div className="step-card-head">
                      <div className="step-icon">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                      </div>
                    </div>

                    <div className="step-points">
                      {step.points.map((point) => (
                        <div className="step-point" key={point}>
                          <Check size={15} color="#4a7c59" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="trust-section">
        <Container style={{ maxWidth: 1000 }}>
          <Row className="g-4">
            {trustItems.map(([title, desc]) => (
              <Col xs={6} md={3} key={title}>
                <div className="trust-card">
                  <Shield size={32} />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="faq-section">
        <Container>
          <div className="faq-wrap">
            <div className="section-head">
              <div className="section-kicker">FAQ</div>
              <h2 className="section-title">Common Questions</h2>
              <p className="section-subtitle">
                Quick answers. No awkward conversations needed.
              </p>
            </div>

            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-icon">
                    <ArrowRight size={16} />
                  </span>
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}

            <div className="still-card">
              <h3>Still have questions?</h3>
              <p>
                We're happy to help. Get in touch however works best for you.
              </p>

              <div className="hero-actions">
                <a href="tel:01483726400" className="btn-main">
                  <Phone size={16} /> Call +44 7496 786 474
                </a>

                <a
                  href="https://wa.me/447494786474"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-main"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="final-cta">
        <Container style={{ maxWidth: 800 }}>
          <h2>Ready to Get Started?</h2>

          <p>
            Get a free, no-obligation quote. We respond within a few hours.
          </p>

          <div className="hero-actions">
            <Link to="/contact#quote-form" className="btn-main">
              Get a Free Quote →
            </Link>

            <Link to="/packages" className="btn-outline-main">
              View Our Packages
            </Link>
          </div>

          <div className="location-note">
            📍 1341 Ashton old Rd, Openshaw, Manchester M11 1JT ,Uk
          </div>
        </Container>
      </section>
    </main>
  );
}