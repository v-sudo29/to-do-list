/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Global declarations */\n:root {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  font-family: 'Noto Sans Display', sans-serif;\n}\n\n/* Body declarations */\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n  margin: 0;\n  padding: 0;\n  color:#222222; \n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 10vh;\n  box-shadow: 0 -5px 10px 0px rgb(0 0 0 / 0.7);\n}\n\n.header-logo-div > img {\n  height: 3.5rem;\n}\n\n.header-title-div {\n  font-size: 2.7rem;\n  font-weight: 500;\n}\n\n/* Content */\n.content-main {\n  display: flex;\n  justify-content: center;\n}\n\n.content-div {\n  display: flex;\n  flex-direction: column;\n  min-width: 25rem;\n  gap: 0.8rem;\n  margin: 2rem 6rem;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 0.2);\n}\n\n.date-div {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #737373;\n}\n\n/* Tabs */\n.tabs-div {\n  display: flex;\n  gap: 1.5rem;\n  padding: 0.3rem;\n  color: #a3a3a3;\n  cursor: default;\n}\n\n.work-div {\n  display: flex;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n\n.personal-div {\n  display: flex;\n  justify-content: center;\n\n  font-size: 1.2rem;\n}\n\n/* Highlight current tab */\n.currentTab {\n  color: #222222;\n  border-bottom: 2px solid;\n}\n\n/* Tasks */\n.task-list-div, .completed-tasks-list-div {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.5rem;\n  min-height: 0;\n}\n\n.task-div {\n  display: flex;\n  gap: 0.6rem;\n}\n\ninput[type=\"checkbox\"] {\n  width: 1rem;\n  height: 1rem;\n  appearance: none;\n  flex-grow: 0;\n  background-color: #FFFFFF;\n  cursor: pointer;\n  border: 0.10rem solid rgb(125, 125, 125);\n  border-radius: 2rem;\n\n  display: grid;\n  place-content: center;\n}\n\n[type=checkbox]::before {\n  content: \"\";\n  width: 0.62rem;\n  height: 0.62rem;\n  border-radius: inherit;\n  transform: scale(0);\n  transition: 200ms transform ease-in-out;\n  box-shadow: inset 1em 1em #5c5c5c;\n\n  display: grid;\n  place-content: center;\n}\n\n[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n\nlabel {\n  font-weight: 400;\n  width: 100%;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: #5c5c5c;\n}\n\n.delete-task-button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  color:#cfcfcf;\n  font-weight: 600;\n}\n\n.delete-task-button:hover {\n  color: #222222;\n}\n\n/* Add Task Button */\n.add-task-btn {\n  border: none;\n  text-align: left;\n  font-weight: 400;\n  font-size: 1.1rem;\n  background-color: transparent;\n  cursor: pointer;\n\n  padding: 0.2rem 0.4rem;\n}\n\n/* Modal */\n.modal-div {\n  position: fixed;\n  padding: 1.5rem;\n  min-width: 20rem;\n  min-height: 15rem;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -70%) scale(0);\n  transition: transform 300ms;\n  z-index: 10;\n  border-radius: 0.2rem;\n  background-color:#FFFFFF;\n  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 0.2);\n}\n\n.modal-active {\n  transform: translate(-50%, -70%) scale(1);\n}\n\n.modal-form-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n/* Inputs */\n.modal-input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.modal-input-container > label {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.textbox {\n  line-height: 2rem;\n  border: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  -moz-appearance: none;\n\n  border: 1px solid #e5e7eb;\n  border-radius: 0.2rem;\n  font-size: 15px;\n  padding: 0 10px;\n\n  transition: 150ms ease-in-out;\n}\n\n.textbox:focus {\n  outline: none;\n  border: 1px solid #5489eb;\n  border-radius: 0.2rem;\n}\n\n.textbox::placeholder {\n  font-size: 1rem;\n  color: #e5e5e5;\n}\n\n.task-description-box {\n  resize: none;\n}\n\n/* Buttons */\n.modal-buttons-pair {\n  display: flex;\n  gap: 1.3rem;\n}\n\n.modal-add-button,\n.modal-cancel-button {\n  border: none;\n  border-radius: 0.3rem;\n  cursor: pointer;\n  padding: 0.7rem 3rem;\n  font-size: 1rem;\n  font-weight: 500;\n\n  transition: 150ms ease-in-out;\n}\n\n.modal-add-button {\n  background-color: #5489eb;\n  color:#ffffff;\n}\n\n.modal-cancel-button {\n  background-color: #f5f5f5;\n  color:#222222;\n}\n\n.modal-add-button:hover {\n  background-color: #4274d0;\n}\n\n.modal-cancel-button:hover {\n  background-color: #cfcfcf;\n}\n\n/* Overlay */\n.overlay {\n  position: fixed;\n  opacity: 1;\n  transition: 200ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .5);\n  pointer-events: all;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA,wBAAwB;AACxB;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA,WAAW;AACX;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,4CAA4C;AAC9C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;;EAEvB,iBAAiB;AACnB;;AAEA,0BAA0B;AAC1B;EACE,cAAc;EACd,wBAAwB;AAC1B;;AAEA,UAAU;AACV;EACE,aAAa;EACb,0BAA0B;EAC1B,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,wCAAwC;EACxC,mBAAmB;;EAEnB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,mBAAmB;EACnB,uCAAuC;EACvC,iCAAiC;;EAEjC,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;;EAEf,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,2BAA2B;EAC3B,WAAW;EACX,qBAAqB;EACrB,wBAAwB;EACxB,0CAA0C;AAC5C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA,WAAW;AACX;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,wBAAwB;EACxB,oBAAoB;EACpB,qBAAqB;;EAErB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,eAAe;;EAEf,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,gBAAgB;;EAEhB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,YAAY;AACZ;EACE,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,mCAAmC;EACnC,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n/* Global declarations */\n:root {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  font-family: 'Noto Sans Display', sans-serif;\n}\n\n/* Body declarations */\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n  margin: 0;\n  padding: 0;\n  color:#222222; \n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 10vh;\n  box-shadow: 0 -5px 10px 0px rgb(0 0 0 / 0.7);\n}\n\n.header-logo-div > img {\n  height: 3.5rem;\n}\n\n.header-title-div {\n  font-size: 2.7rem;\n  font-weight: 500;\n}\n\n/* Content */\n.content-main {\n  display: flex;\n  justify-content: center;\n}\n\n.content-div {\n  display: flex;\n  flex-direction: column;\n  min-width: 25rem;\n  gap: 0.8rem;\n  margin: 2rem 6rem;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 0.2);\n}\n\n.date-div {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #737373;\n}\n\n/* Tabs */\n.tabs-div {\n  display: flex;\n  gap: 1.5rem;\n  padding: 0.3rem;\n  color: #a3a3a3;\n  cursor: default;\n}\n\n.work-div {\n  display: flex;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n\n.personal-div {\n  display: flex;\n  justify-content: center;\n\n  font-size: 1.2rem;\n}\n\n/* Highlight current tab */\n.currentTab {\n  color: #222222;\n  border-bottom: 2px solid;\n}\n\n/* Tasks */\n.task-list-div, .completed-tasks-list-div {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.5rem;\n  min-height: 0;\n}\n\n.task-div {\n  display: flex;\n  gap: 0.6rem;\n}\n\ninput[type=\"checkbox\"] {\n  width: 1rem;\n  height: 1rem;\n  appearance: none;\n  flex-grow: 0;\n  background-color: #FFFFFF;\n  cursor: pointer;\n  border: 0.10rem solid rgb(125, 125, 125);\n  border-radius: 2rem;\n\n  display: grid;\n  place-content: center;\n}\n\n[type=checkbox]::before {\n  content: \"\";\n  width: 0.62rem;\n  height: 0.62rem;\n  border-radius: inherit;\n  transform: scale(0);\n  transition: 200ms transform ease-in-out;\n  box-shadow: inset 1em 1em #5c5c5c;\n\n  display: grid;\n  place-content: center;\n}\n\n[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n\nlabel {\n  font-weight: 400;\n  width: 100%;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: #5c5c5c;\n}\n\n.delete-task-button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  color:#cfcfcf;\n  font-weight: 600;\n}\n\n.delete-task-button:hover {\n  color: #222222;\n}\n\n/* Add Task Button */\n.add-task-btn {\n  border: none;\n  text-align: left;\n  font-weight: 400;\n  font-size: 1.1rem;\n  background-color: transparent;\n  cursor: pointer;\n\n  padding: 0.2rem 0.4rem;\n}\n\n/* Modal */\n.modal-div {\n  position: fixed;\n  padding: 1.5rem;\n  min-width: 20rem;\n  min-height: 15rem;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -70%) scale(0);\n  transition: transform 300ms;\n  z-index: 10;\n  border-radius: 0.2rem;\n  background-color:#FFFFFF;\n  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 0.2);\n}\n\n.modal-active {\n  transform: translate(-50%, -70%) scale(1);\n}\n\n.modal-form-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n/* Inputs */\n.modal-input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.modal-input-container > label {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.textbox {\n  line-height: 2rem;\n  border: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  -moz-appearance: none;\n\n  border: 1px solid #e5e7eb;\n  border-radius: 0.2rem;\n  font-size: 15px;\n  padding: 0 10px;\n\n  transition: 150ms ease-in-out;\n}\n\n.textbox:focus {\n  outline: none;\n  border: 1px solid #5489eb;\n  border-radius: 0.2rem;\n}\n\n.textbox::placeholder {\n  font-size: 1rem;\n  color: #e5e5e5;\n}\n\n.task-description-box {\n  resize: none;\n}\n\n/* Buttons */\n.modal-buttons-pair {\n  display: flex;\n  gap: 1.3rem;\n}\n\n.modal-add-button,\n.modal-cancel-button {\n  border: none;\n  border-radius: 0.3rem;\n  cursor: pointer;\n  padding: 0.7rem 3rem;\n  font-size: 1rem;\n  font-weight: 500;\n\n  transition: 150ms ease-in-out;\n}\n\n.modal-add-button {\n  background-color: #5489eb;\n  color:#ffffff;\n}\n\n.modal-cancel-button {\n  background-color: #f5f5f5;\n  color:#222222;\n}\n\n.modal-add-button:hover {\n  background-color: #4274d0;\n}\n\n.modal-cancel-button:hover {\n  background-color: #cfcfcf;\n}\n\n/* Overlay */\n.overlay {\n  position: fixed;\n  opacity: 1;\n  transition: 200ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .5);\n  pointer-events: all;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/get-project-name.js":
/*!*********************************!*\
  !*** ./src/get-project-name.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProjectName)
/* harmony export */ });
function getProjectName(project) {
  const currentProject = project;
  const projectName = currentProject.classList[0].replace('-div', '');
  return projectName;
}

