// // Add console.log to check to see if our code is working.
// //console.log("working");

// // Create the map object with a center and zoom level.
// //let map = L.map("mapid", {
//     //center: [
//     //  40.7, -94.5
//   //  ],
//   //  zoom: 4
// //  });

// // We create the tile layer that will be the background of our map.
// // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3Jvb3NldmVsdCIsImEiOiJjbGN4dW1keWEwZ2pzM3JyN3AwaG1sdjdsIn0.ivkXNVs-fui5gYg0eB-0IQ', {
// // attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// //     maxZoom: 18,
// //     accessToken: API_KEY
// // });

// // Then we add our 'graymap' tile layer to the map.
// //streets.addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// //L.circleMarker([34.0522, -118.2437], {
//   //radius: 300, 
//   //color: "black",
//   //fillColor: '#ffffa1'
// //}).addTo(map);


// // Coordinates for each point to be used in the polyline.
// //let line = [
//   //[37.6213, -122.3790],
//   //[30.1975, -97.6664],
//   //[43.6777, -79.6248],
//   //[40.6413, -73.7781]
// //];


// // Create a polyline using the line coordinates and make the line red.
// //L.polyline(line, {
//   //color: "blue",
//   //weight: 4,
//  // opacity: 0.5,
//  // dashArray: '5,5'

// //}).addTo(map);

// // Create the map object with center at the San Francisco airport.
// //let map = L.map('mapid').setView([37.6214, -122.3790], 5);


// // Add GeoJSON data.
// //let sanFranAirport =
// //{"type":"FeatureCollection","features":[{
//    // "type":"Feature",
//    // "properties":{
// //         "id":"3469",
// //         "name":"San Francisco International Airport",
// //         "city":"San Francisco",
// //         "country":"United States",
// //         "faa":"SFO",
// //         "icao":"KSFO",
// //         "alt":"14",
// //         "tz-offset":"-8",
// //         "dst":"A",
// //         "tz":"America/Los_Angeles"},
// //         "geometry":{
// //             "type":"Point",
// //             "coordinates":[-122.375,37.61899948120117]}} //coordinates are reversed
// // ]};

// // Create the map object with center at the San Francisco airport.
// //let map = L.map('mapid').setView([37.5, -122.5], 10);


// //-------Geo JSON Layer------------//

// // Create the geoJSON layer and add it to our map using L.geoJSON()


// // let data = (sanFranAirport);
  
// //adding a marker with a callback function, pointoToLayer: function()
// //L.geoJson(data, { 
//     //pointToLayer: function(feature, latlng) {   //pas through geoJSON feature as FEATURE, lat long
//       //return L.marker(latlng); //adding the marker
//      //}
// //});

// //syntax for circle markers:circleMarker() 


// // Grabbing our GeoJSON data. with POP-UP
// // L.geoJSON(sanFranAirport, {
// //   // We turn each feature into a marker on the map.
// //   pointToLayer: function(feature, latlng) {
// //     console.log(feature);
// //     return L.marker(latlng)
// //     .bindPopup("<h2>" + feature.properties.city + "</h2>" + "<h3>" + feature.properties.name + "</h3>" )
// //   }
// // }).addTo(map);

// // //leaflet marked used to make a pop: bindPopup()

// // L.geoJSON(data, {
// //   onEachFeature: function(feature, layer) {
// //     layer.bindPopup();
// //    }
// // });



// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3Jvb3NldmVsdCIsImEiOiJjbGN4dW1keWEwZ2pzM3JyN3AwaG1sdjdsIn0.ivkXNVs-fui5gYg0eB-0IQ', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}',  {
// attribution:  'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   accessToken: API_KEY
// });


// // // Create a base layer that holds both maps.
// // let baseMaps = {
// //   Street: streets,
// //   Dark: dark
// // };

// let baseMaps = {
//   "Streets": streets,
//   "Satellite": satelliteStreets
// };

// let map = L.map('mapid', {
//   center: [43.7, -79.3],
//   zoom: 11,
//   layers: [satelliteStreets]
// })

// L.control.layers(baseMaps).addTo(map);


// // let airportData = "https://raw.githubusercontent.com/oroosevelt/Mapping_Earthquakes/main/majorAirports.json"

// // // Grabbing our GeoJSON data.
// // d3.json(airportData).then(function(data) {
// //   console.log(data);
// // // Creating a GeoJSON layer with the retrieved data.
// // L.geoJSON(data).addTo(map);
// // });


// // Accessing the Toronto airline routes GeoJSON URL.
// // let torontoData = "https://raw.githubusercontent.com/oroosevelt/Mapping_Earthquakes/main/torontoRoutes.json";

// // // Grabbing our GeoJSON data.
// // d3.json(torontoData).then(function(data) {
// //   console.log(data);
// // // Creating a GeoJSON layer with the retrieved data.
// // L.geoJSON(data).addTo(map);
// // });




// let torontoHoods = "https://raw.githubusercontent.com/oroosevelt/Mapping_Earthquakes/main/torontoNeighborhoods.json"


// d3.json(torontoHoods).then(function(data)  {
//   console.log(data);
//   L.geoJSON(data).addTo(map);
// ;});


//      EARTHQUAKE      //
// ADD CONSOLE TO CHECK TO SEE IF THE CODE IS WORKING
console.log("working");

// WE CREATE THE TILE LAYER THAT WILL BE THE BACKGROUND OF OUR MAP
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3Jvb3NldmVsdCIsImEiOiJjbGN4dW1keWEwZ2pzM3JyN3AwaG1sdjdsIn0.ivkXNVs-fui5gYg0eB-0IQ', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// WE CREATE THE TILE LAYER THAT WILL BE THE BACKGROUND OF OUR MAP
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token={accessToken}',  {
attribution:  'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});


// CREATE THE BASE LAYER THAT HOLDS BOTH MAPS
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};


// CREATE THE MAP OBJECT WITH THE CENTER, XOOM LEVEL AND DEFAULT LAYER
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});


// PASS OUR MAP INTO OUT LAYER CONTROL AND ADD THE LAYER CONTROL TO THE MAP 
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  L.geoJSON(data).addTo(map);
});



