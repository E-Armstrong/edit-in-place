$(document).ready(function(){

    $('.editable-in-place p').on('click', function(event){
        $(event.target).addClass('hidden')
        var theInput = $(event.target).siblings()[0]
        $(theInput).val($(event.target).text())
        $(theInput).removeClass('hidden')
        $(theInput).trigger('focus')

    })

    $('.editable-in-place input').on('blur', function(event){
        $(event.target).addClass('hidden')
        var theP = $(event.target).siblings()[0]
        $(theP).text($(event.target).val())
        $(theP).removeClass('hidden')
    })

    $('.editable-in-place p').on('click', function(event){
        $(event.target).addClass('hidden')
        var theInput = $(event.target).siblings()[0]
        $(theInput).val($(event.target).text())
        $(theInput).removeClass('hidden')
        $(theInput).trigger('focus')

    })


    $('.editable-in-place input').on('blur', function(event){
        $(event.target).addClass('hidden')
        var theP = $(event.target).siblings()[0]
        $(theP).text($(event.target).val())
        $(theP).removeClass('hidden')
    })

})

/* Alex's Input solutions
var userInput = $('.name-input').val()
console.log(userInput);
$('.name-placeholder').text(userInput);
$('.name-input').hide();
$('.name-placeholder').show();

var userInput = $('.about-input').val()
console.log(userInput);
$('.about-placeholder').text(userInput);
*/