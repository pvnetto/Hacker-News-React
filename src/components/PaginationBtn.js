import React from 'react';

const PaginationBtn = (props) => {
    return (
        <li className={"page-item " + (props.active ? "active" : "")}>
            <button href="" className={"page-link"} onClick={props.onClickPage}> {props.pageIdx} </button>
        </li>
    );
};

export default PaginationBtn;