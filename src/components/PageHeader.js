export default function PageHeader({ label, title, children }) {
  return (
    <div className="page-hero">
      <div className="container py-12 md:py-16">
        <span className="section-label">{label}</span>
        <h1 className="section-heading max-w-4xl">{title}</h1>
        {children && <p className="section-copy">{children}</p>}
      </div>
    </div>
  );
}
