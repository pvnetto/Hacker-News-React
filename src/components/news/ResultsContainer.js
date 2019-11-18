import React from 'react';
import NewsItem from './NewsItem';
import CommentItem from './CommentItem';
import NewsPagination from './NewsPagination';

const ResultsContainer = (props) => {
    return (
        <div className="row py-3 bg-light">

            <div className="col-12">
                {props.results && props.results.map((result, index) =>
                    result.title ?
                        <NewsItem key={index} {...result} /> :
                        result.comment_text ?
                            <CommentItem key={index} {...result} /> :
                            null)
                }
                <NewsPagination maxPages={props.maxPages} currentPage={props.currentPage} onClickPage={props.onClickPage} />
            </div>
        </div>
    );
};

export default ResultsContainer;