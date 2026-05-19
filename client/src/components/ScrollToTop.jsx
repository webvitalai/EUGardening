import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {

    // agar hash exist karta hy to us section pe scroll karo
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);

        return;
      }
    }

    // otherwise page top se open ho
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;