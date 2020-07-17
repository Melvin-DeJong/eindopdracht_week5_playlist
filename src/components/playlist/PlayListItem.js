import React from "react";

const PlayListItem = props => {
  const listItem = props.playList.map(item => (
    <table class="table" style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td>{item.song}</td>
          <td>{item.artist}</td>
          <td>{item.genre}</td>
          <td>{item.rating}</td>
        </tr>
      </tbody>
    </table>
  ));

  return listItem;
};

export default PlayListItem;