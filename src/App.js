
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchPage from './pages/SearchPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/top-rated" component={TopRatedPage} />
                <Route path="/upcoming" component={UpcomingPage} />
                <Route path="/movie/:id" component={MovieDetailPage} />
                <Route path="/search" component={SearchPage} />
            </Switch>
        </Router>
    );
}

export default App;

