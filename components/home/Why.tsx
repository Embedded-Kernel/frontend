import Image from 'next/image';

export function Why() {
  return (
    <section className="px-20 py-20 font-poppins flex justify-center items-center space-x-20">
      <div>
        <Image src="/why.png" width={900} height={800} alt="Why section" />
      </div>
      <div>
        <h3 className="font-extrabold py-4 text-xl md:text-3xl lg:text-3xl">Why us</h3>
        <p>
          It’s a perfect combination of modern, cheap, and powerful hardware together with a web application having a
          stunning UI and UX. It’s a perfect combination of modern, cheap, and powerful hardware together with a web
          application having a stunning UI and UX.
        </p>
      </div>
    </section>
  );
}
