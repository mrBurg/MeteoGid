import { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

import './globals.css';
import styles from './index.module.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'MeteoGit',
  description: 'Weather',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <main className={styles.main}>
            <nav>
              <li key={'home'}>
                <Link
                  // className={`link ${pathname === '/' ? 'active' : ''}`}
                  href={'/'}
                >
                  Home
                </Link>
              </li>
              <li key={'about-us'}>
                <Link
                  // className={`link ${pathname === '/about-us' ? 'active' : ''}`}
                  href={'/about-us'}
                >
                  About Us
                </Link>
              </li>
              <li key={'contacts'}>
                <Link
                  // className={`link ${pathname === '/contacts' ? 'active' : ''}`}
                  href={'/contacts'}
                >
                  Contacts
                </Link>
              </li>
            </nav>
            {children}
          </main>
          <footer className={styles.footer}>Footer</footer>
        </div>
      </body>
    </html>
  );
}
