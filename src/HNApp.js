import React, { useState, useEffect } from 'react';
import { Auth0Provider } from "./react-auth0-wrapper";

import Navbar from './Navbar';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import { fetchStories, searchTypes, searchTags, searchIntervals } from './AlgoliaFetch';

import './scss/main.scss';


function HNApp() {
  let [currentPage, setCurrentPage] = useState(0);
  let [searchTerm, setSearchTerm] = useState("");
  let [searchResults, setSearchResults] = useState([]);
  let [searchStats, setSearchStats] = useState({ totalHits: undefined, processingTime: undefined, maxPages: undefined });
  let [isLoading, setLoading] = useState(false);

  let [searchType, setSearchType] = useState(searchTypes.POPULARITY);
  let [searchTag, setSearchTag] = useState(searchTags.ALL);
  let [searchInterval, setSearchInterval] = useState()

  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm, searchType, searchTag, searchInterval]);


  useEffect(() => {
    setLoading(true);

    fetchStories(searchTerm, currentPage, searchType, searchTag, searchInterval).then(data => {

      setSearchResults(data.hits);
      setSearchStats({
        totalHits: data.nbHits,
        processingTime: data.processingTimeMS,
        maxPages: data.nbPages
      });
      setLoading(false);
    });
  }, [searchTerm, currentPage, searchType, searchTag, searchInterval]);


  // Handles redirect when the user authenticates through auth0
  const onRedirectCallback = appState => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  return (
    <div className="container">

      {/* Wrapping Navbar with Auth0Provider to allow Navbar components to use the react-auth0-wrapper.useAuth0 Context */}
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <Navbar onTypeSearch={setSearchTerm} />
      </Auth0Provider>

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
