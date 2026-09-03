function initMap(){
    // Fortalcity
    const localizacao = { lat: -3.7172, lng: -38.5433};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: localizacao
    });

    new google.maps.Marker({
    position: localizacao,
    map: map,
    title: "Fortaleza, CE",
  });
}