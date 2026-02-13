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
  title: 'Syringe Warmer — Built for Smarter Injections',
  description:
    'Pre-warms syringes to body temperature for a smoother, more comfortable injection experience. Universal fit, rechargeable, and portable. Designed by a healthcare professional. Join the waitlist for early access.',
  keywords: [
    'syringe warmer',
    'injection comfort',
    'warm syringes',
    'body temperature syringe',
    'universal syringe fit',
    'rechargeable syringe warmer',
    'portable syringe warmer',
    'lower viscosity injection',
    'medical device',
    'pre-warm',
    'controlled heat',
    'healthcare',
  ],
  openGraph: {
    title: 'Syringe Warmer — Built for Smarter Injections',
    description:
      'Universal fit. Body-temperature controlled. Rechargeable & portable. Pre-warms your syringes for a smoother, pain-free experience. Join the waitlist today.',
    type: 'website',
    images: ['/images/product.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syringe Warmer — Built for Smarter Injections',
    description:
      'Universal fit. Body-temperature controlled. Rechargeable & portable. Pre-warms your syringes for a smoother, pain-free experience.',
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
          src='https://www.googletagmanager.com/gtag/js?id=G-8YRVYYS0ZX'
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8YRVYYS0ZX');`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
