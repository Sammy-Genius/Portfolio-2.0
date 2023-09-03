'use client';

import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const MyWorks = () => {
    
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


    const works = [
        {
        id:1,
        title: 'Portfolio 2.0',
        body: "This is the version 2.0 of my portfolio. I decided to take a minimalistic approach for the art direction of this project while being as creative as possible with the nav bar being the main focal point of all micro interactions. The inspiration for the design concept was inspired by Studio Lumio's website & the micro interactions was inspired by Apple's Dynamic Island.",
        role: 'Animations & Development',
        tools: 'Next.Js, JavaScript, TailwindCSS, GSAP',
        github:"https://github.com/Sammy-Genius/Portfolio-2.0/tree/main",
        live:"https://samuelosei.vercel.app/"
    },
        {
        id:2,
        title: 'DSGN',
        body: "DSGN is a fictional creative studio inspired by Zajno's previous website. It's literally a clone of the website's landing page but with a little tweak in the design/animations concept. I took on this project to enhance my skill in the area of creative development and web animations. It was very challenging but I made it work.",
        role: 'Animations & Development',
        tools: 'React.JS + Vite, JavaScript, TailwindCSS, GSAP, Framer Motion, React Intersection Observer',
        github:"https://github.com/Sammy-Genius/DSGN",
        live:"https://studiodsgn.netlify.app/"
    },
        {
        id:3,
        title: 'Slightly Techie Network',
        body: "With the support of other talented developers from Slightly Techie Network, I had the opportunity to be the frontend lead for this project. The creative direction of this project was to bridge the gap between creativity and minimalism.",
        role: 'Animations & Development + Art Direction',
        tools: 'Next.JS, JavaScript, TailwindCSS, GSAP, Framer Motion, React Intersection Observer, Firebase',
        live: 'COMING SOON'
    },
        {
        id:4,
        title: 'Portfolio 1.0',
        body: "This is the first version of my portfolio website. This project served as an intersection between art and code.",
        role: 'Animations & Development + Art Direction',
        tools: 'React.JS, TypeScript, SASS, Framer Motion',
        github:"https://github.com/Sammy-Genius/my-portfolio",
        live:"https://samuelosei.netlify.app/"
    },
        {
        id:5,
        title: 'An Influencer Dashboard',
        body: "This is a clone of a dashboard UI design I stumbled upon on Dribbble. I made it responsive and added a few features to make it a bit more interactive.",
        role: 'Development',
        tools: 'React.JS, SASS, Framer Motion',
        github:"https://github.com/Sammy-Genius/DashIN---Dashboard",
        live:"https://dashinn.netlify.app/"
    },
        {
        id:6,
        title: 'Studio Lumio Clone',
        body: "This is a clone of the landing page of the website that inspired the design concept and art direction for the version 2.0 of my portfolio. The original website design is from a creative studio based in Nigeria called Studio Lumio. I love the simplicity and minimalism of the website.",
        role: 'Development',
        tools: 'HTML5, CSS3, JavaScript, GSAP',
        github:"https://github.com/Sammy-Genius/studiolumio-clone",
        live:"https://studiolumio-clone.netlify.app/"
    },
]
    return ( 
        <div className="w-full h-full">
            <div className="opacity-0 reveal">
                <h1 className="uppercase text-primary-color text-5xl md:text-7xl xl:text-9xl font-black text-center mt-[100px] text-shadow-3">My Works<sup>(6)</sup></h1>
                <div className="mt-10 w-[90%] lg:w-[80%] my-0 mx-auto">
                    {works.map(work => {
                        return <div className="bottom-line py-10 w-full text-lg text-white" key={work.id}>
                            <h1 className="text-3xl lg:text-5xl text-primary-color font-black">{work.title}</h1>
                            <p className="mt-5 inline-block w-full lg:w-[60%]">{work.body}</p>
                            <div className="my-5">
                                <p><span className="text-primary-color">Role:</span> {work.role}</p>
                                <p><span className="text-primary-color">Tools:</span> {work.tools}</p>
                            </div>
                            {work.title == "Slightly Techie Network" ? <p className="text-primary-color uppercase">Coming Soon</p> : 
                            <div className="flex text-primary-color">
                                <a href={work.github} className="mr-3 underline">GitHub</a>
                                <a href={work.live} className="underline">Live Site</a>
                            </div>}
                        </div>
                    })}
                    <p className="text-2xl py-10 text-white">For more of my works see <a href="https://github.com/Sammy-Genius?tab=repositories" className="text-primary-color underline">GitHub</a> or <a href="https://twitter.com/sammyisagenius/status/1665450701152026625?s=20" className="text-primary-color underline">Experiments</a></p>
                    <p className="pt-10 pb-20 text-2xl lg:text-5xl text-white inline-block w-full lg:w-[50%] text-shadow-2">If you want to hire me or talk collaborations, send an email to <a href='mailto:mrsammadeit@gmail.com' className="text-primary-color underline text-shadow-3">mrsammadeit@gmail.com</a></p>
                </div>
                <Link  href='/' className="absolute top-[3%] right-[5%] md:text-lg text-primary-color uppercase">go home</Link>
                <Link  href='/AboutMe' className="absolute top-[3%] left-[5%] md:text-lg text-primary-color uppercase"><span className="text-white lowercase mr-2">read</span>About Me</Link>
            </div>
            <PageTransition/>
        </div>
     );
}
 
export default MyWorks;