$(document).ready(function(){

$(function(){
  $('.posts-container').center();
  setupPosts();
  $(window).resize(setupPosts); 
});


  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( jQuery(window).height() - this.height() ) / 2+jQuery(window).scrollTop() + "px");
    this.css("left", ( jQuery(window).width() - this.width() ) / 2+jQuery(window).scrollLeft() + "px");
    return this;
  }

  var colCount = 0;
  var colWidth = 0;
  var margin = 20;
  var windowWidth = 0;
  var spaceLeft = 0;
  var posts = [];

  function setupPosts() {
      windowWidth = $(window).width();
      colWidth = $('.post').outerWidth();
      // colCount = Math.floor(windowWidth/(colWidth+margin));
      colCount = Math.floor(windowWidth/(colWidth+margin*2));
      spaceLeft = (windowWidth - ((colWidth*colCount)+(margin*(colCount-1)))) / 2;
      for(var i=0; i < colCount; i++) {
        posts.push(margin);
      }
      positionPosts();
  }

  function positionPosts() {
    $('.post').each(function(){
        var min = Array.min(posts);
        var index = $.inArray(min, posts);
        var leftPos = margin+(index*(colWidth+margin));
        debugger
        $(this).css({
            'left':(leftPos+ spaceLeft)/18 +'%',
            'top':min/7+'%'
        });
        posts[index] = min + $(this).outerHeight()+margin;
    });
}

  // Function to get the Min value in Array
  Array.min = function(array) {
      return Math.min.apply(Math, array);
  };

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