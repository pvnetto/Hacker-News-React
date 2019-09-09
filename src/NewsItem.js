import React from 'react';

const NewsItem = (props) => {

    const getNewsTimestamp = () => {
        let secondsNow = Math.floor(Date.now() / 1000);
        let dayDifferenceInSeconds = secondsNow - props.created_at_i;
        let dayDifference = dayDifferenceInSeconds / (60 * 60 * 24);

        if (dayDifference < 1) {
            let hoursDifference = Math.round(dayDifference * 24);
            return `${hoursDifference} hours ago`;
        }

        let roundedDays = Math.round(dayDifference);
        return `${roundedDays} days ago`;
    }


    return (
        <div>
            <div>
                <h4><a href={props.url}>{props.title}</a></h4>
            </div>
            <div>
                <p className="text-sm pt-2">{props.points} points | {props.author} | {getNewsTimestamp()} | {props.num_comments} comments | ({props.url})</p>
            </div>
            <hr />
        </div>
    );
};

export default NewsItem;