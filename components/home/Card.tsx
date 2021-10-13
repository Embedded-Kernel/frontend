import Image from 'next/image';

export function Card() {
  return (
    <section className="w-full h-1/3 py-8 bg-lightDark flex justify-center items-center">
      <Image src="/cards.png" alt="cards goes here" width={1000} height={400} />
    </section>
  );
}
