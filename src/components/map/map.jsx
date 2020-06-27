import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
    this._markersLayer = null;
  }

  componentDidMount() {
    const {city} = this.props;

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this._markersLayer = leaflet.layerGroup().addTo(map);
    this._renderMarkers();
  }

  componentWillUnmount() {
    this._mapRef.current.remove();
  }

  componentDidUpdate() {
    this._markersLayer.clearLayers();
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
        leaflet.marker(it.coordinates, {iconActive}).addTo(this._markersLayer);
      } else {
        leaflet.marker(it.coordinates, {icon}).addTo(this._markersLayer);
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
  activeOfferId: PropTypes.any.isRequired,
  city: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired
};

export default Map;
