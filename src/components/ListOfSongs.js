import React from "react";
import PlayListItem from "./PlayListItem";

const ListOfSongs = props => {
  return (
    <div className={"songlist"}>
      <PlayListItem playList={props.playList} />
    </div>
  );
};

export default ListOfSongs;