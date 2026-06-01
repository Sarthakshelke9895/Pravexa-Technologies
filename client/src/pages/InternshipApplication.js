import { useState } from "react";
import FormStatus from "../components/FormStatus";

const initialState = {
  name: "",
  email: "",
  phone: "",
  college: "",
  skills: "",
  linkedIn: ""
};

function InternshipApplication() {
  const [form, setForm] = useState(initialState);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));
    if (resume) payload.append("resume", resume);

    try {
      const response = await fetch("/api/internship", { method: "POST", body: payload });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit application.");
      setStatus({ type: "success", message: "Application submitted successfully." });
      setForm(initialState);
      setResume(null);
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
          <span className="eyebrow">Internship Application</span>
          <h1>Start building real-world software skills.</h1>
          <p>Submit your details and resume. Our team will review your fit and contact you with the next steps.</p>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          {Object.keys(initialState).map((field) => (
            <label key={field}>
              {field === "linkedIn" ? "LinkedIn" : field.charAt(0).toUpperCase() + field.slice(1)}
              <input
                name={field}
                value={form[field]}
                onChange={(event) => setForm((current) => ({ ...current, [field]: event.target.value }))}
                required={field !== "linkedIn"}
              />
            </label>
          ))}
          <label className="full">
            Resume Upload
            <input type="file" accept=".pdf,.doc,.docx" onChange={(event) => setResume(event.target.files[0])} required />
          </label>
          <FormStatus status={status} />
          <button className="btn btn-primary full" disabled={loading}>{loading ? "Submitting..." : "Apply Now"}</button>
        </form>
      </div>
    </section>
  );
}

export default InternshipApplication;
