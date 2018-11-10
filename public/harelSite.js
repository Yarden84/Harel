//Accessibility Menu: 

$('#accessibility').click(function () {
    $('#accMenu').toggleClass('hideAccMenu');
});

$('#accMenu li:nth-child(1)').click(function () {
    $('body').css('filter', 'none');
    $('#accMenu').addClass('hideAccMenu');
});

$('#accMenu li:nth-child(2)').click(function () {
    $('body').css('filter', 'grayscale(1)');
    $('#accMenu').addClass('hideAccMenu');
});

$('#accMenu li:nth-child(3)').click(function () {
    $('body').css('filter', 'invert(1)');
    $('#accMenu').addClass('hideAccMenu');
});

$('#accMenu li:nth-child(4)').click(function () {
    $('#accStatementBG').removeClass('hideAccStatement');
    $('#accStatementBtn').removeClass('hideAccStatement');
    $('#accStatement').removeClass('hideAccStatement');
    $('#accStatementPatch').removeClass('hideAccStatement');
    $('#accMenu').addClass('hideAccMenu');
});


$(document).click(function (e) {
    if (e.target.id !== 'accessibility' && e.target.id !== 'menuItem') {
        $('#accStatementBG').addClass('hideAccStatement');
        $('#accStatementBtn').addClass('hideAccStatement');
        $('#accStatement').addClass('hideAccStatement');
        $('#accStatementPatch').addClass('hideAccStatement');
    }
});

$('#accMenu li:nth-child(4)').click(function (e) {
    e.stopPropagation();
});

/*----------------------------------------------------------------------------*/

//Stylish checkbox:

var clickCounter = 0;
$('#checkbox').click(function () {
    clickCounter++;
    if (clickCounter % 2 != 0) {
        $('#checkbox').attr('src', 'img/check_on.png');
    }
    else {
        $('#checkbox').attr('src', 'img/check_off.png');
    }
});


/*----------------------------------------------------------------------------*/

//Form validation:

$('.submitBtn').click(function () {
    var fullName = document.forms["harelForm"]["fullName"].value;
    var fullNameValid = false;
    var phone = document.forms["harelForm"]["phone"].value;
    var phoneValid = false;
    var email = document.forms["harelForm"]["email"].value;
    var emailValid = false;
    var atSign = email.indexOf('@');
    var dot = email.lastIndexOf(".");

    if (fullName == "") {
        $('input[name=fullName]').css('background', 'rgb(204, 0, 0)');
    }
    else {
        $('input[name=fullName]').css('background', 'transparent');
        fullNameValid = true;

        if (phone.toString().length !== 10 || phone.toString().charAt(0) !== '0') {
            $('input[name=phone]').css('background', 'rgb(204, 0, 0)');
        }
        else {
            $('input[name=phone]').css('background', 'transparent');
            phoneValid = true;

            if (atSign < 1 || dot < atSign + 2 || dot + 2 > email.length) {
                $('input[name=email]').css('background', 'rgb(204, 0, 0)');
            }
            else {
                $('input[name=email]').css('background', 'transparent');
                emailValid = true;
            }
        }

    }


    if (fullNameValid && phoneValid && emailValid) {
        $('#formThanks').removeClass('hideThanks');
    }

});






