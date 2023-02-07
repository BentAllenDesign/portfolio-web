import { Route, Routes } from "react-router-dom";
import { ComingSoon } from "./components/ComingSoon";
import { Page } from "./components/Page";
import { LandingPage } from "./pages/LandingPage";
import { ResumePage } from "./pages/ResumePage";

export const Routestrap = () => (
  <Routes>
    <Route path="" element={<Page />}> // Page component
      <Route index element={<LandingPage />} /> // Landing component
      <Route path="/about" element={<ComingSoon />} /> // About Me component
      <Route path="/projects" element={<ComingSoon />} /> // Projects component
      <Route path="/resume" element={<ResumePage />} /> // Resume component
      <Route path="/contact" element={<ComingSoon />} /> // Resume component
    </Route>
  </Routes>
)