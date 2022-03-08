import React, { useState } from 'react';
import Hi from '../Hi/index.js';

const List = ({ nameList }) => {

    return (
        nameList.map((person) => {
            return <Hi name={person} />

        })
    );
}

export default List;