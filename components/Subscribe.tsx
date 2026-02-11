'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { subscribe } from '@/server/actions/subscribe';
import { useRouter } from 'next/navigation';

export default function Subscribe() {
  const router = useRouter();
  const [message, setMessage] = useState<string>('');

  async function handleSubmit(formData: FormData) {
    const email = formData.get('email') as string;

    const response = await subscribe(email);
    if (!response.ok) {
      setMessage(response.message);
      setTimeout(() => setMessage(''), 5000);
      return;
    }

    router.push('/thank-you');
  }

  return (
    <div className='space-y-3'>
      <form action={handleSubmit} className='relative'>
        <input
          required
          name='email'
          type='email'
          placeholder='Enter your email address'
          className='w-full h-14 px-5 pr-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-transparent transition-all duration-300'
        />
        <SubmitButton />
      </form>
      {message && (
        <div className='flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm bg-red-500/10 border border-red-500/20 text-red-400'>
          <svg
            className='w-4 h-4 flex-shrink-0'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
            />
          </svg>
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-lg bg-orange-primary hover:bg-orange-hover text-white flex items-center justify-center transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
      aria-label='Subscribe'
    >
      {pending ? (
        <svg className='w-5 h-5 animate-spin' fill='none' viewBox='0 0 24 24'>
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      ) : (
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
          />
        </svg>
      )}
    </button>
  );
}
