import React from 'react';
import NewsItem from './NewsItem';
import NewsPagination from './NewsPagination';

const NewsContainer = (props) => {
    return (
        <div className="row py-3 bg-light">

            <div className="col-12">
                {props.results && props.results.map(result => result.title ? <NewsItem key={result.objectID} {...result} /> : null)}
                <NewsPagination maxPages={props.maxPages} currentPage={props.currentPage} onClickPage={props.onClickPage} />
            </div>
        </div>
    );
};

export default NewsContainer;