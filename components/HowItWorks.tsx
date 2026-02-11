import {
  LuRuler,
  LuThermometer,
  LuBatteryCharging,
  LuDroplets,
} from 'react-icons/lu';

const steps = [
  {
    icon: LuRuler,
    title: 'Universal Fit',
    descriptions: [
      'Precision multi-groove channels support a wide range of syringe sizes.',
      'Small barrel. Large barrel.',
      'One device handles it.',
      'Place it in. Close it. Done.',
    ],
  },
  {
    icon: LuThermometer,
    title: 'Body-Temperature Controlled',
    descriptions: [
      'Designed to warm near natural body temperature — not above it.',
      'Integrated temperature limiting prevents overheating and protects your gear.',
      'No hot water. No microwaves. No improvising.',
      'Just controlled, repeatable heat.',
    ],
  },
  {
    icon: LuBatteryCharging,
    title: 'Rechargeable & Portable',
    descriptions: [
      'Integrated battery power.',
      'Use it anywhere — no outlet required.',
      'Consistent warmth without relying on external heat sources.',
    ],
  },
  {
    icon: LuDroplets,
    title: 'Lower Viscosity. Smoother Process',
    descriptions: [
      'Gentle warming reduces oil viscosity, allowing smoother flow and better control during injection.',
      'You know the routine. Improve the process.',
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className='relative border-y border-gray-500/[0.06] bg-gray-500/[0.03] px-4 py-10 md:py-14'>
      <div className='m-auto max-w-5xl'>
        {/* Section header */}
        <div className='mb-12 text-center'>
          <div className='border-orange-primary/20 bg-orange-primary/5 text-orange-primary mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-bold tracking-wide uppercase'>
            How It Works
          </div>
          <h2 className='text-3xl font-extrabold tracking-tight md:text-5xl'>
            Built for Smarter Injections
          </h2>
          <p className='m-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-70'>
            Real engineering. Controlled heat. Practical performance.
          </p>
        </div>

        {/* Steps grid */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='group hover:border-orange-primary/20 relative rounded-2xl border border-gray-200/10 bg-[#111] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5'
            >
              {/* Step number */}
              <div className='bg-orange-primary/10 text-orange-primary absolute -top-3 right-4 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold'>
                {index + 1}
              </div>

              <div className='from-orange-primary/15 to-orange-primary/5 text-orange-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110'>
                <step.icon size={24} />
              </div>

              <h3 className='mb-2 font-semibold'>{step.title}</h3>
              <ul className='text-sm leading-relaxed opacity-65'>
                {step.descriptions.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className='text-center text-lg font-semibold opacity-65 mt-10'>
        Designed by a healthcare professional — focused on safety, control, and
        real-world usability.
      </p>
    </section>
  );
}
