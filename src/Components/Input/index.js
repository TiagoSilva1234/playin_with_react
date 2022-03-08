import React, { useState } from 'react';
import Hi from '../Hi/index.js';
import List from '../list';

const Input = () => {
  let [text, setText] = useState();
  let [list, setList] = useState([]);
  return <>
    <input type="text" onChange={e => setText(e.target.value)} />
    <button onClick={e => !text  ? setList([...list, "Stranger"]): setList([...list, text])} ></button>
    <List nameList={list} />
  </>;
}

export default Input;