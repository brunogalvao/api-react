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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StarPlanetas; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/brunogalvao/Documents/GitHub/api-react/src/pages/components/starPlanetas.jsx\";\nfunction StarPlanetas(props) {\n  var img = {\n    backgroundImage: \"url(./images/\" + props.img.replace(' ', '') + \".png)\",\n    backgroundPosition: \"center center\",\n    backgroundSize: \"cover\"\n  };\n  return (\n    /*#__PURE__*/\n    // <div className=\"row\">\n    //     <div className=\"planeta grid grid-cols-2\" style={img}>\n    //         <div className=\"texto\">\n    //             <b>Nome</b>\n    //             <p>{ props.nome }</p>\n    //         </div>\n    //         <div className=\"texto\">\n    //             <b>Clima</b> \n    //             <p>{ props.clima }</p>\n    //         </div>\n    //     </div>\n    //     <div className=\"columns-1\">\n    //         <div>oi</div>\n    //     </div> \n    // </div>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"planeta mb-2 p-4\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: img,\n        className: \"w-40 h-40 flex align-middle justify-center rounded-full\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"texto text-center w-0\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: props.nome\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 24\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: props.clima\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, this)\n  );\n}\n_c = StarPlanetas;\n\nvar _c;\n\n$RefreshReg$(_c, \"StarPlanetas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvc3RhclBsYW5ldGFzLmpzeD9iYTg0Il0sIm5hbWVzIjpbIlN0YXJQbGFuZXRhcyIsInByb3BzIiwiaW1nIiwiYmFja2dyb3VuZEltYWdlIiwicmVwbGFjZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwibm9tZSIsImNsaW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUV4QyxNQUFNQyxHQUFHLEdBQUc7QUFFUkMsbUJBQWUsRUFBRSxrQkFBa0JGLEtBQUssQ0FBQ0MsR0FBTixDQUFVRSxPQUFWLENBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLENBQWxCLEdBQStDLE9BRnhEO0FBR1JDLHNCQUFrQixFQUFFLGVBSFo7QUFJUkMsa0JBQWMsRUFBRTtBQUpSLEdBQVo7QUFPQTtBQUFBO0FBQ0k7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDSTtBQUFLLGFBQUssRUFBRUosR0FBWjtBQUFpQixpQkFBUyxFQUFDLHlEQUEzQjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGtDQUNJO0FBQUEsbUNBQUc7QUFBQSx3QkFBSUQsS0FBSyxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQSxzQkFBSU4sS0FBSyxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQko7QUE4Qkg7S0F2Q3VCUixZIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvc3RhclBsYW5ldGFzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJQbGFuZXRhcyhwcm9wcykge1xuXG4gICAgY29uc3QgaW1nID0ge1xuXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoLi9pbWFnZXMvXCIgKyBwcm9wcy5pbWcucmVwbGFjZSgnICcsICcnKSArIFwiLnBuZylcIixcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFuZXRhIGdyaWQgZ3JpZC1jb2xzLTJcIiBzdHlsZT17aW1nfT5cblxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dG9cIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPGI+Tm9tZTwvYj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPHA+eyBwcm9wcy5ub21lIH08L3A+XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0b1wiPlxuICAgICAgICAvLyAgICAgICAgICAgICA8Yj5DbGltYTwvYj4gXG4gICAgICAgIC8vICAgICAgICAgICAgIDxwPnsgcHJvcHMuY2xpbWEgfTwvcD5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMVwiPlxuICAgICAgICAvLyAgICAgICAgIDxkaXY+b2k8L2Rpdj5cbiAgICAgICAgLy8gICAgIDwvZGl2PiBcbiAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFuZXRhIG1iLTIgcC00XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtpbWd9IGNsYXNzTmFtZT1cInctNDAgaC00MCBmbGV4IGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRvIHRleHQtY2VudGVyIHctMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD48Yj57cHJvcHMubm9tZX08L2I+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57cHJvcHMuY2xpbWF9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgIClcbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/starPlanetas.jsx\n");

/***/ })

});