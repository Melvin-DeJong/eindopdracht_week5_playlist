import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/videoplayer/SearchBar';
import VideoList from './components/videoplayer/VideoList';
import VideoDetail from './components/videoplayer/VideoDetails';

const API_KEY = 'AIzaSyBFwOlr0LcaD4_s11U4f0LLNGMb9Qi8uAw';

class VideoPlayer extends Component{
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('imagin-dragons');
  }

  componentDidMount() {

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return(
      <div>
        <h1>Videoplayer</h1>
        <h2>Zoek hier je favoriete liedje (of filmpje) op,</h2>
        <h2>En speel hem hieronder af</h2>
        <SearchBar onSearchTermSubmit={(term) => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

export default VideoPlayer;