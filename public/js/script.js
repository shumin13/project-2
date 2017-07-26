$(function() {
  $('.button-collapse').sideNav()
  $('.parallax').parallax()
  $('select').material_select()
  $('.scrollspy').scrollSpy()

  var $likeButton = $('#likeButton')
  $likeButton.on('click', function(e) {
    alert('like')
  })
})

function initMap() {
  var latLng = new google.maps.LatLng(eatery.coordinates[0], eatery.coordinates[1])
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: latLng
  })
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  })
}

function initUserMap() {
  var userMap = new google.maps.Map(document.getElementById('userMap'), {
    zoom: 11,
    center: {
      lat: 1.3521,
      lng: 103.8198
    },
    mapTypeId: 'hybrid'
  })

  var results = [{
      _id: "5977450f0cac3e18fdff62c8",
      lng: 103.86005,
      lat: 1.303859,
      name: 'The Ramen Stall',
      coordinates: [1.303859, 103.86005]
    },
    {
      _id: "597745bd0cac3e18fdff62c9",
      lng: 103.8599,
      lat: 1.3042,
      name: 'Kumoya',
      coordinates: [1.3042, 103.8599]
    }
  ]

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var initialLocation = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      )
      userMap.setCenter(initialLocation)
    })
  }

  for (var i = 0; i < results.length; i++) {
    var coords = results[i].coordinates
    var latLng = new google.maps.LatLng(coords[0], coords[1])
    var marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      map: userMap
    })
    attachName(marker, results[i].name)
  }

  function attachName(marker, name) {
    var infowindow = new google.maps.InfoWindow({
      content: name
    })
    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker)
    })
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null)
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE)
    }
  }
}

// $.ajax({
//   url: '/users/profile',
//   type: 'POST',
//   data: currentUser
// }).done(function(data) {
//   console.log(data)
// })
// }
