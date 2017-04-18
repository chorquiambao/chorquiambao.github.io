(function($) {
    $(window).load(function() {

        $("#loader-wrapper").fadeOut();
        TweenMax.staggerFrom(".animateFromRight", 1, {
            ease: Back.easeOut.config(.3),
            cycle: {
                x: function(index) {
                    return index * 700;
                }
            }
        }, 0.2);

        TweenMax.staggerFrom(".animateFromLeft", 1, {
            ease: Back.easeOut.config(.3),
            cycle: {
                x: function(index) {
                    return index * -700;
                }
            }
        }, 0.2);


        TweenMax.staggerFrom(".animateFromBottom", 1, {
            ease: Back.easeOut.config(.3),
            opacity: 0,
            cycle: {
                y: function(index) {
                    return index * 500;
                }
            }
        }, 0.5);

        AOS.init({
            easing: 'ease-in-out-sine'
        });

        /*  FlexSlide text
        /*----------------------------------------------------*/
        $('.flexslider').flexslider({
            animation: "slide",
            selector: ".flex-slogan > li",
            controlNav: false,
            directionNav: false,
            direction: "vertical",
            slideshowSpeed: 4000,
            keyboard: true,
            touch: false,
        });


        /*  countdown
        /*----------------------------------------------------*/
        var dateFinal = '2019/11/01';

        $('.countdown').countdown(dateFinal, function(event) {

            var $this = $(this)

            //$this.find('span.weeks').html(event.strftime('%w'));
            $this.find('span.days').html(event.strftime('%D'));
            $this.find('span.hours').html(event.strftime('%H'));
            $this.find('span.minutes').html(event.strftime('%M'));
            $this.find('span.seconds').html(event.strftime('%S'));
        });
        /*  modal
        /*----------------------------------------------------*/
        function iframeModalOpen() {

            $('.modalButton').on('click', function(e) {
                var src = $(this).attr('data-src');
                var width = $(this).attr('data-width');
                var height = $(this).attr('data-height');
                $(".modal-dialog").width(width);
                $(".modal-dialog").height(height);
                var allowfullscreen = $(this).attr('data-video-fullscreen');
                $("#myModal iframe").attr({
                    'src': src,
                    'allowfullscreen': ''
                });
            });

            $('#myModal').on('hidden.bs.modal', function() {
                $(this).find('iframe').html("");
                $(this).find('iframe').attr("src", "");
            });
        }

        $(document).ready(function() {
            iframeModalOpen();
        });

    });

    /*  slideshow1 ( nivo Slider )
    /*----------------------------------------------------*/
    $(function() {

        startSlideshow();

    })

    function startSlideshow() {

        $('#nivoSlider').nivoSlider({
            effect: 'slideInRight'
        });

    }

})(jQuery);