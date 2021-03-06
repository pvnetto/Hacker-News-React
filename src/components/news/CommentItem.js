import React from 'react';

const CommentItem = (props) => {

    const getNewsTimestamp = () => {
        let secondsNow = Math.floor(Date.now() / 1000);         // Time is converted to UNIX timestamp
        let dayDifferenceInSeconds = secondsNow - props.created_at_i;
        let secondsInADay = 60 * 60 * 24;
        let dayDifference = dayDifferenceInSeconds / secondsInADay;

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
                <h4>{props.story_title}</h4>
            </div>
            <div>
                <p className="text-break">{props.comment_text}</p>
            </div>
            <div>
                <p className="text-sm pt-2">{props.points} points | {props.author} | {getNewsTimestamp()}</p>
            </div>
            <hr />
        </div>
    );
};

export default CommentItem;