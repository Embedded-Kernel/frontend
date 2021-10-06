import Image from 'next/image';

export function Contactus() {
  return (
    <section className="bg-lightDark font-poppins py-12">
      <h2 className="text-center py-4 font-bold font-poppins text-4xl py-8">Contact us!</h2>
      <section className="flex justify-center space-x-20 items-center">
        <div>
          <Image src="/contact.png" width={400} height={200} alt="images goes here" />
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="sname" className="text-secondary font-bold">
                School name
              </label>
              <input
                id="sname"
                type="text"
                placeholder="Enter the school name"
                className="bg-transparent border border-gray-400 focus:border-gray-400 px-2 py-3 rounded-md"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="eaddr" className="text-secondary font-bold">
                Email address
              </label>
              <input
                type="text"
                name="email_address"
                id="eaddr"
                placeholder="Enter email address"
                className="bg-transparent border border-gray-400 focus:border-gray-400 px-2 py-3 rounded-md"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="msg" className="text-secondary font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="msg"
                cols={30}
                rows={5}
                className="bg-transparent border border-gray-400 focus:border-gray-400 px-2 py-3 rounded-md"
              ></textarea>
            </div>

            <input type="submit" value="Contact Us" className="w-full bg-primary text-white px-4 py-2 rounded-md" />
          </form>
        </div>
      </section>
    </section>
  );
}