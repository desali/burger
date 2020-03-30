ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [51.169392, 71.449074],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([51.169392, 71.449074], {
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));
}
