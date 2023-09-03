"use client"
import { useRef, useEffect } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorRef.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return ( 
        <>
            <div className='cursor hidden xl:block' ref={cursorRef}></div>
        </>
     );
}
 
export default CustomCursor;