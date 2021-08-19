import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import App from './App';
import {BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./services/ErrorBoundary"


ReactDOM.render(

    <Router>
    <Helmet>
    <meta charSet="utf-8" />
    <title>WatchStatistics</title>

  </Helmet>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </Router>,

  document.getElementById('root')
);




