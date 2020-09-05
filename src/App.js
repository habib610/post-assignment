import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllPost from './components/AllPost/AllPost';
import NotFound from './components/NotFound/NotFound';
import MoreDetails from './components/MoreDetails/MoreDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
    <Router>
      <Switch>
        <Route exact path="/">
        <AllPost></AllPost>
        </Route>
        <Route path="/allpost">
        <AllPost></AllPost>
        </Route>
        <Route path="/home">
        <AllPost></AllPost>
        </Route>
        <Route path="/post/:userId">
        <MoreDetails></MoreDetails>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
{/* < Button variant="contained" color="primary">
Hello World
</Button> */}