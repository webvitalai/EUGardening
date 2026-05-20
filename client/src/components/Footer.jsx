import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Garden Packages", path: "/packages" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .footer-section {
          background: #1a2e1c;
          color: #fff;
          border-top: 3px solid #4a7c59;
        }

        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 88px 24px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          max-width: 100%;
        }

        .footer-logo-img-wrap {
          width: 82px;
          height: 70px;
          min-width: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible;
          flex-shrink: 0;
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          filter:
            brightness(1.12)
            contrast(1.16)
            saturate(1.1)
            drop-shadow(0 5px 10px rgba(0,0,0,0.35));
          transition: 0.3s ease;
        }

        .footer-logo:hover .footer-logo-img {
          transform: scale(1.05);
        }

        .footer-logo-text {
          margin-left: -3px;
          min-width: 0;
        }

        .footer-title {
          display: block;
          font-family: Georgia, serif;
          font-size: 22px;
          line-height: 1.1;
          color: #fff;
          white-space: nowrap;
        }

        .footer-subtitle {
          display: block;
          font-size: 13px;
          color: rgba(255,255,255,.6);
          white-space: nowrap;
        }

        .footer-quote {
          font-family: Georgia, serif;
          font-style: italic;
          color: #e6ebe7;
          font-size: 18px;
          margin-bottom: 8px;
        }

        .footer-desc {
          font-size: 14px;
          color: rgba(255,255,255,.8);
          max-width: 280px;
          margin: 0;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          height: 32px;
          padding: 0 12px;
          border-radius: 50px;
          background: #4a7c59;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .footer-heading {
          color: #4a7c59;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 24px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: rgba(255,255,255,.8);
          font-size: 14px;
          text-decoration: none;
          transition: .2s ease;
        }

        .footer-link:hover {
          color: #4a7c59;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact a,
        .footer-contact p {
          color: rgba(255,255,255,.9);
          font-size: 14px;
          text-decoration: none;
          margin: 0;
          transition: .2s ease;
        }

        .footer-contact a:hover {
          color: #4a7c59;
        }

        .footer-hours {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-hours p {
          font-size: 13px;
          color: rgba(255,255,255,.6);
          margin: 0;
        }

        .footer-bottom {
          border-top: 1px solid #2d5a3d;
          padding: 32px 24px;
        }

        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .footer-copy,
        .footer-reg {
          color: rgba(255,255,255,.6);
          font-size: 13px;
          margin: 0;
        }

        .footer-reg {
          font-size: 10px;
          color: rgba(255,255,255,.4);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .footer-policy-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-policy-links a {
          color: rgba(255,255,255,.6);
          font-size: 13px;
          text-decoration: none;
          transition: .2s ease;
        }

        .footer-policy-links a:hover {
          color: #fff;
        }

        @media (max-width: 991px) {
          .footer-logo-img-wrap {
            width: 76px;
            height: 66px;
            min-width: 76px;
          }

          .footer-title {
            font-size: 21px;
          }
        }

        @media (max-width: 767px) {
          .footer-main {
            padding: 60px 24px;
          }

          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }

          .footer-desc {
            max-width: 100%;
          }

          .footer-logo {
            gap: 5px;
          }

          .footer-logo-img-wrap {
            width: 66px;
            height: 58px;
            min-width: 66px;
          }

          .footer-logo-text {
            margin-left: -2px;
          }

          .footer-title {
            font-size: 20px;
          }

          .footer-subtitle {
            font-size: 12px;
          }
        }

        @media (max-width: 390px) {
          .footer-logo-img-wrap {
            width: 58px;
            height: 52px;
            min-width: 58px;
          }

          .footer-title {
            font-size: 18px;
          }

          .footer-subtitle {
            font-size: 11px;
          }
        }
      `}</style>

      <footer className="footer-section">
        <Container fluid className="px-0">
          <div className="footer-main">
            <Row className="g-5">
              <Col md={4}>
                <div className="footer-brand">
                  <Link to="/" className="footer-logo">
                    <div className="footer-logo-img-wrap">
                      <img
                        src="/Images/Logo.png"
                        alt="EU Gardening Services Logo"
                        className="footer-logo-img"
                      />
                    </div>

                    <div className="footer-logo-text">
                      <span className="footer-title">EU Gardening</span>
                      <span className="footer-subtitle">Services</span>
                    </div>
                  </Link>

                  <div>
                    <p className="footer-quote">
                      "Gardens That Grow With You"
                    </p>
                    <p className="footer-desc">
                      Serving Surrey and Manchester since 2011.
                      Professional, reliable garden care.
                    </p>
                  </div>

                  <div className="footer-badge">
                    🌿 RHS Qualified Horticulturists
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <h4 className="footer-heading">Quick Links</h4>

                <ul className="footer-links">
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={4}>
                <h4 className="footer-heading">Get In Touch</h4>

                <div className="footer-contact">
                  <a href="tel:01483726400">📞 +44 7496 786 474</a>

                  <a href="https://wa.me/447496786474">
                    💬 +44 7496 786 474
                  </a>

                  <a href="mailto:hello@eugardening.co.uk">
                    ✉️ hello@eugardening.co.uk
                  </a>

                  <p>
                    📍 1341 Ashton old Rd, Openshaw,
                    Manchester M11 1JT, UK
                  </p>

                  <div className="footer-hours">
                    <p>Mon-Fri: 7:30am – 5:30pm</p>
                    <p>Sat: 8:00am – 3:00pm</p>
                    <p>Sun: Enquiries answered</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <p className="footer-copy">
                © 2025 EU Gardening Services. All rights reserved.
              </p>

              <div className="footer-policy-links">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms</Link>
              </div>

              <p className="footer-reg">
                Reg No: VGS2011GU | £5M Public Liability Insured
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;