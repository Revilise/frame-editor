"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    var ref = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (ref) {\n            var doc = ref.current.contentDocument;\n            var label = doc.getElementById(\"label\");\n            var input = doc.getElementById(\"input\");\n            console.log(ref.current.contentDocument);\n        // label.onclick = function() {\n        //     input.style.display = \"block\";\n        //     label.style.display = \"none\";\n        //     input.value = label.innerText;\n        // }\n        // input.onblur = function() {\n        //     if (input.value.length) {\n        //         input.style.display = \"none\";\n        //         label.style.display = \"block\";\n        //         label.innerText = input.value;\n        //         return;\n        //     }\n        //     input.focus();\n        // }\n        }\n    }, [\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"INDEX PAGE\"\n            }, void 0, false, {\n                fileName: \"E:\\\\projects\\\\frame-editor-react\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                ref: ref,\n                title: \"Iframe Example\",\n                src: \"../html/content_1.html\"\n            }, void 0, false, {\n                fileName: \"E:\\\\projects\\\\frame-editor-react\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\projects\\\\frame-editor-react\\\\pages\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEyQztBQUU1QixTQUFTRSxJQUFJLEdBQUc7O0lBQzNCLElBQU1DLEdBQUcsaUJBQUdILGdEQUFTLEVBQUU7SUFFdkJDLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUlFLEdBQUcsRUFBRTtZQUNMLElBQU1DLEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxPQUFPLENBQUNDLGVBQWU7WUFDdkMsSUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDekMsSUFBTUMsS0FBSyxHQUFHTCxHQUFHLENBQUNJLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFFekNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixHQUFHLENBQUNFLE9BQU8sQ0FBQ0MsZUFBZSxDQUFDO1FBRXhDLCtCQUErQjtRQUMvQixxQ0FBcUM7UUFDckMsb0NBQW9DO1FBQ3BDLHFDQUFxQztRQUNyQyxJQUFJO1FBQ0osOEJBQThCO1FBQzlCLGdDQUFnQztRQUNoQyx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixJQUFJO1NBQ1A7S0FDSixFQUFFO1FBQUNILEdBQUc7S0FBQyxDQUFDO0lBRVQscUJBQ0ksOERBQUNTLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLFlBQVU7Ozs7O29CQUFLOzBCQUNuQiw4REFBQ0MsUUFBTTtnQkFBQ1gsR0FBRyxFQUFFQSxHQUFHO2dCQUFFWSxLQUFLLEVBQUMsZ0JBQWdCO2dCQUFDQyxHQUFHLEVBQUUsd0JBQXdCOzs7OztvQkFBSTs7Ozs7O1lBQ3hFLENBQ1Q7Q0FDSjtHQWxDdUJkLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlUmVmLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IHJlZiA9IGNyZWF0ZVJlZigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgICAgICBjb25zdCBkb2MgPSByZWYuY3VycmVudC5jb250ZW50RG9jdW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jLmdldEVsZW1lbnRCeUlkKCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvYy5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZi5jdXJyZW50LmNvbnRlbnREb2N1bWVudClcclxuXHJcbiAgICAgICAgICAgIC8vIGxhYmVsLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIC8vICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC52YWx1ZSA9IGxhYmVsLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpbnB1dC5vbmJsdXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlZl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+SU5ERVggUEFHRTwvaDE+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgcmVmPXtyZWZ9IHRpdGxlPVwiSWZyYW1lIEV4YW1wbGVcIiBzcmM9e1wiLi4vaHRtbC9jb250ZW50XzEuaHRtbFwifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZVJlZiIsInVzZUVmZmVjdCIsIkhvbWUiLCJyZWYiLCJkb2MiLCJjdXJyZW50IiwiY29udGVudERvY3VtZW50IiwibGFiZWwiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiaWZyYW1lIiwidGl0bGUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});