//note: geojson original coordinates are changed to lat, lon as expected by the story function
var scenes=[
    {
      "type": "Feature",
      "properties": {
        "scene": "Iskenderun train station",
        "movie": "Indiana Jones and the Last Crusade",
        "location": "La estación de tren de Guadix (Granada)",
        "youtube": "", 
        "zoom":17,
        "photo":"guadix2.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          37.316814,
          -3.127156
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "scene": "Plane crash into a tunnel",
        "movie": "Indiana Jones and the Last crusade",
        "location": "Tunel in Cinto's hill,  Rodalquilar mine (Nijar)",
        "youtube": "", 
        "zoom":14,
        "photo":"cerrodelcinto.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.854746,
          -2.059867
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "scene": "Henry Jones Sr. scares the birds away with an umbrella",
        "movie": "Indiana Jones and the Last crusade",
        "location": "Monsul beach, Cabo de Gata (Almería)",
        "youtube": "<iframe width=",
        "zoom":17,
        "photo":"Monsul.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.73068571671117,
          -2.14582085609436
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "scene": "Rolls Royce scene",
        "movie": "Indiana Jones and the Last crusade",
        "location": "Escuela de Artes y Oficios Artísticos (Almería)",
        "zoom":17,
        "photo":"escuela_artes.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.83709580821883,
          -2.464486062526703
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "scene": "Iskenderun streets",
        "movie": "Indiana Jones and the Last crusade",
        "location": "29 Almanzor street, near the Alcazaba (Almeria)",
        "zoom":17,
        "photo":"calleAlmanzor29now.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.83995299684287,
          -2.4700275063514705
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "scene": "Indy in a horse",
        "movie": "Indiana Jones and the Last crusade",
        "location": "Ramblas deTrujillo, Indalecio y Buho in the <br/> Tabernas Desert",
        "zoom":16,
        "photo":"Tabernas2.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          37.051284,
          -2.412214
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "scene": "tank falls into climp",
        "movie": "Indiana Jones and the Last crusade",
        "location": "'Finca Las Lomillas', Tabernas Desert (Almeria)",
        "zoom":16,
        "photo":"tankfall4.png",
        "youtube": "www.youtube.com/embed/CvcpFTLZwrU"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          37.018224,
          -2.45268
        ]
      }
    }
];

function getCoordinates(sceneNumber) {
  var coordinates =scenes[sceneNumber].geometry.coordinates 
  return coordinates
};
function getZoom(sceneNumber) {
  var zoom =scenes[sceneNumber].properties.zoom
  return zoom
};

function getPopUpContent(sceneNumber) {
  var popupContent = "<table><tr><td><b>"+scenes[sceneNumber].properties.location+"</b></td></tr></table><img src='./photos/"+scenes[sceneNumber].properties.photo+"''>"
  return popupContent
};

m = map();

Story()
  .addState(Scroll('scene0', 400), m.moveTo(getCoordinates(0),getZoom(0),getPopUpContent(0)))
  .addState(Scroll('scene1', 400), m.moveTo(getCoordinates(1),getZoom(1),getPopUpContent(1)))
  .addState(Scroll('scene2', 400), m.moveTo(getCoordinates(2),getZoom(2),getPopUpContent(2)))
  .addState(Scroll('scene3', 400), m.moveTo(getCoordinates(3),getZoom(3),getPopUpContent(3)))
  .addState(Scroll('scene4', 400), m.moveTo(getCoordinates(4),getZoom(4),getPopUpContent(4)))
  .addState(Scroll('scene5', 400), m.moveTo(getCoordinates(5),getZoom(5),getPopUpContent(5)))
  .addState(Scroll('scene6', 400), m.moveTo(getCoordinates(6),getZoom(6),getPopUpContent(6)));


/*

//
// define an slide based story
// 
Story()
  .addState(Slide(1), m.moveTo([51.54, -0.08], 10))
  .addState(Slide(2), m.moveTo([51.53, -0.07], 20))
  .addState(Slide(3), m.moveTo([51.52, -0.075], 30));


//
// define an story that changes marker colors based on clicks
// 
Story()
  .addState(Click('#el1'), m.moveTo([51.54, -0.08]).changeMarkerStyle({ color: red }));
  .addState(Click('#el2'), m.moveTo([1.53, -1.4]).changeMarkerStyle({ color: blue}));


//
// custom triggers could be created in this way
//
function Click(el) {
  var plugin = {}
  StoryMapPlugg(pluggin);

  $(el).click(function() {
    pluggin.trigger();
  });

  // this function is called when the state has been activated
  pluggin.inverse = function() {
    $(el).style('color', 'red');
  }

  return plugin;
}

//
// custom map actions can be done too
// 

Map()


map.addAction('addMarker', function(storyMap) {
  function addMarker(pos, content)
    L.marker(pos).addTo(storyMap.map()).bindPopup(content);
    return storyMap;
  }
  return addMarker;
})
/*
//
// then we could have high level api with a json based stuff and templates
// 

var story = StoryMap.load(el, '/url/to/story.json');
story.goTo('name1')

*/






