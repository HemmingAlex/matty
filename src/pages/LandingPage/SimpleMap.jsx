import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.4522278,
      lng: -2.5976449
    },
    zoom: 20
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '70%', margin: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAdCORUo2xQf-bNRZtP1lmQDDxrjf3Z_iw" }}

          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={51.4522278}
            lng={-2.5976449}
            text="My Marker"
            color="red"
            name="Bucklans Burgers"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;