var wms_layers = [];


        var lyr_CITRAGOOGLE_0 = new ol.layer.Tile({
            'title': 'CITRA GOOGLE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_IntensitasCahayaMatahari_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Intensitas Cahaya Matahari",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IntensitasCahayaMatahari_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12489870.678867, -104630.388890, 12572989.231993, -54718.129198]
                            })
                        });
var lyr_elevasi_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "elevasi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/elevasi_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12489857.724418, -104731.162918, 12573028.561834, -54698.429484]
                            })
                        });
var format_KemiringanLereng_3 = new ol.format.GeoJSON();
var features_KemiringanLereng_3 = format_KemiringanLereng_3.readFeatures(json_KemiringanLereng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KemiringanLereng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KemiringanLereng_3.addFeatures(features_KemiringanLereng_3);
var lyr_KemiringanLereng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KemiringanLereng_3, 
                style: style_KemiringanLereng_3,
                popuplayertitle: "Kemiringan Lereng",
                interactive: true,
    title: 'Kemiringan Lereng<br />\
    <img src="styles/legend/KemiringanLereng_3_0.png" /> 0% - 2%<br />\
    <img src="styles/legend/KemiringanLereng_3_1.png" /> 2%-15%<br />\
    <img src="styles/legend/KemiringanLereng_3_2.png" /> 15%-25%<br />\
    <img src="styles/legend/KemiringanLereng_3_3.png" /> 25%-40%<br />\
    <img src="styles/legend/KemiringanLereng_3_4.png" /> >40%<br />'
        });
var format_Kontur_4 = new ol.format.GeoJSON();
var features_Kontur_4 = format_Kontur_4.readFeatures(json_Kontur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_4.addFeatures(features_Kontur_4);
var lyr_Kontur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_4, 
                style: style_Kontur_4,
                popuplayertitle: "Kontur",
                interactive: true,
                title: '<img src="styles/legend/Kontur_4.png" /> Kontur'
            });
var format_ANALISISPRIORITAS_5 = new ol.format.GeoJSON();
var features_ANALISISPRIORITAS_5 = format_ANALISISPRIORITAS_5.readFeatures(json_ANALISISPRIORITAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANALISISPRIORITAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANALISISPRIORITAS_5.addFeatures(features_ANALISISPRIORITAS_5);
var lyr_ANALISISPRIORITAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANALISISPRIORITAS_5, 
                style: style_ANALISISPRIORITAS_5,
                popuplayertitle: "ANALISIS PRIORITAS",
                interactive: true,
    title: 'ANALISIS PRIORITAS<br />\
    <img src="styles/legend/ANALISISPRIORITAS_5_0.png" /> RENDAH<br />\
    <img src="styles/legend/ANALISISPRIORITAS_5_1.png" /> SEDANG<br />\
    <img src="styles/legend/ANALISISPRIORITAS_5_2.png" /> TINGGI<br />'
        });
var format_TutupanLahan_6 = new ol.format.GeoJSON();
var features_TutupanLahan_6 = format_TutupanLahan_6.readFeatures(json_TutupanLahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TutupanLahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TutupanLahan_6.addFeatures(features_TutupanLahan_6);
var lyr_TutupanLahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TutupanLahan_6, 
                style: style_TutupanLahan_6,
                popuplayertitle: "Tutupan Lahan",
                interactive: true,
    title: 'Tutupan Lahan<br />\
    <img src="styles/legend/TutupanLahan_6_0.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/TutupanLahan_6_1.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/TutupanLahan_6_2.png" /> Lahan Terbuka<br />\
    <img src="styles/legend/TutupanLahan_6_3.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/TutupanLahan_6_4.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/TutupanLahan_6_5.png" /> Semak Belukar<br />'
        });
var lyr_AboveGroundBiomass_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Above Ground Biomass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AboveGroundBiomass_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12489883.435284, -104610.501559, 12572983.435284, -54806.486171]
                            })
                        });
var format_Geologi_8 = new ol.format.GeoJSON();
var features_Geologi_8 = format_Geologi_8.readFeatures(json_Geologi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologi_8.addFeatures(features_Geologi_8);
var lyr_Geologi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geologi_8, 
                style: style_Geologi_8,
                popuplayertitle: "Geologi",
                interactive: true,
    title: 'Geologi<br />\
    <img src="styles/legend/Geologi_8_0.png" /> Formasi Mentemoi<br />\
    <img src="styles/legend/Geologi_8_1.png" /> Granit<br />\
    <img src="styles/legend/Geologi_8_2.png" /> Intrusi Sintang<br />\
    <img src="styles/legend/Geologi_8_3.png" /> Malihan Pinoh<br />\
    <img src="styles/legend/Geologi_8_4.png" /> Tonalit Sepauk<br />'
        });
