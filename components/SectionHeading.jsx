export default function SectionHeading({ title, kicker, centered = false }) {
  return (
    <div className={centered ? "text-center mb-12" : "mb-12"}>
      {kicker && (
        <p className="font-body font-bold uppercase tracking-[0.2em] text-accent text-sm mb-3">{kicker}</p>
      )}
      <h2
        className={
          "ribbon " +
          (centered ? "ribbon-center " : "") +
          "font-heading font-extrabold uppercase text-navy text-3xl md:text-4xl inline-block"
        }
      >
        {title}
      </h2>
    </div>
  );
}
