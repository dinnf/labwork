// Initialize and add the map
function initMap() {
    if(navigator.geolocation){
        console.log("GPS Available");
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            document.getElementById('latitude').textContent = lat;
            const lon = position.coords.longitude;
            document.getElementById('longitude').textContent = lon;
                console.log(position);
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
               // The location of myLocation
                const myLocation = { lat: lat, lng:  lon};
                // The map, centered at myLocation
                const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: myLocation,
                });
                // The marker, positioned at myLocation
                const marker = new google.maps.Marker({
                position: myLocation,
                map: map,
                });
                    
            });
    }

  }
  
  window.initMap = initMap;