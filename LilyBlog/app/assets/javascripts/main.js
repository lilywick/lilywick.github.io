$(document).ready(function(){





  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( jQuery(window).height() - this.height() ) / 2+jQuery(window).scrollTop() + "px");
    this.css("left", ( jQuery(window).width() - this.width() ) / 2+jQuery(window).scrollLeft() + "px");
    return this;
  }

  

  $(".post").click(function(e){
    e.preventDefault();
    $('.modal').html(
      "<a href='#' class='close-modal'>Close(X)</a>" +   

      "<div class='title'>" + 
        $(this).data("title") +
      "</div>" +
      "<div class='image'>" +
        "<img src= " +  $(this).data("url") + ">"+
      "</div>" +

      "<div class='body'>" +
         $(this).data("body") +
      "</div>"      
      )

    $('.modal').center().show();
    $('.post').css("opacity", "0.25")


    $('.close-modal').click(function(){
      $('.close-modal').parent().hide();
      $('.post').css("opacity", "1")
    });
  });

});