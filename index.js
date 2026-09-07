const blocos = {
  A: { lat: -3.7709606, lng: -38.4811452 },
  B: { lat: -3.7706313, lng: -38.4814475 },
  C: { lat: -3.7697554, lng: -38.4813747 },
  D: { lat: -3.7704838, lng: -38.480685 },
  E: { lat: -3.7702775246720948, lng: -38.48154798042826 },
  F: { lat: -3.771455887662033, lng: -38.4781148507237 },
  H: { lat: -3.7679766428478665, lng: -38.48052101192406 },
  I: { lat: -3.769789293848495, lng: -38.47966806001635 },
  J: { lat: -3.7700559922456804, lng: -38.479347735978266 },
  K: { lat: -3.769438220825834, lng: -38.47870067159624 },
  L: { lat: -3.7708823964172327, lng: -38.47844535831124 },
  M: { lat: -3.768884002148117, lng: -38.478621943807305 },
  N: { lat: -3.7679208113139935, lng: -38.47884973610425 },
  O: { lat: -3.770653955112931, lng: -38.47762568920085 },
  P: { lat: -3.767709528875756, lng: -38.479081982487635 },
  Q: { lat: -3.7674140428267267, lng: -38.47941125358381 },
  R: { lat: -3.7671473436156635, lng: -38.479668328936924 },
  T: { lat: -3.7676844624367836, lng: -38.48020843908611 },
  X: { lat: -3.7698197192509957, lng: -38.476633561270525 },
  Z: { lat: -3.7692279901184067, lng: -38.47426873847581 },
};

let map;
let marcadorAtual;
document.querySelectorAll(".botao-ver").forEach((botao)=>{
  botao.addEventListener("click", ()=>{
    const nomeBloco = botao.dataset.bloco;
    const coordenada = blocos[nomeBloco]
    
    if (!coordenada) return;

    map.setCenter(coordenada);
    map.setZoom(19);


    if(marcadorAtual){
      marcadorAtual.setMap(null);
    }

    marcadorAtual = new google.maps.Marker({
      position: coordenada,
      map: map,
      title: `Bloco ${nomeBloco}`
    });


  });



});
function initMap(){
    // Fortalcity
    const localizacao = { lat: -3.7683492, lng: -38.4783066};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: localizacao
    });

}