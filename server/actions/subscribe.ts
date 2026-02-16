'use server';

import { Response } from '@/types';

export async function subscribe(email: string): Promise<Response<string>> {
  try {
    if (!email || !email.includes('@'))
      return { ok: false, message: 'Invalid email address' };

    const checkRes = await fetch(
      `https://api.convertkit.com/v3/subscribers?api_secret=${process.env.CONVERTKIT_API_SECRET}&email_address=${encodeURIComponent(email)}`,
    );
    if (checkRes.ok) {
      const data = await checkRes.json();
      if (data.total_subscribers > 0)
        return { ok: false, message: 'You are already on the waitlist!' };
    }

    const subscribeRes = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email,
        }),
      },
    );
    if (!subscribeRes.ok)
      return { ok: false, message: 'Failed to subscribe. Please try again.' };

    const { subscription } = await subscribeRes.json();
    if (subscription?.state === 'inactive')
      return { ok: false, message: 'Please confirm your email address!' };

    return { ok: true, data: 'Successfully subscribed!' };
  } catch (err) {
    console.error(err);
    return { ok: false, message: 'Failed to subscribe. Please try again.' };
  }
}
