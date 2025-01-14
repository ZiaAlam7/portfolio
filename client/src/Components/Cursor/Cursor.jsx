import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = ({cursorPosition, setCursorPosition}) => {

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

       

        const handleMouseEnter = () => setHovered(true);
        const handleMouseLeave = () => setHovered(false);


        window.addEventListener("mousemove", handleMouseMove);


        const hoverableElements = document.querySelectorAll("button, a");
        hoverableElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            hoverableElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${hovered ? "hovered" : ""}`}
            style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
            }}
        />
    );
};

export default Cursor;
