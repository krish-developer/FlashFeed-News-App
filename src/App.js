import './App.css';

import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState('');

  useEffect(() => {
    // Fetch user's country based on IP address
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const userCountry = response.data.country_code;
        setCountry(userCountry);
      } catch (error) {
        console.error('Error fetching user country:', error);
      }
    };

    fetchCountry();
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="blockchain" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
