import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Packages", path: "/packages" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          background-image:
            linear-gradient(
              90deg,
              rgba(13, 35, 22, 0.96),
              rgba(22, 64, 38, 0.90),
              rgba(13, 35, 22, 0.96)
            ),
            url("/Images/n1.jpeg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-bottom: 1px solid rgba(255,255,255,0.16);
          box-shadow: 0 10px 30px rgba(0,0,0,0.22);
        }

        .site-header * {
          box-sizing: border-box;
        }

        .header-inner {
          width: 100%;
          max-width: 1320px;
          min-height: 86px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          flex-shrink: 0;
          min-width: 190px;
        }

        .brand-logo-wrap {
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

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          filter:
            brightness(1.12)
            contrast(1.18)
            saturate(1.1)
            drop-shadow(0 5px 10px rgba(0,0,0,0.35));
          transition: 0.3s ease;
        }

        .brand-link:hover .brand-logo-img {
          transform: scale(1.05);
        }

        .brand-text {
          margin-left: -3px;
          min-width: 0;
        }

        .brand-title {
          font-family: Georgia, serif;
          font-size: 25px;
          line-height: 1;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        .brand-subtitle {
          margin-top: 4px;
          font-size: 11px;
          line-height: 1;
          color: rgba(255,255,255,0.86);
          text-transform: uppercase;
          letter-spacing: 1.4px;
          white-space: nowrap;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
        }

        .nav-link-custom {
          color: rgba(255,255,255,0.92);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
          padding: 12px 13px;
          border-radius: 999px;
          position: relative;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .nav-link-custom:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.12);
          transform: translateY(-1px);
        }

        .nav-link-custom.active {
          color: #183923;
          background: #ffffff;
          box-shadow: 0 8px 22px rgba(0,0,0,0.18);
        }

        .header-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-shrink: 0;
        }

        .phone-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .phone-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.18);
          transform: translateY(-1px);
        }

        .quote-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          background: #ffffff;
          color: #183923;
          padding: 11px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 8px 22px rgba(0,0,0,0.20);
          transition: all 0.25s ease;
        }

        .quote-btn:hover {
          color: #183923;
          background: #e9f7ee;
          transform: translateY(-1px);
        }

        .mobile-toggle {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 12px;
          color: #ffffff;
          background: rgba(255,255,255,0.12);
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 1199px) {
          .header-inner {
            padding: 0 18px;
            gap: 14px;
          }

          .desktop-nav {
            gap: 4px;
          }

          .nav-link-custom {
            font-size: 13px;
            padding: 11px 9px;
          }

          .phone-link {
            font-size: 13px;
            padding: 9px 10px;
          }

          .quote-btn {
            font-size: 13px;
            padding: 10px 15px;
          }

          .brand-logo-wrap {
            width: 76px;
            height: 66px;
            min-width: 76px;
          }
        }

        @media (max-width: 991px) {
          .header-inner {
            min-height: 78px;
          }

          .desktop-nav,
          .header-actions {
            display: none;
          }

          .mobile-toggle {
            display: inline-flex;
          }

          .brand-link {
            min-width: auto;
          }

          .brand-logo-wrap {
            width: 70px;
            height: 60px;
            min-width: 70px;
          }

          .brand-title {
            font-size: 23px;
          }

          .mobile-menu {
            display: block;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: all 0.35s ease;
            background: rgba(10, 32, 19, 0.98);
            border-top: 1px solid rgba(255,255,255,0.12);
          }

          .mobile-menu.show {
            max-height: 520px;
            opacity: 1;
          }

          .mobile-menu-inner {
            max-width: 1320px;
            margin: 0 auto;
            padding: 14px 18px 20px;
          }

          .mobile-nav-link {
            display: block;
            padding: 14px 14px;
            color: rgba(255,255,255,0.92);
            text-decoration: none;
            font-size: 15px;
            font-weight: 700;
            border-radius: 12px;
            margin-bottom: 6px;
            transition: all 0.25s ease;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link.active {
            color: #183923;
            background: #ffffff;
          }

          .mobile-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 12px;
            padding-top: 14px;
            border-top: 1px solid rgba(255,255,255,0.14);
          }

          .mobile-phone,
          .mobile-quote {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            min-height: 46px;
            border-radius: 14px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
          }

          .mobile-phone {
            color: #ffffff;
            border: 1px solid rgba(255,255,255,0.18);
            background: rgba(255,255,255,0.10);
          }

          .mobile-quote {
            color: #183923;
            background: #ffffff;
          }
        }

        @media (max-width: 575px) {
          .header-inner {
            min-height: 72px;
            padding: 0 14px;
          }

          .brand-link {
            gap: 5px;
          }

          .brand-logo-wrap {
            width: 62px;
            height: 54px;
            min-width: 62px;
          }

          .brand-text {
            margin-left: -2px;
          }

          .brand-title {
            font-size: 20px;
          }

          .brand-subtitle {
            font-size: 9.5px;
            letter-spacing: 1px;
          }

          .mobile-toggle {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 380px) {
          .brand-logo-wrap {
            width: 56px;
            height: 50px;
            min-width: 56px;
          }

          .brand-title {
            font-size: 18px;
          }

          .brand-subtitle {
            display: none;
          }
        }
      `}</style>

      <header className="site-header">
        <Container fluid className="px-0">
          <div className="header-inner">
            <Link to="/" className="brand-link" onClick={() => setOpen(false)}>
              <div className="brand-logo-wrap">
                <img
                  src="/Images/Logo.png"
                  alt="EU Gardening Services Logo"
                  className="brand-logo-img"
                />
              </div>

              <div className="brand-text">
                <div className="brand-title">EU Gardening</div>
                <div className="brand-subtitle">Services</div>
              </div>
            </Link>

            <nav className="desktop-nav">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? "active" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="header-actions">
              <a href="tel:01483726400" className="phone-link">
                <Phone size={15} />
                +44 7496 786 474
              </a>

              <Link to="/contact" className="quote-btn">
                Get Quote
              </Link>
            </div>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`mobile-menu ${open ? "show" : ""}`}>
            <div className="mobile-menu-inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="mobile-actions">
                <a href="tel:01483726400" className="mobile-phone">
                  <Phone size={16} />
                  +44 7496 786 474
                </a>

                <Link
                  to="/contact"
                  className="mobile-quote"
                  onClick={() => setOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}