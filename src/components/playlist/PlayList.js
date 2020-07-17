import React, { Component } from "react";
import SongInput from "./SongInput";
import PlayListHeader from "./PlayListHeader";
import ListOfSongs from "./ListOfSongs";

class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      playList: [
        {
          id: "",
          song: "",
          artist: "",
          genre: "",
          rating: "",
        },
      ],
    };
  }

  render() {
    const addSong = (song) => {
      this.setState({ playList: this.state.playList.concat(song) });
    };
    return (
      <div className={"playlist-display"}>
        <header className="Header">
          <h1>Lil' Playlist</h1>
        </header>
        <SongInput
          addSong={addSong}
          handleChangeSong={this.handleChangeSong}
          handleChangeArtist={this.handleChangeArtist}
        />
        <PlayListHeader />
        <ListOfSongs playList={this.state.playList} />
      </div>
    );
  }
}
export default PlayList;
