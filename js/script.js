var map;

function initMap() {

  // Add a map for downtown chicago and set options
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.87988039372353, lng: -87.61959235395719},
    zoom: 12,
  });

  // Add 3 locations with markers on the map
  const marker1 = new google.maps.Marker({
      position: {lat: 41.8789962026716, lng: -87.63591490217294},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Willis Tower"

  });

  const marker2 = new google.maps.Marker({
      position: {lat: 41.882776995581935, lng: -87.62325025799339},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Cloud Gate"

  });

  const marker3 = new google.maps.Marker({
      position: {lat: 41.83504590908145, lng: -87.6262270159924},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "IIT"

  });

  // Add information to the markers

  // Add info to the Willss Tower
  const marker1_info = new google.maps.InfoWindow({
  content: '<h2>Willis Tower</h2> <p>The Willis Tower is a 108-story, 1,450-foot (442.1 m) skyscraper in Chicago. At completion in 1974, it surpassed the World Trade Center in New York City to become the tallest building in the world, a title that it held for nearly 25 years.</p>'
  });

  marker.addListener('click', function(){
  marker1_info.open(map, marker1);
  });


}
