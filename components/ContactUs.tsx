export default function ContactUs() {
  return (
    <section id='contact' className='relative px-4 py-16 sm:py-24'>
      <div className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(245,132,31,0.14),transparent_50%)]' />

      <div className='mx-auto max-w-5xl rounded-3xl border border-orange-primary/20 bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] p-8 shadow-[0_20px_60px_-30px_rgba(245,132,31,0.45)] sm:p-10'>
        <div className='grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center'>
          <div>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-orange-primary/25 bg-orange-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-primary'>
              Contact
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Let&apos;s talk
            </h2>
            <p className='mt-3 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base'>
              Have product questions, partnership ideas, or early-interest
              inquiries? Reach out directly and we&apos;ll reply as soon as
              possible.
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6'>
            <a
              href='mailto:remi@gearwarmer.com?subject=Syringe%20Warmer%20Inquiry'
              className='inline-flex w-full items-center justify-center rounded-xl bg-orange-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-hover hover:shadow-lg hover:shadow-orange-primary/30'
            >
              Email Our Team
            </a>
            <p className='mt-3 text-center text-xs text-gray-400'>
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
