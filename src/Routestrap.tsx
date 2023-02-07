import { Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";
import { LandingPage } from "./pages/LandingPage";

export const Routestrap = () => (
  <Routes>
    <Route path="" element={<Page />}> // Page component
      <Route index element={<LandingPage />} /> // Landing component
      <Route path="/about" element={<></>} /> // About Me component
      <Route path="/projects" element={<></>} /> // Projects component
      <Route path="/resume" element={<></>} /> // Resume component
      <Route path="/contact" element={<></>} /> // Resume component
    </Route>
  </Routes>
)