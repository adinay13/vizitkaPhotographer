import React, { useEffect } from 'react';
import DG from '2gis-maps'

const Map = () => {
    useEffect(() => {
        let map
            map = DG.map("map", {
                center: [42.852193254971176, 74.61646845506412],
                zoom: 15
            });
            DG.marker([42.852193254971176, 74.61646845506412]).addTo(map).bindPopup('Медерова 99');
            // DG.marker([42.852193254971176, 74.61646845506412]).addTo(map).bindPopup('bruh');
        },[]);
    return (
        <div>
            <div id="map" style={{width:'400px', height:'280px'}}> 
            </div>
        </div>
    );
};

export default Map;