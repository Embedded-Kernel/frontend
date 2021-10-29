import Image from "next/image";

export function Why() {
  return (
    <section className="px-20 py-32 font-poppins flex justify-center items-center gap-20 bg-lightDark">
      <div className="hidden md:block lg:block">
        <Image src="/why.png" width={900} height={800} alt="Why section" />
      </div>
      <div>
        <h3 className="font-extrabold py-4 text-xl md:text-3xl lg:text-3xl">
          Why us
        </h3>
        <p className="py-4">
          It’s a perfect combination of modern, cheap, and powerful hardware
          together with a web application having a stunning UI and UX. It’s a
          perfect combination of modern, cheap, and powerful hardware together
          with a web application having a stunning UI and UX.
        </p>
        <a
          href="register"
          className="bg-primary  block w-56 py-4 px-3 text-secondary text-center rounded-sm"
        >
          Register school
        </a>
      </div>
    </section>
  );
}
