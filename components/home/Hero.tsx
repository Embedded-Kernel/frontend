import Image from 'next/image';

export function Hero() {
  return (
    <main className="flex justify-center items-center" style={{ height: '90vh' }}>
      <Image src="/hero.png" alt="hero-image" width={1100} height={400} />
    </main>
  );
}
