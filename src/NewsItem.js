import React from 'react';

const NewsItem = (props) => {
    return (
        <div>
            <div>
                <h3><a href={props.link}>{props.title}</a></h3>
            </div>
            <div>
                <p>{props.points} points | {props.user} | {props.date} days ago | {props.commentCount} comments | ({props.source})</p>
            </div>
            <hr />
        </div>
    );
};

export default NewsItem;