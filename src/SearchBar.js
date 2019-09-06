import React from 'react';
import SearchBarOption from './SearchBarOption';

const SearchBar = () => {

    const onSelectOption = (val) => {
        console.log("Selected " + val);
    }

    return (
        <div className="py-3 row">
            <div className="col-12 d-flex flex-md-row flex-column justify-content-between">
                <div>
                    Search
                    <SearchBarOption selectItems={['All', 'Stories', 'Comments']} onSelect={onSelectOption} />
                    by
                    <SearchBarOption selectItems={['Popularity', 'Date']} onSelect={onSelectOption} />
                    for
                    <SearchBarOption selectItems={['All time', 'Last 24h', 'Past Week', 'Past Month', 'Past Year', 'Custom Range']} onSelect={onSelectOption} />
                </div>

                <div>
                    <p>99.999 results (0.002 seconds).</p>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;