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
        var dataAtr = $(this).attr('data-vacancy');
        console.log(dataAtr);
        if (dataAtr === "php") {
            $('.table__body').removeClass('active');
            $('#php').addClass('active');
        }
        if (dataAtr === "Project-manager") {
            console.log('byyyy');
            $('.table__body').removeClass('active');
            $('#project-manager').addClass('active');
        }
        if (dataAtr === "Javascript") {
            console.log('byyyy');
            $('.table__body').removeClass('active');
            $('#JS').addClass('active');
        }
        if (dataAtr === "sales") {
            console.log('byyyy');
            $('.table__body').removeClass('active');
            $('#sales').addClass('active');
        }
        if (dataAtr === "design") {
            console.log('byyyy');
            $('.table__body').removeClass('active');
            $('#design').addClass('active');
        }
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

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map