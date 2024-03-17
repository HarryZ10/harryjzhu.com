import React from "react";

function Cursor() {

    const cursorDot = React.useRef();
    const [width, setWidth] = React.useState( typeof window !== 'undefined' ? window.innerWidth : 0);
    const [height, setHeight] = React.useState(typeof window !== 'undefined' ? window.innerHeight : 0);
    let cursorVisible = React.useState(false);
    let cursorEnlarged = React.useState(false);

    /**
     * Mouse Moves
     */
    const onMouseMove = (event) => {
        positionDot(event);
    };
    const onMouseEnter = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    };
    const onMouseLeave = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };
    const onMouseDown = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };
    const onMouseUp = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    };
    const onResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        window.addEventListener("resize", onResize);
        
        handleLinkHovers();

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const winDimensions = { width, height };
    let endX = winDimensions.width / 2;
    let endY = winDimensions.height / 2;

    /**
     * Position Dot (cursor)
     */
    function positionDot(e) {
        cursorVisible.current = true;
        toggleCursorVisibility();

        // Position the dot
        endX = e.pageX;
        endY = e.pageY;
        cursorDot.current.style.top = endY + "px";
        cursorDot.current.style.left = endX + "px";
    }

    /**
     * Toggle Cursor Visiblity
     */
    function toggleCursorVisibility() {
        if (cursorVisible.current) {
            cursorDot.current.style.opacity = 1;
        } else {
            cursorDot.current.style.opacity = 0;
        }
    }

    /**
     * Toggle Cursor Size
     */
    function toggleCursorSize() {
        if (cursorEnlarged.current) {
            cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.4)";
        } else {
            cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
        }
    }

    /**
     * Applies mouseover/out hooks on all links to trigger cursor animation
     */
    function handleLinkHovers() {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => {
                cursorEnlarged.current = true;
                toggleCursorSize();
            });

            el.addEventListener("mouseout", () => {
                cursorEnlarged.current = false;
                toggleCursorSize();
            });
        });
    }

    return (
        <>
            <div ref={cursorDot} id="cursor-dot" />
        </>
    );
}

export default Cursor;
