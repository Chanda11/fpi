import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ActivityDetail from "./pages/ActivityDetail";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Activities from "./pages/admin/Activities";
import CreateActivity from "./pages/admin/CreateActivity";
import EditActivity from "./pages/admin/EditActivity";
import Hubs from "./pages/mil/Hubs";
import Brochure from "./pages/mil/Brochure";
import AboutMIL from "./pages/mil/AboutMIL";
import About from "./pages/about/AboutUs";
import Team from "./pages/team/Team";
import Sponsors from "./pages/sponsors/Sponsors";
import Partners from "./pages/partners/Partners";
import Advocacy from "./pages/programs/Advocacy";
import MediaLiteracy from "./pages/programs/MediaLiteracy";
import Research from "./pages/programs/Research";
import CapacityBuilding from "./pages/programs/CapacityBuilding";
import Newsletters from "./pages/knowledge/Newsletters";
import Reports from "./pages/knowledge/Reports";



function AppContent() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/activities" element={<Activities />} />
        <Route path="/admin/activities/create"element={<CreateActivity />}/>
        <Route path="/admin/activities/:id/edit"element={<EditActivity />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/programs/advocacy" element={<Advocacy />} />
        <Route path="/programs/media-literacy" element={<MediaLiteracy />} />
        <Route path="/programs/research" element={<Research />} />
        <Route path="/programs/capacity-building" element={<CapacityBuilding />} />
        <Route path="/knowledge/newsletters" element={<Newsletters />} />
        <Route path="/knowledge/reports" element={<Reports />} />
        <Route path="/mil/about" element={<AboutMIL />} />
        <Route path="/mil/brochure" element={<Brochure />} />
        <Route path="/mil/hubs" element={<Hubs />} />

      </Routes>
//redeployed to vercel, backend is now at https://fpi-zambia-backend.vercel.app
      {!isAdmin && <Footer />}
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}