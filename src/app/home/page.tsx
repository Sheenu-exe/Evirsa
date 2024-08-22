import React, { useEffect } from "react";
import Typed from "typed.js";
import lottie from "lottie-web";
import { LottiePlayer } from "lottie-web";

interface EvirsaProps {}

const Home: React.FC<EvirsaProps> = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed("#typed-text", {
      strings: ["Digital Presence", "Website Visibility", "Marketing Strategy"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // Initialize Lottie animation
    const lottieAnimation = lottie.loadAnimation({
      container: document.getElementById("lottie-animation") as Element,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/laptop.json", // Update this path to your animation JSON file path
    });

    return () => {
      // Cleanup Typed.js and Lottie
      typed.destroy();
      lottieAnimation.destroy();
    };
  }, []);

  return (
    <div className="bg-primary text-gray-800 font-['Poppins']">
      <header className="bg-primary fixed top-0 left-0 right-0 z-50 h-[10vh] flex justify-center items-center">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-100">EVIRSA</h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-100 hover:text-accent transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#expertise"
              className="text-gray-100 hover:text-accent transition-colors duration-300"
            >
              Expertise
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-accent transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-accent transition-colors duration-300"
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

      <main id="home" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-[50%] h-screen flex flex-col justify-center items-left gap-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-3">
                Elevate Your{" "}
                <span id="typed-text" className="gradient-text"></span> with
                EVIRSA
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                Expert web development and strategic digital marketing to help
                your business thrive in the online world.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="bg-primary text-accent px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors m-0 duration-300 text-center"
                >
                  Our Services
                </a>
                <a
                  href="#"
                  className="border border-primary text-primary px-6 py-3 m-0 rounded-md font-semibold hover:bg-secondary transition-colors duration-300 text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-[50%] h-screen flex justify-center items-center">
              <div id="lottie-animation" style={{ width: "auto", height: "100%" }}></div>
            </div>
          </div>
        </div>
      </main>

      <section id="expertise" className="min-h-screen bg-primary flex items-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">
            Our Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-accent mb-4">
                Web Development
              </h4>
              <p className="text-gray-100">
                Crafting responsive and user-friendly websites tailored to your
                brand.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-accent mb-4">
                Digital Marketing
              </h4>
              <p className="text-gray-100">
                Boost your online presence with our strategic marketing
                solutions.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-accent mb-4">
                SEO Optimization
              </h4>
              <p className="text-gray-100">
                Improve your search engine rankings and drive organic traffic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
