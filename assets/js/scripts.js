/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function ($) {
    "use strict"; // use strict to start

    // ----------------------------------------------
    //  magnific-popup
    // ----------------------------------------------
    (function () {

        $('.portfolio-items').magnificPopup({
            delegate: 'a',
            type: 'image',
            // other options
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',

            gallery: {
                enabled: false
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('i');
                }
            }

        });

    }());

    // ----------------------------------------------
    //  Isotope Filter
    // ----------------------------------------------

    if ($('.work-grid').length > 0) {

        var $container = $('.portfolio-items'),
            $imgs = $('.work-grid img');

        $container.imagesLoaded(function() {

            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.work-grid'
            });
        });


        //filter items on button click
        var fwpr = $(".filter li a");
        fwpr.on("click", function() {

            var $this = $(this),
                filterValue = $this.attr('data-filter');

            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });


            // don't proceed if already selected
            if ($this.hasClass('active')) {
                return false;
            }

            var filter_wrapper = $this.closest('.filter');
            filter_wrapper.find('.active').removeClass('active');
            $this.addClass('active');

            return false;
        });
    };
    //jquery scroll spy
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 95
    });
    // jQuery smooth scroll
    $("a.smooth-scroll").on("click", function (event) {
        var $anchor = $(this);
        var headerH = "50";
        $("html, body")
            .stop()
            .animate({
                scrollTop: $($anchor.attr("href"))
                    .offset()
                    .top - headerH + "px"
            }, 1200, "easeOutCirc");

        event.preventDefault();
    });

    var nav=$('.navbar');
    var scrolled=false;
    $(window).scroll(function(){
        if(5<$(window).scrollTop()&&!scrolled){nav.addClass('navbar-fixed-top').animate({'margin-top':'0px'});scrolled=true;}
        if(5>$(window).scrollTop()&&scrolled){nav.removeClass('navbar-fixed-top').css('margin-top','0px');
            scrolled=false;}});
})(jQuery);

