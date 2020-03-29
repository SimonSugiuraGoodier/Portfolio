function switchClass() {
                $('ul li').hover(function(){
                    $('#automotive-images').removeClass().addClass(
                        $(this).attr('rel'));
                    $(this).addClass('active').siblings()
                        .removeClass('active');
                });
            }