const HITS_PER_PAGE = 30;

const ALGOLIA_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_BY_DATE_PATH = '/search_by_date';

const QUERY_PARAM = 'query=';
const PAGE_PARAM = 'page=';
const HPP_PARAM = 'hitsPerPage=';

// Declaring enums for search settings
const searchTypes = {
    POPULARITY: 'Popularity',
    DATE: 'Date'
};

const searchTags = {
    ALL: 'All',
    STORIES: 'Stories',
    COMMENTS: 'Comments'
};

const searchIntervals = {
    ALL_TIME: 'All Time',
    LAST_24H: 'Last 24h',
    PAST_WEEK: 'Past Week',
    PAST_MONTH: 'Past Month',
    PAST_YEAR: 'Past Year'
};

// Makes enums immutable
Object.freeze(searchTypes);
Object.freeze(searchTags);
Object.freeze(searchIntervals);


const getSearchType = (searchType) => {
    switch (searchType) {
        case searchType.POPULARITY:
            return SEARCH_PATH;
        case searchTypes.DATE:
            return SEARCH_BY_DATE_PATH;
        default:
            return SEARCH_PATH;
    }
}

const getSearchTag = (searchTag) => {
    switch (searchTag) {
        case searchTags.STORY:
            return 'story';
        case searchTags.COMMENTS:
            return 'comment';
        default:
            return '';
    }
}

const getSearchInterval = (interval) => {
    switch (interval) {
        case searchIntervals.ALL_TIME:
            return '';
        case searchIntervals.LAST_24H: {
            let secondsIn24h = 24 * 60 * 60;
            let secondsNow = Math.floor(Date.now() / 1000);
            let time24hAgo = secondsNow - secondsIn24h;
            return `created_at_i>${time24hAgo}`;
        }
        case searchIntervals.PAST_WEEK: {
            let secondsIn24h = 24 * 60 * 60;
            let secondsInWeek = 7 * secondsIn24h;
            let secondsNow = Math.floor(Date.now() / 1000);
            let timeAWeekAgo = secondsNow - secondsInWeek;
            return `created_at_i>${timeAWeekAgo}`;
        }
        case searchIntervals.PAST_MONTH: {
            let secondsIn24h = 24 * 60 * 60;
            let secondsInMonth = 30 * secondsIn24h;
            let secondsNow = Math.floor(Date.now() / 1000);
            let timeAMonthAgo = secondsNow - secondsInMonth;
            return `created_at_i>${timeAMonthAgo}`;
        }
        case searchIntervals.PAST_YEAR: {
            let secondsIn24h = 24 * 60 * 60;
            let secondsInYear = 365 * secondsIn24h;
            let secondsNow = Math.floor(Date.now() / 1000);
            let timeAYearAgo = secondsNow - secondsInYear;
            return `created_at_i>${timeAYearAgo}`;
        }
        default:
            return '';
    }
}

const fetchStories = (query, page, searchType, tag, interval) => {
    const searchTypePath = getSearchType(searchType);
    const searchTagVal = getSearchTag(tag);
    const searchInterval = getSearchInterval(interval);

    return fetch(`${ALGOLIA_PATH}${searchTypePath}?${QUERY_PARAM}${query}&${PAGE_PARAM}${page}&${HPP_PARAM}${HITS_PER_PAGE}&tags=${searchTagVal}&numericFilters=${searchInterval}`)
        .then(response => response.json());
}

exports.searchTypes = searchTypes;
exports.searchTags = searchTags;
exports.searchIntervals = searchIntervals;
exports.fetchStories = fetchStories;
