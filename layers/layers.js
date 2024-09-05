var wms_layers = [];

var lyr_HealthHospitalsHEALTH001_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://public-services.slip.wa.gov.au/public/services/SLIP_Public_Services/Health/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Health Hospitals (HEALTH-001)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HealthHospitalsHEALTH001_0, 0]);
var lyr_CurrentActiveSchoolsSemester12022PublicDET020_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://public-services.slip.wa.gov.au/public/services/SLIP_Public_Services/Education/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Current Active Schools Semester 1 2022 - Public (DET-020)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CurrentActiveSchoolsSemester12022PublicDET020_1, 0]);
var format_WApublicschools2_2 = new ol.format.GeoJSON();
var features_WApublicschools2_2 = format_WApublicschools2_2.readFeatures(json_WApublicschools2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WApublicschools2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WApublicschools2_2.addFeatures(features_WApublicschools2_2);
var lyr_WApublicschools2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WApublicschools2_2, 
                style: style_WApublicschools2_2,
                popuplayertitle: "WA public schools2",
                interactive: true,
                title: '<img src="styles/legend/WApublicschools2_2.png" /> WA public schools2'
            });

lyr_HealthHospitalsHEALTH001_0.setVisible(true);lyr_CurrentActiveSchoolsSemester12022PublicDET020_1.setVisible(true);lyr_WApublicschools2_2.setVisible(true);
var layersList = [lyr_HealthHospitalsHEALTH001_0,lyr_CurrentActiveSchoolsSemester12022PublicDET020_1,lyr_WApublicschools2_2];
lyr_WApublicschools2_2.set('fieldAliases', {'Code': 'Code', 'field_2': 'field_2', 'School Name': 'School Name', 'Street': 'Street', 'field_5': 'field_5', 'Suburb': 'Suburb', 'State': 'State', 'Postcode': 'Postcode', 'field_9': 'field_9', 'Postal Street': 'Postal Street', 'Postal Suburb': 'Postal Suburb', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'Postal State': 'Postal State', 'Postal Postcode': 'Postal Postcode', 'Latitude': 'Latitude', 'field_18': 'field_18', 'Longitude': 'Longitude', 'field_20': 'field_20', 'Phone': 'Phone', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'Education Region': 'Education Region', 'field_26': 'field_26', 'field_27': 'field_27', 'Broad Classification': 'Broad Classification', 'field_29': 'field_29', 'field_30': 'field_30', 'Classification Group': 'Classification Group', 'field_32': 'field_32', 'Low Year': 'Low Year', 'High Year': 'High Year', 'field_35': 'field_35', 'KIN': 'KIN', 'field_37': 'field_37', 'PPR': 'PPR', 'field_39': 'field_39', 'Y01': 'Y01', 'field_41': 'field_41', 'Y02': 'Y02', 'field_43': 'field_43', 'Y03': 'Y03', 'field_45': 'field_45', 'Y04': 'Y04', 'field_47': 'field_47', 'Y05': 'Y05', 'field_49': 'field_49', 'Y06': 'Y06', 'field_51': 'field_51', 'UPR': 'UPR', 'field_53': 'field_53', 'Y07': 'Y07', 'field_55': 'field_55', 'Y08': 'Y08', 'field_57': 'field_57', 'Y09': 'Y09', 'field_59': 'field_59', 'Y10': 'Y10', 'field_61': 'field_61', 'Y11': 'Y11', 'field_63': 'field_63', 'Y12': 'Y12', 'USE': 'USE', 'Total Students': 'Total Students', });
lyr_WApublicschools2_2.set('fieldImages', {'Code': '', 'field_2': '', 'School Name': '', 'Street': '', 'field_5': '', 'Suburb': '', 'State': '', 'Postcode': '', 'field_9': '', 'Postal Street': '', 'Postal Suburb': '', 'field_12': '', 'field_13': '', 'field_14': '', 'Postal State': '', 'Postal Postcode': '', 'Latitude': '', 'field_18': '', 'Longitude': '', 'field_20': '', 'Phone': '', 'field_22': '', 'field_23': '', 'field_24': '', 'Education Region': '', 'field_26': '', 'field_27': '', 'Broad Classification': '', 'field_29': '', 'field_30': '', 'Classification Group': '', 'field_32': '', 'Low Year': '', 'High Year': '', 'field_35': '', 'KIN': '', 'field_37': '', 'PPR': '', 'field_39': '', 'Y01': '', 'field_41': '', 'Y02': '', 'field_43': '', 'Y03': '', 'field_45': '', 'Y04': '', 'field_47': '', 'Y05': '', 'field_49': '', 'Y06': '', 'field_51': '', 'UPR': '', 'field_53': '', 'Y07': '', 'field_55': '', 'Y08': '', 'field_57': '', 'Y09': '', 'field_59': '', 'Y10': '', 'field_61': '', 'Y11': '', 'field_63': '', 'Y12': '', 'USE': '', 'Total Students': '', });
lyr_WApublicschools2_2.set('fieldLabels', {'Code': 'no label', 'field_2': 'no label', 'School Name': 'inline label - always visible', 'Street': 'no label', 'field_5': 'no label', 'Suburb': 'no label', 'State': 'no label', 'Postcode': 'no label', 'field_9': 'no label', 'Postal Street': 'no label', 'Postal Suburb': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'Postal State': 'no label', 'Postal Postcode': 'no label', 'Latitude': 'no label', 'field_18': 'no label', 'Longitude': 'no label', 'field_20': 'no label', 'Phone': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'Education Region': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'Broad Classification': 'no label', 'field_29': 'no label', 'field_30': 'no label', 'Classification Group': 'no label', 'field_32': 'no label', 'Low Year': 'no label', 'High Year': 'no label', 'field_35': 'no label', 'KIN': 'no label', 'field_37': 'no label', 'PPR': 'no label', 'field_39': 'no label', 'Y01': 'no label', 'field_41': 'no label', 'Y02': 'no label', 'field_43': 'no label', 'Y03': 'no label', 'field_45': 'no label', 'Y04': 'no label', 'field_47': 'no label', 'Y05': 'no label', 'field_49': 'no label', 'Y06': 'no label', 'field_51': 'no label', 'UPR': 'no label', 'field_53': 'no label', 'Y07': 'no label', 'field_55': 'no label', 'Y08': 'no label', 'field_57': 'no label', 'Y09': 'no label', 'field_59': 'no label', 'Y10': 'no label', 'field_61': 'no label', 'Y11': 'no label', 'field_63': 'no label', 'Y12': 'no label', 'USE': 'no label', 'Total Students': 'no label', });
lyr_WApublicschools2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});