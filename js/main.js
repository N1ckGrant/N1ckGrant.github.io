/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/                configurable: false,
                /******/                enumerable: true,
                /******/                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(1);


        /***/
    }),
    /* 1 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        console.log('Hello from main.js!');

        function registerServiceWorker() {
            // регистрирует скрипт sw в поддерживаемых браузерах
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('sw.js', {scope: '/'}).then(function () {
                    console.log('Service Worker registered successfully.');
                }).catch(function (error) {
                    console.log('Service Worker registration failed:', error);
                });
            }
        }

        function dropAcordion() {
            var blockBox = $('.process__item');
            $(blockBox).on('click', function () {

                var blockBoxContent = $(this).find('.process__body');
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');

                } else {
                    $(blockBox).removeClass('active');
                    $(this).addClass('active');


                }
                setTimeout(function () {
                    AOS.refresh();
                }, 200)

            });
        }

        dropAcordion();


        function tabVacancy() {
            var tab = $('.table__tab');
            $(tab).on('click', function () {
                $(tab).removeClass('active');
                $(this).addClass('active');
            });
        }

        tabVacancy();

        function table_vacancy() {
            var tabs = $('.table__tab');
            $(tabs).on('click', function () {
                $('.table__body').removeClass('active');
                $('#' + $(this).attr('data-vacancy')).addClass('active');
            });
        }

        table_vacancy();

//табы на мобильной -- вакансии
        $('body').on('click', '.table__tab.active', function () {
            var width = $('body').width();

            if (width < 788) {

                if (!$(this).parent('ul').hasClass('open')) {
                    $(this).parent('ul').addClass('open');
                } else {
                    $(this).parent('ul').removeClass('open');
                }
            }
        });

        function modal() {
            var btn = $('.btn-link');
            var modal = $('#modal');
            btn.on('click', function () {

                modal.addClass('active');
                $('body').css('overflow', 'hidden');
                if (modal.hasClass('active')) {
                    $('.modal .close').on('click', function () {
                        modal.removeClass('active');
                        $('body').css('overflow', 'auto');
                    });

                    console.log($(this).data('vacancy'));

                    $('#contactform-vacancy_id').val($(this).data('vacancy'));
                }


            });
        }

        modal();

        $('.single-item').slick({
            dots: true,
            arrows: false,
            slidesToShow: 1
        });

        $(".scroll").click(function (event) {
            event.preventDefault();
            var full_url = this.href;
            var parts = full_url.split("#");
            var trgt = parts[1];
            var target_offset = $("#" + trgt).offset();
            var target_top = target_offset.top - 70;

            $('html, body').animate({scrollTop: target_top}, {
                done: function done() {
                    $(this).animate().stop(true);
                    $("body").css("overflow-y", "auto");
                }, duration: 1500
            });
        });
//madal menu
        $('.header__btn__nav').on('click', function () {
            $(this).addClass('active');
            if ($(this).hasClass('active')) {
                $('.header__nav').addClass('open');
                $('body').css('overflow', 'hidden');
            }
            $('.header__nav.open').find('.header__nav__close').on('click', function () {
                $('.header__nav').removeClass('open');
                $('.header__btn__nav').removeClass('active');
                $('body').css('overflow', '');
            });
        });


// function lockScroll(e) {
//     e.preventDefault();
// }
// if ($('body').width() > 960) {
//
//     if ($('.hero').length > 0 ) {
//         var notScroll = false;
//         $("body").css('overflow-y', 'hidden');
//         $(window).on("wheel", function () {
//             $("body").css('position', '');
//             var yak = $('#process_block').offset().top;
//             var marker = $(window).scrollTop();
//             if (marker < yak - 200 && !notScroll && !$('#modal').hasClass('active')) {
//                 $(window).bind('mousewheel DOMMouseScroll', lockScroll);
//
//                 $('html').animate({ scrollTop: yak - 80 }, { done: function done() {
//
//                         $(window).unbind('mousewheel DOMMouseScroll', lockScroll);
//                         $("body").css("overflow-y", "auto");
//                         $("body").css('overflow-x', 'hidden');
//                     }, duration: 1500 });
//                 notScroll = true;
//             } else if (marker > yak - 200) {
//
//                 $("body").css('overflow-y', 'auto');
//                 $("body").css('overflow-x', 'hidden');
//                 $(window).unbind('mousewheel DOMMouseScroll', lockScroll);
//                 notScroll = true;
//             }
//         });
//     }
// }

//header style
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".header").removeClass("active");
            }
        });

//scrollTop
        $(window).on('scroll', function () {
            var btnTop = $('#btnTop');
            if ($(window).scrollTop() > 3000) {
                $(".go-to-top").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".go-to-top").removeClass("active");
            }
        });
        $(window).on("scroll", function () {
            if (come("#btnTop")) {
                $(".go-to-top").removeClass("active");
            }
        });

        $('body').on('click', '.go-to-top', function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
        });

//aniamate block onload
//анимация появления текста
        $(document).ready(function () {
            //    класс который анимирую в дереве html
            $('.animate__A').addClass('animate_top');
        });

        AOS.init();


//animation Bubble
        var bubbleColorStyle = '';
        if ( typeof bubbleColor !== 'undefined' && bubbleColor) {
            bubbleColorStyle = 'style="background: ' + bubbleColor + '"';
        }

        let item = $('.process__box__content').find('.item');
        let bubble = '<div class="buble-mini"  data-aos="buble1-mini" ' + bubbleColorStyle + 'data-aos-once="true" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-duration="1000"></div>'
        for (var i = 0; i < item.length - 1; i++) {
            $(bubble).insertAfter($(item[i]));
            $(bubble).insertAfter($(item[i]));
            $(bubble).insertAfter($(item[i]));
        }


//========================================================page NEW projets==========================
        $('.other-project__slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerMode: true,
            variableWidth: false,
            prevArrow: $('.other-project .arrow.prew'),
            nextArrow: $('.other-project .arrow.next'),
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });


//        scroll custom ====================================================

        // $(window).on('scroll', function () {
        //     var headerHeight = $('.header').innerHeight();
        //     var contentHeight = $('.projects__wrap').innerHeight() - 80;
        //     var sidebarHeight = $('.projects__wrap__bar__fixed').height();
        //     var sidebarBottomPos = contentHeight - sidebarHeight;
        //     var trigger = $(window).scrollTop() - headerHeight;
        //
        //     if ($(window).scrollTop() >= headerHeight) {
        //         $('.projects__wrap__bar__fixed').addClass('fixed');
        //     } else {
        //         $('.projects__wrap__bar__fixed').removeClass('fixed');
        //     }
        //
        //     if (trigger >= sidebarBottomPos) {
        //         $('.projects__wrap__bar__fixed').addClass('bottom');
        //     } else {
        //         $('.projects__wrap__bar__fixed').removeClass('bottom');
        //     }
        // });

        function scroll__modal(){
            $(window).on('scroll', function () {
                var headerHeight = $('.scroll__before').innerHeight();
                var contentHeight = $('.scroll__content').innerHeight() - 80;
                var sidebarHeight = $('.fix__content').height();
                var sidebarBottomPos = contentHeight - sidebarHeight;
                var trigger = $(window).scrollTop() - headerHeight;

                if ($(window).scrollTop() >= headerHeight) {
                    $('.fix__content').addClass('fixed');
                } else {
                    $('.fix__content').removeClass('fixed');
                }

                if (trigger >= sidebarBottomPos) {
                    $('.fix__content').addClass('bottom');
                } else {
                    $('.fix__content').removeClass('bottom');
                }
            });
        }
        scroll__modal();
//        scroll active==================================================================

        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();

            $('.content-item').each(function (index) {
                if ($(this).position().top - 240 <= scrollDistance) {
                    $('a[href*="#"]:not([href="#"]).active').removeClass('active');
                    $('a.link-project').eq(index).addClass('active');
                }
            });

        }).scroll();

        //Scroll to anchor==================================================================================

        $('a[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 160
                    }, 500);
                    return false;
                }
            }
        });

//lang =============================================

        function langItem() {
            var btnLang = $('.language__icon');
            var sub = $('.sub__lang');
            var imgBtn = $(btnLang).find('img').attr('src');
            var imgItem = $('.sub__lang .item.active').find('img').attr('src');
            $('.language__icon').find('img').attr('src', imgItem);

            btnLang.on('click', function () {
                if (!sub.hasClass('active')) {
                    sub.addClass('active')
                } else {
                    sub.removeClass('active')
                }
            });
            $(sub).find('.item').on('click', function () {
                $(sub).find('.item').removeClass('active');
                $(this).addClass('active');
                sub.removeClass('active');
                var imgItem = $('.sub__lang .item.active').find('img').attr('src');
                $(this).parents('.language').find('.language__icon').find('img').attr('src', imgItem)
            });


            $('body').on('click', function (e) {
                // событие клика по веб-документу
                if (sub.hasClass('active')) {
                    if (!btnLang.is(e.target) // если клик был не по нашему блоку
                        && btnLang.has(e.target).length === 0) {
                        // и не по его дочерним элементам
                        sub.removeClass('active'); // скрываем его
                    }
                }
            });

        }

        langItem()


        function come(elem) {
            var docViewTop = $(window).scrollTop(),
                docViewBottom = docViewTop + $(window).height(),
                elemTop = $(elem).offset(),
                elemBottom = elemTop + $(elem).height();

            return elemBottom <= docViewBottom && elemTop >= docViewTop;
        }

// var counter = 0;
// $(window).on("scroll", function() {
//     if (come(".l-title:eq("+counter+")")) {
//
//
//         $(".animate__B:eq("+counter+")").addClass('animate_top')
//
//         counter++
//     }
// })

        /***/
    })
    /******/]);
//# sourceMappingURL=main.js.map


