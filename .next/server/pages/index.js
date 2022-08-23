"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const ref = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (ref) {\n            const doc = ref.current.contentDocument;\n            const label = doc.getElementById(\"label\");\n            const input = doc.getElementById(\"input\");\n            label.onclick = function() {\n                input.style.display = \"block\";\n                label.style.display = \"none\";\n                input.value = label.innerText;\n            };\n            input.onblur = function() {\n                if (input.value.length) {\n                    input.style.display = \"none\";\n                    label.style.display = \"block\";\n                    label.innerText = input.value;\n                    return;\n                }\n                input.focus();\n            };\n        }\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"INDEX PAGE\"\n            }, void 0, false, {\n                fileName: \"E:\\\\projects\\\\frame-editor-react\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                ref: ref,\n                title: \"Iframe Example\",\n                src: \"../html/content_1.html\"\n            }, void 0, false, {\n                fileName: \"E:\\\\projects\\\\frame-editor-react\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\projects\\\\frame-editor-react\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTJDO0FBRTVCLFNBQVNFLElBQUksR0FBRztJQUMzQixNQUFNQyxHQUFHLGlCQUFHSCxnREFBUyxFQUFFO0lBRXZCQyxnREFBUyxDQUFDLElBQU07UUFDWixJQUFJRSxHQUFHLEVBQUU7WUFDTCxNQUFNQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsT0FBTyxDQUFDQyxlQUFlO1lBQ3ZDLE1BQU1DLEtBQUssR0FBR0gsR0FBRyxDQUFDSSxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ3pDLE1BQU1DLEtBQUssR0FBR0wsR0FBRyxDQUFDSSxjQUFjLENBQUMsT0FBTyxDQUFDO1lBRXpDRCxLQUFLLENBQUNHLE9BQU8sR0FBRyxXQUFXO2dCQUN2QkQsS0FBSyxDQUFDRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQzlCTCxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDN0JILEtBQUssQ0FBQ0ksS0FBSyxHQUFHTixLQUFLLENBQUNPLFNBQVMsQ0FBQzthQUNqQztZQUNETCxLQUFLLENBQUNNLE1BQU0sR0FBRyxXQUFXO2dCQUN0QixJQUFJTixLQUFLLENBQUNJLEtBQUssQ0FBQ0csTUFBTSxFQUFFO29CQUNwQlAsS0FBSyxDQUFDRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQzdCTCxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDOUJMLEtBQUssQ0FBQ08sU0FBUyxHQUFHTCxLQUFLLENBQUNJLEtBQUssQ0FBQztvQkFDOUIsT0FBTztpQkFDVjtnQkFDREosS0FBSyxDQUFDUSxLQUFLLEVBQUUsQ0FBQzthQUNqQjtTQUNKO0tBQ0osRUFBRTtRQUFDZCxHQUFHO0tBQUMsQ0FBQztJQUVULHFCQUNJLDhEQUFDZSxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyxZQUFVOzs7OztvQkFBSzswQkFDbkIsOERBQUNDLFFBQU07Z0JBQUNqQixHQUFHLEVBQUVBLEdBQUc7Z0JBQUVrQixLQUFLLEVBQUMsZ0JBQWdCO2dCQUFDQyxHQUFHLEVBQUUsd0JBQXdCOzs7OztvQkFBSTs7Ozs7O1lBQ3hFLENBQ1Q7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVSZWYsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgcmVmID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmVmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IHJlZi5jdXJyZW50LmNvbnRlbnREb2N1bWVudDtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jLmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICAgICAgbGFiZWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gbGFiZWwuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0Lm9uYmx1ciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVmXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5JTkRFWCBQQUdFPC9oMT5cclxuICAgICAgICAgICAgPGlmcmFtZSByZWY9e3JlZn0gdGl0bGU9XCJJZnJhbWUgRXhhbXBsZVwiIHNyYz17XCIuLi9odG1sL2NvbnRlbnRfMS5odG1sXCJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlUmVmIiwidXNlRWZmZWN0IiwiSG9tZSIsInJlZiIsImRvYyIsImN1cnJlbnQiLCJjb250ZW50RG9jdW1lbnQiLCJsYWJlbCIsImdldEVsZW1lbnRCeUlkIiwiaW5wdXQiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwidmFsdWUiLCJpbm5lclRleHQiLCJvbmJsdXIiLCJsZW5ndGgiLCJmb2N1cyIsImRpdiIsImgxIiwiaWZyYW1lIiwidGl0bGUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();