/***/ }),

/***/ "./src/modals/displayTaskModal.js":
/*!****************************************!*\
  !*** ./src/modals/displayTaskModal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTaskModal)
/* harmony export */ });
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ "./src/modals/overlay.js");
/* harmony import */ var _modal_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-functions */ "./src/modals/modal-functions.js");



function displayTaskModal() {

  // Create elements
  const modalDiv = document.createElement('div');
  const modalBody = document.createElement('div');

  const modalForm = document.createElement('form');
  const modalFormDiv = document.createElement('div');
  const modalInputContainerOne = document.createElement('div');
  const modalInputContainerTwo = document.createElement('div');

  const titleLabel = document.createElement('label');
  const descriptionLabel = document.createElement('label');

  const titleInput = document.createElement('input');
  const descriptionInput = document.createElement('textarea');

  const buttonsContainer = document.createElement('div');
  const addBtnContainer = document.createElement('div');
  const cancelBtnContainer = document.createElement('div');

  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  // Set attributes
  modalDiv.classList.add('modal-div', 'modal-active');
  modalBody.classList.add('modal-body');

  modalForm.setAttribute('action', '');
  modalForm.setAttribute('id', 'add-task-form');
  modalForm.setAttribute('method', 'dialog');
  
  modalFormDiv.classList.add('modal-form-div');

  modalInputContainerOne.classList.add('modal-input-container');
  modalInputContainerTwo.classList.add('modal-input-container');

  titleLabel.setAttribute('for', 'task-title');
  descriptionLabel.setAttribute('for', 'task-description');

  titleInput.classList.add('textbox');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'task-title');
  titleInput.setAttribute('name', 'task-title');
  titleInput.setAttribute('placeholder', 'Title')

  descriptionInput.classList.add('textbox', 'task-description-box');
  descriptionInput.setAttribute('id', 'task-description');
  descriptionInput.setAttribute('name', 'task-description');
  descriptionInput.setAttribute('placeholder', 'Description (optional)');
  descriptionInput.setAttribute('rows', '4');
  descriptionLabel.setAttribute('cols', '50');

  buttonsContainer.classList.add('modal-buttons-pair');
  addBtnContainer.classList.add('modal-add-btn-container');
  cancelBtnContainer.classList.add('modal-cancel-btn-container');

  addBtn.classList.add('modal-add-button');
  cancelBtn.classList.add('modal-cancel-button');

  // Add event listener to buttons
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_modal_functions__WEBPACK_IMPORTED_MODULE_1__.addNewTask)();
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_modal_functions__WEBPACK_IMPORTED_MODULE_1__.taskModalRemove)();
  });

  // Set inner HTML
  titleLabel.innerHTML = 'Title';
  descriptionLabel.innerHTML = 'Description';

  addBtn.innerHTML = 'Add';
  cancelBtn.innerHTML = 'Cancel';

  // Append elements
  modalBody.appendChild(modalForm);
  modalForm.appendChild(modalFormDiv);
  modalFormDiv.appendChild(modalInputContainerOne);
  modalFormDiv.appendChild(modalInputContainerTwo);
  modalFormDiv.appendChild(buttonsContainer);

  modalInputContainerOne.appendChild(titleLabel);
  modalInputContainerOne.appendChild(titleInput);

  modalInputContainerTwo.appendChild(descriptionLabel);
  modalInputContainerTwo.appendChild(descriptionInput);

  buttonsContainer.appendChild(addBtnContainer);
  buttonsContainer.appendChild(cancelBtnContainer);
  addBtnContainer.appendChild(addBtn);
  cancelBtnContainer.appendChild(cancelBtn);

  modalDiv.appendChild(modalBody);

  // Append element to page
  const contentDiv = document.querySelector('.content-div');
  contentDiv.appendChild(modalDiv);
  contentDiv.appendChild((0,_overlay__WEBPACK_IMPORTED_MODULE_0__.addOverlay)());
}

/***/ }),

/***/ "./src/modals/modal-functions.js":
/*!***************************************!*\
  !*** ./src/modals/modal-functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "taskModalRemove": () => (/* binding */ taskModalRemove)
/* harmony export */ });
/* harmony import */ var _task_list_make_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-list/make-task */ "./src/task-list/make-task.js");
/* harmony import */ var _task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task-list/default-work-task-list */ "./src/task-list/default-work-task-list.js");
/* harmony import */ var _task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-list/default-personal-task-list */ "./src/task-list/default-personal-task-list.js");
/* harmony import */ var _get_project_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-project-name */ "./src/get-project-name.js");
/* harmony import */ var _tabs_update_task_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabs/update-task-count */ "./src/tabs/update-task-count.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlay */ "./src/modals/overlay.js");







function taskModalRemove() {
  const taskModal = document.querySelector('.modal-div');
  taskModal.remove();
  (0,_overlay__WEBPACK_IMPORTED_MODULE_5__.overlayOff)();
}

function addNewTask() {

  // Create new task from title value
  const titleValue = document.getElementById('task-title').value;
  if (titleValue === '') {
    alert('Please fill out title field!');
    return;
  } 

  const newTask = (0,_task_list_make_task__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(titleValue);

  // Append new task to current task div
  const taskDivList = document.querySelector('.task-list-div');
  taskDivList.appendChild(newTask.taskDivHTML);
  taskModalRemove();

  // Add new task to current tab's array
  // Update task count
  const currentProject = document.querySelector('.currentTab');
  const projectName = (0,_get_project_name__WEBPACK_IMPORTED_MODULE_3__["default"])(currentProject);

    // Push new tabs to default work and personal
    if (projectName === 'work') {
      _task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_1__.workTaskArray.push(newTask);
      (0,_tabs_update_task_count__WEBPACK_IMPORTED_MODULE_4__.updateTaskCount)(currentProject, _task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_1__.workTaskArray);
    } else if (projectName === 'personal') {
      _task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_2__.personalTaskArray.push(newTask);
      (0,_tabs_update_task_count__WEBPACK_IMPORTED_MODULE_4__.updateTaskCount)(currentProject, _task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_2__.personalTaskArray);
    }
}



/***/ }),

/***/ "./src/modals/overlay.js":
/*!*******************************!*\
  !*** ./src/modals/overlay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOverlay": () => (/* binding */ addOverlay),
/* harmony export */   "overlayOff": () => (/* binding */ overlayOff)
/* harmony export */ });
/* harmony import */ var _modal_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-functions */ "./src/modals/modal-functions.js");


function overlayOff() {
  const overlayDiv = document.querySelector('.overlay');
  overlayDiv.remove();
}

function addOverlay() {
  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('overlay', 'overlay-active');

  overlayDiv.addEventListener('click', () => {
    (0,_modal_functions__WEBPACK_IMPORTED_MODULE_0__.taskModalRemove)();
    overlayOff();
  });

  return overlayDiv;
}



/***/ }),

/***/ "./src/styles/add-task-button.js":
/*!***************************************!*\
  !*** ./src/styles/add-task-button.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTaskButton)
/* harmony export */ });
/* harmony import */ var _modals_displayTaskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/displayTaskModal */ "./src/modals/displayTaskModal.js");


function addTaskButton() {
  const addTaskDiv = document.createElement('div');
  const addTaskBtn = document.createElement('button');

  addTaskDiv.classList.add('add-task-div');
  addTaskBtn.classList.add('add-task-btn');
  addTaskBtn.innerHTML = '+ Add Task';

  // Add event listener to open modal
  addTaskBtn.addEventListener('click', () => (0,_modals_displayTaskModal__WEBPACK_IMPORTED_MODULE_0__["default"])());

  addTaskDiv.appendChild(addTaskBtn);
  return addTaskDiv;
}

/***/ }),

