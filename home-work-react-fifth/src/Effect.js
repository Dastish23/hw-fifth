import React from "react";
import { useState, useEffect } from "react";

export default function Change() {
    const [on, setOn] = useState(0);
    const [off, setOff] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${on} button`;
    });
    useEffect(() => {
        document.title = `You clicked ${off} button`;
    });
    return (
        <div>
            <button style={{backgroundColor: on ? "black" : "yellow"}} onClick={() => setOn(!on)}
            >
                off
            </button>
            <button style={{backgroundColor: off ? "yellow" : "black"}} onClick={() => setOff(!off)}
            >
                on
            </button>
        </div>
    )
}
