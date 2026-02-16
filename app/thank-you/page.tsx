import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className='min-h-screen bg-[#0a0a0a] flex items-center justify-center'>
      <div className='max-w-lg mx-auto px-6 text-center'>
        {/* Checkmark */}
        <div className='mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-primary'>
          <svg
            className='w-8 h-8 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2.5}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            />
          </svg>
        </div>

        <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
          Almost there, check your email
        </h1>

        <p className='text-gray-400 mb-8'>
          Thanks for joining the Syringe Warmer waitlist. Please verify your
          email address from the message we just sent. You&apos;ll be added to
          the list once your email is confirmed.
        </p>

        <Link
          href='/'
          className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-primary hover:bg-orange-hover text-white font-semibold transition-colors'
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
