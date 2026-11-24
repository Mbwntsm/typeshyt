import { Routes, Route } from "react-router-dom";

import Scat from "./Scat";
import Ssh_auth from "../pages/scatposts/Ssh_auth";



function ScatRoutes() {
  return (
    <Routes>
      <Route path="/scat" element={<Scat />} />
      <Route path="/scat/ssh_auth" element={<Ssh_auth />} />

    </Routes>
  );
}

export default ScatRoutes;