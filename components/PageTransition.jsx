'use client';

import { useLayoutEffect } from "react";
import { pageTransitionAnimation } from "@/animations";

const PageTransition = () => {

    useLayoutEffect(() => {
        pageTransitionAnimation();
    }, [])

    return ( 
        <>
            <div className="w-full h-full fixed bottom-0 left-0 transition-container">
                <div className="blocks w-full h-full absolute bottom-0 left-0 bg-primary-color"></div>
                <div className="blocks w-full h-full absolute bottom-0 left-0 bg-secondary-color"></div>
            </div>
        </>
     );
}
 
export default PageTransition;