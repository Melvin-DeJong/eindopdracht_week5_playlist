import React, {Component} from 'react';

class VideoListItem extends Component {
  constructor() {
    super();
  }

  onVideoSelect(video) {
    this.props.onVideoSelect(video);
  }

  render() {

    const imgUrl = this.props.video.snippet.thumbnails.default.url;

    return(
      <li className="VideoList-item"  onClick={() => this.onVideoSelect(this.props.video)}>
        <div className="videoList-media">
          <div className="media">
            <img className="media-object" src={imgUrl} alt="" />
          </div>

          <div className="media-body">
            <div className="media-header">
              <div>{this.props.video.snippet.title}</div>
            </div>
          </div>

        </div>
      </li>
    )
  }
}

export default VideoListItem;