import React from "react";
import "./App.css";
import PlayList from "./components/PlayList";
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
            <About />
          </Route>
          <Route path="/videoplayer">
            <Videoplayer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Videoplayer() {
  return <div className="videoplayer"> <VideoPlayer /></div>;
}

function Playlist() {
  return <div className="app"> <PlayList /></div>;
}

function About() {
  return <h2>About</h2>;
}

export default App;