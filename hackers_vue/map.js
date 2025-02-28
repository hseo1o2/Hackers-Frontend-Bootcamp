function loadMap(lat, lon) {
    const mapContainer = document.getElementById("map");
    const mapOption = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 7
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);
    const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, lon)
    });
    marker.setMap(map);
}
