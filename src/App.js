import "./app.scss";
import Topbar from "./Component/topbar/Topbar";
import Work from "./Component/work/Work";
import Contact from "./Component/contact/Contact.jsx";
import Testimonials from "./Component/testimonials/Testimonials.jsx";
import Intro from "./Component/intro/Intro.jsx";
import Portfolio from "./Component/portfolio/Portfolio.jsx";
import { useState } from "react";
import Menu from "./Component/menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />

        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
