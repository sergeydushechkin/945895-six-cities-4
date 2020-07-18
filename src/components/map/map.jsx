import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
    this._markersLayer = null;
    this._map = null;
  }

  componentDidMount() {
    const {city, zoom} = this.props;

    this._map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._markersLayer = leaflet.layerGroup().addTo(this._map);
    this._renderMarkers();
  }

  componentWillUnmount() {
    this._mapRef.current.remove();
  }

  componentDidUpdate() {
    const {city, zoom} = this.props;

    this._markersLayer.clearLayers();
    this._map.setView(city, zoom);
    this._renderMarkers();
  }

  _renderMarkers() {
    const {activeOfferId, offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((it) => {
      if (it.id === activeOfferId) {
        leaflet.marker(it.location.coordinates, {iconActive}).addTo(this._markersLayer);
      } else {
        leaflet.marker(it.location.coordinates, {icon}).addTo(this._markersLayer);
      }
    });
  }

  render() {
    return (
      <section ref={this._mapRef} className={this.props.className}></section>
    );
  }
}

Map.propTypes = {
  activeOfferId: PropTypes.any,
  city: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired
};

export default Map;
