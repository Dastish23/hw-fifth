import React from "react";
import { useState} from "react";

export default function Count() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button className="green plus" onClick={() => setCount(count + 1)}>+</button>
            <button className="red minus" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}