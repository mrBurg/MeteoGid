import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
// import localFont from 'next/font/local';

import './../styles/globals.scss';
import styles from './index.module.scss';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { gt } from '@/utils';

/* const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
}); */

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: gt.gettext('Site title'),
  description: gt.gettext('Site description'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        <div className={styles.page}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