var format_JenisTanahAgroklimate_9 = new ol.format.GeoJSON();
var features_JenisTanahAgroklimate_9 = format_JenisTanahAgroklimate_9.readFeatures(json_JenisTanahAgroklimate_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanahAgroklimate_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanahAgroklimate_9.addFeatures(features_JenisTanahAgroklimate_9);
var lyr_JenisTanahAgroklimate_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JenisTanahAgroklimate_9, 
                style: style_JenisTanahAgroklimate_9,
                popuplayertitle: "Jenis Tanah (Agroklimate)",
                interactive: true,
    title: 'Jenis Tanah (Agroklimate)<br />\
    <img src="styles/legend/JenisTanahAgroklimate_9_0.png" /> Haplohumults , Hapludox<br />\
    <img src="styles/legend/JenisTanahAgroklimate_9_1.png" /> Hapludox , Palehumults<br />\
    <img src="styles/legend/JenisTanahAgroklimate_9_2.png" /> Hapludults , Dystrudepts<br />'
        });
var format_Tanah_FAO_10 = new ol.format.GeoJSON();
var features_Tanah_FAO_10 = format_Tanah_FAO_10.readFeatures(json_Tanah_FAO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanah_FAO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanah_FAO_10.addFeatures(features_Tanah_FAO_10);
var lyr_Tanah_FAO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanah_FAO_10, 
                style: style_Tanah_FAO_10,
                popuplayertitle: "Tanah_FAO",
                interactive: true,
    title: 'Tanah_FAO<br />\
    <img src="styles/legend/Tanah_FAO_10_0.png" /> Humic Acrisols<br />\
    <img src="styles/legend/Tanah_FAO_10_1.png" /> Humic Ferralsols<br />\
    <img src="styles/legend/Tanah_FAO_10_2.png" /> Orthic Acrisols<br />'
        });
var format_Sungai_11 = new ol.format.GeoJSON();
var features_Sungai_11 = format_Sungai_11.readFeatures(json_Sungai_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_11.addFeatures(features_Sungai_11);
var lyr_Sungai_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_11, 
                style: style_Sungai_11,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_11.png" /> Sungai'
            });
var format_Grid_5_x_5_12 = new ol.format.GeoJSON();
var features_Grid_5_x_5_12 = format_Grid_5_x_5_12.readFeatures(json_Grid_5_x_5_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_5_x_5_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_5_x_5_12.addFeatures(features_Grid_5_x_5_12);
var lyr_Grid_5_x_5_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_5_x_5_12, 
                style: style_Grid_5_x_5_12,
                popuplayertitle: "Grid_5_x_5",
                interactive: true,
                title: '<img src="styles/legend/Grid_5_x_5_12.png" /> Grid_5_x_5'
            });
var group_FisikWilayah = new ol.layer.Group({
                                layers: [lyr_Geologi_8,lyr_JenisTanahAgroklimate_9,lyr_Tanah_FAO_10,],
                                fold: "open",
                                title: "Fisik Wilayah"});
var group_Topografi = new ol.layer.Group({
                                layers: [lyr_elevasi_2,lyr_KemiringanLereng_3,lyr_Kontur_4,],
                                fold: "open",
                                title: "Topografi"});

