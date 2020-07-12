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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', () => {\n  function toArray(pseudoArr, newArr) {\n    for (let i = 0, len = pseudoArr.length; i < len; i++) {\n      newArr.push(pseudoArr[i]);\n    }\n  }\n\n  function prevDefaultProjectCard() {\n    const projectCards = document.getElementsByClassName('project__img_wrap');\n    const projectCardsArr = [];\n    toArray(projectCards, projectCardsArr);\n    projectCardsArr.forEach(item => {\n      item.addEventListener('click', e => {\n        e.preventDefault();\n      });\n    });\n  }\n\n  function loaderShow() {\n    const preloader = document.createElement('div');\n    preloader.setAttribute('class', 'preloader');\n    preloader.setAttribute('id', 'preloader');\n    const loader = document.createElement('div');\n    loader.setAttribute('class', 'loader');\n    preloader.appendChild(loader);\n    document.body.appendChild(preloader);\n  }\n\n  function loaderHide(form) {\n    const iframe = document.getElementById(form);\n    const iframeCloseElement = iframe.parentElement.parentElement.parentElement;\n    iframeCloseElement.addEventListener('click', e => {\n      document.body.style.overflow = 'visible';\n    });\n    const preloader = document.getElementById('preloader');\n    iframe.addEventListener('load', () => {\n      preloader.classList.add('done');\n      setTimeout(() => {\n        document.body.removeChild(preloader);\n      }, 1000);\n    });\n  }\n\n  function prevDefaultFeedbackBtns() {\n    const feedbackBtnsHeader = document.getElementsByClassName('b24-web-form-popup-btn-7');\n    const feedbackBtns = document.getElementsByClassName('b24-web-form-popup-btn-3');\n    const feedbackBtnsArr = [];\n    let form1 = false;\n    let form2 = false;\n    toArray(feedbackBtns, feedbackBtnsArr);\n    toArray(feedbackBtnsHeader, feedbackBtnsArr);\n    feedbackBtnsArr.forEach(item => {\n      item.addEventListener('click', e => {\n        e.preventDefault();\n        document.body.style.overflow = 'hidden';\n\n        if (!form1) {\n          if (e.target.classList.contains('b24-web-form-popup-btn-3')) {\n            const form = 'bx_form_iframe_3';\n            loaderShow();\n            loaderHide(form);\n            form1 = true;\n            return form1;\n          }\n        }\n\n        if (!form2) {\n          if (e.target.classList.contains('b24-web-form-popup-btn-7')) {\n            const form = 'bx_form_iframe_7';\n            loaderShow();\n            loaderHide(form);\n            form2 = true;\n            return form2;\n          }\n        }\n      });\n    });\n  }\n\n  function coastCardTransform() {\n    const cards = document.getElementsByClassName('coast__item');\n\n    for (let i = 0, len = cards.length; i < len; i++) {\n      cards[i].addEventListener('click', () => {\n        const transformElements = document.getElementsByClassName('coast__transformY');\n\n        for (let j = 0, length = transformElements.length; j < length; j++) {\n          transformElements[j].classList.remove('coast__transformY_mob-helper');\n        }\n\n        const transformElement = cards[i].getElementsByClassName('coast__transformY')[0];\n        transformElement.classList.toggle('coast__transformY_mob-helper');\n      });\n    }\n  }\n\n  prevDefaultFeedbackBtns();\n  $('[data-fancybox]').fancybox({\n    loop: true,\n    opacity: 1,\n    slideShow: false,\n    fullScreen: false,\n    thumbs: false,\n    buttons: [\"close\"]\n  });\n  const isCoarsePointer = window.matchMedia && matchMedia(\"(pointer: coarse)\").matches;\n\n  if (isCoarsePointer) {\n    prevDefaultProjectCard();\n    coastCardTransform();\n  }\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ })

/******/ });