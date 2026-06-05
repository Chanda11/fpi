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
        <Route
          path="/admin/activities/create"
          element={<CreateActivity />}
        />
        <Route
          path="/admin/activities/:id/edit"
          element={<EditActivity />}
        />
      </Routes>

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