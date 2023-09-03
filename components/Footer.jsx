const Footer = () => {
    return ( 
        <>
            <div className="w-full h-[8%] text-white px-2 lg:px-[30px] fixed bottom-0 left-0 flex items-center justify-between footer">
                <p className="credits-btn-mobile cursor-pointer block lg:hidden">credits</p>
                <p className="credits-btn-mobile cursor-pointer hidden lg:block">Samuel Osei's Portfolio with &#128155;</p>
                <div className="flex items-center justify-around w-[100px] h-[35px] rounded-3xl cursor-pointer contact-btn">
                    <div className="w-[7px] h-[7px] rounded-full bg-primary-color ml-[5px] contact-dot"></div>
                    <p className="mr-[5px]">contact</p>
                </div>
            </div>
        </>
     );
}
 
export default Footer;