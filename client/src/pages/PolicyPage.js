const content = {
  terms: {
    title: "Terms & Conditions",
    text: "Pravexa Technologies provides software services, internships and consulting based on mutually agreed scope, timeline and payment terms. Clients are responsible for providing accurate requirements, assets and approvals on time."
  },
  privacy: {
    title: "Privacy Policy",
    text: "We collect form submissions only to respond to inquiries, process internship applications and manage project requests. We do not sell personal information and we protect stored data using reasonable technical safeguards."
  },
  refund: {
    title: "Refund Policy",
    text: "Refunds depend on project stage, delivered work and agreed milestones. Once design, development or consulting work has begun, completed effort may be deducted before any approved refund."
  }
};

function PolicyPage({ type }) {
  const page = content[type] || content.terms;

  return (
    <section className="page-hero">
      <div className="container narrow policy-card">
        <span className="eyebrow">Policy</span>
        <h1>{page.title}</h1>
        <p>{page.text}</p>
        <p>
          For questions about this policy, contact hello@pravexatechnologies.com.
        </p>
      </div>
    </section>
  );
}

export default PolicyPage;
