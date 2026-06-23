export const SectionWrapper = ({ children, id = '', bgType = 'canvas', className = '' }) => {
  const bgStyles = {
    canvas: 'bg-surface-canvas text-text-main',
    card: 'bg-surface-card text-text-main border-y border-surface-muted',
    brand: 'bg-brand-primary text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${bgStyles[bgType]} ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};