import React from 'react';
import SearchBarOption from './SearchBarOption';

const SearchBar = (props) => {

    const onSelectOption = (val) => {
        console.log("Selected " + val);
    }

    return (
        <div className="row py-3 bg-dark">
            <div className="col-12 d-flex flex-lg-row flex-column justify-content-lg-between justify-content-start align-items-lg-center align-items-start">
                <div>
                    Search
                    <SearchBarOption selectItems={props.searchTags} onSelect={props.setTag} />
                    by
                    <SearchBarOption selectItems={props.searchTypes} onSelect={props.setType} />
                    <span className="d-md-inline d-block">
                        for
                        <SearchBarOption selectItems={props.searchIntervals} onSelect={props.setInterval} />
                    </span>
                </div>

                {
                    props.totalHits !== undefined &&
                    (<div className="pt-lg-0 pt-3">
                        <p>{props.totalHits} results ({props.processingTime / 1000} seconds)</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SearchBar;