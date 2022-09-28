// fixed header
$(document).scroll(function(){
    if ($(this).scrollTop() > 80){  
        $('.header').addClass('fixed');
    }
    else{
        $('.header').removeClass('fixed');
    }
});

// change choise cleaned
$(function(){
    $('.head_cleanedchoice div').click(function(){
        $('.active_button').not($(this).addClass('active_button')).removeClass();
    });
});

// slowly scroll to anchor
$(function(){
    $('.head_nav a').click(function(e){
        e.preventDefault();
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top - 100;
        $('body, html').animate({ scrollTop: destination }, 500);
    });
});

// slowly scroll section
$(function(){
    var delay = false;
    $(document).on('mousewheel DOMMouseScroll', function(event){
        event.preventDefault();
        if(delay) return;
        delay = true;
        setTimeout(function(){
            delay = false;
        }, 200)
        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        var a = document.getElementsByTagName('a');
        if(wd < 0){
            for(var i = 0; i < a.length; i++){
                var t = a[i].getClientRects()[0].top;
                if(t >= 40) break;
            }
        }
        else{
            for(var i = a.length-1; i >= 0; i--){
                var t = a[i].getClientRects()[0].top;
                if(t < -20) break;
            }
        }
        if(i >= 0 && i < a.length){
            $('html, body').animate({
                scrollTop: a[i].offsetTop
            });
        }
    });
});

// pluses show images
$(document).ready(function(){
    $(document).on('scroll', showScrollAnimation);
    function showScrollAnimation(){
        var windowHeight = $(window).height();
            $('.pluses').each(function(){
                var self = $(this),
                height = self.offset().top;
                if($(document).scrollTop() + windowHeight >= height + 200){
                    self.find('.pluses_item_1').addClass('show');
                    setTimeout(function(){
                        self.find('.pluses_item_2').each(function(){
                            $(this).addClass('show');
                        });
                    }, 200);
                    setTimeout(function(){
                        self.find('.pluses_item_3').each(function(){
                            $(this).addClass('show');
                        });
                    }, 400);
                    setTimeout(function(){
                        self.find('.pluses_item_4').each(function(){
                            $(this).addClass('show');
                        });
                    }, 600);
                }
            });
        }
    showScrollAnimation()
});

// clean show images
$(document).ready(function(){
    $(document).on('scroll', showScrollAnimation);
    function showScrollAnimation(){
        var windowHeight = $(window).height();
            $('.clean').each(function(){
                var self = $(this),
                height = self.offset().top;
                if($(document).scrollTop() + windowHeight >= height - 300){
                    self.find('.clean_img_block').addClass('show');
                }
            });
        }
    showScrollAnimation()
});

// active clean menu
$(document).ready(function(){   
    var $element = $('#anchor');
    $(window).scroll(function(){
        var scroll = $(window).scrollTop() + $(window).height();
        var offset = $element.offset().top - 10;
        if(scroll > offset){
            $('.clean').addClass('active');
            $('.clean_menu').addClass('active');
            $('.clean_img_block').removeClass('show');
            $('.clean_img').addClass('active');
            $('.clean_img img').addClass('active');
            $('.clean_plus').addClass("plus");
            setTimeout(function(){
                $('.clean_menu_1').addClass('active');
            }, 150);
            setTimeout(function(){
                $('.clean_menu_2').addClass('active');
            }, 300);
            setTimeout(function(){
                $('.clean_menu_3').addClass('active');
            }, 450);
            setTimeout(function(){
                $('.clean_menu_4').addClass('active');
            }, 600);
        }
        else{
            $('.clean').removeClass('active');
            $('.clean_menu').removeClass('active');
            $('.clean_img_block').addClass('show');
            $('.clean_img').removeClass('active');
            $('.clean_img img').removeClass('active');
            $('.clean_plus').removeClass("plus");
            $('.clean_menu_1').removeClass('active');
            $('.clean_menu_2').removeClass('active');
            $('.clean_menu_3').removeClass('active');
            $('.clean_menu_4').removeClass('active');
        }
    });
});
$(function(){
    $('.clean_menu ul li').click(function(){
        $(".leave").not($(this).addClass('leave')).removeClass('leave');
    });
});

// hover clean plus
$(function(){
    $('.clean_plus').hover(function(){
    	$(this).find($('span')).toggleClass('hover');
        $(this).find($('div')).toggleClass('hover');
        $(this).find($('p')).toggleClass('hover');
    });
});

// clean slider
$(function(){
    $('.clean_menu_1').click(function(){
        $('.clean_img_1').addClass('index').addClass('width');
        $('.clean_img').not('.clean_img_1').removeClass('index');
        setTimeout(function(){
            $('.clean_img').not('.clean_img_1').removeClass('width');
        }, 500);
        $('.clean_plus').removeClass("plus");
        setTimeout(function(){
            $('.clean_img_1').find('.clean_plus').addClass("plus");
        }, 500);
    });
    $('.clean_menu_2').click(function(){
        $('.clean_img_2').addClass('index').addClass('width');
        $('.clean_img').not('.clean_img_2').removeClass('index');
        setTimeout(function(){
            $('.clean_img').not('.clean_img_2').removeClass('width');
        }, 500);
        $('.clean_plus').removeClass("plus");
        setTimeout(function(){
            $('.clean_img_2').find('.clean_plus').addClass("plus");
        }, 500);
    });
    $('.clean_menu_3').click(function(){
        $('.clean_img_3').addClass('index').addClass('width');
        $('.clean_img').not('.clean_img_3').removeClass('index');
        setTimeout(function(){
            $('.clean_img').not('.clean_img_3').removeClass('width');
        }, 500);
        $('.clean_plus').removeClass("plus");
        setTimeout(function(){
            $('.clean_img_3').find('.clean_plus').addClass("plus");
        }, 500);
    });
    $('.clean_menu_4').click(function(){
        $('.clean_img_4').addClass('index').addClass('width');
        $('.clean_img').not('.clean_img_4').removeClass('index');
        setTimeout(function(){
            $('.clean_img').not('.clean_img_4').removeClass('width');
        }, 500);
        $('.clean_plus').removeClass("plus");
        setTimeout(function(){
            $('.clean_img_4').find('.clean_plus').addClass("plus");
        }, 500);
    });
});

// order down
$(document).ready(function(){   
    var $element = $('.offer');
    $(window).scroll(function(){
        var scroll = $(window).scrollTop() + $(window).height();
        var offset = $element.offset().top + $(window).height();
        if(scroll > offset){
            $('.order').addClass('down');
        }
        else{
            $('.order').removeClass('down');
        }
    });
});
$(document).ready(function(){   
    var $element = $('#anchor');
    $(window).scroll(function(){
        var scroll = $(window).scrollTop() + $(window).height();
        var offset = $element.offset().top - 10;
        if(scroll > offset){
            $('.order').addClass('hidden');
        }
        else{
            $('.order').removeClass('hidden');
        }
    });
});

// active mobile menu
$('.head_menu').click(function(){
    $('.head_nav').toggleClass('leavedown');
});
$('.head_nav a').click(function(){
    $('.head_nav').removeClass('leavedown');
});