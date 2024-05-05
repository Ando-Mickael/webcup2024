import React, { useState, useEffect } from 'react';
function Cursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    return (
        <div className="cursor" style={{ top: cursorPosition.y - 60, left: cursorPosition.x - 60 }}></div>
    );
}

export default Cursor;