/***/ "./src/styles/content.js":
/*!*******************************!*\
  !*** ./src/styles/content.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./src/styles/date.js");
/* harmony import */ var _tabs_default_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/default-tabs.js */ "./src/tabs/default-tabs.js");
/* harmony import */ var _task_list_default_work_task_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-list/default-work-task-list.js */ "./src/task-list/default-work-task-list.js");
/* harmony import */ var _add_task_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-task-button.js */ "./src/styles/add-task-button.js");





function content() {

  // Create content main element
  const contentMain = document.createElement('main');
  const contentDiv = document.createElement('div');

  // Set attributes
  contentMain.classList.add('content-main');
  contentDiv.classList.add('content-div');

  contentDiv.appendChild((0,_date_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  contentDiv.appendChild((0,_tabs_default_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  contentDiv.appendChild((0,_task_list_default_work_task_list_js__WEBPACK_IMPORTED_MODULE_2__.defaultWorkTaskList)());
  contentDiv.appendChild((0,_add_task_button_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
  
  contentMain.appendChild(contentDiv);

  // Return appended content main
  const body = document.querySelector('body');
  return body.appendChild(contentMain);
}

/***/ }),

/***/ "./src/styles/date.js":
/*!****************************!*\
  !*** ./src/styles/date.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayDate)
/* harmony export */ });
function displayDate() {

  // Convert current month to string
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const currentDate = `${day} ${month}, ${year}`;

  // Append date
  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date-div');
  dateDiv.innerHTML = currentDate;
  
  return dateDiv;
}

/***/ }),

/***/ "./src/styles/header.js":
/*!******************************!*\
  !*** ./src/styles/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  const body = document.querySelector('body');

  // Create elements
  const headerContainer = document.createElement('header');
  const titleDiv = document.createElement('div');

  // Set attributes
  headerContainer.classList.add('header-div');
  titleDiv.classList.add('header-title-div');

  // Set inner HTML
  titleDiv.innerHTML = 'todo list';

  // Append elements
  headerContainer.appendChild(titleDiv);

  // Return appended header div
  return body.appendChild(headerContainer);
}

/***/ }),

/***/ "./src/tabs/default-tabs.js":
/*!**********************************!*\
  !*** ./src/tabs/default-tabs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultTabs)
/* harmony export */ });
/* harmony import */ var _work_tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-tab.js */ "./src/tabs/work-tab.js");
/* harmony import */ var _personal_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-tab.js */ "./src/tabs/personal-tab.js");



function defaultTabs() {
  
  // Create elements
  const defaultTabsDiv = document.createElement('div');

  // Set attributes
  defaultTabsDiv.classList.add('tabs-div')

  // Append elements
  defaultTabsDiv.appendChild((0,_work_tab_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  defaultTabsDiv.appendChild((0,_personal_tab_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

  return defaultTabsDiv;
}

/***/ }),

/***/ "./src/tabs/personal-tab.js":
/*!**********************************!*\
  !*** ./src/tabs/personal-tab.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayPersonalTab)
/* harmony export */ });
/* harmony import */ var _task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-list/default-personal-task-list */ "./src/task-list/default-personal-task-list.js");
/* harmony import */ var _update_task_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-task-count */ "./src/tabs/update-task-count.js");



function displayPersonalTab() {
  const personalTab = document.createElement('div');
  personalTab.classList.add('personal-div');
  personalTab.innerHTML = 'personal';

  // Count amount of tasks from array and display count
  if (_task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_0__.personalTaskArray.length > 0) {
    personalTab.innerHTML = `personal (${_task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_0__.personalTaskArray.length})`;
  } else {
    personalTab.innerHTML = 'personal';
  }

  // Add event listener to remove current task list, 
  // display project task list, 
  // add/remove currentTab class
  // update task count
  personalTab.addEventListener('click', () => {
  const currentProject = document.querySelector('.currentTab');
  const projectName = currentProject.innerHTML;
  const personalTabHTML = document.querySelector('.personal-div');

    if (projectName !== 'personal') {
      const taskListDiv = document.querySelector('.task-list-div');

      // Remove all previous tasks
      while (taskListDiv.firstChild) {
        taskListDiv.removeChild(taskListDiv.lastChild);
      }

      // Display current project tasks
      for (let i = 0; i < _task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_0__.personalTaskArray.length; i++) {
        const task = _task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_0__.personalTaskArray[i].taskDivHTML;
        taskListDiv.append(task);
      }

      // Update currentTab
      currentProject.classList.remove('currentTab');
      personalTabHTML.classList.add('currentTab');

      // Update task count
      (0,_update_task_count__WEBPACK_IMPORTED_MODULE_1__.updateTaskCount)(personalTab, _task_list_default_personal_task_list__WEBPACK_IMPORTED_MODULE_0__.personalTaskArray);
    }
  });

  return personalTab;
};

/***/ }),

/***/ "./src/tabs/update-task-count.js":
/*!***************************************!*\
  !*** ./src/tabs/update-task-count.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countStrikeThroughs": () => (/* binding */ countStrikeThroughs),
/* harmony export */   "updateTaskCount": () => (/* binding */ updateTaskCount)
/* harmony export */ });
/* harmony import */ var _get_project_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-project-name */ "./src/get-project-name.js");


function countStrikeThroughs(projectArray) {
  const counter = [];
  let x = 0;

  for (let i = 0; i < projectArray.length; i++) {
    const taskHTML = projectArray[i].taskDivHTML;
    const labelHTML = taskHTML.querySelector('.task-label');

    if (labelHTML.classList.contains('strikethrough') === true) {
      x += 1;
      counter.push(x);
    };
  }

  // Return 0 if no numbers in array
  if (counter.length === 0) {
    return 0;
  } 
  return counter[counter.length - 1];
}

function updateTaskCount(project, projectArray) {
  const currentProject = project;
  const projectTitle = (0,_get_project_name__WEBPACK_IMPORTED_MODULE_0__["default"])(project)
  
  if (projectArray.length > countStrikeThroughs(projectArray)) {
    currentProject.innerHTML = `${projectTitle} (${projectArray.length - countStrikeThroughs(projectArray)})`;
  } else if (projectArray.length === countStrikeThroughs(projectArray)){
    currentProject.innerHTML = `${projectTitle}`;
  }
}



/***/ }),

/***/ "./src/tabs/work-tab.js":
/*!******************************!*\
  !*** ./src/tabs/work-tab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWorkTab)
/* harmony export */ });
/* harmony import */ var _task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-list/default-work-task-list */ "./src/task-list/default-work-task-list.js");
/* harmony import */ var _update_task_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-task-count */ "./src/tabs/update-task-count.js");





function displayWorkTab() {
  const workTab = document.createElement('div');
  workTab.classList.add('work-div', 'currentTab');

  // Count amount of tasks from array and display count
  (0,_update_task_count__WEBPACK_IMPORTED_MODULE_1__.updateTaskCount)(workTab, _task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_0__.workTaskArray);

  // Add event listener to: 
  // remove current task list, 
  // display project task list, 
  // add/remove currentTab class
  workTab.addEventListener('click', () => {
    const currentProject = document.querySelector('.currentTab');
    const projectName = currentProject.innerHTML;
    const workTabHTML = document.querySelector('.work-div');

    if (projectName !== 'work') {
      const taskListDiv = document.querySelector('.task-list-div');

      // Remove all previous tasks
      while (taskListDiv.firstChild) {
        taskListDiv.removeChild(taskListDiv.lastChild);
      }

      // Display current project tasks
      for (let i = 0; i < _task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_0__.workTaskArray.length; i++) {
        const task = _task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_0__.workTaskArray[i].taskDivHTML;
        taskListDiv.append(task);
      }

      // Update currentTab
      currentProject.classList.remove('currentTab');
      workTabHTML.classList.add('currentTab');

    }
  });
  (0,_update_task_count__WEBPACK_IMPORTED_MODULE_1__.countStrikeThroughs)(_task_list_default_work_task_list__WEBPACK_IMPORTED_MODULE_0__.workTaskArray);
  return workTab;
}

/***/ }),

/***/ "./src/task-list/default-personal-task-list.js":
/*!*****************************************************!*\
  !*** ./src/task-list/default-personal-task-list.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultPersonalTaskList": () => (/* binding */ defaultPersonalTaskList),
/* harmony export */   "personalTaskArray": () => (/* binding */ personalTaskArray)
/* harmony export */ });
const personalTaskArray = [];

function defaultPersonalTaskList() {

  // Create element and set attribute
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list-div');

  return taskListDiv;
}



/***/ }),

/***/ "./src/task-list/default-work-task-list.js":
/*!*************************************************!*\
  !*** ./src/task-list/default-work-task-list.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultWorkTaskList": () => (/* binding */ defaultWorkTaskList),
/* harmony export */   "workTaskArray": () => (/* binding */ workTaskArray)
/* harmony export */ });
/* harmony import */ var _task_list_make_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-list/make-task.js */ "./src/task-list/make-task.js");


