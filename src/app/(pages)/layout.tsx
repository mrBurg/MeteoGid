import { ReactNode } from 'react';
import type { Metadata } from 'next';
// import localFont from 'next/font/local';

import './../../styles/globals.scss';
import styles from './index.module.scss';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/* const geistSans = localFont({
  src: './../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
}); */

export const metadata: Metadata = {
  title: 'MeteoGit',
  description: 'Weather',
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
          <main className={styles.main}>
            <Header />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
