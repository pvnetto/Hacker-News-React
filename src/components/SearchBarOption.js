import React from 'react';

const SearchBarOption = (props) => {
    return (
        <select name="" className="mx-2 p-1" onChange={(e) => props.onSelect(e.target.value)}>
            {props.selectItems.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
    );
};

export default SearchBarOption;