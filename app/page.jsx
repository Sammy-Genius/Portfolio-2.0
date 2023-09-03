'use client';

import { dynamicAnimation, menuAnimation, shadow, creditsAnimation, contactAnimation } from "@/animations";
import { useLayoutEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HersoSection";
import MenuForSmallScreens from "@/components/MenuForSmallScreens";
import Credits from "@/components/Credits";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { gsap } from "gsap";

export default function Home() {

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      dynamicAnimation();
      menuAnimation();
      shadow();
      creditsAnimation();
      contactAnimation();
    });

    return () => {
      context.revert();
  }

  }, [])

  return (
    <main className="w-screen h-screen overflow-x-hidden">

      {/* Navbar */}
      <NavBar/>

      {/* Hero Section  */}
      <HeroSection/>

      {/* Menu for small screens*/}
      <MenuForSmallScreens/>

      {/* Credits pop-up */}
      <Credits/>

      {/* footer */}
      <Footer/>

      {/* Pop-up for Contacts */}
      <Contact/>

      {/* Preload overlay screen */}
      <div className="w-full h-full absolute top-0 left-0 bg-secondary-color overlay z-[50]">
        <div className="absolute top-[63%] left-[50%] tranlate-y-[-50%] translate-x-[-50%] text-shadow-2">
          <p className="text-white text-lg">click to access portfolio</p>
          <div className="w-[230px] h-[30px] absolute top-0 left-[-2%] bg-secondary-color mask"></div>
        </div>
      </div>

      {/* Round credits button for Desktop */}
      <div className="w-[130px] h-[130px] rounded-full hidden lg:flex items-center justify-center text-white rotate-[-20deg] uppercase absolute bottom-[20%] left-[10%] round-box credits-btn">credits</div>

      {/* Round let's talk button for Desktop */}
      <div className="w-[130px] h-[130px] rounded-full hidden lg:flex items-center justify-center text-white rotate-[-20deg] uppercase absolute bottom-[20%] right-[10%] round-box"><a href="mailto:mrsammadeit@gmail.com">let's talk</a></div>

    </main>
  )
}
