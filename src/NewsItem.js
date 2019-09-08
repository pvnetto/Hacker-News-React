import React from 'react';

const NewsItem = (props) => {
    return (
        <div>
            <div>
                <h4><a href={props.link}>{props.title}</a></h4>
            </div>
            <div>
                <p className="text-sm pt-2">{props.points} points | {props.user} | {props.date} days ago | {props.commentCount} comments | ({props.source})</p>
            </div>
            <hr />
        </div>
    );
};

export default NewsItem;