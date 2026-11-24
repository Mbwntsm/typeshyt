import { Routes, Route } from "react-router-dom";

import Scat from "./Scat";
import Meme1 from "../pages/scatposts/Meme1";



function ScatRoutes() {
  return (
    <Routes>
      <Route path="/scat" element={<Scat />} />
      <Route path="/scat/meme1" element={<Meme1 />} />

    </Routes>
  );
}

export default ScatRoutes;