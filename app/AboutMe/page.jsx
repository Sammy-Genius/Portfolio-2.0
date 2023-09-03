'use client';

import PageTransition from "@/components/PageTransition";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const AboutMe = () => {
    
    useLayoutEffect(() => {
       setTimeout(() => {

        const tl = gsap.timeline();

       const context = gsap.context(() => {
                tl.to('.reveal', {opacity:1, duration:1, ease:'power2.out'});
            });

            return () => {
                context.revert();
            };

       }, 2500)

    }, []);

    return ( 
        <div className="w-full h-full">
            <div className="w-full h-auto text-white opacity-0 reveal">
                <h1 className="uppercase text-primary-color text-4xl md:text-7xl xl:text-9xl font-black text-center mt-[100px] text-shadow-3">samuel osei</h1>
                <div className="w-[90%] lg:w-[50%] my-[30px] mx-auto text-lg">
                    <p className="uppercase mt-5"><span className="text-xl text-primary-color font-black">current Status:</span> Available for full/part time roles, gigs, contracts, internships and collaborations. <a href="" className="underline text-primary-color">let's talk!</a></p>
                    <p className="mt-10">I am a frontend developer based in Accra, Ghana. I'm experienced in building interactive, responsive and pixel perfect user interfaces using modern web technologies. I literally breathe life into designs. I am the guy you look for when you want to bring your ideas to life through a captivating web experience. Aside thinking of innovative ways to solve problems, I love to express my creativity on the web through the development of fun projects.</p>
                    <p className="mt-10">I currently work remotely as a frontend developer at Slightly Techie Network; a community of talented designers and developers that work on lots of projects in order to foster continuous learning and growth.</p>
                    <p className="mt-10">At Slightly Techie Network, I led a team of talented frontend developers in the development of the official website of the group. I was responsible for the creative/art direction, animations and UI development.</p>
                    <p className="mt-10">I have an affinity for the aesthetics. &#10024;</p>
                    <h2 className="text-2xl text-primary-color uppercase font-black mt-10">Interests</h2>
                    <p className="uppercase">creative development, art/creative direction, web animations/micro interactions, design, fashion, gaming, music, minimalism</p>
                    <p className="mt-10">Currently exploring the area of mobile development and design.</p>
                    <h2 className="text-2xl text-primary-color uppercase font-black mt-10">Tools</h2>
                    <p>I use any tool that is effective in getting the job done. The main tools I use currently is HTML5, CSS3, TailwindCSS, SASS, JavaScript, TypeScript, React.JS, Next.JS, GSAP, Framer Motion</p>
                    <p className="py-20 text-2xl lg:text-5xl text-shadow-2">If you want to hire me or talk collaborations, send an email to <a href='mailto:mrsammadeit@gmail.com' className="text-primary-color underline text-shadow-3">mrsammadeit@gmail.com</a></p>
                </div>
                <h1 className="transparent">About me</h1>
                <Link  href='/' className="absolute top-[3%] right-[5%] md:text-lg text-primary-color uppercase">go home</Link>
                <Link  href='/MyWorks' className="absolute top-[3%] left-[5%] md:text-lg text-primary-color uppercase"><span className="text-white lowercase mr-2">see</span>My Works</Link>
            </div>
            <PageTransition/>
        </div>
     );
}
 
export default AboutMe;