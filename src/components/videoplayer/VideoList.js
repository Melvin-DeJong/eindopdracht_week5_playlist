import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    const list_video = this.props.videos.map((video) =>
      <VideoListItem
        onVideoSelect={this.props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );

    return(
      <div>
        <ul className="videoList" >
          {list_video}
        </ul>
      </div>
    )
  }
}

export default VideoList;