import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetails';

const API_KEY = 'AIzaSyDlFoVPYOEtzZhMM28g7ntKblxO3-5BOZI';

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