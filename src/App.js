import React from 'react';
import { Navbar } from './components';
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
