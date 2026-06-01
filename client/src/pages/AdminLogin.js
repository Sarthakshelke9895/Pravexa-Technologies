import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormStatus from "../components/FormStatus";

function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed.");
      localStorage.setItem("pravexaAdminToken", data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-hero">
      <div className="container auth-page">
        <div>
          <span className="eyebrow">Admin</span>
          <h1>Pravexa command center.</h1>
          <p>Sign in to review leads, internship applications and project requests.</p>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          <label>Email
            <input
              type="email"
              value={credentials.email}
              onChange={(event) => setCredentials((current) => ({ ...current, email: event.target.value }))}
              required
            />
          </label>
          <label>Password
            <input
              type="password"
              value={credentials.password}
              onChange={(event) => setCredentials((current) => ({ ...current, password: event.target.value }))}
              required
            />
          </label>
          <FormStatus status={status} />
          <button className="btn btn-primary full" disabled={loading}>{loading ? "Signing in..." : "Login"}</button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
