import {useState} from "react";

export function Toggle() {
    const [on, setOn] = useState(false)
    const toggle = () => setOn(o => !o)
    return (
        <div>
            <div>The button is {on ? 'on' : 'off'}</div>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}


