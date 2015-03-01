$(document).ready(function(){
  console.log("ready!");
  // headerIntercept();

})


function headerIntercept(){
  $('.header').on('click', function(event){
    event.preventDefault();
    console.log("CLICKED!");
    $.ajax({
      url: 'squirrelbingo.html',
      type: 'GET',
      dataType: 'html',
    })
    .done(function(a) {
      console.log("success");
      $('p.stuffs').html(a);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  })
}