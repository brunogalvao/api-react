/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/starPlanetas.jsx":
/*!***********************************************!*\
  !*** ./src/pages/components/starPlanetas.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StarPlanetas; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/brunogalvao/Documents/GitHub/api-react/src/pages/components/starPlanetas.jsx\";\nfunction StarPlanetas(props) {\n  var img = {\n    backgroundImage: \"url(./images/\" + props.img.replace(' ', '') + \".png)\",\n    backgroundPosition: \"center center\",\n    backgroundSize: \"cover\"\n  };\n  return (\n    /*#__PURE__*/\n    // <div className=\"row\">\n    //     <div className=\"planeta grid grid-cols-2\" style={img}>\n    //         <div className=\"texto\">\n    //             <b>Nome</b>\n    //             <p>{ props.nome }</p>\n    //         </div>\n    //         <div className=\"texto\">\n    //             <b>Clima</b> \n    //             <p>{ props.clima }</p>\n    //         </div>\n    //     </div>\n    //     <div className=\"columns-1\">\n    //         <div>oi</div>\n    //     </div> \n    // </div>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: img,\n        className: \"planeta\",\n        children: \" \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"texto text-center w-40\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: props.nome\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 20\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: props.clima\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, this)\n  );\n}\n_c = StarPlanetas;\n\nvar _c;\n\n$RefreshReg$(_c, \"StarPlanetas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvc3RhclBsYW5ldGFzLmpzeD9iYTg0Il0sIm5hbWVzIjpbIlN0YXJQbGFuZXRhcyIsInByb3BzIiwiaW1nIiwiYmFja2dyb3VuZEltYWdlIiwicmVwbGFjZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwibm9tZSIsImNsaW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUV4QyxNQUFNQyxHQUFHLEdBQUc7QUFFUkMsbUJBQWUsRUFBRSxrQkFBa0JGLEtBQUssQ0FBQ0MsR0FBTixDQUFVRSxPQUFWLENBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLENBQWxCLEdBQStDLE9BRnhEO0FBR1JDLHNCQUFrQixFQUFFLGVBSFo7QUFJUkMsa0JBQWMsRUFBRTtBQUpSLEdBQVo7QUFPQTtBQUFBO0FBQ0k7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw4QkFFSTtBQUFLLGFBQUssRUFBRUosR0FBWjtBQUFpQixpQkFBUyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJSTtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQSxnQ0FDSTtBQUFBLGlDQUFHO0FBQUEsc0JBQUlELEtBQUssQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQUlOLEtBQUssQ0FBQ087QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CSjtBQWdDSDtLQXpDdUJSLFkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9zdGFyUGxhbmV0YXMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhclBsYW5ldGFzKHByb3BzKSB7XG5cbiAgICBjb25zdCBpbWcgPSB7XG5cbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCguL2ltYWdlcy9cIiArIHByb3BzLmltZy5yZXBsYWNlKCcgJywgJycpICsgXCIucG5nKVwiLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW5ldGEgZ3JpZCBncmlkLWNvbHMtMlwiIHN0eWxlPXtpbWd9PlxuXG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0b1wiPlxuICAgICAgICAvLyAgICAgICAgICAgICA8Yj5Ob21lPC9iPlxuICAgICAgICAvLyAgICAgICAgICAgICA8cD57IHByb3BzLm5vbWUgfTwvcD5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRvXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxiPkNsaW1hPC9iPiBcbiAgICAgICAgLy8gICAgICAgICAgICAgPHA+eyBwcm9wcy5jbGltYSB9PC9wPlxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0xXCI+XG4gICAgICAgIC8vICAgICAgICAgPGRpdj5vaTwvZGl2PlxuICAgICAgICAvLyAgICAgPC9kaXY+IFxuICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtpbWd9IGNsYXNzTmFtZT1cInBsYW5ldGFcIj4gPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dG8gdGV4dC1jZW50ZXIgdy00MFwiPlxuICAgICAgICAgICAgICAgIDxwPjxiPntwcm9wcy5ub21lfTwvYj48L3A+XG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLmNsaW1hfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgKVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/starPlanetas.jsx\n");

/***/ })

});