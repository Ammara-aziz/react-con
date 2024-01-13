'use client'

import { useState } from "react";
import React from "react";

const State = () => {
    const [count, setCounter] = useState(0)

    function updateCount() {
        setCounter(count + 1)
    }

    return <div className="flex flex-col gap-5 px-4 text-orange-600">
        <h1>Button Clicked {count} times</h1>
        <button className="text-blue-500" onClick={updateCount}>Click</button>
    </div>
}; export default State;