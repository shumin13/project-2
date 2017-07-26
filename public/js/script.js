$(function() {

  $('.button-collapse').sideNav()
  $('.parallax').parallax()
  $('select').material_select()
  $('.scrollspy').scrollSpy()
})


function initUserMap() {
  // var eatery = {
  //   lat: {{eatery.lat}},
  //   lng: {{eatery.lng}}
  // }
  var userMap = new google.maps.Map(document.getElementById('userMap'), {
    zoom: 3,
    center: {
      lat: -28.024,
      lng: 140.887
    }
  })
  var results = currentUser.eatery
  console.log(results)
  window.eqfeed_callback = function(results) {
    for (var i = 0; i < results.length; i++) {
      var coords = results[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1], coords[0]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
  }
  var marker = new google.maps.Marker({
    position: eatery,
    map: map
  })
}



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

const $likeButton = $('#likeButton')
$likeButton.on('click', function(e) {
  alert('like')
})
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
// })
