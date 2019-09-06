import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import NewsContainer from './NewsContainer';
import Footer from './Footer';

import './bootstrap.min.css';

function HNApp() {

  const results = [
    {
      id: 0,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
    {
      id: 1,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
    {
      id: 2,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
    {
      id: 3,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
    {
      id: 4,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
    {
      id: 5,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
    {
      id: 6,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
    {
      id: 7,
      link: 'google.com',
      title: 'News title',
      points: 0,
      user: 'pvnetto',
      date: '3 days ago',
      commentCount: 99,
      source: 'google.com'
    },
  ]

  return (
    <div className="container">
      <Navbar />
      <SearchBar />
      <NewsContainer results={results} />
      <Footer />
    </div>
  );
}

export default HNApp;
