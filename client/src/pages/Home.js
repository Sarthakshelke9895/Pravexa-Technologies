import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend
} from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import FormStatus from "../components/FormStatus";
import {
  dashboardMetrics,
  faqs,
  features,
  internshipBenefits,
  pricingPlans,
  processSteps,
  projects,
  services,
  stats,
  testimonials
} from "../data/siteData";

const initialContact = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: ""
};

function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  const [form, setForm] = useState(initialContact);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit message.");
      setStatus({ type: "success", message: "Thanks. Our team will contact you shortly." });
      setForm(initialContact);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="mesh mesh-one" />
        <div className="mesh mesh-two" />
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="eyebrow">Premium MERN Software Agency</span>
            <h1>Building Digital Products That Drive Results</h1>
            <p>
              Custom websites, mobile applications, internships and software solutions.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/project-request">
                Start a Project <FiArrowRight />
              </Link>
              <Link className="btn btn-secondary" to="/internship-application">
                Apply for Internship
              </Link>
            </div>
          </div>
          <div className="dashboard-card fade-up" aria-label="Animated product dashboard illustration">
            <div className="dashboard-top">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-hero">
              <div>
                <small>Delivery Health</small>
                <strong>98.7%</strong>
              </div>
              <div className="orbit" />
            </div>
            <div className="dashboard-bars">
              <span style={{ width: "86%" }} />
              <span style={{ width: "64%" }} />
              <span style={{ width: "74%" }} />
            </div>
            <div className="metric-grid">
              {dashboardMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="metric-card">
                    <Icon />
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="trust section-pad">
        <div className="container trust-grid">
          {stats.map((item) => (
            <div className="stat-card fade-up" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" id="services">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Everything needed to design, build and launch."
            text="Pravexa brings strategy, engineering and practical training under one focused delivery team."
          />
          <div className="cards-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card fade-up" key={service.title}>
                  <Icon />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">Learn More <FiArrowRight /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad dark-section" id="about">
        <div className="container split">
          <div className="fade-up">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Senior product thinking with student-friendly clarity.</h2>
            <p>
              We build with clean architecture, polished interfaces and practical handover.
              Every engagement is designed to move quickly without sacrificing quality.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-pill fade-up" key={feature}>
                <FiCheck /> {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeader
            eyebrow="Process"
            title="A calm, transparent path from idea to launch."
            text="Each phase has a clear outcome, so you always know what is happening and why."
          />
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-step fade-up" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad portfolio" id="portfolio">
        <div className="container">
          <SectionHeader
            eyebrow="Portfolio"
            title="Sample work across business, education and SaaS."
            text="Representative builds showing the kind of polished outcomes Pravexa delivers."
          />
          <div className="portfolio-grid">
            {projects.map((project) => (
              <article className="project-card fade-up" key={project.title}>
                <div className="project-image" style={{ background: project.image }} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <a className="btn btn-small" href="#contact">Live Demo</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad internship-band" id="internship">
        <div className="container split">
          <div className="fade-up">
            <span className="eyebrow">Internship Program</span>
            <h2>Learn by shipping real digital products.</h2>
            <p>
              Our internship program blends guided learning with real execution:
              product thinking, clean code, collaboration and confident presentation.
            </p>
            <Link className="btn btn-primary" to="/internship-application">Apply Now</Link>
          </div>
          <div className="benefit-grid">
            {internshipBenefits.map((benefit) => (
              <div className="benefit-card fade-up" key={benefit}>
                <FiCheck /> {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by founders, businesses and students."
          />
          <div className="testimonial-card fade-up">
            <p>“{testimonials[testimonial].quote}”</p>
            <h3>{testimonials[testimonial].name}</h3>
            <span>{testimonials[testimonial].role}</span>
            <div className="testimonial-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  className={testimonial === index ? "active" : ""}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pricing">
        <div className="container">
          <SectionHeader
            eyebrow="Pricing"
            title="Packages that match your stage."
            text="Start lean, build professionally, or partner deeply for advanced product work."
          />
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article className={plan.featured ? "price-card featured fade-up" : "price-card fade-up"} key={plan.name}>
                {plan.featured && <span className="plan-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.text}</p>
                {plan.features.map((feature) => <span key={feature}><FiCheck /> {feature}</span>)}
                <Link className="btn btn-secondary" to="/project-request">Choose Plan</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container narrow">
          <SectionHeader eyebrow="FAQ" title="Answers before we begin." />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.question}>
                <button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                  {faq.question}
                  <span>{activeFaq === index ? "-" : "+"}</span>
                </button>
                {activeFaq === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-info fade-up">
            <span className="eyebrow">Contact</span>
            <h2>Tell us what you want to build.</h2>
            <p>Share your goals and our team will help shape the next practical step.</p>
            <div><FiMail /> hello@pravexatechnologies.com</div>
            <div><FiPhone /> +91 98765 43210</div>
            <div><FiMapPin /> India, serving global clients</div>
          </div>
          <form className="form-card fade-up" onSubmit={handleSubmit}>
            <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
            <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
            <label>Phone<input name="phone" value={form.phone} onChange={handleChange} required /></label>
            <label>Service
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select service</option>
                {services.map((service) => <option key={service.title}>{service.title}</option>)}
              </select>
            </label>
            <label>Budget<input name="budget" value={form.budget} onChange={handleChange} placeholder="Example: ₹50,000" /></label>
            <label className="full">Message<textarea name="message" value={form.message} onChange={handleChange} rows="5" required /></label>
            <FormStatus status={status} />
            <button className="btn btn-primary full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"} <FiSend />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