const workTaskArray = [
  (0,_task_list_make_task_js__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Read a book'),
  (0,_task_list_make_task_js__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Wash dishes'),
  (0,_task_list_make_task_js__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Cook dinner')
];

function defaultWorkTaskList() {

  // Create element and set attribute
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list-div');

  taskListDiv.appendChild(workTaskArray[0].taskDivHTML);
  taskListDiv.appendChild(workTaskArray[1].taskDivHTML);
  taskListDiv.appendChild(workTaskArray[2].taskDivHTML);

  return taskListDiv;
}



/***/ }),

/***/ "./src/task-list/make-task.js":
/*!************************************!*\
  !*** ./src/task-list/make-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
/* harmony import */ var _strikethrough_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strikethrough.js */ "./src/task-list/strikethrough.js");
/* harmony import */ var _tabs_update_task_count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/update-task-count.js */ "./src/tabs/update-task-count.js");
/* harmony import */ var _get_project_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-project-name.js */ "./src/get-project-name.js");
/* harmony import */ var _default_work_task_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-work-task-list.js */ "./src/task-list/default-work-task-list.js");
/* harmony import */ var _default_personal_task_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-personal-task-list.js */ "./src/task-list/default-personal-task-list.js");






function makeTask(task) {
  const hyphendTask = task.replace(/\s+/g, "-");

  // Create elements
  const taskDiv = document.createElement('div');
  const taskLabel = document.createElement('label');
  const taskInput = document.createElement('input');
  const deleteButton = document.createElement('button');

  // Set attributes
  taskDiv.classList.add('task-div', `task-div-${hyphendTask}`);
  taskLabel.classList.add('task-label');
  taskInput.classList.add('task-input');
  deleteButton.classList.add('delete-task-button', `delete-${hyphendTask}`);
  
  taskLabel.setAttribute('for', `${hyphendTask}`);
  taskInput.setAttribute('type', 'checkbox');
  taskInput.setAttribute('id', `${hyphendTask}`);
  taskInput.setAttribute('name', `${hyphendTask}`);

  // Set inner HTML
  taskLabel.innerHTML = `${task}`;
  deleteButton.innerHTML = 'X';

  // Add event listeners: input and delete button
  taskInput.addEventListener('click', () => {
    (0,_strikethrough_js__WEBPACK_IMPORTED_MODULE_0__["default"])(taskLabel);

    // Get current tab's HTML and array
    const currentProject = document.querySelector('.currentTab');

      // Default projects
      const projectTitle = (0,_get_project_name_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentProject)

      if (projectTitle === 'work') {
        (0,_tabs_update_task_count_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskCount)(currentProject, _default_work_task_list_js__WEBPACK_IMPORTED_MODULE_3__.workTaskArray);
      } else if (projectTitle === 'personal') {
        (0,_tabs_update_task_count_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskCount)(currentProject, _default_personal_task_list_js__WEBPACK_IMPORTED_MODULE_4__.personalTaskArray);
      }
  });

  deleteButton.addEventListener('click', () => {
    // Get current tab's HTML and array
    const currentProject = document.querySelector('.currentTab');

      // Default projects
      const projectTitle = (0,_get_project_name_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentProject)

        // Remove task from array
        if (projectTitle === 'work') {
          
          // Find task in array
          for (let i = 0; i < _default_work_task_list_js__WEBPACK_IMPORTED_MODULE_3__.workTaskArray.length; i++) {
            const arrayTaskChild = _default_work_task_list_js__WEBPACK_IMPORTED_MODULE_3__.workTaskArray[i].taskDivHTML.lastChild;

            if (arrayTaskChild.classList.contains(`delete-${hyphendTask}`)) {

              // Remove from data structure and DOM
              _default_work_task_list_js__WEBPACK_IMPORTED_MODULE_3__.workTaskArray.splice(i, 1);
              taskDiv.remove();
            }
          }
          (0,_tabs_update_task_count_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskCount)(currentProject, _default_work_task_list_js__WEBPACK_IMPORTED_MODULE_3__.workTaskArray);
        } else if (projectTitle === 'personal') {

          // Find task in array
          for (let i = 0; i < _default_personal_task_list_js__WEBPACK_IMPORTED_MODULE_4__.personalTaskArray.length; i++) {
            const arrayTaskChild = _default_personal_task_list_js__WEBPACK_IMPORTED_MODULE_4__.personalTaskArray[i].taskDivHTML.lastChild;

            if (arrayTaskChild.classList.contains(`delete-${hyphendTask}`)) {

              // Remove from data structure and DOM
              _default_personal_task_list_js__WEBPACK_IMPORTED_MODULE_4__.personalTaskArray.splice(i, 1);
              taskDiv.remove();
            }
          (0,_tabs_update_task_count_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskCount)(currentProject, _default_personal_task_list_js__WEBPACK_IMPORTED_MODULE_4__.personalTaskArray);
          }
        }
      });

  // Append elements
  taskDiv.appendChild(taskInput);
  taskDiv.appendChild(taskLabel);
  taskDiv.appendChild(deleteButton);
  
  return taskDiv;
}

const taskFactory = (taskName) => {
  const taskDivHTML = makeTask(taskName);
  return {taskName, taskDivHTML};
};



/***/ }),

/***/ "./src/task-list/strikethrough.js":
/*!****************************************!*\
  !*** ./src/task-list/strikethrough.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ strikethrough)
/* harmony export */ });
function strikethrough(taskLabel) {
  if (taskLabel.classList.contains('strikethrough')) {
    taskLabel.classList.remove('strikethrough');

  } else if (taskLabel.classList.contains('strikethrough') === false) {
    taskLabel.classList.add('strikethrough');
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/header.js */ "./src/styles/header.js");
/* harmony import */ var _styles_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/content.js */ "./src/styles/content.js");




