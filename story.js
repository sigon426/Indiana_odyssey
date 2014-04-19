function Map() {
  console.log('leaflet version: '+L.version)

  var map = L.map('map').setView([36.7, -2.4], 8);

  var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: " &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors",
    maxZoom: 18
  })
  var ggl = new L.Google();
  var ggl2 = new L.Google('TERRAIN');

  map.addLayer(ggl);

  L.control.layers({'OSM':osm, 'Google':ggl, 'Google Terrain':ggl2}, {}).addTo(map);

  return map;

};

function Story() {

  var triggers = [];
  var currentState = null;

  function story(t) {
  }

  story.addState = function(a, b, opts) {
    var i = triggers.length;
    triggers.push({
      a: a, 
      b: b,
      opts: opts
    });
    a.story(story, function() { 
      if (story.state() !== i) {
        story.state(i);
        b(); 
      }
    });
    b.story(story, function() { 
      if (story.state() !== i) {
        state.state(i);
        a(); 
      }
    });
    return story;
  };

  story.state = function(_) {
    if(_ === undefined) return currentState;
    currentState = _;
  };

  return story;


}

function map() {
  var map = Map()
  var story;

  function _m() {}

  _m.story = function(_) {
    story = _;
  };

  _m.moveTo = function(location, zoom, content) {
    var f = function() {
      map.panTo(location);
      map.setZoom(zoom);
      L.marker(location).addTo(map)
        .bindPopup(content);
      map.scrollWheelZoom.disable();

    };

    f.story = _m.story;
    return f;
  };
  return _m;
}

function StoryMapPluggin(m) {
}


function timeline() {
}



Scroll._scrolls = [];

function Scroll(el, px) {

  var story;
  var trigger;

  function scroll() {
  }
  scroll.el = el;
  scroll.px = px;

  if(Scroll._scrolls.length === 0) {
    window.addEventListener('scroll', function() {
      var t = null;
      Scroll._scrolls.forEach(function(s) {
        var e = document.getElementById(s.el);
        if(e.getBoundingClientRect().top < s.px) {
          t = s;
        }
      });
      if (t) {
        t.trigger();
      }
    });
  }

  Scroll._scrolls.push(scroll);

  scroll.inverse = function() {};
  scroll.trigger = function() { trigger(); };

  scroll.story = function(s, t) {
    story = s;
    trigger = t;
  };

  return scroll;
}
