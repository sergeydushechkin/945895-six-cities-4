import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const {city, activeOfferId, offers} = this.props;

    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

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

    offers.forEach((it) => {
      if (it.id === activeOfferId) {
        leaflet.marker(it.coordinates, {iconActive}).addTo(map);
      } else {
        leaflet.marker(it.coordinates, {icon}).addTo(map);
      }
    });
  }

  componentWillUnmount() {
    this._mapRef.current.remove();
  }

  render() {
    return <section ref={this._mapRef} className="cities__map map"></section>;
  }
}

Map.propTypes = {
  activeOfferId: PropTypes.any.isRequired,
  city: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired
};

export default Map;
