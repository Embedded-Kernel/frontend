import Image from "next/image";

export function Partners() {
  return (
    <section className="h-1/3 bg-lightDark text-center py-12 font-poppins">
      <h1 className="text-xl md:text-6xl lg:text-6xl font-extrabold py-4">
        Partners
      </h1>

      <Image src="/patners.png" width={2000} height={400} alt="partners" />
    </section>
  );
}
