$(document).ready(function () {

    $('#messend').click( function(){


        $.ajax({
            url: "mailing.php",
            method: "POST",
            data: {
                "mailing": true,
                "contactname": $('#contactname').val(),
                "contactemail": $('#contactemail').val(),
                "contactmessage": $('#contactmessage').val(),
                "subject":  $('.ver-2:checked').val()
            },
            success: function(data){
                alert(data);
                $('#contactname').val('');
                $('#contactemail').val('');
                $('#contactmessage').val('');
                $('#mailing_message').empty();
                $('#mailing_message').append(data);
            },
            async: false
        });

    })
});