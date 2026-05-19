import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Whatsapp } from "react-bootstrap-icons";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <a
        href="https://wa.me/447496786474"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Chat"
      >
        <Whatsapp />
      </a>

      <style>{`
        .whatsapp-float{
          position: fixed;
          right: 50px;
          bottom: 70px;
          width: 58px;
          height: 58px;
          background: #25D366;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          text-decoration: none;
          z-index: 99999;
          box-shadow: 0 12px 30px rgba(37,211,102,0.35);
          transition: all 0.3s ease;
          animation: whatsappPulse 2s infinite;
        }

        .whatsapp-float:hover{
          transform: scale(1.08);
          color: #fff;
        }

        .whatsapp-float svg{
          width: 30px;
          height: 30px;
        }

        @keyframes whatsappPulse{
          0%{ box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          70%{ box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100%{ box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        @media (max-width: 575px){
          .whatsapp-float{
            right: 15px;
            bottom: 15px;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </div>
  );
}