(0,_styles_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_styles_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsaUlBQWlJLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3JQO0FBQ0EsNEVBQTRFLDJCQUEyQixHQUFHLDBCQUEwQix3QkFBd0IsaURBQWlELEdBQUcsbUNBQW1DLHNCQUFzQixxQkFBcUIsY0FBYyxlQUFlLG1CQUFtQixHQUFHLDBCQUEwQixrQkFBa0IsNEJBQTRCLHdCQUF3QixxQkFBcUIsaURBQWlELEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLHVCQUF1QixzQkFBc0IscUJBQXFCLEdBQUcsa0NBQWtDLGtCQUFrQiw0QkFBNEIsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsZ0JBQWdCLHNCQUFzQixrQkFBa0IsMEJBQTBCLCtDQUErQyxHQUFHLGVBQWUsc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRywyQkFBMkIsa0JBQWtCLGdCQUFnQixvQkFBb0IsbUJBQW1CLG9CQUFvQixHQUFHLGVBQWUsa0JBQWtCLDRCQUE0QixzQkFBc0IsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyw4Q0FBOEMsbUJBQW1CLDZCQUE2QixHQUFHLDREQUE0RCxrQkFBa0IsK0JBQStCLGdCQUFnQixrQkFBa0IsR0FBRyxlQUFlLGtCQUFrQixnQkFBZ0IsR0FBRyw4QkFBOEIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsaUJBQWlCLDhCQUE4QixvQkFBb0IsNkNBQTZDLHdCQUF3QixvQkFBb0IsMEJBQTBCLEdBQUcsNkJBQTZCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDJCQUEyQix3QkFBd0IsNENBQTRDLHNDQUFzQyxvQkFBb0IsMEJBQTBCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLFdBQVcscUJBQXFCLGdCQUFnQixHQUFHLG9CQUFvQixrQ0FBa0MsbUJBQW1CLEdBQUcseUJBQXlCLGlCQUFpQixrQ0FBa0Msb0JBQW9CLGtCQUFrQixxQkFBcUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsMENBQTBDLGlCQUFpQixxQkFBcUIscUJBQXFCLHNCQUFzQixrQ0FBa0Msb0JBQW9CLDZCQUE2QixHQUFHLDZCQUE2QixvQkFBb0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsYUFBYSxjQUFjLDhDQUE4QyxnQ0FBZ0MsZ0JBQWdCLDBCQUEwQiw2QkFBNkIsK0NBQStDLEdBQUcsbUJBQW1CLDhDQUE4QyxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLDBDQUEwQyxrQkFBa0IsMkJBQTJCLGNBQWMsc0JBQXNCLHFCQUFxQixHQUFHLG9DQUFvQyxzQkFBc0IscUJBQXFCLEdBQUcsY0FBYyxzQkFBc0IsaUJBQWlCLHFCQUFxQiw2QkFBNkIseUJBQXlCLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLG9CQUFvQixvQkFBb0Isb0NBQW9DLEdBQUcsb0JBQW9CLGtCQUFrQiw4QkFBOEIsMEJBQTBCLEdBQUcsMkJBQTJCLG9CQUFvQixtQkFBbUIsR0FBRywyQkFBMkIsaUJBQWlCLEdBQUcsd0NBQXdDLGtCQUFrQixnQkFBZ0IsR0FBRyw4Q0FBOEMsaUJBQWlCLDBCQUEwQixvQkFBb0IseUJBQXlCLG9CQUFvQixxQkFBcUIsb0NBQW9DLEdBQUcsdUJBQXVCLDhCQUE4QixrQkFBa0IsR0FBRywwQkFBMEIsOEJBQThCLGtCQUFrQixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxnQ0FBZ0MsOEJBQThCLEdBQUcsNkJBQTZCLG9CQUFvQixlQUFlLGtDQUFrQyxXQUFXLFlBQVksYUFBYSxjQUFjLHdDQUF3Qyx3QkFBd0IsR0FBRyxPQUFPLDhGQUE4RixNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUs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QUFtQyxxRUFBYTs7QUFFaEQsNERBQTRELFlBQVk7O0FBRXhFO0FBQ0EsY0FBYyw0RUFBb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyRUFBZSxpQkFBaUIscUVBQWE7QUFDdkQsVUFBVTs7QUFFVjtBQUNBLDBCQUEwQixJQUFJLG9GQUF3QixFQUFFO0FBQ3hELG1DQUFtQyw2RUFBaUI7O0FBRXBELDREQUE0RCxZQUFZOztBQUV4RTtBQUNBLGNBQWMsb0ZBQXdCO0FBQ3RDO0FBQ0E7QUFDQSxVQUFVLDJFQUFlLGlCQUFpQiw2RUFBaUI7QUFDM0Q7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHZTtBQUNmO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ1k7QUFDRTs7QUFFMUMsNkRBQU07QUFDTiw4REFBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0LXByb2plY3QtbmFtZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFscy9kaXNwbGF5VGFza01vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kYWxzL21vZGFsLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGFscy9vdmVybGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL2FkZC10YXNrLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9jb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFicy9kZWZhdWx0LXRhYnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YWJzL3BlcnNvbmFsLXRhYi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RhYnMvdXBkYXRlLXRhc2stY291bnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YWJzL3dvcmstdGFiLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1saXN0L2RlZmF1bHQtcGVyc29uYWwtdGFzay1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1saXN0L2RlZmF1bHQtd29yay10YXNrLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLWxpc3QvbWFrZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1saXN0L3N0cmlrZXRocm91Z2guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytEaXNwbGF5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgZGVjbGFyYXRpb25zICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIERpc3BsYXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBCb2R5IGRlY2xhcmF0aW9ucyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiMyMjIyMjI7IFxcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XFxuICBib3gtc2hhZG93OiAwIC01cHggMTBweCAwcHggcmdiKDAgMCAwIC8gMC43KTtcXG59XFxuXFxuLmhlYWRlci1sb2dvLWRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLmhlYWRlci10aXRsZS1kaXYge1xcbiAgZm9udC1zaXplOiAyLjdyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuLmNvbnRlbnQtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogMjVyZW07XFxuICBnYXA6IDAuOHJlbTtcXG4gIG1hcmdpbjogMnJlbSA2cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwcHggcmdiKDAgMCAwIC8gMC4yKTtcXG59XFxuXFxuLmRhdGUtZGl2IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNzM3MzczO1xcbn1cXG5cXG4vKiBUYWJzICovXFxuLnRhYnMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGNvbG9yOiAjYTNhM2EzO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ud29yay1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wZXJzb25hbC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qIEhpZ2hsaWdodCBjdXJyZW50IHRhYiAqL1xcbi5jdXJyZW50VGFiIHtcXG4gIGNvbG9yOiAjMjIyMjIyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcbi50YXNrLWxpc3QtZGl2LCAuY29tcGxldGVkLXRhc2tzLWxpc3QtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBmbGV4LWdyb3c6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAwLjEwcmVtIHNvbGlkIHJnYigxMjUsIDEyNSwgMTI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5bdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjYycmVtO1xcbiAgaGVpZ2h0OiAwLjYycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtICM1YzVjNWM7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5bdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogIzVjNWM1YztcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiNjZmNmY2Y7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4vKiBBZGQgVGFzayBCdXR0b24gKi9cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxufVxcblxcbi8qIE1vZGFsICovXFxuLm1vZGFsLWRpdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgbWluLWhlaWdodDogMTVyZW07XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbiAgei1pbmRleDogMTA7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMHB4IHJnYigwIDAgMCAvIDAuMik7XFxufVxcblxcbi5tb2RhbC1hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTcwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbC1mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4vKiBJbnB1dHMgKi9cXG4ubW9kYWwtaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1vZGFsLWlucHV0LWNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnRleHRib3gge1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcblxcbiAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50ZXh0Ym94OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTQ4OWViO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4udGV4dGJveDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICNlNWU1ZTU7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLWJveCB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG4ubW9kYWwtYnV0dG9ucy1wYWlyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuM3JlbTtcXG59XFxuXFxuLm1vZGFsLWFkZC1idXR0b24sXFxuLm1vZGFsLWNhbmNlbC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC43cmVtIDNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcblxcbiAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb2RhbC1hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDg5ZWI7XFxuICBjb2xvcjojZmZmZmZmO1xcbn1cXG5cXG4ubW9kYWwtY2FuY2VsLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6IzIyMjIyMjtcXG59XFxuXFxuLm1vZGFsLWFkZC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNzRkMDtcXG59XFxuXFxuLm1vZGFsLWNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjZjtcXG59XFxuXFxuLyogT3ZlcmxheSAqL1xcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsd0JBQXdCO0FBQ3hCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQSxTQUFTO0FBQ1Q7RUFD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c0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrRGlzcGxheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogR2xvYmFsIGRlY2xhcmF0aW9ucyAqL1xcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogQm9keSBkZWNsYXJhdGlvbnMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjojMjIyMjIyOyBcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgYm94LXNoYWRvdzogMCAtNXB4IDEwcHggMHB4IHJnYigwIDAgMCAvIDAuNyk7XFxufVxcblxcbi5oZWFkZXItbG9nby1kaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi5oZWFkZXItdGl0bGUtZGl2IHtcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcbi5jb250ZW50LW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDI1cmVtO1xcbiAgZ2FwOiAwLjhyZW07XFxuICBtYXJnaW46IDJyZW0gNnJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMHB4IHJnYigwIDAgMCAvIDAuMik7XFxufVxcblxcbi5kYXRlLWRpdiB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzczNzM3MztcXG59XFxuXFxuLyogVGFicyAqL1xcbi50YWJzLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBjb2xvcjogI2EzYTNhMztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLndvcmstZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucGVyc29uYWwtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiBIaWdobGlnaHQgY3VycmVudCB0YWIgKi9cXG4uY3VycmVudFRhYiB7XFxuICBjb2xvcjogIzIyMjIyMjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG59XFxuXFxuLyogVGFza3MgKi9cXG4udGFzay1saXN0LWRpdiwgLmNvbXBsZXRlZC10YXNrcy1saXN0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjZyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZmxleC1ncm93OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMC4xMHJlbSBzb2xpZCByZ2IoMTI1LCAxMjUsIDEyNSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuW3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42MnJlbTtcXG4gIGhlaWdodDogMC42MnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSAjNWM1YzVjO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICM1YzVjNWM7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjojY2ZjZmNmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuLyogQWRkIFRhc2sgQnV0dG9uICovXFxuLmFkZC10YXNrLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbi5tb2RhbC1kaXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG4gIHotaW5kZXg6IDEwO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDBweCByZ2IoMCAwIDAgLyAwLjIpO1xcbn1cXG5cXG4ubW9kYWwtYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ubW9kYWwtZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLyogSW5wdXRzICovXFxuLm1vZGFsLWlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tb2RhbC1pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50ZXh0Ym94IHtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gIHRyYW5zaXRpb246IDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGV4dGJveDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU0ODllYjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuLnRleHRib3g6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjZTVlNWU1O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbi1ib3gge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4vKiBCdXR0b25zICovXFxuLm1vZGFsLWJ1dHRvbnMtcGFpciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjNyZW07XFxufVxcblxcbi5tb2RhbC1hZGQtYnV0dG9uLFxcbi5tb2RhbC1jYW5jZWwtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuN3JlbSAzcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gIHRyYW5zaXRpb246IDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubW9kYWwtYWRkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ4OWViO1xcbiAgY29sb3I6I2ZmZmZmZjtcXG59XFxuXFxuLm1vZGFsLWNhbmNlbC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGNvbG9yOiMyMjIyMjI7XFxufVxcblxcbi5tb2RhbC1hZGQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjc0ZDA7XFxufVxcblxcbi5tb2RhbC1jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmNmY2Y7XFxufVxcblxcbi8qIE92ZXJsYXkgKi9cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm9qZWN0TmFtZShwcm9qZWN0KSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjdXJyZW50UHJvamVjdC5jbGFzc0xpc3RbMF0ucmVwbGFjZSgnLWRpdicsICcnKTtcbiAgcmV0dXJuIHByb2plY3ROYW1lO1xufSIsImltcG9ydCB7IGFkZE92ZXJsYXkgfSBmcm9tIFwiLi9vdmVybGF5XCI7XG5pbXBvcnQgeyBhZGROZXdUYXNrLCB0YXNrTW9kYWxSZW1vdmUgfSBmcm9tIFwiLi9tb2RhbC1mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRhc2tNb2RhbCgpIHtcblxuICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBtb2RhbEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbW9kYWxJbnB1dENvbnRhaW5lck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtb2RhbElucHV0Q29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYW5jZWxCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgbW9kYWxEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGl2JywgJ21vZGFsLWFjdGl2ZScpO1xuICBtb2RhbEJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYm9keScpO1xuXG4gIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcnKTtcbiAgbW9kYWxGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2stZm9ybScpO1xuICBtb2RhbEZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZGlhbG9nJyk7XG4gIFxuICBtb2RhbEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9ybS1kaXYnKTtcblxuICBtb2RhbElucHV0Q29udGFpbmVyT25lLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWlucHV0LWNvbnRhaW5lcicpO1xuICBtb2RhbElucHV0Q29udGFpbmVyVHdvLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay10aXRsZScpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcblxuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RleHRib3gnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZScpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXRpdGxlJyk7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpXG5cbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Ym94JywgJ3Rhc2stZGVzY3JpcHRpb24tYm94Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uIChvcHRpb25hbCknKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnY29scycsICc1MCcpO1xuXG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnV0dG9ucy1wYWlyJyk7XG4gIGFkZEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hZGQtYnRuLWNvbnRhaW5lcicpO1xuICBjYW5jZWxCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2FuY2VsLWJ0bi1jb250YWluZXInKTtcblxuICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWRkLWJ1dHRvbicpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2FuY2VsLWJ1dHRvbicpO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBidXR0b25zXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZE5ld1Rhc2soKTtcbiAgfSk7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFza01vZGFsUmVtb3ZlKCk7XG4gIH0pO1xuXG4gIC8vIFNldCBpbm5lciBIVE1MXG4gIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlJztcbiAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb24nO1xuXG4gIGFkZEJ0bi5pbm5lckhUTUwgPSAnQWRkJztcbiAgY2FuY2VsQnRuLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50c1xuICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobW9kYWxGb3JtKTtcbiAgbW9kYWxGb3JtLmFwcGVuZENoaWxkKG1vZGFsRm9ybURpdik7XG4gIG1vZGFsRm9ybURpdi5hcHBlbmRDaGlsZChtb2RhbElucHV0Q29udGFpbmVyT25lKTtcbiAgbW9kYWxGb3JtRGl2LmFwcGVuZENoaWxkKG1vZGFsSW5wdXRDb250YWluZXJUd28pO1xuICBtb2RhbEZvcm1EaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgbW9kYWxJbnB1dENvbnRhaW5lck9uZS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgbW9kYWxJbnB1dENvbnRhaW5lck9uZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBtb2RhbElucHV0Q29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBtb2RhbElucHV0Q29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuQ29udGFpbmVyKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG5Db250YWluZXIpO1xuICBhZGRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgY2FuY2VsQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgbW9kYWxEaXYuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KTtcblxuICAvLyBBcHBlbmQgZWxlbWVudCB0byBwYWdlXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1kaXYnKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtb2RhbERpdik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkT3ZlcmxheSgpKTtcbn0iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuLi90YXNrLWxpc3QvbWFrZS10YXNrXCI7XG5pbXBvcnQgeyB3b3JrVGFza0FycmF5IH0gZnJvbSBcIi4uL3Rhc2stbGlzdC9kZWZhdWx0LXdvcmstdGFzay1saXN0XCI7XG5pbXBvcnQgeyBwZXJzb25hbFRhc2tBcnJheSB9IGZyb20gXCIuLi90YXNrLWxpc3QvZGVmYXVsdC1wZXJzb25hbC10YXNrLWxpc3RcIjtcbmltcG9ydCBnZXRQcm9qZWN0TmFtZSBmcm9tIFwiLi4vZ2V0LXByb2plY3QtbmFtZVwiO1xuaW1wb3J0IHsgdXBkYXRlVGFza0NvdW50IH0gZnJvbSBcIi4uL3RhYnMvdXBkYXRlLXRhc2stY291bnRcIjtcbmltcG9ydCB7IG92ZXJsYXlPZmYgfSBmcm9tIFwiLi9vdmVybGF5XCI7XG5cbmZ1bmN0aW9uIHRhc2tNb2RhbFJlbW92ZSgpIHtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpdicpO1xuICB0YXNrTW9kYWwucmVtb3ZlKCk7XG4gIG92ZXJsYXlPZmYoKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFzaygpIHtcblxuICAvLyBDcmVhdGUgbmV3IHRhc2sgZnJvbSB0aXRsZSB2YWx1ZVxuICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKS52YWx1ZTtcbiAgaWYgKHRpdGxlVmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBmaWxsIG91dCB0aXRsZSBmaWVsZCEnKTtcbiAgICByZXR1cm47XG4gIH0gXG5cbiAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlVmFsdWUpO1xuXG4gIC8vIEFwcGVuZCBuZXcgdGFzayB0byBjdXJyZW50IHRhc2sgZGl2XG4gIGNvbnN0IHRhc2tEaXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdC1kaXYnKTtcbiAgdGFza0Rpdkxpc3QuYXBwZW5kQ2hpbGQobmV3VGFzay50YXNrRGl2SFRNTCk7XG4gIHRhc2tNb2RhbFJlbW92ZSgpO1xuXG4gIC8vIEFkZCBuZXcgdGFzayB0byBjdXJyZW50IHRhYidzIGFycmF5XG4gIC8vIFVwZGF0ZSB0YXNrIGNvdW50XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUYWInKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRQcm9qZWN0TmFtZShjdXJyZW50UHJvamVjdCk7XG5cbiAgICAvLyBQdXNoIG5ldyB0YWJzIHRvIGRlZmF1bHQgd29yayBhbmQgcGVyc29uYWxcbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICd3b3JrJykge1xuICAgICAgd29ya1Rhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgdXBkYXRlVGFza0NvdW50KGN1cnJlbnRQcm9qZWN0LCB3b3JrVGFza0FycmF5KTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3ROYW1lID09PSAncGVyc29uYWwnKSB7XG4gICAgICBwZXJzb25hbFRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgdXBkYXRlVGFza0NvdW50KGN1cnJlbnRQcm9qZWN0LCBwZXJzb25hbFRhc2tBcnJheSk7XG4gICAgfVxufVxuXG5leHBvcnQge3Rhc2tNb2RhbFJlbW92ZSwgYWRkTmV3VGFza307IiwiaW1wb3J0IHsgdGFza01vZGFsUmVtb3ZlIH0gZnJvbSBcIi4vbW9kYWwtZnVuY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIG92ZXJsYXlPZmYoKSB7XG4gIGNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICBvdmVybGF5RGl2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRPdmVybGF5KCkge1xuICBjb25zdCBvdmVybGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXlEaXYuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScsICdvdmVybGF5LWFjdGl2ZScpO1xuXG4gIG92ZXJsYXlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza01vZGFsUmVtb3ZlKCk7XG4gICAgb3ZlcmxheU9mZigpO1xuICB9KTtcblxuICByZXR1cm4gb3ZlcmxheURpdjtcbn1cblxuZXhwb3J0IHsgYWRkT3ZlcmxheSwgb3ZlcmxheU9mZn07IiwiaW1wb3J0IGRpc3BsYXlUYXNrTW9kYWwgZnJvbSBcIi4uL21vZGFscy9kaXNwbGF5VGFza01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2tCdXR0b24oKSB7XG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGl2Jyk7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gJysgQWRkIFRhc2snO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBvcGVuIG1vZGFsXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5VGFza01vZGFsKCkpO1xuXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIHJldHVybiBhZGRUYXNrRGl2O1xufSIsImltcG9ydCBkaXNwbGF5RGF0ZSBmcm9tICcuL2RhdGUuanMnO1xuaW1wb3J0IGRlZmF1bHRUYWJzIGZyb20gJy4uL3RhYnMvZGVmYXVsdC10YWJzLmpzJztcbmltcG9ydCB7IGRlZmF1bHRXb3JrVGFza0xpc3QgfSBmcm9tICcuLi90YXNrLWxpc3QvZGVmYXVsdC13b3JrLXRhc2stbGlzdC5qcyc7XG5pbXBvcnQgYWRkVGFza0J1dHRvbiBmcm9tICcuL2FkZC10YXNrLWJ1dHRvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnQoKSB7XG5cbiAgLy8gQ3JlYXRlIGNvbnRlbnQgbWFpbiBlbGVtZW50XG4gIGNvbnN0IGNvbnRlbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgY29udGVudE1haW4uY2xhc3NMaXN0LmFkZCgnY29udGVudC1tYWluJyk7XG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kaXYnKTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEYXRlKCkpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlZmF1bHRUYWJzKCkpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlZmF1bHRXb3JrVGFza0xpc3QoKSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbigpKTtcbiAgXG4gIGNvbnRlbnRNYWluLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4gIC8vIFJldHVybiBhcHBlbmRlZCBjb250ZW50IG1haW5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgcmV0dXJuIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudE1haW4pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlEYXRlKCkge1xuXG4gIC8vIENvbnZlcnQgY3VycmVudCBtb250aCB0byBzdHJpbmdcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSk7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gYCR7ZGF5fSAke21vbnRofSwgJHt5ZWFyfWA7XG5cbiAgLy8gQXBwZW5kIGRhdGVcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gIGRhdGVEaXYuaW5uZXJIVE1MID0gY3VycmVudERhdGU7XG4gIFxuICByZXR1cm4gZGF0ZURpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8vIFNldCBhdHRyaWJ1dGVzXG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZGl2Jyk7XG4gIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZS1kaXYnKTtcblxuICAvLyBTZXQgaW5uZXIgSFRNTFxuICB0aXRsZURpdi5pbm5lckhUTUwgPSAndG9kbyBsaXN0JztcblxuICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAvLyBSZXR1cm4gYXBwZW5kZWQgaGVhZGVyIGRpdlxuICByZXR1cm4gYm9keS5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xufSIsImltcG9ydCB3b3JrVGFiIGZyb20gJy4vd29yay10YWIuanMnO1xuaW1wb3J0IHBlcnNvbmFsVGFiIGZyb20gJy4vcGVyc29uYWwtdGFiLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdFRhYnMoKSB7XG4gIFxuICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgY29uc3QgZGVmYXVsdFRhYnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAvLyBTZXQgYXR0cmlidXRlc1xuICBkZWZhdWx0VGFic0Rpdi5jbGFzc0xpc3QuYWRkKCd0YWJzLWRpdicpXG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzXG4gIGRlZmF1bHRUYWJzRGl2LmFwcGVuZENoaWxkKHdvcmtUYWIoKSk7XG4gIGRlZmF1bHRUYWJzRGl2LmFwcGVuZENoaWxkKHBlcnNvbmFsVGFiKCkpO1xuXG4gIHJldHVybiBkZWZhdWx0VGFic0Rpdjtcbn0iLCJpbXBvcnQgeyBwZXJzb25hbFRhc2tBcnJheSB9IGZyb20gXCIuLi90YXNrLWxpc3QvZGVmYXVsdC1wZXJzb25hbC10YXNrLWxpc3RcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tDb3VudCB9IGZyb20gXCIuL3VwZGF0ZS10YXNrLWNvdW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQZXJzb25hbFRhYigpIHtcbiAgY29uc3QgcGVyc29uYWxUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGVyc29uYWxUYWIuY2xhc3NMaXN0LmFkZCgncGVyc29uYWwtZGl2Jyk7XG4gIHBlcnNvbmFsVGFiLmlubmVySFRNTCA9ICdwZXJzb25hbCc7XG5cbiAgLy8gQ291bnQgYW1vdW50IG9mIHRhc2tzIGZyb20gYXJyYXkgYW5kIGRpc3BsYXkgY291bnRcbiAgaWYgKHBlcnNvbmFsVGFza0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICBwZXJzb25hbFRhYi5pbm5lckhUTUwgPSBgcGVyc29uYWwgKCR7cGVyc29uYWxUYXNrQXJyYXkubGVuZ3RofSlgO1xuICB9IGVsc2Uge1xuICAgIHBlcnNvbmFsVGFiLmlubmVySFRNTCA9ICdwZXJzb25hbCc7XG4gIH1cblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gcmVtb3ZlIGN1cnJlbnQgdGFzayBsaXN0LCBcbiAgLy8gZGlzcGxheSBwcm9qZWN0IHRhc2sgbGlzdCwgXG4gIC8vIGFkZC9yZW1vdmUgY3VycmVudFRhYiBjbGFzc1xuICAvLyB1cGRhdGUgdGFzayBjb3VudFxuICBwZXJzb25hbFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRhYicpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTDtcbiAgY29uc3QgcGVyc29uYWxUYWJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsLWRpdicpO1xuXG4gICAgaWYgKHByb2plY3ROYW1lICE9PSAncGVyc29uYWwnKSB7XG4gICAgICBjb25zdCB0YXNrTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QtZGl2Jyk7XG5cbiAgICAgIC8vIFJlbW92ZSBhbGwgcHJldmlvdXMgdGFza3NcbiAgICAgIHdoaWxlICh0YXNrTGlzdERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tMaXN0RGl2LnJlbW92ZUNoaWxkKHRhc2tMaXN0RGl2Lmxhc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERpc3BsYXkgY3VycmVudCBwcm9qZWN0IHRhc2tzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcnNvbmFsVGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwZXJzb25hbFRhc2tBcnJheVtpXS50YXNrRGl2SFRNTDtcbiAgICAgICAgdGFza0xpc3REaXYuYXBwZW5kKHRhc2spO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgY3VycmVudFRhYlxuICAgICAgY3VycmVudFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudFRhYicpO1xuICAgICAgcGVyc29uYWxUYWJIVE1MLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRUYWInKTtcblxuICAgICAgLy8gVXBkYXRlIHRhc2sgY291bnRcbiAgICAgIHVwZGF0ZVRhc2tDb3VudChwZXJzb25hbFRhYiwgcGVyc29uYWxUYXNrQXJyYXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBlcnNvbmFsVGFiO1xufTsiLCJpbXBvcnQgZ2V0UHJvamVjdE5hbWUgZnJvbSBcIi4uL2dldC1wcm9qZWN0LW5hbWVcIjtcblxuZnVuY3Rpb24gY291bnRTdHJpa2VUaHJvdWdocyhwcm9qZWN0QXJyYXkpIHtcbiAgY29uc3QgY291bnRlciA9IFtdO1xuICBsZXQgeCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrSFRNTCA9IHByb2plY3RBcnJheVtpXS50YXNrRGl2SFRNTDtcbiAgICBjb25zdCBsYWJlbEhUTUwgPSB0YXNrSFRNTC5xdWVyeVNlbGVjdG9yKCcudGFzay1sYWJlbCcpO1xuXG4gICAgaWYgKGxhYmVsSFRNTC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0cmlrZXRocm91Z2gnKSA9PT0gdHJ1ZSkge1xuICAgICAgeCArPSAxO1xuICAgICAgY291bnRlci5wdXNoKHgpO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm4gMCBpZiBubyBudW1iZXJzIGluIGFycmF5XG4gIGlmIChjb3VudGVyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9IFxuICByZXR1cm4gY291bnRlcltjb3VudGVyLmxlbmd0aCAtIDFdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ291bnQocHJvamVjdCwgcHJvamVjdEFycmF5KSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZ2V0UHJvamVjdE5hbWUocHJvamVjdClcbiAgXG4gIGlmIChwcm9qZWN0QXJyYXkubGVuZ3RoID4gY291bnRTdHJpa2VUaHJvdWdocyhwcm9qZWN0QXJyYXkpKSB7XG4gICAgY3VycmVudFByb2plY3QuaW5uZXJIVE1MID0gYCR7cHJvamVjdFRpdGxlfSAoJHtwcm9qZWN0QXJyYXkubGVuZ3RoIC0gY291bnRTdHJpa2VUaHJvdWdocyhwcm9qZWN0QXJyYXkpfSlgO1xuICB9IGVsc2UgaWYgKHByb2plY3RBcnJheS5sZW5ndGggPT09IGNvdW50U3RyaWtlVGhyb3VnaHMocHJvamVjdEFycmF5KSl7XG4gICAgY3VycmVudFByb2plY3QuaW5uZXJIVE1MID0gYCR7cHJvamVjdFRpdGxlfWA7XG4gIH1cbn1cblxuZXhwb3J0IHt1cGRhdGVUYXNrQ291bnQsIGNvdW50U3RyaWtlVGhyb3VnaHN9OyIsImltcG9ydCB7IHdvcmtUYXNrQXJyYXkgfSBmcm9tIFwiLi4vdGFzay1saXN0L2RlZmF1bHQtd29yay10YXNrLWxpc3RcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tDb3VudCB9IGZyb20gXCIuL3VwZGF0ZS10YXNrLWNvdW50XCI7XG5cbmltcG9ydCB7IGNvdW50U3RyaWtlVGhyb3VnaHMgfSBmcm9tIFwiLi91cGRhdGUtdGFzay1jb3VudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5V29ya1RhYigpIHtcbiAgY29uc3Qgd29ya1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3b3JrVGFiLmNsYXNzTGlzdC5hZGQoJ3dvcmstZGl2JywgJ2N1cnJlbnRUYWInKTtcblxuICAvLyBDb3VudCBhbW91bnQgb2YgdGFza3MgZnJvbSBhcnJheSBhbmQgZGlzcGxheSBjb3VudFxuICB1cGRhdGVUYXNrQ291bnQod29ya1RhYiwgd29ya1Rhc2tBcnJheSk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvOiBcbiAgLy8gcmVtb3ZlIGN1cnJlbnQgdGFzayBsaXN0LCBcbiAgLy8gZGlzcGxheSBwcm9qZWN0IHRhc2sgbGlzdCwgXG4gIC8vIGFkZC9yZW1vdmUgY3VycmVudFRhYiBjbGFzc1xuICB3b3JrVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUYWInKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGN1cnJlbnRQcm9qZWN0LmlubmVySFRNTDtcbiAgICBjb25zdCB3b3JrVGFiSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLWRpdicpO1xuXG4gICAgaWYgKHByb2plY3ROYW1lICE9PSAnd29yaycpIHtcbiAgICAgIGNvbnN0IHRhc2tMaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdC1kaXYnKTtcblxuICAgICAgLy8gUmVtb3ZlIGFsbCBwcmV2aW91cyB0YXNrc1xuICAgICAgd2hpbGUgKHRhc2tMaXN0RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0xpc3REaXYucmVtb3ZlQ2hpbGQodGFza0xpc3REaXYubGFzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBjdXJyZW50IHByb2plY3QgdGFza3NcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29ya1Rhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gd29ya1Rhc2tBcnJheVtpXS50YXNrRGl2SFRNTDtcbiAgICAgICAgdGFza0xpc3REaXYuYXBwZW5kKHRhc2spO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgY3VycmVudFRhYlxuICAgICAgY3VycmVudFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudFRhYicpO1xuICAgICAgd29ya1RhYkhUTUwuY2xhc3NMaXN0LmFkZCgnY3VycmVudFRhYicpO1xuXG4gICAgfVxuICB9KTtcbiAgY291bnRTdHJpa2VUaHJvdWdocyh3b3JrVGFza0FycmF5KTtcbiAgcmV0dXJuIHdvcmtUYWI7XG59IiwiY29uc3QgcGVyc29uYWxUYXNrQXJyYXkgPSBbXTtcblxuZnVuY3Rpb24gZGVmYXVsdFBlcnNvbmFsVGFza0xpc3QoKSB7XG5cbiAgLy8gQ3JlYXRlIGVsZW1lbnQgYW5kIHNldCBhdHRyaWJ1dGVcbiAgY29uc3QgdGFza0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0xpc3REaXYuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWRpdicpO1xuXG4gIHJldHVybiB0YXNrTGlzdERpdjtcbn1cblxuZXhwb3J0IHtkZWZhdWx0UGVyc29uYWxUYXNrTGlzdCwgcGVyc29uYWxUYXNrQXJyYXl9OyIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSAnLi4vdGFzay1saXN0L21ha2UtdGFzay5qcyc7XG5cbmNvbnN0IHdvcmtUYXNrQXJyYXkgPSBbXG4gIHRhc2tGYWN0b3J5KCdSZWFkIGEgYm9vaycpLFxuICB0YXNrRmFjdG9yeSgnV2FzaCBkaXNoZXMnKSxcbiAgdGFza0ZhY3RvcnkoJ0Nvb2sgZGlubmVyJylcbl07XG5cbmZ1bmN0aW9uIGRlZmF1bHRXb3JrVGFza0xpc3QoKSB7XG5cbiAgLy8gQ3JlYXRlIGVsZW1lbnQgYW5kIHNldCBhdHRyaWJ1dGVcbiAgY29uc3QgdGFza0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0xpc3REaXYuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWRpdicpO1xuXG4gIHRhc2tMaXN0RGl2LmFwcGVuZENoaWxkKHdvcmtUYXNrQXJyYXlbMF0udGFza0RpdkhUTUwpO1xuICB0YXNrTGlzdERpdi5hcHBlbmRDaGlsZCh3b3JrVGFza0FycmF5WzFdLnRhc2tEaXZIVE1MKTtcbiAgdGFza0xpc3REaXYuYXBwZW5kQ2hpbGQod29ya1Rhc2tBcnJheVsyXS50YXNrRGl2SFRNTCk7XG5cbiAgcmV0dXJuIHRhc2tMaXN0RGl2O1xufVxuXG5leHBvcnQge2RlZmF1bHRXb3JrVGFza0xpc3QsIHdvcmtUYXNrQXJyYXl9OyIsImltcG9ydCBzdHJpa2V0aHJvdWdoIGZyb20gJy4vc3RyaWtldGhyb3VnaC5qcyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrQ291bnQgfSBmcm9tICcuLi90YWJzL3VwZGF0ZS10YXNrLWNvdW50LmpzJztcbmltcG9ydCBnZXRQcm9qZWN0TmFtZSBmcm9tICcuLi9nZXQtcHJvamVjdC1uYW1lLmpzJztcbmltcG9ydCB7IHdvcmtUYXNrQXJyYXkgfSBmcm9tICcuL2RlZmF1bHQtd29yay10YXNrLWxpc3QuanMnO1xuaW1wb3J0IHsgcGVyc29uYWxUYXNrQXJyYXkgfSBmcm9tICcuL2RlZmF1bHQtcGVyc29uYWwtdGFzay1saXN0LmpzJztcblxuZnVuY3Rpb24gbWFrZVRhc2sodGFzaykge1xuICBjb25zdCBoeXBoZW5kVGFzayA9IHRhc2sucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG5cbiAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicsIGB0YXNrLWRpdi0ke2h5cGhlbmRUYXNrfWApO1xuICB0YXNrTGFiZWwuY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB1dCcpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRhc2stYnV0dG9uJywgYGRlbGV0ZS0ke2h5cGhlbmRUYXNrfWApO1xuICBcbiAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7aHlwaGVuZFRhc2t9YCk7XG4gIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtoeXBoZW5kVGFza31gKTtcbiAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke2h5cGhlbmRUYXNrfWApO1xuXG4gIC8vIFNldCBpbm5lciBIVE1MXG4gIHRhc2tMYWJlbC5pbm5lckhUTUwgPSBgJHt0YXNrfWA7XG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnWCc7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyczogaW5wdXQgYW5kIGRlbGV0ZSBidXR0b25cbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0cmlrZXRocm91Z2godGFza0xhYmVsKTtcblxuICAgIC8vIEdldCBjdXJyZW50IHRhYidzIEhUTUwgYW5kIGFycmF5XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRhYicpO1xuXG4gICAgICAvLyBEZWZhdWx0IHByb2plY3RzXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBnZXRQcm9qZWN0TmFtZShjdXJyZW50UHJvamVjdClcblxuICAgICAgaWYgKHByb2plY3RUaXRsZSA9PT0gJ3dvcmsnKSB7XG4gICAgICAgIHVwZGF0ZVRhc2tDb3VudChjdXJyZW50UHJvamVjdCwgd29ya1Rhc2tBcnJheSk7XG4gICAgICB9IGVsc2UgaWYgKHByb2plY3RUaXRsZSA9PT0gJ3BlcnNvbmFsJykge1xuICAgICAgICB1cGRhdGVUYXNrQ291bnQoY3VycmVudFByb2plY3QsIHBlcnNvbmFsVGFza0FycmF5KTtcbiAgICAgIH1cbiAgfSk7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIEdldCBjdXJyZW50IHRhYidzIEhUTUwgYW5kIGFycmF5XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRhYicpO1xuXG4gICAgICAvLyBEZWZhdWx0IHByb2plY3RzXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBnZXRQcm9qZWN0TmFtZShjdXJyZW50UHJvamVjdClcblxuICAgICAgICAvLyBSZW1vdmUgdGFzayBmcm9tIGFycmF5XG4gICAgICAgIGlmIChwcm9qZWN0VGl0bGUgPT09ICd3b3JrJykge1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIEZpbmQgdGFzayBpbiBhcnJheVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29ya1Rhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlUYXNrQ2hpbGQgPSB3b3JrVGFza0FycmF5W2ldLnRhc2tEaXZIVE1MLmxhc3RDaGlsZDtcblxuICAgICAgICAgICAgaWYgKGFycmF5VGFza0NoaWxkLmNsYXNzTGlzdC5jb250YWlucyhgZGVsZXRlLSR7aHlwaGVuZFRhc2t9YCkpIHtcblxuICAgICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBkYXRhIHN0cnVjdHVyZSBhbmQgRE9NXG4gICAgICAgICAgICAgIHdvcmtUYXNrQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICB0YXNrRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVUYXNrQ291bnQoY3VycmVudFByb2plY3QsIHdvcmtUYXNrQXJyYXkpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2plY3RUaXRsZSA9PT0gJ3BlcnNvbmFsJykge1xuXG4gICAgICAgICAgLy8gRmluZCB0YXNrIGluIGFycmF5XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJzb25hbFRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlUYXNrQ2hpbGQgPSBwZXJzb25hbFRhc2tBcnJheVtpXS50YXNrRGl2SFRNTC5sYXN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChhcnJheVRhc2tDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoYGRlbGV0ZS0ke2h5cGhlbmRUYXNrfWApKSB7XG5cbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gZGF0YSBzdHJ1Y3R1cmUgYW5kIERPTVxuICAgICAgICAgICAgICBwZXJzb25hbFRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIHRhc2tEaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlVGFza0NvdW50KGN1cnJlbnRQcm9qZWN0LCBwZXJzb25hbFRhc2tBcnJheSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgXG4gIHJldHVybiB0YXNrRGl2O1xufVxuXG5jb25zdCB0YXNrRmFjdG9yeSA9ICh0YXNrTmFtZSkgPT4ge1xuICBjb25zdCB0YXNrRGl2SFRNTCA9IG1ha2VUYXNrKHRhc2tOYW1lKTtcbiAgcmV0dXJuIHt0YXNrTmFtZSwgdGFza0RpdkhUTUx9O1xufTtcblxuZXhwb3J0IHt0YXNrRmFjdG9yeX07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaWtldGhyb3VnaCh0YXNrTGFiZWwpIHtcbiAgaWYgKHRhc2tMYWJlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0cmlrZXRocm91Z2gnKSkge1xuICAgIHRhc2tMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2V0aHJvdWdoJyk7XG5cbiAgfSBlbHNlIGlmICh0YXNrTGFiZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdHJpa2V0aHJvdWdoJykgPT09IGZhbHNlKSB7XG4gICAgdGFza0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZXRocm91Z2gnKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9zdHlsZXMvaGVhZGVyLmpzJztcbmltcG9ydCBjb250ZW50IGZyb20gJy4vc3R5bGVzL2NvbnRlbnQuanMnO1xuXG5oZWFkZXIoKTtcbmNvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=