// Initialize and add the map
async function initMap() {
    // The location of Uluru
    
    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
      async function getISS() {
      const response = await fetch(api_url);
      const data = await response.json();
      const {latitude, longitude} = data;
      return { lat: latitude, lng: longitude };
  }
  
      let issPos = await getISS();
    console.log(issPos);
    
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: issPos,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: issPos,
      map: map,
    });
  }
  
  window.initMap = initMap;