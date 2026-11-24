import { Routes, Route } from "react-router-dom";
import Home from "../Home"
import BlogLayout from "../layouts/BlogLayout";
import ScatRoutes from "../profiles/ScatRoutes";

function App() {
  return (
    <Routes>
      <Route element={<BlogLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={
          <>
            <ScatRoutes />
        
          </>
        } />
      </Route>
    </Routes>
  );
}

export default App;