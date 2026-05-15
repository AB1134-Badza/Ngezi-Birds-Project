var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NgeziRecreationalPark_1 = new ol.format.GeoJSON();
var features_NgeziRecreationalPark_1 = format_NgeziRecreationalPark_1.readFeatures(json_NgeziRecreationalPark_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgeziRecreationalPark_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgeziRecreationalPark_1.addFeatures(features_NgeziRecreationalPark_1);
var lyr_NgeziRecreationalPark_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NgeziRecreationalPark_1, 
                style: style_NgeziRecreationalPark_1,
                popuplayertitle: 'Ngezi Recreational Park',
                interactive: false,
                title: '<img src="styles/legend/NgeziRecreationalPark_1.png" /> Ngezi Recreational Park'
            });
var format_SouthBank_2 = new ol.format.GeoJSON();
var features_SouthBank_2 = format_SouthBank_2.readFeatures(json_SouthBank_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthBank_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthBank_2.addFeatures(features_SouthBank_2);
var lyr_SouthBank_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthBank_2, 
                style: style_SouthBank_2,
                popuplayertitle: 'South Bank',
                interactive: true,
                title: '<img src="styles/legend/SouthBank_2.png" /> South Bank'
            });
var format_NorthBank_3 = new ol.format.GeoJSON();
var features_NorthBank_3 = format_NorthBank_3.readFeatures(json_NorthBank_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthBank_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthBank_3.addFeatures(features_NorthBank_3);
var lyr_NorthBank_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthBank_3, 
                style: style_NorthBank_3,
                popuplayertitle: 'North Bank',
                interactive: true,
                title: '<img src="styles/legend/NorthBank_3.png" /> North Bank'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NgeziRecreationalPark_1.setVisible(true);lyr_SouthBank_2.setVisible(true);lyr_NorthBank_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NgeziRecreationalPark_1,lyr_SouthBank_2,lyr_NorthBank_3];
lyr_NgeziRecreationalPark_1.set('fieldAliases', {'WDPAID': 'WDPAID', 'ORIG_NAME': 'ORIG_NAME', 'Source': 'Source', });
lyr_SouthBank_2.set('fieldAliases', {'Species name': 'Species name', 'Number': 'Number', 'Observation Point': 'Observation Point', 'X': 'X', 'Y': 'Y', 'Area': 'Area', 'Activity': 'Activity', 'Time': 'Time', });
lyr_NorthBank_3.set('fieldAliases', {'Species name': 'Species name', 'Number': 'Number', 'Observation Point': 'Observation Point', 'X': 'X', 'Y': 'Y', 'Area': 'Area', 'Activity': 'Activity', 'Time': 'Time', });
lyr_NgeziRecreationalPark_1.set('fieldImages', {'WDPAID': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'Source': 'TextEdit', });
lyr_SouthBank_2.set('fieldImages', {'Species name': 'TextEdit', 'Number': 'Range', 'Observation Point': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Area': 'TextEdit', 'Activity': 'TextEdit', 'Time': 'TextEdit', });
lyr_NorthBank_3.set('fieldImages', {'Species name': 'TextEdit', 'Number': 'Range', 'Observation Point': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Area': 'TextEdit', 'Activity': 'TextEdit', 'Time': 'TextEdit', });
lyr_NgeziRecreationalPark_1.set('fieldLabels', {'WDPAID': 'no label', 'ORIG_NAME': 'no label', 'Source': 'no label', });
lyr_SouthBank_2.set('fieldLabels', {'Species name': 'inline label - always visible', 'Number': 'inline label - always visible', 'Observation Point': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'Area': 'no label', 'Activity': 'inline label - always visible', 'Time': 'no label', });
lyr_NorthBank_3.set('fieldLabels', {'Species name': 'inline label - always visible', 'Number': 'inline label - always visible', 'Observation Point': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'Area': 'inline label - always visible', 'Activity': 'inline label - always visible', 'Time': 'no label', });
lyr_NorthBank_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});