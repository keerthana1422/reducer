import React, { useState, useEffect, useMemo } from "react";

function Counter(props) {

    const { initialValue = 0 } = props;
    console.log("counter initial value is", initialValue)
    const [count, setCount] = useState(initialValue);
    const [value, setValue] = useState(0);


    useEffect(() => {
        // console.log("on mount");
        return () => {
            console.log("on un mount")
        }
    }, [])


    useEffect(() => {
        console.log("on count change", count);
    }, [count]);

    useEffect(() => {
        console.log("on value change", value);
    }, [value]);


    const total = useMemo(() => {
        return count + value;
    }, [count, value])

    useEffect(() => {
        console.log("On count or value change", count, value)
    }, [count, value])

    function fetchMails() { }

    console.log("on render")
    return (
        <div>
            <center>
                <b> Count: {count}</b><br></br>
                <button onClick={() => setCount(count + 1)}>Add Count</button>
                <br></br>
                <b> Value: {value}</b><br></br>
                <button onClick={() => setValue(value + 10)} >Add Value</button> <br></br>
                <b>Result:({count} + {value})</b><br></br>
                <button onClick={() => { console.log("on click") }}></button>
            </center>
            <label>{`Sum of ${count} and ${value} is ${total}`}</label>
        </div>
    )
}
export default Counter

