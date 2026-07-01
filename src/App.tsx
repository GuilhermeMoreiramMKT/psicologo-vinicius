import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Abordagem from "./pages/Abordagem";
import FormacaoExperiencia from "./pages/FormacaoExperiencia";
import SalaEspera from "./pages/SalaEspera";

function ScrollRevealSetup() {
  const location = useLocation();

  useEffect(() => {
    let elements: HTMLElement[] = [];
    let ticking = false;

    const selector = [
      "main section > div",
      "main article",
      "main aside > div",
      "main li",
      "main h1",
      "main h2",
      "section > div",
      "section article",
      "section aside > div",
      "section li",
      "section h1",
      "section h2",
    ].join(",");

    const revealElements = () => {
      const triggerPoint = window.innerHeight * 0.75;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
          element.classList.add("reveal-visible");
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(revealElements);
        ticking = true;
      }
    };

    const timeoutId = window.setTimeout(() => {
      elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

      elements.forEach((element, index) => {
        element.classList.remove("reveal-visible");
        element.classList.add("reveal-on-scroll");
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index * 0.03, 0.18)}s`
        );
      });

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          revealElements();
        });
      });

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll);
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRevealSetup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atendimento" element={<Abordagem />} />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/formacao-e-experiencia"
          element={<FormacaoExperiencia />}
        />
<Route path="/sala-de-espera" element={<SalaEspera />} />
      </Routes>
    </BrowserRouter>
  );
}