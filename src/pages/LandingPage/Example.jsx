import React from 'react';
import YouTube from 'react-youtube';
 
class Example extends React.Component {
  render() {
    const opts = {
      height: '504',
      width: '896',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: 192,
        
      }
    };
    // https://youtu.be/FKWZbIhJafQ?t=194
    return (

      <YouTube

        videoId="FKWZbIhJafQ"
        opts={opts}
        onReady={this._onReady}
     />

    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Example;