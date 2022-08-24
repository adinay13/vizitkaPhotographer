import React, { useEffect } from 'react';
import DG from '2gis-maps'

const Map = () => {
    useEffect(() => {
        var map;
        DG.then(function () {
            map = DG.map('map', {
                center: [42.852193254971176, 74.61646845506412],
                zoom: 15
            });
            DG.marker([42.852193254971176, 74.61646845506412]).addTo(map).bindPopup('bruh');
            DG.marker([42.852193254971176, 74.61646845506412]).addTo(map).bindPopup('bruh');
        });
    }, [])
    return (
        <div>
            <div style={ { width: 340, height: 200, borderRadius: 12 } } id="map"></div>
        </div>
    );
};

export default Map;