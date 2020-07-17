import React, {Component} from 'react';

class VideoDetail extends Component{
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.video) {
      return(
        <div>
          Loading...
        </div>
      )
    }

    const videoId = this.props.video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return(
      <div className="video-detail">
        <div className="embed-video" >
          <iframe className="embed-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    )
  }
}

export default VideoDetail;