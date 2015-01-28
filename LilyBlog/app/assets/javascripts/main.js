$(document).ready(function(){

  $('.post').click(function(e){
    e.preventDefault();
    $('.modal').html(
      "<a href='/' class='close-modal'>Close(X)</a>" +   

      "<div class='post-content'>" +

        "<h1 class='title'>" + 
          $(this).data("title") +
        "</h1>" +
        "<div class='image'>" +
          "<img src= " +  $(this).data("url") + ">"+
        "</div>" +

         "<h3>" + $(this).data("body") + "</h3>" +
      "</div>"  
      )

    if ( $(this).data("body") == "") {
      $('h3').hide();
    }
    
    $('.modal').center().show();
    $('.post-content').css("position", "relative");
    $('.close-modal').css("padding", "3%");
    $('.title').css("padding", "3%");
    $('h3').css("position", "relative");
    $('h3').css("background-color", "white");
    $('h3').css("padding", "3%");
    $('h3').css("margin-top", "-25%");
    $('.image').css("position", "relative");
    $('.image').css("margin-bottom", "-15%");
    $('.image').css("margin-right", "40%");
    $('.image').css("top", "7%");
    $('.post').css("opacity", "0.25");

    // $('.close-modal').click(function(e){
    //   e.preventDefault()
    //   $('.modal').hide();
    //   $('.post').css("opacity", "1")
    // });
  });

});