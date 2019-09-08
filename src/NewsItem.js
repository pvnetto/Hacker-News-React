import React from 'react';

const NewsItem = (props) => {
    return (
        <div>
            <div>
                <h4><a href={props.url}>{props.title}</a></h4>
            </div>
            <div>
                <p className="text-sm pt-2">{props.points} points | {props.author} | {props.created_at_i} days ago | {props.num_comments} comments | ({props.url})</p>
            </div>
            <hr />
        </div>
    );
};

export default NewsItem;