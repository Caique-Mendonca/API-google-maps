function initMap(){
    // Fortalcity
    const localizacao = { lat: -3.7683492, lng: -38.4783066};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: localizacao
    });

    new google.maps.Marker({
    position: localizacao,
    map: map,
    title: "Fortaleza, CE",
  });
}