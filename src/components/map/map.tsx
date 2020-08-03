import * as React from "react";
import * as leaflet from "leaflet";
import {Offer} from "../../types";

interface Props {
  activeOfferId: any,
  city: [number, number],
  zoom: number,
  offers: Array<Offer>,
  className: string,
};

class Map extends React.PureComponent<Props, null> {
  private mapRef: React.RefObject<HTMLSelectElement>;
  private markersLayer: leaflet.LayerGroup;
  private map: leaflet.Map;

  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this.markersLayer = null;
    this.map = null;
  }

  componentDidMount() {
    const {city, zoom} = this.props;

    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
    });

    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.markersLayer = leaflet.layerGroup().addTo(this.map);
    this._renderMarkers();
  }

  componentWillUnmount() {
    this.mapRef.current.remove();
  }

  componentDidUpdate() {
    const {city, zoom} = this.props;

    this.markersLayer.clearLayers();
    this.map.setView(city, zoom);
    this._renderMarkers();
  }

  _renderMarkers() {
    const {activeOfferId, offers} = this.props;

    const iconPassive = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((it) => {
      if (it.id === activeOfferId) {
        leaflet.marker(it.location.coordinates, {icon: iconActive}).addTo(this.markersLayer);
      } else {
        leaflet.marker(it.location.coordinates, {icon: iconPassive}).addTo(this.markersLayer);
      }
    });
  }

  render() {
    return (
      <section ref={this.mapRef} className={this.props.className}></section>
    );
  }
}

export default Map;
