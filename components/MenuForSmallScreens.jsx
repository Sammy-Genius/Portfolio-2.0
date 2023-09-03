import Link from "next/link";

const MenuForSmallScreens = () => {
    return ( 
        <>
            <div className="clip-circle-menu flex flex-col justify-center lg:hidden">
                <span className="text-white absolute top-[5%] right-[10%] text-3xl close-btn">&times;</span>
                <div className="w-[80%] h-[50%] text-white text-4xl flex flex-col items-center justify-evenly mx-auto my-0">
                    <div className="w-auto h-auto overflow-hidden">
                        <li className="translate-y-0 list-none menu-links">
                            <Link href="/">Home</Link>
                        </li>
                    </div>
                    <div className="w-auto h-auto overflow-hidden">
                        <li className="translate-y-0 list-none menu-links">
                            <Link href="/AboutMe">About Me</Link>
                        </li>
                    </div>
                    <div className="w-auto h-auto overflow-hidden">
                        <li className="translate-y-0 list-none menu-links">
                            <Link href="/MyWorks">My Works</Link>
                        </li>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MenuForSmallScreens;