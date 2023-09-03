import Link from "next/link";

const NotFound = () => {
    return ( 
        <main className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-6xl lg:text-[12rem] text-primary-color font-black flex">
                <span className="rotate-[10deg] text-shadow-3">4</span>
                <span className="text-shadow-3">0</span>
                <span className="rotate-[-10deg] text-shadow-3">4</span>
            </div>
            <p className="text-lg text-white mt-10 text-center">Oh senior but what you dey find for here?</p>
            <p className="text-lg text-white mt-3 text-center">Chale abeg <Link href='/' className="text-primary-color uppercase text-shadow-3">go home</Link></p>
        </main>
     );
}
 
export default NotFound;