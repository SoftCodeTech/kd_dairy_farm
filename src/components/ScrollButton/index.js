"use client";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useState } from "react";

const isBrowser = () => typeof window !== 'undefined'
const scrollToTop = () => {
    if (!isBrowser()) return;
    if (typeof window !== 'undefined') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true)
        }
        else if (scrolled <= 250) {
            setVisible(false)
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', toggleVisible);
    }

    return (
        <button onClick={scrollToTop}
            className={`fixed right-4 bottom-4 cursor-pointer rounded-full p-1 transition-all duration-500 ${visible ? 'z-20 flex items-center justify-center hover:bg-[--yellow] text-[--white] bg-[--blue-btn] animate-bounce' : 'hidden'}`}>
            <KeyboardDoubleArrowUpIcon fontSize="large" className={visible ? "text-[--white]" : "hidden transition-none	"}
            />
        </button>
    )
}

export default ScrollButton
export { scrollToTop };

