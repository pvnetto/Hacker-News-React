import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';
import Footer from './Footer';

import './scss/main.scss';

import { fetchStories, searchTypes, searchTags, searchIntervals } from './AlgoliaFetch';
import LoadingSpinner from './LoadingSpinner';

function HNApp() {
  let [currentPage, setCurrentPage] = useState(0);
  let [searchTerm, setSearchTerm] = useState("");
  let [searchResults, setSearchResults] = useState([]);
  let [searchStats, setSearchStats] = useState({ totalHits: undefined, processingTime: undefined, maxPages: undefined });
  let [isLoading, setIsLoading] = useState(false);

  let [searchType, setSearchType] = useState(searchTypes.POPULARITY);
  let [searchTag, setSearchTag] = useState(searchTags.ALL);
  let [searchInterval, setSearchInterval] = useState()

  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm, searchType, searchTag, searchInterval]);


  useEffect(() => {
    setIsLoading(true);

    fetchStories(searchTerm, currentPage, searchType, searchTag, searchInterval).then(data => {

      setSearchResults(data.hits);
      setSearchStats({
        totalHits: data.nbHits,
        processingTime: data.processingTimeMS,
        maxPages: data.nbPages
      });
      setIsLoading(false);
    });
  }, [searchTerm, currentPage, searchType, searchTag, searchInterval]);


  return (
    <div className="container">
      <Navbar onTypeSearch={setSearchTerm} />
      <SearchBar
        {...searchStats}
        searchTags={Object.values(searchTags)}
        searchTypes={Object.values(searchTypes)}
        searchIntervals={Object.values(searchIntervals)}
        setTag={setSearchTag}
        setType={setSearchType}
        setInterval={setSearchInterval}
      />
      {
        isLoading ?
          <LoadingSpinner /> :
          <ResultsContainer results={searchResults} maxPages={searchStats.maxPages} currentPage={currentPage} onClickPage={setCurrentPage} />
      }
      <Footer />
    </div>
  );
}

export default HNApp;
