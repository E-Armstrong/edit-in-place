$(document).ready(function(){
    var nameInput
    $('.user-name.input').on( 'click', function(event) {
        nameInput = $('.user-name.input').text();
        $('.name-input-div').toggleClass('hidden');
        $('#name-input').focus();
        })
    $('#name-input').on( 'blur', function() {
        console.log("blur is working")
        $('.user-name.input').text(nameInput);
        $('.name-input-div').toggleClass('hidden');
        nameInput = $('.user-name.input').text();
    })
    
    
})

    

    // focus event , blur event, .target

    //`<div><input type="text" name="name" value="${nameInput}"></div>`