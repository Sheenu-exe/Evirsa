"use client"
import React, { useEffect } from "react";
import Typed from "typed.js";
import Header from "./components/header";
import Animation from "./components/laptop.json";
import Lottie from "lottie-react";
import Coding from "./components/coding.json"
import Marketng from "./components/marketing.json"
import seo from "./components/seo.json"
import appdev from "./components/appdev.json"
import gglads from "./components/gglads.json"
import smo from "./components/smo.json"

interface EvirsaProps {}

const Home: React.FC<EvirsaProps> = () => {
  useEffect(() => {
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
  
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="bg-new text-gray-800 font-['Poppins']">
        <main id="home" className="min-h-screen flex items-center pt-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="sm:w-[50%] w-full sm:h-screen h-[60vh] flex flex-col justify-center items-left gap-y-3">
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
                    className="bg-primary text-accent px-6 py-3 rounded-md font-semibold border-secondary border hover:bg-gray-100 transition-colors m-0 duration-300 text-center">
                    Our Services
                  </a>
                  <a
                    href="#"
                    className="bg-primary text-accent px-6 py-3 rounded-md font-semibold border-secondary border  hover:bg-gray-100 transition-colors m-0 duration-300 text-center">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="sm:w-[50%] w-full sm:h-screen h-[40vh] flex justify-center items-center">
                <div id="lottie-animation">
                  <Lottie animationData={Animation} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <section id="expertise" className="min-h-screen flex items-center">
          <div className="container mx-auto pb-10 px-6">
            <h3 className="text-3xl font-bold text-center text-accent mb-12">
              Our Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-zinc-700/50 p-6 h-[50vh] rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Web Development
                </h4>
                <p className="text-gray-100">
                  Crafting responsive and user-friendly websites tailored to your
                  brand.
                </p>
                <Lottie animationData={Coding} className="h-[70%]" />
              </div>
              <div className="bg-zinc-700/50 p-6 h-[50vh] rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Digital Marketing
                </h4>
                <p className="text-gray-100">
                  Boost your online presence with our strategic marketing
                  solutions.
                </p>
                <Lottie animationData={Marketng} className="h-[70%]" />
              </div>
              <div className="bg-zinc-700/50 p-6 h-[50vh] rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  SEO Optimization
                </h4>
                <p className="text-gray-100">
                  Improve your search engine rankings and drive organic traffic.
                </p>
                <Lottie animationData={seo} className="h-[70%]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-zinc-700/50 p-6 h-[50vh] rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  App Development
                </h4>
                <p className="text-gray-100">
                Developing innovative mobile applications is our forte.
                </p>
                <Lottie animationData={appdev} className="h-[70%]" />
              </div>
              <div className="bg-zinc-700/50 p-6 h-[50vh] rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-accent mb-4">
                Google Ads / PPC
                </h4>
                <p className="text-gray-100">
                Maximize your ROI with our Google Ads and PPC campaigns.
                </p>
                <Lottie animationData={gglads} className="h-[70%]" />
              </div>
              <div className="bg-zinc-700/50 p-6 h-[50vh] rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-accent mb-4">
                SMO Marketing
                </h4>
                <p className="text-gray-100">
                Enhance your social media presence with our SMO strategies.
                </p>
                <Lottie animationData={smo} className="h-[70%]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;