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
  let [searchPerformanceData, setSearchPerformanceData] = useState({ totalHits: undefined, processingTime: undefined });

  useEffect(() => {
    console.log("Component did mount");

    fetchStories(searchTerm, currentPage).then(data => {
      console.log(data);
      setSearchResults(data.hits);
      setSearchPerformanceData({
        totalHits: data.nbHits,
        processingTime: data.processingTimeMS
      });
    });
  }, [searchTerm, currentPage]);

  return (
    <div className="container">
      <Navbar onTypeSearch={setSearchTerm} />
      <SearchBar {...searchPerformanceData} />
      <NewsContainer results={searchResults} onChangePage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default HNApp;
