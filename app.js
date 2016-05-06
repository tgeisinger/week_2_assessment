$(document).ready(function() {
var counter = 1
$('#button').on('click',function(){
  $('#delete').append('<button id = "deleteb"> Delete </button>');
  $('#color').append('<button id = "colorc" > Change color </button>');
  $('span').text(counter++);


$('#deleteb').on('click',function() {
  $('#delete').remove();

$('#colorc').on('click',function () {
  $('#colorc').css('background-color','red');



});
  });
});
});
