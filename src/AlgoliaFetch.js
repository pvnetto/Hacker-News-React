const HITS_PER_PAGE = 30;

const ALGOLIA_PATH = 'https://hn.algolia.com/api/v1';
const ALGOLIA_SEARCH_PATH = '/search';

const QUERY_PARAM = 'query=';
const PAGE_PARAM = 'page=';
const HPP_PARAM = 'hitsPerPage=';

const fetchStories = (query, page) => {
    return fetch(`${ALGOLIA_PATH}${ALGOLIA_SEARCH_PATH}?${QUERY_PARAM}${query}&${PAGE_PARAM}${page}&${HPP_PARAM}${HITS_PER_PAGE}`)
        .then(response => response.json());
}

exports.fetchStories = fetchStories;
