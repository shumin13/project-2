$(function() {

  $('.button-collapse').sideNav()
  $('.parallax').parallax()
  $('select').material_select()
  $('.scrollspy').scrollSpy()
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
