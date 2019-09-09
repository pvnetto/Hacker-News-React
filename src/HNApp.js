import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import NewsContainer from './NewsContainer';
import Footer from './Footer';

import './scss/main.scss';

import { fetchStories } from './AlgoliaFetch';

function HNApp() {
  let [currentPage, setCurrentPage] = useState(0);
  let [searchTerm, setSearchTerm] = useState("");
  let [searchResults, setSearchResults] = useState([]);
  let [searchStats, setSearchStats] = useState({ totalHits: undefined, processingTime: undefined, maxPages: undefined });
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Resetting page index");
    setCurrentPage(0);
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);

    fetchStories(searchTerm, currentPage).then(data => {
      setSearchResults(data.hits);
      setSearchStats({
        totalHits: data.nbHits,
        processingTime: data.processingTimeMS,
        maxPages: data.nbPages
      });

      setIsLoading(false);
    });
  }, [searchTerm, currentPage]);

  return (
    <div className="container">
      <Navbar onTypeSearch={setSearchTerm} />
      <SearchBar {...searchStats} />
      {
        isLoading ?
          null :
          <NewsContainer results={searchResults} maxPages={searchStats.maxPages} currentPage={currentPage} onClickPage={setCurrentPage} />
      }
      <Footer />
    </div>
  );
}

export default HNApp;
