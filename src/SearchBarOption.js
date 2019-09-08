import React from 'react';

const SearchBarOption = (props) => {
    return (
        <select name="" className="mx-2 p-1" onChange={props.onSelect}>
            {props.selectItems.map(item => <option key={item} value="">{item}</option>)}
        </select>
    );
};

export default SearchBarOption;