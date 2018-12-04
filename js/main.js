/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Hello from main.js!');

function dropAcordion() {
    var blockBox = $('.process__item');
    $(blockBox).on('click', function () {
        var blockBoxContent = $(this).find('.process__body');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            console.log('1');
        } else {
            $(blockBox).removeClass('active');
            $(this).addClass('active');

            console.log('3');
        }
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
    console.log($('[data-vacancy]'));
    $(tabs).on('click', function () {
        $('.table__body').removeClass('active');
        $('#' + $(this).attr('data-vacancy')).addClass('active');
    });
}

table_vacancy();

function modal() {
    var btn = $('.hero__btn-link');
    var modal = $('#modal');
    btn.on('click', function () {
        console.log('byyyy');
        modal.show('slow').css('display', 'flex').addClass('active');
        $('body').css('overflow', 'hidden');
        if (modal.hasClass('active')) {
            $('.modal .close').on('click', function () {
                modal.hide('slow');
                $('body').css('overflow', 'auto');
            });
        }
    });
}

modal();

$('.single-item').slick({
    dots: true
});

$(".scroll").click(function (event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top;

    $('html, body').animate({ scrollTop: target_top }, { done: function done() {
            $(this).animate().stop(true);
            $("body").css("overflow-y", "auto");
        }, duration: 1500 });
});

$('#container').hover(function () {
    $(document).bind('mousewheel DOMMouseScroll', function () {
        stopWheel();
    });
}, function () {
    $(document).unbind('mousewheel DOMMouseScroll');
});

function stopWheel(e) {
    if (!e) {
        /* IE7, IE8, Chrome, Safari */
        e = window.event;
    }
    if (e.preventDefault) {
        /* Chrome, Safari, Firefox */
        e.preventDefault();
    }
    e.returnValue = false; /* IE7, IE8 */
}

var tempScrollTop,
    currentScrollTop = 0;
var notScroll = false;
$(window).scroll(function () {
    var $height = $(window).scrollTop();
    var elem = $('.hero');
    var target_top = $("#process_block").offset().top;
    tempScrollTop = currentScrollTop;
    currentScrollTop = $(window).scrollTop();
    //scrolling down

    if (tempScrollTop < currentScrollTop && !notScroll && $height > 0 && $height < 20) {
        // $("body").css("overflow","hidden");
        console.log('прокрутка вниз');

        $('html, body').animate({ scrollTop: target_top }, { done: function done() {
                console.log('done');
                $(this).animate().stop();
            }, duration: 1500 });

        console.log('первый скролл прошел');
        console.log('scroll down');
        notScroll = true;
    }

    if (tempScrollTop > currentScrollTop && $(document).scrollTop() + $(window).height() > $(elem).offset().top && $(document).scrollTop() - $(elem).offset().top < $(elem).height() && $height > 500) {
        //scrolling up
        //          $("body").css("overflow","hidden");
        $('html, body').animate({ scrollTop: 0 }, { done: function done() {
                $("body").css("overflow-y", "auto");
                console.log('yyyyyy');
                $('html, body').animate().stop(true);
            }, duration: 1500 });

        console.log("вверх прокрутка");
        notScroll = false;
        console.log('второй скролл');
    } else {

        console.log(notScroll);
    }
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map