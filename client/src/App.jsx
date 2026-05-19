
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import NotFound from "./components/Pages/NotFound";
import HowItWorks from "./components/Pages/HowItWorks";
import Packages from "./components/Pages/Packages";
import OurWork from "./components/Pages/OurWork";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="packages" element={<Packages />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;