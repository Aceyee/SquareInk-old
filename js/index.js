var navHeight; //global variale for navbar height
var footHeight;//global variale for footer height


var all = {
    /*
        For all webpage to load componet like nav and footer
    */
    onCreate: function () {
        $("#navbar-holder").load("nav.html");
        $('#footbar').load('footer.html');
        $(".content").css('height', $(window).height() * 3 / 4);
        //$(".content-mainpage").css('height', $(window).height() * 3 / 5);
        $(".content-mainpage").css('height', 'auto');
    },

    onUpdate: function () {
        $(window).resize(function () {
            $(".content").css('height', $(window).height() * 3 / 4);
            //$(".content-mainpage").css('height', $(window).height() * 3 / 5);
            $(".content-mainpage").css('height', 'auto');
            $(".content").css('marginTop', ($(window).height()-$(".content").height()-navHeight-footHeight)/2);
            $(".content").css('marginBottom', ($(window).height() - $(".content").height() - navHeight - footHeight) / 2);
            $(".content-mainpage").css('marginTop', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
            $(".content-mainpage").css('marginBottom', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
        });
    }
};

var nav = {
    /*
        After all webpages set, set component features.
    */
    onCreate: function () {
        navHeight = $("#navigation").height();
        $("#navbar-holder").css('height', navHeight);
        //$("#navbar-holder").css('marginBottom', navHeight);
    },

    onUpdate: function () {
        $(window).resize(function () {
            navHeight = $("#navigation").height();
            $("#navbar-holder").css('height', navHeight);
        });
    }
};

var foot = {
    /*
        After all webpages set, set component features.
    */
    onCreate: function () {
        footHeight = $("#footbar").height();
        $(".content").css('marginTop', ($(window).height() - $(".content").height() - navHeight - footHeight) / 2);
        $(".content").css('marginBottom', ($(window).height() - $(".content").height() - navHeight - footHeight) / 2);
        $(".content-mainpage").css('marginTop', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
        $(".content-mainpage").css('marginBottom', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
    },

    onUpdate: function () {
        $(window).resize(function () {
            footHeight = $("#footbar").height();
        });
    }
};

var message = {
    onCreate: function () {
        message.loadMessage();
        message.setStayOnPage();
    },

    loadMessage:function(){
        $.ajax({
            type: 'POST',
            url: '/php/load.php',
            dataType: 'json',
            success: function (data) {
                $.each(data.Message, function (index, user) {
                    $('#message').append('<div class="card border-primary mb-3" style="max-width: 18rem;">'
                        + '<div class="card-header">'
                        +   '<div class="float-left">' + user.username + '</div>'
                        +   '<div class="float-right">' + user.date + '</div>'
                        +'</div>'
                        +'<div class="card-body text-primary">'
                        +   '<p class="card-text">'+user.message+'</p>'
                        +'</div>'
                    +'</div>');
                    //alert(data.Message[i].username);
                    //alert(user.username + "\n" + user.message);
                    /*
                    $('#message').append($('<div>', {
                        text: user.username + " " + user.date + " " + user.message
                    }));
                    
                    <div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <div class="float-left">Header</div>
                    <div class="float-right">Date</div>
                </div>

                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
                    */
                });
            }
        });
    },

    setStayOnPage: function () {
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