lyr_CITRAGOOGLE_0.setVisible(true);lyr_IntensitasCahayaMatahari_1.setVisible(true);lyr_elevasi_2.setVisible(true);lyr_KemiringanLereng_3.setVisible(false);lyr_Kontur_4.setVisible(false);lyr_ANALISISPRIORITAS_5.setVisible(true);lyr_TutupanLahan_6.setVisible(false);lyr_AboveGroundBiomass_7.setVisible(false);lyr_Geologi_8.setVisible(false);lyr_JenisTanahAgroklimate_9.setVisible(false);lyr_Tanah_FAO_10.setVisible(false);lyr_Sungai_11.setVisible(false);lyr_Grid_5_x_5_12.setVisible(true);
var layersList = [lyr_CITRAGOOGLE_0,lyr_IntensitasCahayaMatahari_1,group_Topografi,lyr_ANALISISPRIORITAS_5,lyr_TutupanLahan_6,lyr_AboveGroundBiomass_7,group_FisikWilayah,lyr_Sungai_11,lyr_Grid_5_x_5_12];
lyr_KemiringanLereng_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'grid_code': 'Grid Code', 'Prov': 'Prov', 'Resort': 'Resort', 'Ha': 'Ha', 'Kelas_Lere': 'Kelas Lereng', 'Klasifikas': 'Klasifikas', });
lyr_Kontur_4.set('fieldAliases', {'ID': 'ID', 'CONTOUR': 'CONTOUR', });
lyr_ANALISISPRIORITAS_5.set('fieldAliases', {'PageName': 'PageName', 'grid_1': 'GRID', 'Geologi_1': 'Formasi Geologi', 'J_GEOLOG_1': 'Jumlah Formasi Geologi', 'B_GEOLOG_1': 'Bobot Geologi', 'J_SLOPE_1': 'Jumlah Klasifikasi Lereng', 'B_SLOPE_1': 'Bobot Lereng', 'JENISTAN_1': 'Jenis Tanah (Agroklimat)', 'J_JENIST_1': 'Jumlah Jenis Tanah (Agroklimat)', 'B_JENIST_1': 'Bobot Jenis Tanah (Agroklimat)', 'FAO_JENI_1': 'Jenis Tanah (FAO)', 'FAO_J_JT_1': 'Jumlah Jenis Tanah (FAO)', 'B_FAO_JT_1': 'Bobot Jenis Tanah (FAO)', 'PERSEN_PRI': 'Persentase Hutan Primer', 'PERSEN_SEK': 'Persentase Hutan Sekunder', 'PERSEN_OP': 'Persentase Open Area', 'B_PL_1': 'Bobot Penutup Lahan', 'DENSITY__1': 'Kepadatan Sungai (meter/ha)', 'B_DRAINA_1': 'Bobot Kepadatan Sungai', 'MEAN_BIO_1': 'Rerata AGB', 'B_BIOMAS_1': 'bobot AGB', 'MEAN_INTEN': 'Rerata Intensitas Sinar Matahari', 'B_MATAHARI': 'Bobot Intensitas Sinar Matahari', 'KONTUR': 'Jumlah Kontur', 'B_KONTUR': 'Bobot Kontur', 'TOTAL_BOBO': 'Total Bobot', 'PRIORITAS': 'PRIORITAS', });
lyr_TutupanLahan_6.set('fieldAliases', {'LUAS_HA': 'Luas (ha)', 'PL2024_ID1': 'Penutup Lahan', });
lyr_Geologi_8.set('fieldAliases', {'SYMBOLS': 'Simbol', 'NAME': 'Nama', 'FORMATION': 'Formasi', 'T_CLASS_EN': 'Deskripsi', });
lyr_JenisTanahAgroklimate_9.set('fieldAliases', {'SPT': 'SPT', 'BHN_INDUK': 'Bahan Induk', 'Klas_Tot': 'Kelas Gabungan', });
lyr_Tanah_FAO_10.set('fieldAliases', {'NAMESOIL': 'NAMESOIL', });
lyr_Sungai_11.set('fieldAliases', {'KODE_UNSUR': 'Kode Unsur', 'NAMA_UNSUR': 'Nama Unsur', 'TOPONIM': 'Toponimi', 'PANJANG': 'Panjang (meter)', });
lyr_Grid_5_x_5_12.set('fieldAliases', {'PageName': 'PageName', 'PageNumber': 'PageNumber', 'Shape_Leng': 'Shape_Leng', 'luas': 'luas', 'Open_Area': 'Open_Area', 'Prioritas2': 'Prioritas2', });
lyr_KemiringanLereng_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'grid_code': 'TextEdit', 'Prov': 'TextEdit', 'Resort': 'TextEdit', 'Ha': 'TextEdit', 'Kelas_Lere': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_Kontur_4.set('fieldImages', {'ID': '', 'CONTOUR': '', });
lyr_ANALISISPRIORITAS_5.set('fieldImages', {'PageName': 'TextEdit', 'grid_1': 'TextEdit', 'Geologi_1': 'TextEdit', 'J_GEOLOG_1': 'TextEdit', 'B_GEOLOG_1': 'TextEdit', 'J_SLOPE_1': 'TextEdit', 'B_SLOPE_1': 'TextEdit', 'JENISTAN_1': 'TextEdit', 'J_JENIST_1': 'TextEdit', 'B_JENIST_1': 'TextEdit', 'FAO_JENI_1': 'TextEdit', 'FAO_J_JT_1': 'TextEdit', 'B_FAO_JT_1': 'TextEdit', 'PERSEN_PRI': 'TextEdit', 'PERSEN_SEK': 'TextEdit', 'PERSEN_OP': 'TextEdit', 'B_PL_1': 'TextEdit', 'DENSITY__1': 'TextEdit', 'B_DRAINA_1': 'TextEdit', 'MEAN_BIO_1': 'TextEdit', 'B_BIOMAS_1': 'TextEdit', 'MEAN_INTEN': 'TextEdit', 'B_MATAHARI': 'TextEdit', 'KONTUR': 'TextEdit', 'B_KONTUR': 'TextEdit', 'TOTAL_BOBO': 'TextEdit', 'PRIORITAS': 'TextEdit', });
lyr_TutupanLahan_6.set('fieldImages', {'LUAS_HA': 'TextEdit', 'PL2024_ID1': 'TextEdit', });
lyr_Geologi_8.set('fieldImages', {'SYMBOLS': 'TextEdit', 'NAME': 'TextEdit', 'FORMATION': 'TextEdit', 'T_CLASS_EN': 'TextEdit', });
lyr_JenisTanahAgroklimate_9.set('fieldImages', {'SPT': 'TextEdit', 'BHN_INDUK': 'TextEdit', 'Klas_Tot': 'TextEdit', });
lyr_Tanah_FAO_10.set('fieldImages', {'NAMESOIL': 'TextEdit', });
lyr_Sungai_11.set('fieldImages', {'KODE_UNSUR': 'TextEdit', 'NAMA_UNSUR': 'TextEdit', 'TOPONIM': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_Grid_5_x_5_12.set('fieldImages', {'PageName': 'TextEdit', 'PageNumber': 'TextEdit', 'Shape_Leng': 'TextEdit', 'luas': 'TextEdit', 'Open_Area': 'TextEdit', 'Prioritas2': 'TextEdit', });
lyr_KemiringanLereng_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'grid_code': 'inline label - always visible', 'Prov': 'inline label - always visible', 'Resort': 'inline label - always visible', 'Ha': 'inline label - always visible', 'Kelas_Lere': 'inline label - always visible', 'Klasifikas': 'inline label - always visible', });
lyr_Kontur_4.set('fieldLabels', {'ID': 'inline label - always visible', 'CONTOUR': 'inline label - always visible', });
lyr_ANALISISPRIORITAS_5.set('fieldLabels', {'PageName': 'inline label - always visible', 'grid_1': 'inline label - always visible', 'Geologi_1': 'inline label - always visible', 'J_GEOLOG_1': 'inline label - always visible', 'B_GEOLOG_1': 'inline label - always visible', 'J_SLOPE_1': 'inline label - always visible', 'B_SLOPE_1': 'inline label - always visible', 'JENISTAN_1': 'inline label - visible with data', 'J_JENIST_1': 'inline label - visible with data', 'B_JENIST_1': 'inline label - always visible', 'FAO_JENI_1': 'inline label - always visible', 'FAO_J_JT_1': 'inline label - always visible', 'B_FAO_JT_1': 'inline label - always visible', 'PERSEN_PRI': 'inline label - always visible', 'PERSEN_SEK': 'inline label - always visible', 'PERSEN_OP': 'inline label - always visible', 'B_PL_1': 'inline label - always visible', 'DENSITY__1': 'inline label - always visible', 'B_DRAINA_1': 'inline label - always visible', 'MEAN_BIO_1': 'inline label - always visible', 'B_BIOMAS_1': 'inline label - always visible', 'MEAN_INTEN': 'inline label - visible with data', 'B_MATAHARI': 'inline label - always visible', 'KONTUR': 'inline label - always visible', 'B_KONTUR': 'inline label - always visible', 'TOTAL_BOBO': 'inline label - always visible', 'PRIORITAS': 'inline label - visible with data', });
lyr_TutupanLahan_6.set('fieldLabels', {'LUAS_HA': 'inline label - always visible', 'PL2024_ID1': 'inline label - always visible', });
lyr_Geologi_8.set('fieldLabels', {'SYMBOLS': 'inline label - always visible', 'NAME': 'inline label - always visible', 'FORMATION': 'inline label - always visible', 'T_CLASS_EN': 'inline label - always visible', });
lyr_JenisTanahAgroklimate_9.set('fieldLabels', {'SPT': 'inline label - always visible', 'BHN_INDUK': 'inline label - always visible', 'Klas_Tot': 'inline label - always visible', });
lyr_Tanah_FAO_10.set('fieldLabels', {'NAMESOIL': 'inline label - always visible', });
lyr_Sungai_11.set('fieldLabels', {'KODE_UNSUR': 'inline label - always visible', 'NAMA_UNSUR': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'PANJANG': 'inline label - always visible', });
lyr_Grid_5_x_5_12.set('fieldLabels', {'PageName': 'inline label - always visible', 'PageNumber': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'luas': 'inline label - always visible', 'Open_Area': 'inline label - always visible', 'Prioritas2': 'inline label - always visible', });
lyr_Grid_5_x_5_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});