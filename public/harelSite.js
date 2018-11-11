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


    if (fullName == "") {
        $('input[name=fullName]').css('background', 'rgb(204, 0, 0)');
    }
    else {
        $('input[name=fullName]').css('background', 'transparent');
        fullNameValid = true;

        if (!((phone.toString().length === 10 && phone.toString().substring(0, 2) === '05') || (phone.toString().length === 9 && phone.toString().charAt(0) === '0' && (phone.toString().charAt(1) === '2' || phone.toString().charAt(1) === '3' || phone.toString().charAt(1) === '4' || phone.toString().charAt(1) === '8' || phone.toString().charAt(1) === '9')))) {
            $('input[name=phone]').css('background', 'rgb(204, 0, 0)');
        }
        else {
            $('input[name=phone]').css('background', 'transparent');
            phoneValid = true;

            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
                return re.test(email);
            }
            if (!(validateEmail(email))) {
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






