$(document).ready(function(){

  showAllPictures();

  $('#search-button').on('click',function(){

    $.ajax({
      url: 'http://localhost:3000/buildings/search/' + $('#search-building-name').val(),
      dataType: 'json',
      method: 'GET'
    }).done(function(building_found){
      var html = '<h3>' + building_found.name + '</h3><br>'
      building_found.pictures.forEach(function(picture_data){
        // building an li with an image tag inside it.
        html =  html + "<li id='" + picture_data.id + "'>" + picture_data.img_tag + "</li>";
      });
      $('#pictures').html('');
      $('#pictures').html(html);
    })
    .fail(function(){
      alert("Error Getting Buildings");
    });
  })
});

// GET all the pictures from the backend server
function showAllPictures(){

  $.ajax({
    url: 'http://localhost:3000/pictures',
    dataType: 'json',
    method: 'GET'
  }).done(function(pictures_data){
    console.log(pictures_data);
    // for each picture in the picture data array
    pictures_data.forEach(function(picture_data){
      // building an li with an image tag inside it.
      var html = "<li id='" + picture_data.id + "'>" + picture_data.img_tag + "</li>";
      $('#pictures').append(html);
    })
  })
}
