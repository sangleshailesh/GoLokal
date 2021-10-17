// ------------------------------------------ Groccery page java script  --------------------------------------

// Initialize and add the map
function initMap() {
    // The location of india
    const india = { lat: 18.9977, lng: 72.8376 };
    // The map, centered at india
    const map = new google.maps.Map(document.getElementById("map"), {
      // world = 1
      // landmass/continent = 5
      // city = 10
      // streets = 15
      // building = 20
      zoom: 15,
      center: india,
    });
    // The marker, positioned at india
    const marker = new google.maps.Marker({
      position: india,
      map: map,
      label: "A",
    });
    const contentString = `<div class="map-parent">
                              <img src="./img/groccery.jpg" alt="">
                              <div class="map-store-name">
                                <p>Raju kirana store</p>
                                <div class="map-distance">
                                    <img src="./img/location.svg" alt="">
                                    <p>0.3Km</p>
                                </div>
                              </div>
                            </div>`;
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 231,
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
    });
    var blackShadow =document.getElementsByClassName("gm-style");
    blackShadow[0].children[1].children[2].style.backgroundColor= "rgba(0,0,0,0.45)";
    });
  }
  
  document.addEventListener('mouseup', function(e) {
    var container = document.getElementsByClassName("gm-style-iw-t");
    if (!container[0].contains(e.target)) {
      container[0].style.display = 'none';
      var blackShadow =document.getElementsByClassName("gm-style");
      blackShadow[0].children[1].children[2].style.backgroundColor= "rgba(0, 0, 0, 0)";
    }
  });

