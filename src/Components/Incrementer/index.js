import React, { useState } from 'react';

const Increment = () => {
    const [number, setNumber] = useState(0);
    return <>
        <p>{number}</p>
        <button onClick={e => setNumber(number + 1)}>+</button>
        <button onClick={e => setNumber(number - 1)}>-</button>
    </>;
}

export default Increment;