import React from "react";

const PlayListHeader = () => {
  return (
    <table class="table" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th className="playlistTableItem">
            Song
          </th>
          <th className="playListRowItem">
            Artist
          </th>
          <th className="playListRowItem">
            Genre
          </th>
          <th className="playListRowItem">
            Rating
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default PlayListHeader;