import Image from 'next/image';
import Link from "next/link"

export function Hero() {
  return (
    <main className="flex justify-center items-center flex-col" style={{ height: '90vh' }}>
      <Image src="/hero.png" alt="hero-image" width={1100} height={400} />
      <div className="md:-mt-40 lg:-mt-40">
        <p className="py-8">Get student’s information digitalized</p>
        <Link href="/register">
          <a className="bg-primary cursor-pointer md:px-14 px-14 py-3 lg:px-14 lg:py-5 text-secondary md:py-4 rounded-sm">Register your school</a>
        </Link>
        </div>
    </main>
  );
}
