import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamList from "./components/TeamList";
import PlayerList from "./components/PlayerList";
import PlayerDetails from "./components/PlayerDetails";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Route path="/" exact component={TeamList} />
        <Route path="/players" component={PlayerList} />
        <Route path="/players/:id" component={PlayerDetails} />
      </Router>
    </>
  );
}

export default App;
