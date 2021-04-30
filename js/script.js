var map;
function initMap() {

  // Add a map for downtown Chicago and set options
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.87988039372353, lng: -87.61959235395719},
    zoom: 14,
  });

  // Add 3 locations with markers on the map
  const marker1 = new google.maps.Marker({
      position: {lat: 41.8789962026716, lng: -87.63591490217294},
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Willis Tower"

  });

  const marker2 = new google.maps.Marker({
      position: {lat: 41.882776995581935, lng: -87.62325025799339},
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Cloud Gate"

  });

  const marker3 = new google.maps.Marker({
      position: {lat: 41.83504590908145, lng: -87.6262270159924},
      map: map,
      animation: google.maps.Animation.DROP,
      title: "IIT"

  });

  // Add info window to the Willss Tower
  const willis_tower = '<h2>Willis Tower</h2> <p>The Willis Tower is a 108-story, 1,450-foot (442.1 m) skyscraper in Chicago. At completion in 1974, it surpassed the World Trade Center in New York City to become the tallest building in the world, a title that it held for nearly 25 years.</p>'
  const marker1_info = new google.maps.InfoWindow({
  content: willis_tower
  });

  // Add info window to the Cloud Gate
  const cloud_gate = '<h2>Cloud Gate</h2> <p>Cloud Gate is a public sculpture by Indian-born British artist Sir Anish Kapoor, that is the centerpiece of AT&T Plaza at Millennium Park in the Loop community area of Chicago, Illinois.</p>'
  const marker2_info = new google.maps.InfoWindow({
  content: cloud_gate
  });

  // Add info window to IIT
  const iit = '<h2>Illinois Institute of Technology</h2> <p>Illinois Institute of Technology (Illinois Tech) is a private research university in Chicago, Illinois. Tracing its history to 1890, the present name was adopted upon the merger of the Armour Institute and Lewis Institute in 1940.</p>'
  const marker3_info = new google.maps.InfoWindow({
  content: iit
  });

  // Add functions for clicking
  marker1.addListener("click", () => {
    marker1_info.open(map, marker1);
    marker1.setAnimation(google.maps.Animation.BOUNCE);
  })

  marker2.addListener("click", () => {
    marker2_info.open(map, marker2);
    marker2.setAnimation(google.maps.Animation.BOUNCE);
  })

  marker3.addListener("click", () => {
    marker3_info.open(map, marker3);
    marker3.setAnimation(google.maps.Animation.BOUNCE);
  })
}


$(document).ready(function(){
  $('.slider').bxSlider({
    captions: true
  });
});
