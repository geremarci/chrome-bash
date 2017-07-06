var someFun = function(){
    console.log('Kiraly')
}




$('#line-1').text('Hello')
.css('background-color', 'green')
.fadeToggle('slow', function toggleAgain(){
  $('#line-1').fadeToggle('slow', someFun); 
})
