import React from 'react';
import NewsItem from './NewsItem';

const NewsContainer = (props) => {
    return (
        <div className="row py-3 bg-light">

            <div className="col-12">
                {props.results && props.results.map(result => result.title ? <NewsItem key={result.objectID} {...result} /> : null)}

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
        </div>
    );
};

export default NewsContainer;