"use client"
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import Map, { FullscreenControl, GeolocateControl, NavigationControl } from 'react-map-gl';

export default function MapPreview() {
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const [viewState, setViewState] = useState({
        latitude: 39.099724,
        longitude: -94.578331,
        zoom: 2,
    })

    return (
        <Map
            mapboxAccessToken={mapboxToken}
            {...viewState}
            style={{
                width: `52rem`,
                height: "38rem",
                borderRadius: "1rem",
                padding: "2rem",
                marginTop: "2rem",
                display: "block",
            }}
            onZoom={(e) => setViewState(e.viewState)}
            onMove={(e) => setViewState(e.viewState)}
            mapStyle="mapbox://styles/ahmedtakeshy/clu4jdg9z00sz01qs5z222bu1"
        >
            <NavigationControl />
            <GeolocateControl />
            <FullscreenControl />
        </Map>

    )
}