const Credits = () => {
    return ( 
        <>
            <div className="clip-circle-credits overflow-y-scroll">
                <span className="text-white absolute top-[3%] right-[5%] text-4xl cursor-pointer close-credits">&times;</span>
                <div className="w-[95%] md:w-[80%] h-auto text-white text-lg flex flex-col mt-[80px] translate-x-0 credits-container px-10">
                    <h1 className="text-4xl md:text-7xl xl:text-9xl text-primary-color font-black uppercase text-shadow-3">credits</h1>
                    <div className="mt-[60px]">
                        <div className="flex flex-col">
                            <h2 className="uppercase text-2xl md:text-3xl font-black text-primary-color mb-2">design concept & <br /> art direction</h2>
                            <p className="inline-block w-full lg:w-[50%]">This design concept was inspired by <a href="">Studio Lumio</a>. I always admired the design concept and art direction for their website. With the blessings of the lead designer at Studio Lumio, I got to use this design concept for my portfolio.</p>
                            <p className="inline-block w-[80%] lg:w-[50%] mt-3">Also, the micro interactions and concept for the nav bar was inspired by Apple's Dynamic Island.</p>
                        </div>
                        <div className="mt-[60px]">
                            <h2 className="uppercase text-2xl md:text-3xl font-black text-primary-color">Development & Animations</h2>
                            <p>Myself</p>
                        </div>
                        <div className="mt-[60px]">
                            <h2 className="uppercase text-2xl md:text-3xl font-black text-primary-color">tools</h2>
                            <p>Next.js, Tailwind CSS, GSAP</p>
                        </div>
                        <div className="mt-[60px] pb-20">
                            <h2 className="uppercase text-2xl md:text-3xl font-black text-primary-color">typeface</h2>
                            <p>Rubik</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Credits;