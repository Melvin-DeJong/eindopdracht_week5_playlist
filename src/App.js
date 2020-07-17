import React from "react";
import "./App.css";
import PlayList from "./components/playlist/PlayList";
import VideoPlayer from "./VideoPlayer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/playlist">Playlist</Link>
            </li>
            <li>
              <Link to="/videoplayer">Videoplayer</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/playlist">
            <Playlist />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/videoplayer">
            <Videoplayer />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Homepage() {
  return <div>
    <h1>Homepage</h1> 
    <h2>Welkom</h2>
    <h3>Via het menu bovenaan kan je kiezen voor het maken van een playlist,</h3>
    <h3>Of je kan een liedje (of filmpje) opzoeken in de videoplayer</h3>
    </div>;
}

function Videoplayer() {
  return <div className="videoplayer"> <VideoPlayer /></div>;
}

function Playlist() {
  return <div className="app"> <PlayList /></div>;
}

function AboutPage() {
  return <div>
    <h1>About</h1>
    <h2>Welkom</h2>
    <h3>About me:</h3>
    <p>Hi! Ik ben Melvin de Jong, 23 jaar oud. Momenteel volg ik de front-end opleiding van Winc-Academy.</p>
    <br></br>
    <h3>Over dit project:</h3>
    <p>Een Single Page Application (SPA) waarin je al je favoriete lievelingsliedjes kunt opslaan met rating. En een videoplayer waarmee je muziek (of andere filmpjes) van youtube kunt afspelen</p>
    <p>De videoplayer is gemaakt met de youtube api</p>
    <p><i>(Indien de videoplayer niet werk zit de api aan zijn max requests)</i> </p>
    </div>;
}

export default App;