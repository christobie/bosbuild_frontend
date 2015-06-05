$(document).ready(function(){

  showAllPictures();
});


// GET all the pictures from the backend server
function showAllPictures(){

  $.ajax({
    url: 'http://localhost:3000/pictures',
    dataType: 'json',
    method: 'GET'
  }).done(function(pictures_data){
    debugger;
    console.log(pictures_data);
    // for each picture in the picture data array
    pictures_data.forEach(function(picture_data){
      // building an li with an image tag inside it.
      var html = "<li id='" + picture_data.id + "'>" + picture_data.img_tag + "</li>";

      $('#pictures').append(html);
    })
  })
}
