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
})

    

    // focus event , blur event, .target

    //`<div><input type="text" name="name" value="${nameInput}"></div>`

    var theInput = $(event.target).siblings()[0]
    $(theInput).val($(event.target).text())