import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

export default function NavBar() {
  return (
    <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <Container className="relative p-2 h-14">
        <Link
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          href="/"
        >
          <Image src="/logo.png" alt="Main Logo" width={100} height={70} />
        </Link>
      </Container>
    </div>
  );
}
