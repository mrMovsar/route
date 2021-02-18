import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
 
export class MapContainer extends Component {
  render() {
    return (
      <div className="map">
      <Map google={this.props.google} 
      zoom={15} initialCenter={{ lat: 43.324718, lng:  45.692447 }} >
        
        <Marker position= {{ lat: 43.324718, lng:  45.692447 }} />

      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAqMySLWZ40uGmjfXjnwlcZsmZQjdVrMaw')
})(MapContainer)

