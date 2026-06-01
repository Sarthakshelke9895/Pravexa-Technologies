import { useState } from "react";
import FormStatus from "../components/FormStatus";

const initialState = {
  companyName: "",
  clientName: "",
  email: "",
  phone: "",
  budget: "",
  requirements: ""
};

function ProjectRequest() {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const labels = {
    companyName: "Company Name",
    clientName: "Client Name",
    email: "Email",
    phone: "Phone",
    budget: "Budget",
    requirements: "Requirements"
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));
    if (file) payload.append("projectFile", file);

    try {
      const response = await fetch("/api/project-request", { method: "POST", body: payload });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit project request.");
      setStatus({ type: "success", message: "Project request submitted. We will contact you soon." });
      setForm(initialState);
      setFile(null);
      event.target.reset();
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-hero">
      <div className="container form-page">
        <div>
          <span className="eyebrow">Project Request</span>
          <h1>Brief us on your product, platform or website.</h1>
          <p>Share requirements, budget and supporting files. We will respond with a practical scope and timeline.</p>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          {Object.keys(initialState).map((field) => (
            <label key={field} className={field === "requirements" ? "full" : ""}>
              {labels[field]}
              {field === "requirements" ? (
                <textarea
                  name={field}
                  rows="6"
                  value={form[field]}
                  onChange={(event) => setForm((current) => ({ ...current, [field]: event.target.value }))}
                  required
                />
              ) : (
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(event) => setForm((current) => ({ ...current, [field]: event.target.value }))}
                  required
                />
              )}
            </label>
          ))}
          <label className="full">
            File Upload
            <input type="file" onChange={(event) => setFile(event.target.files[0])} />
          </label>
          <FormStatus status={status} />
          <button className="btn btn-primary full" disabled={loading}>{loading ? "Submitting..." : "Submit Request"}</button>
        </form>
      </div>
    </section>
  );
}

export default ProjectRequest;
