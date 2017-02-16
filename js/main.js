
$(function() {

  $('.switch').click(function(){

    $('button').toggleClass('on off');
    $('body').toggleClass('light dark');

    if( $('h1.status').text() === "It's so bright in here!" ){
      $('h1.status').text("it's dark here");

    } else{
      $('h1.status').text("It's so bright in here!");
    }
  });

});
