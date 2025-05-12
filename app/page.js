"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";

export default function Home() {
  //change the theme of the whole body to dark mode and light mode using a button
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Effect to apply the theme class based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  const fleftElemRef = useRef(null);
  const sectionsRef = useRef([]);
  const imagesRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Dynamically import Shery.js (which isn't SSR-friendly)
    const loadShery = async () => {
      // Load Shery.js CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/sheryjs/dist/Shery.css";
      document.head.appendChild(link);

      // Import Shery.js
      const Shery = (await import("sheryjs")).default;

      // Initialize Shery.js effects
      Shery.mouseFollower();
      Shery.makeMagnet(".magnet");
      Shery.hoverWithMediaCircle(".hvr", { videos: ["/assets/hneg.mp4"] });

      // Image effect with sections
      const sections = document.querySelectorAll(".fleftelem");
      if (imagesRef.current && sections.length > 0) {
        Shery.imageEffect(".images", {
          style: 2, // Here you need to replace 'a' with a number
          config: { onMouse: { value: 1 } },
          zindex: { value: "999999" },
          range: [999999], // This array needs a second value
        });
      }
    };

    // Call the async function
    loadShery();

    // GSAP animations
    if (fleftElemRef.current) {
      gsap.to(".fleftelem", {
        scrollTrigger: {
          trigger: "#fimages",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          endTrigger: ".last",
          scrub: 1,
        },
        y: "-300%",
        ease: "power1.inOut",
      });
    }

    // Set magnet element size
    const magnetElements = document.querySelectorAll(".magnet");
    magnetElements.forEach((element) => {
      if (element.tagName === "IMG") {
        element.style.width = "100px";
        element.style.height = "auto";
      }
    });
  }, []);

  // Function to add sections to the ref array
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="w-full">
      {/* Home Section */}
      <section className="w-full min-h-screen bg-mercury">
        {/* Navigation */}
        <nav className="flex items-center justify-between w-full p-[30px_50px]">
          <Image
            src="/assets/logo1.png"
            alt="Logo"
            width={100}
            height={50}
            className="magnet w-[100px]"
          />
          <div className="flex items-center w-full px-4">
            {/* Left: Logo */}
            <div className="mr-auto"></div>

            {/* Add this theme toggle button */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 mr-4 rounded"
              style={{
                backgroundColor: isDarkMode ? "#f5f5f5" : "#333",
                color: isDarkMode ? "#333" : "#f5f5f5",
                cursor: "pointer",
              }}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <div className="flex items-center gap-10">
              <Link href="" className="font-normal no-underline">
                My Reel
              </Link>
              <Link href="" className="font-normal  no-underline">
                Menu
              </Link>
              <i className="ri-menu-line text-2xl magnet"></i>
            </div>
          </div>
        </nav>

        {/* Home Main Content */}
        <div className="w-full p-[15vw_15vw]">
          <h1 className="font-normal text-[1.5vw]">Hi, I'm Anupam.</h1>
          <div className="flex gap-10">
            <h1 className="hvr text-[4.5vw] font-extrabold leading-none tracking-[-0.5px] text-transparent [-webkit-text-stroke:1px_#000] hover:text-black">
              Designer,
            </h1>
            <h1 className="hvr text-[4.5vw] font-extrabold leading-none tracking-[-0.5px] text-transparent [-webkit-text-stroke:1px_#000] hover:text-black">
              Copywriter
            </h1>
            <h1 className="hvr text-[4.5vw] font-extrabold leading-none tracking-[-0.5px] text-transparent [-webkit-text-stroke:1px_#000] hover:text-black">
              & Marketer
            </h1>
          </div>
        </div>

        {/* Home Last Section */}
        <div className="w-full p-[1vw_8vw]">
          <h2 className="nsv text-[2vw]">We turn it into reality.</h2>
          <p className="text-[1.5vw] font-normal selection:text-white selection:bg-black">
            I love new technology and trends. I help businesses stand out with
            smart, stylish solutions that work. Let’s make your brand shine!
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="p-[3vw_15vw] bg-black">
        <div className="fheading">
          <h1 className="text-[4vw] font-normal text-white">Featured</h1>
          <h1 className="text-[4vw] font-normal text-black [-webkit-text-stroke:1px_#ffffff]">
            projects
          </h1>
        </div>

        <div
          id="fimages"
          className="flex justify-between h-screen mt-[5vw] w-full"
        >
          <div
            id="fleft"
            ref={fleftElemRef}
            className="w-[45%] h-full overflow-hidden"
          >
            <div
              className="fleftelem flex flex-col justify-center w-full h-full text-white"
              ref={addToSectionsRef}
            >
              <h3 className="text-[1.5vw] font-normal">
                Personal Portfolio website
              </h3>
              <h1 className="text-[2.5vw] font-normal capitalize my-[1.5vw]">
                This is my personal portfolio website that I created. This is
                inspired by cuberto.
              </h1>
              <h4 className="opacity-40">
                Here I have attached shown my work and I will be updating
                according to the work that I will be doing in the future.
              </h4>
            </div>
            <div
              className="fleftelem flex flex-col justify-center w-full h-full text-white"
              ref={addToSectionsRef}
            >
              <h3 className="text-[1.5vw] font-normal">Lorem2</h3>
              <h1 className="text-[2.5vw] font-normal capitalize my-[1.5vw]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h4 className="opacity-40">Lorem, ipsum dolor.</h4>
            </div>
            <div
              className="fleftelem flex flex-col justify-center w-full h-full text-white"
              ref={addToSectionsRef}
            >
              <h3 className="text-[1.5vw] font-normal">Lorem3</h3>
              <h1 className="text-[2.5vw] font-normal capitalize my-[1.5vw]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h4 className="opacity-40">Lorem, ipsum dolor.</h4>
            </div>
            <div
              className="fleftelem last flex flex-col justify-center w-full h-full text-white"
              ref={addToSectionsRef}
            >
              <h3 className="text-[1.5vw] font-normal">Lorem4</h3>
              <h1 className="text-[2.5vw] font-normal capitalize my-[1.5vw]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h4 className="opacity-40">Lorem, ipsum dolor.</h4>
            </div>
          </div>

          <div
            id="fright"
            className="flex items-center justify-end w-[45%] h-full"
          >
            <div className="images w-full h-[90%]" ref={imagesRef}>
              <video className="vid" src="/assets/h1.mp4"></video>
              <video src="/assets/h2.mp4"></video>
              <video src="/assets/h3.mp4"></video>
              <video src="/assets/h4.mp4"></video>
            </div>
          </div>
        </div>

        <div className="btndiv magnet flex items-center justify-center">
          <button className="py-[1.3vw] px-[2.5vw] rounded-full bg-white border-2 border-[#d4d4d4] text-[1vw] font-medium mt-[2vw]">
            View all projects
          </button>
        </div>
      </section>

      {/* Development Section */}
      <section className="w-full p-[15vw_15vw_5vw_15vw]">
        <h1 className="text-[4vw] font-normal w-[60%]">
          Development and design resources
        </h1>
        <p className="w-[60%] text-[1.5vw] mt-[2vw] font-normal selection:text-white selection:bg-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          excepturi, nemo eaque molestias dolor incidunt amet laudantium sequi
          reiciendis minus!
        </p>
      </section>

      {/* Slides Section */}
      <section className="p-[5vw_5vw] flex justify-between">
        <div className="slide magnet w-[30%]">
          <div className="w-full h-[300px] overflow-hidden rounded-[10px] bg-white">
            <Image
              src="https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png"
              alt="Design Course"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-fit my-5 py-[10px] px-[22px] bg-[#f3f3f3] rounded-full">
            Design Course
          </div>
          <h1 className="text-[1.7vw] font-medium">
            How to Make Epic Website Frontend development
          </h1>
        </div>

        <div className="slide magnet w-[30%]">
          <div className="w-full h-[300px] overflow-hidden rounded-[10px] bg-white">
            <Image
              src="https://cdn.cuberto.com/cb/upload/885fbbc555395f745746b23b73f539f5.png"
              alt="UI/UX Course"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-fit my-5 py-[10px] px-[22px] bg-[#f3f3f3] rounded-full">
            UI/UX Course
          </div>
          <h1 className="text-[1.7vw] font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>

        <div className="slide magnet w-[30%]">
          <div className="w-full h-[300px] overflow-hidden rounded-[10px] bg-white">
            <Image
              src="https://cdn.cuberto.com/cb/upload/99d9ee549abf01940d4b1cfa04734b7d.jpg"
              alt="React Course"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-fit my-5 py-[10px] px-[22px] bg-[#f3f3f3] rounded-full">
            React Course
          </div>
          <h1 className="text-[1.7vw] font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </section>

      <div className="btndiv magnet flex items-center justify-center">
        <button className="py-[1.3vw] px-[2.5vw] rounded-full bg-white border-2 border-[#d4d4d4] text-[1vw] font-medium mt-[2vw]">
          View all resources
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full p-[5vw_15vw]"></footer>
    </main>
  );
}
