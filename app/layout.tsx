import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Syringe Warmer - Warm Up Your Gear for Added Comfort',
  description:
    'The Syringe Warmer pre-warms your syringes to body temperature for a smoother, more comfortable experience. Join the waitlist for early access.',
  keywords: [
    'syringe warmer',
    'injection comfort',
    'warm syringes',
    'medical device',
    'pre-warm',
  ],
  openGraph: {
    title: 'Syringe Warmer - Warm Up Your Gear for Added Comfort',
    description:
      'Pre-warm your syringes to body temperature for a smoother, more comfortable experience. Join the waitlist today.',
    type: 'website',
    images: ['/images/product.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syringe Warmer - Warm Up Your Gear for Added Comfort',
    description:
      'Pre-warm your syringes to body temperature for a smoother, more comfortable experience.',
    images: ['/images/product.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <Script
          async
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-V5R9CD5WV9'
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V5R9CD5WV9');`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
