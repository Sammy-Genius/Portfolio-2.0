const Contact = () => {
    return ( 
        <>
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center contact-pop-up">
                <div className="w-[80%] md:w-[400px] h-[500px] rounded-2xl bg-white px-5 slide-up">
                <h1 className="text-secondary-color text-2xl md:text-3xl text-center mt-10 font-semibold uppercase slide-up">You can reach me here</h1>
                <div className="mt-10 flex flex-col items-center font-semibold text-lg text-secondary-color slide-up-2">
                    <a href="https://twitter.com/sammyisagenius">Twitter/X</a>
                    <a href="https://www.linkedin.com/in/samuel-osei-10458917a/" className="mt-5">LinkedIn</a>
                    <a href="https://github.com/Sammy-Genius" className="mt-5">GitHub</a>
                    <a href="mailto:mrsammadeit@gmail.com" className="mt-5">Mail</a>
                </div>
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-white text-[crimson] flex justify-center cursor-pointer items-center text-2xl font-semibold mt-10 slide-up close-contact-btn">&times;</div>
            </div>
        </>
     );
}
 
export default Contact;