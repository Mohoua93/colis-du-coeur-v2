// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Actions from "./pages/Actions";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Bangladesh from "./pages/Bangladesh"; // 👈 renommé ici
import Senegal from "./pages/Senegal";
import Cameroun from "./pages/Cameroun";
import Ouganda from "./pages/Ouganda";
import Algerie from "./pages/Algerie";
import Maroc from "./pages/Maroc";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/nos-actions" element={<Actions />} />
            {/* 👇 orthographe corrigée + même que dans le post-it */}
            <Route path="/actions/bangladesh" element={<Bangladesh />} />
            <Route path="/actions/senegal" element={<Senegal />} />
            <Route path="/actions/cameroun" element={<Cameroun />} />
            <Route path="/actions/Ouganda" element={<Ouganda />} />
            <Route path="/actions/algerie" element={<Algerie />} />
            <Route path="/actions/maroc" element={<Maroc />} />
            <Route path="/faire-un-don" element={<Donate />} />
            <Route path="/devenir-benevole" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
