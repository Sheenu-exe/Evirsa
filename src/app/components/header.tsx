import Image from "next/image";
import Logo from "./evirsa-logo-black.png"

const Header: React.FC = () =>{
    return(
        <header className=" fixed top-0 bg-white left-0 right-0 z-50 sm:h-[10vh] h-[8vh] flex justify-center items-center">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Image className="sm:w-[10vw] w-[25vw]" src={Logo} alt="" />
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-800 hover:text-accent transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/aboutus"
              className="text-gray-800 hover:text-accent transition-colors duration-300"
            >
              Know us
            </a>
          
            <a
              href="/contact"
              className="text-gray-800 hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    )
}

export default Header