import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Actions from "./pages/Actions";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Bangladesh from "./pages/Bangladesh";
import Senegal from "./pages/Senegal";
import Cameroun from "./pages/Cameroun";
import Ouganda from "./pages/Ouganda";
import Algerie from "./pages/Algerie";
import Maroc from "./pages/Maroc";
import Togo from "./pages/Togo";
import Maraudes from "./pages/Maraudes";
import RecolteAlimentaire from "./pages/RecolteAlimentaire";
import DistribAlim from "./pages/DistribAlim";
import Partenariat from "./pages/Partenariat";
import MentionsLegales from "./pages/MentionsLegales";

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

            <Route path="/actions/bangladesh" element={<Bangladesh />} />
            <Route path="/actions/senegal" element={<Senegal />} />
            <Route path="/actions/cameroun" element={<Cameroun />} />
            <Route path="/actions/ouganda" element={<Ouganda />} />
            <Route path="/actions/algerie" element={<Algerie />} />
            <Route path="/actions/maroc" element={<Maroc />} />
            <Route path="/actions/togo" element={<Togo />} />
            <Route path="/actions/maraudes" element={<Maraudes />} />
            <Route path="/actions/recolte-alimentaire" element={<RecolteAlimentaire />} />
            <Route path="/actions/distribution-alimentaire" element={<DistribAlim />} />
            <Route path="/faire-un-don" element={<Donate />} />
            <Route path="/devenir-benevole" element={<Volunteer />} />
            <Route path="/partenariat" element={<Partenariat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentionslegales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

