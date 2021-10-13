import TiltleSsc from "../components/Layouts/TitleSsc"

const LangingPage = () => {
    return (
        <div>
        <nav className="font-sm font-poppins mt-8">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        <TiltleSsc/>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-3 ">
                    <a href="" className="py-2 px-2 text-yellowColor hover:transition duration-300">About us</a>
                    <a href="" className="py-2 px-2 text-yellowColor hover:transition duration-300">Our partners</a>
                    <a href="" className="py-2 px-2 text-yellowColor hover:transition duration-300">Why us</a>
                    <a href="" className="py-2 px-2 text-yellowColor hover:transition duration-300">Contact us</a>
                    <a href="" className="py-2 px-2 text-yellowColor bg-black rounded w-20 flex items-center justify-items-center hover:transition duration-300">Login</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button">
                    <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </div>
        </div>
        <div className="hidden mobile-menu">
            <ul className="">
                <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">About us</a></li>
                <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Our partners</a></li>
                <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Why us</a></li>
                <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
                <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Login </a></li>
            </ul>
        </div>
        {/* <script>
            const btn = document.querySelector("button.mobile-menu-button");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classNameList.toggle("hidden");
            });
        </script> */}
    </nav>
    <p>Smart <span>student</span> Card</p>
    </div>
    )
}
export default LangingPage