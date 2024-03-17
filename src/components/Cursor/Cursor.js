import React from "react";

function Cursor() {

    const cursorDotOutline = React.useRef();
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();
    let [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [width, setWidth] = React.useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const [height, setHeight] = React.useState(
        typeof window !== 'undefined' ? window.innerHeight : 0
    );

    let cursorVisible = React.useState(false);
    let cursorEnlarged = React.useState(false);

    /**
     * Mouse Moves
     */
    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event;
        setMousePosition({ x, y });
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
        toggleCursorSizeDown();
    };
    const onMouseUp = () => {
        cursorEnlarged.current = false;
        toggleCursorSizeDown();
    };
    const onResize = event => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    const handleStop = () => {
        toggleCursorVisibility();
    }

    /**
     * Hooks
     */
    React.useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        window.addEventListener("resize", onResize);
        requestRef.current = requestAnimationFrame(animateDotOutline);

        // Handle Link Hovers
        handleLinkHovers();

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    let { x, y } = mousePosition;
    const winDimensions = { width, height };
    let endX = winDimensions.width / 2;
    let endY = winDimensions.height / 2;

    /**
     * Position Dot (cursor)
     * @param {event}
     */
    function positionDot(e) {
        cursorVisible.current = true;
        toggleCursorVisibility();
        // Position the dot
        endX = e.pageX;
        endY = e.pageY;
    }

    /**
     * Toggle Cursor Visiblity
     */
    function toggleCursorVisibility() {
        if (cursorVisible.current) {
            cursorDotOutline.current.style.opacity = 1;
        } else {
            cursorDotOutline.current.style.opacity = 0;
        }
    }

    /**
     * Toggle Cursor Size
     */
    function toggleCursorSizeUp() {
        if (cursorEnlarged.current) {
            cursorDotOutline.current.style.transform =
                "translate(-50%, -50%) scale(5)";
        } else {
            cursorDotOutline.current.style.transform =
                "translate(-50%, -50%) scale(2)";
        }
    }

    function toggleCursorSizeDown() {
        if (cursorEnlarged.current) {
            cursorDotOutline.current.style.transform =
                "translate(-50%, -50%) scale(0.9)";
        } else {
            cursorDotOutline.current.style.transform =
                "translate(-50%, -50%) scale(2)";
        }
    }

    /**
     * Handle LInks
     * Applies mouseover/out hooks on all links
     * to trigger cursor animation
     */
    function handleLinkHovers() {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => {
                cursorEnlarged.current = true;
                toggleCursorSizeUp();
            });
            el.addEventListener("mouseout", () => {
                cursorEnlarged.current = false;
                toggleCursorSizeUp();
            });
        });
    }

    /**
     * Animate Dot Outline
     * Aniamtes cursor outline with trailing effect.
     * @param {number} time
     */
    const animateDotOutline = time => {
        if (previousTimeRef.current !== undefined) {
            x += (endX - x) / 8;
            y += (endY - y) / 8;
            cursorDotOutline.current.style.top = y + "px";
            cursorDotOutline.current.style.left = x + "px";
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    return (
        <>
            <div ref={cursorDotOutline} id="cursor-dot-outline" />
        </>
    );
}


export default Cursor;