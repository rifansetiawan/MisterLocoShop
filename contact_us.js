function initMap() {
    var Jakarta = {lat: -6.211898, lng:  106.783802};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: Jakarta
    });
    var marker = new google.maps.Marker({
        position: Jakarta,
        map: map
    });
}
