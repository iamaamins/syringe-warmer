import Image from 'next/image';
import Subscribe from './Subscribe';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center overflow-hidden'
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          fill
          priority
          quality={90}
          src='/images/hero-bg.png'
          alt='Gym background'
          className='object-cover'
        />

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40' />
      </div>

      <div className='relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
          {/* Left Column - Content */}
          <div className='flex flex-col gap-6 md:gap-8'>
            {/* Badge */}
            <div>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-primary/10 border border-orange-primary/20 text-orange-primary text-sm font-medium'>
                <span className='w-2 h-2 rounded-full bg-orange-primary animate-pulse' />
                Coming Soon
              </span>
            </div>

            {/* Title */}
            <h1 className='text-4xl sm:text-5xl  font-bold tracking-tight text-white leading-[1.1]'>
              Syringe{' '}
              <span className='bg-gradient-to-r from-orange-primary to-amber-400 bg-clip-text text-transparent'>
                Warmer
              </span>
            </h1>

            {/* Subtitle */}
            <p className='text-lg text-gray-300 max-w-md leading-relaxed'>
              Warm up your gear for added comfort. Pre-warms syringes to the
              ideal temperature for a smoother, pain-free experience.
            </p>

            {/* Join Waitlist CTA + Subscribe form */}
            <div className='max-w-sm'>
              <div className='flex items-end gap-2 mb-2'>
                <span className='text-lg font-semibold bg-gradient-to-r from-orange-primary to-amber-400 bg-clip-text text-transparent'>
                  Join the Waitlist
                </span>
                <svg
                  className='w-6 h-8 text-orange-primary/70 mb-[-4px]'
                  viewBox='0 0 24 32'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M6 4c4 2 8 8 6 16' />
                  <path d='M8 18l4 4-4 4' />
                </svg>
              </div>
              <Subscribe />
              <p className='text-[11px] text-gray-600 mt-2'>
                Product visuals are conceptual renderings. Final design and
                specifications may vary.
              </p>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className='flex justify-center lg:justify-end'>
            <div className='relative'>
              {/* Glow behind image */}
              <div className='absolute inset-0 bg-orange-primary/20 blur-3xl rounded-full scale-75' />
              <Image
                src='/images/product.png'
                alt='Syringe Warmer Product'
                width={550}
                height={550}
                className='relative z-10 drop-shadow-2xl rounded-lg'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
