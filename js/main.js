$('.image-bubble').mouseover(function(){
  var id = (this).id
  $('.blurb#' + id).show();
})

$('.image-bubble').mouseleave(function(){
  var id = (this).id
  $('.blurb#' + id).hide();
})