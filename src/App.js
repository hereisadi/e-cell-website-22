import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Footerconstant from "./components/shared/Footerconstant";
import NotFound from "./components/shared/NotFound";
import ScrollToTop from "./components/shared/ScrollToTop";
import Team from "./components/pages/Team";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} key="route-home-screen" />
          <Route exact path="/team" element={<Team />} />
          <Route
            exact
            path="/gallery"
            element={<Gallery />}
            key="route-gallery-screen"
          />
             <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
        <Footerconstant />
      </BrowserRouter>
    </>
  );
}

export default App;
