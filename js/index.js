var height; //global variale for navbar height

var all = {
    /*
        For all webpage to load componet like nav and footer
    */
    onCreate: function () {
        $("#navbar-holder").load("nav.html");
        $('#footbar').load('footer.html');
    }
};

var nav = {
    /*
        After all webpages set, set component features.
    */
    onCreate: function () {
        height = $("#navigation").height();
        $("#navbar-holder").css('height', height);
    },

    onUpdate: function () {
        $(window).resize(function () {
            height = $("#navigation").height();
            //alert(height);
            $("#navbar-holder").css('height', height);
        });
    }
};

var message = {
    onCreate: function () {
        message.loadMessage();
        message.setStayonPage();
    },

    loadMessage:function(){
        $.ajax({
            type: 'POST',
            url: '/php/load.php',
            dataType: 'json',
            success: function (data) {
                //alert(data.Message[0].username);
                $.each(data.Message, function (index, user) {
                    //alert(data.Message[i].username);
                    //alert(user.username + "\n" + user.message);
                    $('#message').append($('<div>', {
                        text: user.username + " " + user.date + " " + user.message
                    }));
                });
            }
        });
    },

    setStayonPage: function () {
        $(document).ready(function () {
            var $form = $('form');
            $form.submit(function () {
                $.post($(this).attr('action'), $(this).serialize(), function (response) {
                    // do something here on success
                }, 'json');
                return false;
            });
        });
    }
}


/*
$(window).resize(function () {
    var marginBot = parseInt($('#navbar-holder').css('marginBottom'));
    $('.d-block').css('height', $(window).height() - marginBot + "px");

    
    var width1 = $(window).width();
    var width2 = $('.d-block').width();
    var width = (width1 - width2) / 2;
    if (width > 0) {

        //alert(width);
        $('.carousel-item').css('marginLeft', width + "px");
        $('.carousel-item').css('marginRight', width + "px");
    }
   
});
 */