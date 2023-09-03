const HeroSection = () => {
    return ( 
        <>
            <div className="w-[95%] md:w-[620px] h-[420px] lg:h-[430px] flex items-center overflow-hidden justify-center absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10] cursor-none container">
                <h1 className="text-[3rem] md:text-[4rem] text-center font-black text-primary-color uppercase leading-[45px] md:leading-[60px] text-shadow">I'm the torch that illuminates the web with captivating experiences</h1>
                <div class="w-[95%] h-[300px] md:w-[370px] md:h-[370px] circle flex items-center justify-center">
                    <div class="inner-circle"></div>
                </div>
            </div>
            <div className="text-white w-full md:w-[600px] h-[500px] lg:h-[520px] flex flex-col items-center overflow-hidden justify-between absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-0 lg:py-5">
                    <div className="flex items-center justify-around xl:w-[70%] w-[90%]">
                        <p>Frontend Developer based in Accra, Ghana</p>
                    </div>
                    <div className="flex items-center justify-around xl:w-[40%] w-[60%]">
                        <p>Available for hire</p>
                        <div className="w-[6px] h-[6px] rounded-full bg-primary-color"></div>
                        <a href="mailto:mrsammadeit@gmail.com" className="socials">Let's Talk</a>
                    </div>
            </div>
        </>
     );
}
 
export default HeroSection;