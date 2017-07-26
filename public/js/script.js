$(function() {

  $('.button-collapse').sideNav()
  $('.parallax').parallax()
  $('select').material_select()
  $('.scrollspy').scrollSpy()

  // function initMap() {
  //   var uluru = {lat: -25.363, lng: 131.044};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }

 //    var map = new google.maps.Map(document.getElementById('map'), {
 //      center: {lat: -34.397, lng: 150.644},
 //      zoom: 10
 //    })
 //
 //    // if brower support available, ask user for location data and set the map view
 //   if (navigator.geolocation) {
 //     navigator.geolocation.getCurrentPosition(function(position) {
 //       var initialLocation = new google.maps.LatLng(
 //         position.coords.latitude,
 //         position.coords.longitude
 //       );
 //       map.setCenter(initialLocation);
 //     });
 //   }
 //
 //   // for each marker passed through, add it to the map with a popup
 //   markers.forEach(function(marker) {
 //     console.log(marker)
 //     var position = new google.maps.LatLng(marker.lat, marker.lng)
 //     var googleMarker = new google.maps.Marker({
 //       position: position,
 //       title: marker.name,
 //       map: map
 //     })
 //     // Bind a popup to the marker
 //     googleMarker.addListener('click', function() {
 //       var infoWindow = new google.maps.InfoWindow({
 //         content: '<h3>' + marker.name + '</h3>'
 //       })
 //       infoWindow.open(map, googleMarker)
 //     })
 //   })
 // }

  // const $newUserForm = $('#newUserForm')
  // $newUserForm.on('submit', function(e) {
  //   e.preventDefault()
  //   $formData = $(this).serializeArray()
  //
  //   var newUser = {
  //       name: $formData[0].value,
  //       email: $formData[1].value,
  //       password: $formData[2].value
  //   }
  //
  //   $.ajax({
  //     url: '/users/register',
  //     type: 'post',
  //     data: JSON.stringify(newUser),
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     success: function(data) {
  //       if (data.status === 'ok') {
  //         console.log('Hurray! ' + data.message)
  //       }
  //     }
  //   })
  // })
})
