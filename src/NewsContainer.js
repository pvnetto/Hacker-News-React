import React from 'react';
import NewsItem from './NewsItem';

const NewsContainer = (props) => {
    return (
        <div>
            {props.results && props.results.map(result => <NewsItem key={result.id} {...result} />)}

            <ul className="pagination align-items-center justify-content-center">
                <li className="page-item">
                    <a href="" className="page-link">1</a>
                </li>
                <li className="page-item">
                    <a href="" className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="" className="page-link">3</a>
                </li>
                <li className="page-item">
                    <a href="" className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="" className="page-link">5</a>
                </li>
                <li className="page-item">
                    <a href="" className="page-link">6</a>
                </li>
                <li className="page-item">
                    <a href="" className="page-link">&raquo;</a>
                </li>
            </ul>
        </div>
    );
};

export default NewsContainer;