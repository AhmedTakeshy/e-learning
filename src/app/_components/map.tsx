
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl';

export default function MapPreview() {
    return (
        <Map
            mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/ahmedtakeshy/clu46l8c700oz01mjbqz444l4"
        />
    )
}
