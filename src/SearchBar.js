import React from 'react';
import SearchBarOption from './SearchBarOption';

const SearchBar = (props) => {

    const onSelectOption = (val) => {
        console.log("Selected " + val);
    }

    return (
        <div className="row py-3 bg-dark">
            <div className="col-12 d-flex flex-md-row flex-column justify-content-between align-items-center">
                <div>
                    Search
                    <SearchBarOption selectItems={['All', 'Stories', 'Comments']} onSelect={onSelectOption} />
                    by
                    <SearchBarOption selectItems={['Popularity', 'Date']} onSelect={onSelectOption} />
                    for
                    <SearchBarOption selectItems={['All time', 'Last 24h', 'Past Week', 'Past Month', 'Past Year', 'Custom Range']} onSelect={onSelectOption} />
                </div>

                {
                    props.totalHits !== undefined &&
                    (<div>
                        <p>{props.totalHits} results ({props.processingTime / 1000} seconds)</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SearchBar;