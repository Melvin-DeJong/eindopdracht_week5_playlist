import React from "react";

const PlayListHeader = () => {
  return (
    <table class="table" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th scope="col" className="playlist_table_item">
            Song
          </th>
          <th scope="col" className="playListRowItem">
            Artist
          </th>
          <th scope="col" className="playListRowItem">
            Genre
          </th>
          <th scope="col" className="playListRowItem">
            Rating
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default PlayListHeader;