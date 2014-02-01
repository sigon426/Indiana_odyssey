//note: geojson coordinates are changed to lat, lon as spected by the story function
var scenes=[
    {
      "type": "Feature",
      "properties": {
        "scene": "Iskenderun train station",
        "movie": "Indiana Jones and the Last crusade",
        "location": "La estación de tren de Guadix",
        "youtube": "", 
        "zoom":13
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
        "scene": "Henry Jones Sr. scares the birds away with an umbrella",
        "movie": "Indiana Jones and the Last crusade",
        "location": "Playa del Monsul, Cabo de Gata",
        "youtube": "<iframe width=",
        "zoom":12,
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
        "location": "Escuela de Artes y Oficios de Almeria",
        "zoom":14
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          36.83709580821883,
          -2.464486062526703
        ]
      }
    }
];


m = map();

Story()
  .addState(Scroll('scene0', 400), m.moveTo(scenes[0].geometry.coordinates,scenes[0].properties.zoom))
  .addState(Scroll('scene1', 400), m.moveTo(scenes[1].geometry.coordinates,scenes[1].properties.zoom))
  .addState(Scroll('scene2', 400), m.moveTo(scenes[2].geometry.coordinates,scenes[2].properties.zoom));




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
var pos=scenes[1].geometry.coordinates;
var content="<b>"+scenes[1].properties.location+"</b><br /><img src='./photos/"+scenes[1].properties.photo+"''>"
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






