var navHeight; //global variale for navbar height
var footHeight;//global variale for footer height


$(window).ready(function () {
    //all.onCreate();
});


var all = {
    /*
        For all webpage to load componet like nav and footer
    */
    onCreate: function () {
        var p = nav.onCreate();
        var q = foot.onCreate()
        $.when($.ajax(p), $.ajax(q)).then(function () {
            all.initialize();
        })
    },

    initialize: function () {
        $("#bg-content").css("height", ($(window).height()));

        $(".content").css('height', $(window).height() * 3 / 4);
        $(".content").css('marginTop', ($(window).height() - $(".content").height() - navHeight - footHeight) / 2);
        $(".content").css('marginBottom', ($(window).height() - $(".content").height() - navHeight - footHeight) / 2);

        $(".content-mainpage").css('height', 'auto');
        $(".content-mainpage").css('marginTop', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
        $(".content-mainpage").css('marginBottom', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
    },

    onUpdate: function () {
        $(window).resize(function () {
            $("#bg-content").css("height", ($(window).height()));

            $("#bg").css("height", ($(window).height()));
            $("#bg").css("width", ($(window).width()));

            $(".content").css('height', $(window).height() * 3 / 4);
            $(".content").css('marginTop', ($(window).height()-$(".content").height()-navHeight-footHeight)/2);
            $(".content").css('marginBottom', ($(window).height() - $(".content").height() - navHeight - footHeight) / 2);

            $(".content-mainpage").css('height', 'auto');   
            $(".content-mainpage").css('marginTop', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
            $(".content-mainpage").css('marginBottom', ($(window).height() - $(".content").height() - $("h1").height() - navHeight - footHeight) / 2);
        });
    },
};

var nav = {
    /*
        After all webpages set, set component features.
    */
    onCreate: function () {
        $("#navbar-holder").load("nav.html", function () {
            navHeight = $("#navigation").height();
            $("#navbar-holder").css('height', navHeight);
            nav.setAnimation();
            nav.onUpdate();
        });

    },

    onUpdate: function () {
        $(window).resize(function () {
            navHeight = $("#navigation").height();
            $("#navbar-holder").css('height', navHeight);
        });
    },

    setAnimation:function(){
        $('#myCollapsible').on('show.bs.collapse', function () {
            $('#navigation').css('animation-name', 'example');
            $('#navigation').css('animation-duration', '600ms');
        })
        $('#myCollapsible').on('hide.bs.collapse', function () {
            $('#navigation').css('animation-name', 'example2');
            $('#navigation').css('animation-duration', '600ms');
        })

        $('#myCollapsible').on('shown.bs.collapse', function () {
            $('#navigation').css('background-color', 'rgba(0, 0, 0, 0.6)');
        })

        $('#myCollapsible').on('hidden.bs.collapse', function () {
            $('#navigation').css('background-color', 'rgba(0, 0, 0, 0.2)');
        })
    }
};

var foot = {
    /*
        After all webpages set, set component features.
    */
    onCreate: function () {
        $('#footbar').load('footer.html', function () {
            footHeight = $("#footbar").height();
            foot.onUpdate();
        });
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