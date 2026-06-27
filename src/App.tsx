import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import ComoFunciona from "./pages/ComoFunciona";
import Abordagem from "./pages/Abordagem";
import Contato from "./pages/Contato";
import FormacaoExperiencia from "./pages/FormacaoExperiencia";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/abordagem" element={<Abordagem />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/formacao-e-experiencia" element={<FormacaoExperiencia />} />
      </Routes>
    </BrowserRouter>
  );
}