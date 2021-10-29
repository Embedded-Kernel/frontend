import Image from 'next/image';

export function Aboutus() {
  return (
    <section className="bg-lightDark flex justify-center space-x-20 py-20 md:px-36 lg:px-36 px-4 items-center font-poppins flex-col md:flex-row lg:flex-row">
      <div>
        <Image src="/embeded.png" width={700} height={400} alt="about us component" />
      </div>
      <div className="w-4/5 ">
        <h1 className="y-4 font-extrabold text-2xl">About us</h1>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
    </section>
  );
}
