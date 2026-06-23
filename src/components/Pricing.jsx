import { SectionWrapper } from '../layouts/SectionWrapper';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    cadence: '/mo',
    description: 'Everything you need to get a project off the ground.',
    features: [
      'Up to 3 projects',
      'Community support',
      'Basic analytics',
      '1 GB storage',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$49',
    cadence: '/mo',
    description: 'For growing teams who need more power and polish.',
    features: [
      'Unlimited projects',
      'Priority support',
      'Advanced analytics',
      '50 GB storage',
      'Custom integrations',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    description: 'Tailored to organizations with bespoke requirements.',
    features: [
      'SSO & SAML',
      'Dedicated success manager',
      'SLA & audit logs',
      'Unlimited storage',
    ],
    cta: 'Contact sales',
    featured: false,
  },
];

const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-none"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const Pricing = () => {
  return (
    <SectionWrapper id="pricing" bgType="canvas">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Pricing that scales with you
        </h2>
        <p className="mt-4 text-base md:text-lg opacity-80">
          Pick the plan that fits today. Upgrade, downgrade, or cancel any time.
        </p>
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {tiers.map((tier) => {
          const isFeatured = tier.featured;

          const cardClasses = isFeatured
            ? 'bg-brand-primary text-white ring-2 ring-brand-primary shadow-xl md:-translate-y-2'
            : 'bg-surface-card text-text-main ring-1 ring-surface-muted';

          const ctaClasses = isFeatured
            ? 'bg-white text-brand-primary hover:bg-white/90'
            : 'bg-brand-primary text-white hover:opacity-90';

          return (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 transition ${cardClasses}`}
            >
              {isFeatured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-brand-primary text-xs font-semibold px-3 py-1 shadow">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className={`mt-2 text-sm ${isFeatured ? 'text-white/80' : 'opacity-70'}`}>
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.cadence && (
                  <span className={`text-sm ${isFeatured ? 'text-white/80' : 'opacity-70'}`}>
                    {tier.cadence}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-3 text-sm flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${ctaClasses}`}
              >
                {tier.cta}
              </a>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
