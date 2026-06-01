import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InternshipApplication from "./pages/InternshipApplication";
import ProjectRequest from "./pages/ProjectRequest";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PolicyPage from "./pages/PolicyPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internship-application" element={<InternshipApplication />} />
          <Route path="/project-request" element={<ProjectRequest />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/terms" element={<PolicyPage type="terms" />} />
          <Route path="/privacy" element={<PolicyPage type="privacy" />} />
          <Route path="/refund" element={<PolicyPage type="refund" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
