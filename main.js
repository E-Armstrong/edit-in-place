$(document).ready(function(){
    var nameInput
    $('#user-print').on( 'click', function(event) {
        $('#name-input').toggleClass('hidden');
        $('#user-print').toggleClass('hidden');
        $('#name-input').focus();
        $('#name-input').val($('#user-print')[0].innerText)
    })
    $('#name-input').on( 'blur', function() {
        $('#name-input').toggleClass('hidden');
        $('#user-print').toggleClass('hidden');
        $('#user-print').text($('#name-input')[0].value)
        console.log($('#name-input')[0].value)
    })
    $('#about-yourself-print').on( 'click', function(event) {
        $('#about-yourself-input').toggleClass('hidden');
        $('#about-yourself-print').toggleClass('hidden');
        $('#about-yourself-input').focus();
        $('#about-yourself-input').val($('#about-yourself-print')[0].innerText)
    })
    $('#about-yourself-input').on( 'blur', function() {
        $('#about-yourself-input').toggleClass('hidden');
        $('#about-yourself-print').toggleClass('hidden');
        $('#about-yourself-print').text($('#about-yourself-input')[0].value)
        console.log($('#about-yourself-input')[0].value)
    })
})

    

    // focus event , blur event, .target

    //`<div><input type="text" name="name" value="${nameInput}"></div>`

    var theInput = $(event.target).siblings()[0]
    $(theInput).val($(event.target).text())