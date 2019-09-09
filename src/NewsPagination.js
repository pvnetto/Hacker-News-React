import React, { useReducer, useEffect } from 'react';
import PaginationBtn from './PaginationBtn';

const NewsPagination = (props) => {
    const PAGES_PER_CYCLE = 5;

    const clampPageRange = (range) => {
        let start = Math.max(range.start, 1);
        let end = Math.min(range.end, start + PAGES_PER_CYCLE - 1, props.maxPages);

        return {
            start, end
        };
    }

    const dispatchPageRange = (state, action) => {
        let halfCycle = Math.floor(PAGES_PER_CYCLE / 2);
        let start = 1;
        let end = 1;

        switch (action) {
            case 'LOCK': {
                start = props.currentPage + 1 - halfCycle;
                end = start < 0 ? PAGES_PER_CYCLE : start + PAGES_PER_CYCLE - 1;
                break;
            }
            case 'START': {
                start = 1;
                end = 1 + PAGES_PER_CYCLE - 1;
                break;
            }
            case 'END': {
                start = props.maxPages - PAGES_PER_CYCLE + 1;
                end = props.maxPages;
                break;
            }
        }

        let newRange = clampPageRange({
            start,
            end
        });

        return newRange;
    }

    useEffect(() => {
        pageRangeReducer('LOCK');
    }, [props.currentPage]);

    let defaultRange = clampPageRange({ start: 1, end: props.maxPages });
    let [pageRange, pageRangeReducer] = useReducer(dispatchPageRange, defaultRange);

    let pages = [];

    for (let i = pageRange.start; i <= pageRange.end; i++) {
        pages.push(
            <PaginationBtn key={i} active={i === (props.currentPage + 1)} onClickPage={() => props.onClickPage(i - 1)} pageIdx={i} />
        );
    }

    return (
        <ul className="pagination align-items-center justify-content-center">
            {
                pageRange.start > 1 &&
                <PaginationBtn key={-2} active={false} onClickPage={() => pageRangeReducer('START')} pageIdx={'<<'} />
            }
            {
                pages
            }
            {
                pageRange.end < props.maxPages &&
                <PaginationBtn key={-1} active={false} onClickPage={() => pageRangeReducer('END')} pageIdx={'>>'} />
            }
        </ul>
    );
};

export default NewsPagination;