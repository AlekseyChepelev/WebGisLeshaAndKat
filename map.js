const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([92.8576, 56.0153]), 
        zoom: 12 
    })
});

const polygon = new ol.geom.Polygon([[
    ol.proj.fromLonLat([92.811159, 56.017835]),
    ol.proj.fromLonLat([92.791729, 55.993152]),
    ol.proj.fromLonLat([92.797541, 55.991584]),
    ol.proj.fromLonLat([92.8494, 56.0127]),
    ol.proj.fromLonLat([92.811159, 56.017835])
]]);

const polygonFeature = new ol.Feature({
    geometry: polygon
});

polygonFeature.setStyle(new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 0, 0, 0.5)'
    }),
    stroke: new ol.style.Stroke({
        color: '#319FD3',
        width: 1
    })
}));

const vectorPSource = new ol.source.Vector({
    features: [polygonFeature]
});

const vectorLayer = new ol.layer.Vector({
    source: vectorPSource
});


const coordinates = [[92.811159, 56.017835], [92.791729, 55.993152]];

const vectorSource = new ol.source.Vector();

const markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'marker.png',
        scale: 0.05
    }),
    text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: '#fff'
        }),
        stroke: new ol.style.Stroke({
            color: '#000',
            width: 2
        }),
        offsetY: -15, 
        text: 'Берлога'
    })
});


coordinates.forEach(coord => {
    const marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(coord))
    });
    
    marker.setStyle(markerStyle);
    
    vectorSource.addFeature(marker);
});


const markerLayer = new ol.layer.Vector({
    source: vectorSource
});

map.addLayer(markerLayer);
map.addLayer(vectorLayer);