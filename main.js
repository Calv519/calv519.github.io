console.log("calvin is connected")

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader", "h1").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

/**------------------------------------------------------**/

// $('#downloaded').ready().hide()

$('.resume').click(function(){
	$('#downloaded').fadeIn(1000).delay(3000).fadeOut();
})

/**------------------------------------------------------**/

var $myForm = $('#my-form')

$myForm.submit(function(event){
event.preventDefault()
event.target.reset()
alert("Your Message Has been sent!")
})


/**------------------------------------------------------**/

// $('.submit').click(function(){
// 	$('')
// })