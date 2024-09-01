"use client";

import Navbar from "@/components/header/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";

const PageTransition = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            {/* Animation for the page transition */}
            {/* <motion.div

                className="fixed top-0 left-0 w-screen h-screen bg-black origin-right"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.38, 1, 0.48, 1] }}
            ></motion.div> */}
            {/* <motion.div
                className="fixed top-0 left-0 w-screen h-screen bg-black origin-left"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1.2, ease: [0.38, 1, 0.48, 1] }}
            ></motion.div> */}
            {/* Render children (page content) */}

        </>
    );
};
export default PageTransition;
