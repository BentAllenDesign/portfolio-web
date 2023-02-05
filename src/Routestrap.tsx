import { Route, Routes } from "react-router-dom";

export const Routestrap = () => (
  <Routes>
    <Route path="" element={<></>}> // Page component
      <Route index element={<></>} /> // Landing component
      <Route path="/resume" element={<></>} /> // Resume component
      <Route path="/projects" element={<></>} /> // Projects component
      <Route path="/contact" element={<></>} /> // Resume component
    </Route>
  </Routes>
)