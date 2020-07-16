import React from "react";

class SongInput extends React.Component {
  state = {
    song: "",
    artist: "",
    genre: "",
    rating: ""
  };
  

  render() {
    const handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    const handleSubmit = event => {
      event.preventDefault();
      this.props.addSong(this.state);

      this.setState({
        song: "",
        artist: "",
        genre: "",
        rating: ""
      });
    };
    return (
      <form onSubmit={handleSubmit}>
        <table>
          <th>
            <input
              type="text"
              name="song"
              placeholder="Song"
              value={this.state.song}
              onChange={handleChange}
            />
          </th>
          <th>  
            <input
              type="text"
              name="artist"
              placeholder="Artist"
              value={this.state.artist}
              onChange={handleChange}
            />
          </th>
          <th>
            <select value={this.state.genre} name="genre" onChange={handleChange}>
              <option value="">Select Genre...</option>
              <option value="Rock">Rock</option>
              <option value="Metal">Metal</option>
              <option value="Jazz">Jazz</option>
              <option value="Pop">Pop</option>
              <option value="Punk">Punk</option>
              <option value="Country">Country</option>
            </select>
          </th>
          <th> 
            <h3> Rating:</h3> 
          </th>
          <th>
            <input
              type="range"
              name="rating"
              min="1" max="5"
              value={this.state.rating}
              onChange={handleChange}
            />
          </th>  
          <th></th>
        
        
        <button className="btn btn-primary">Add Song</button>
      
      </table>  
      </form>
    );
  }
}

export default SongInput;