// map.js
export function mapInit(database, mapboxgl) {
    const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v9', // stylesheet location
        center: [-98, 38.88], // starting position
        zoom: 4 // starting zoom
    });

    // Fetch data from Firebase Realtime Database
    const firebaseRef = database.ref('Sheet1');
    firebaseRef.once('value', function(snapshot) {
        const firebaseData = snapshot.val();

        const firebaseGeojsonFeatures = Object.keys(firebaseData).map(function(key) {
            const location = firebaseData[key];
            return {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [location.lon, location.lat]
                },
                properties: {
                    City: location.City,
                    State: location.State,
                    Population: location.Population
                }
            };
        });

        map.on('load', function() {
            map.addSource('firebase', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: firebaseGeojsonFeatures
                }
            });

            map.addLayer({
                id: 'firebase',
                source: 'firebase',
                type: 'circle',
                paint: {
                    'circle-color': 'green',
                    'circle-radius': 10
                }
            });

            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            map.on('mousemove', 'firebase', function(e) {
                const city = e.features[0].properties.City;
                const state = e.features[0].properties.State;
                const population = e.features[0].properties.Population;

                popup.setLngLat(e.lngLat).setHTML(`<h3>${city}, ${state}</h3><p>Population: ${population}</p>`).addTo(map);
            });

            map.on('mouseleave', 'firebase', function() {
                popup.remove();
            });
        });
    });
}
