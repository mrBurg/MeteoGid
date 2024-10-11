import Link from 'next/link';
import LogoImage from './logo.svg';

export function Logo() {
  return (
    <Link href={'/'}>
      <LogoImage />
    </Link>
  );
}
