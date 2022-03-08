import React, { useState } from 'react';
import Hi from './Components/Hi/index.js';
import Input from './Components/Input/index.js';
import Increment from './Components/Incrementer/index.js';
const App = () => {

    return (
        <>
            <Increment />
            <h1>Well hello :)</h1>
            <Input />
        </>
    );
}
export default App;