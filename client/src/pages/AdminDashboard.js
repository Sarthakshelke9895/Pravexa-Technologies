import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const resources = [
  { key: "contacts", label: "Contact Submissions", endpoint: "/api/admin/contacts" },
  { key: "internships", label: "Internship Applications", endpoint: "/api/admin/internships" },
  { key: "projects", label: "Project Requests", endpoint: "/api/admin/project-requests" }
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState(resources[0]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("pravexaAdminToken");
        const response = await fetch(active.endpoint, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Unable to load records.");
        setRecords(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [active]);

  const logout = () => {
    localStorage.removeItem("pravexaAdminToken");
    navigate("/admin");
  };

  return (
    <section className="admin-section">
      <div className="container">
        <div className="admin-header">
          <div>
            <span className="eyebrow">Dashboard</span>
            <h1>Admin submissions</h1>
          </div>
          <button className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
        <div className="admin-tabs">
          {resources.map((resource) => (
            <button
              key={resource.key}
              className={active.key === resource.key ? "active" : ""}
              onClick={() => setActive(resource)}
            >
              {resource.label}
            </button>
          ))}
        </div>
        {loading && <div className="empty-state">Loading records...</div>}
        {error && <div className="form-status error">{error}</div>}
        {!loading && !error && (
          <div className="admin-table-wrap">
            {records.length === 0 ? (
              <div className="empty-state">No submissions yet.</div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Details</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={record._id}>
                      <td>{record.name || record.clientName || record.companyName}</td>
                      <td>{record.email}</td>
                      <td>{record.phone}</td>
                      <td>{record.service || record.college || record.budget || "View record"}</td>
                      <td>{new Date(record.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminDashboard;
