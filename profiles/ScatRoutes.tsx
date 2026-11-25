import { Routes, Route } from "react-router-dom";

import Scat from "./Scat";
import Ssh_auth from "../pages/scatposts/Ssh_auth";
import Git_pr  from "../pages/scatposts/Git_pr";



function ScatRoutes() {
  return (
    <Routes>
      <Route path="/scat" element={<Scat />} />
      <Route path="/scat/ssh_auth" element={<Ssh_auth />} />
      <Route path="/scat/git_pr" element={<Git_pr />} />
    </Routes>
  );
}

export default ScatRoutes;