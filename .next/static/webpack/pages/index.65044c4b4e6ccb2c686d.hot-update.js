/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_starPlanetas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/starPlanetas */ \"./src/pages/components/starPlanetas.jsx\");\n/* harmony import */ var _components_starPessoas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/starPessoas */ \"./src/pages/components/starPessoas.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/brunogalvao/Documents/GitHub/api-react/src/pages/index.jsx\";\n\n\nvar __N_SSG = true;\nfunction Index(props) {\n  function renderPlaneta() {\n    var render = [];\n\n    for (var i = 0; i < 10; i++) {\n      render.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starPlanetas__WEBPACK_IMPORTED_MODULE_1__.default, {\n        i: i,\n        nome: props.planeta.results[i].name,\n        clima: props.planeta.results[i].climate,\n        img: props.planeta.results[i].name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this));\n    }\n\n    return render;\n  }\n\n  function renderPessoas() {\n    var render = [];\n\n    for (var i = 0; i < 10; i++) {\n      render.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starPessoas__WEBPACK_IMPORTED_MODULE_2__.default, {\n        i: i,\n        nome: props.pessoas.results[i].name,\n        altura: props.pessoas.results[i].height,\n        peso: props.pessoas.results[i].mass,\n        cabelo: props.pessoas.results[i].hair_color,\n        img: props.pessoas.results[i].name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this));\n    }\n\n    return render;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container mx-auto\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid grid-cols\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"titulo mb-6 mt-20\",\n        children: \"Planetas StarWars\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid grid-flow-row\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"columns-2\",\n        children: renderPlaneta()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid grid-cols\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"titulo mb-6 mt-6\",\n        children: \"Personagens StarWars\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid grid-flow-row\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"columns-2\",\n        children: renderPessoas()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 7\n  }, this);\n}\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJyZW5kZXJQbGFuZXRhIiwicmVuZGVyIiwiaSIsInB1c2giLCJwbGFuZXRhIiwicmVzdWx0cyIsIm5hbWUiLCJjbGltYXRlIiwicmVuZGVyUGVzc29hcyIsInBlc3NvYXMiLCJoZWlnaHQiLCJtYXNzIiwiaGFpcl9jb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFFbkMsV0FBU0MsYUFBVCxHQUEwQjtBQUV4QixRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFlBQU0sQ0FBQ0UsSUFBUCxlQUNFLDhEQUFDLDZEQUFEO0FBQ0UsU0FBQyxFQUFFRCxDQURMO0FBRUUsWUFBSSxFQUFFSCxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkgsQ0FBdEIsRUFBeUJJLElBRmpDO0FBR0UsYUFBSyxFQUFFUCxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkgsQ0FBdEIsRUFBeUJLLE9BSGxDO0FBSUUsV0FBRyxFQUFFUixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkgsQ0FBdEIsRUFBeUJJO0FBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVFEOztBQUNELFdBQU9MLE1BQVA7QUFDRDs7QUFFRCxXQUFTTyxhQUFULEdBQTBCO0FBRXhCLFFBQU1QLE1BQU0sR0FBRyxFQUFmOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQkQsWUFBTSxDQUFDRSxJQUFQLGVBQ0UsOERBQUMsNERBQUQ7QUFDRSxTQUFDLEVBQUVELENBREw7QUFFRSxZQUFJLEVBQUVILEtBQUssQ0FBQ1UsT0FBTixDQUFjSixPQUFkLENBQXNCSCxDQUF0QixFQUF5QkksSUFGakM7QUFHRSxjQUFNLEVBQUVQLEtBQUssQ0FBQ1UsT0FBTixDQUFjSixPQUFkLENBQXNCSCxDQUF0QixFQUF5QlEsTUFIbkM7QUFJRSxZQUFJLEVBQUVYLEtBQUssQ0FBQ1UsT0FBTixDQUFjSixPQUFkLENBQXNCSCxDQUF0QixFQUF5QlMsSUFKakM7QUFLRSxjQUFNLEVBQUVaLEtBQUssQ0FBQ1UsT0FBTixDQUFjSixPQUFkLENBQXNCSCxDQUF0QixFQUF5QlUsVUFMbkM7QUFNRSxXQUFHLEVBQUViLEtBQUssQ0FBQ1UsT0FBTixDQUFjSixPQUFkLENBQXNCSCxDQUF0QixFQUF5Qkk7QUFOaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBVUQ7O0FBQ0QsV0FBT0wsTUFBUDtBQUNEOztBQUdELHNCQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBRUU7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFNRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsa0JBQ0dELGFBQWE7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVlFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLGVBZ0JFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxrQkFDR1EsYUFBYTtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlCRDtLQWhFdUJWLEsiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXJQbGFuZXRhcyBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXJQbGFuZXRhc1wiO1xyXG5pbXBvcnQgU3RhclBlc3NvYXMgZnJvbSBcIi4vY29tcG9uZW50cy9zdGFyUGVzc29hc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyUGxhbmV0YSAoKSB7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyID0gW11cclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICByZW5kZXIucHVzaChcclxuICAgICAgICA8U3RhclBsYW5ldGFzIFxyXG4gICAgICAgICAgaT17aX1cclxuICAgICAgICAgIG5vbWU9e3Byb3BzLnBsYW5ldGEucmVzdWx0c1tpXS5uYW1lfVxyXG4gICAgICAgICAgY2xpbWE9e3Byb3BzLnBsYW5ldGEucmVzdWx0c1tpXS5jbGltYXRlfVxyXG4gICAgICAgICAgaW1nPXtwcm9wcy5wbGFuZXRhLnJlc3VsdHNbaV0ubmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJQZXNzb2FzICgpIHtcclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBbXVxyXG4gIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHJlbmRlci5wdXNoKFxyXG4gICAgICAgIDxTdGFyUGVzc29hcyBcclxuICAgICAgICAgIGk9e2l9XHJcbiAgICAgICAgICBub21lPXtwcm9wcy5wZXNzb2FzLnJlc3VsdHNbaV0ubmFtZX1cclxuICAgICAgICAgIGFsdHVyYT17cHJvcHMucGVzc29hcy5yZXN1bHRzW2ldLmhlaWdodH1cclxuICAgICAgICAgIHBlc289e3Byb3BzLnBlc3NvYXMucmVzdWx0c1tpXS5tYXNzfVxyXG4gICAgICAgICAgY2FiZWxvPXtwcm9wcy5wZXNzb2FzLnJlc3VsdHNbaV0uaGFpcl9jb2xvcn1cclxuICAgICAgICAgIGltZz17cHJvcHMucGVzc29hcy5yZXN1bHRzW2ldLm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlclxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29sc1wiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHVsbyBtYi02IG10LTIwXCI+UGxhbmV0YXMgU3RhcldhcnM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTJcIj5cclxuICAgICAgICAgICAge3JlbmRlclBsYW5ldGEoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dWxvIG1iLTYgbXQtNlwiPlBlcnNvbmFnZW5zIFN0YXJXYXJzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0yXCI+XHJcbiAgICAgICAgICAgIHtyZW5kZXJQZXNzb2FzKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcbiAgY29uc3QgYXBpID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vc3dhcGkuZGV2L2FwaS9wbGFuZXRzXCIpXHJcbiAgICAgIC50aGVuKCAoc2VydmVyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc2VydmVyLmpzb24oKTtcclxuICAgICAgfSlcclxuXHJcbiAgY29uc3QgcGVzc29hcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL3N3YXBpLmRldi9hcGkvcGVvcGxlXCIpXHJcbiAgICAgIC50aGVuKCAoc2VydmVyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc2VydmVyLmpzb24oKTtcclxuICAgICAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHBsYW5ldGE6IGFwaSxcclxuICAgICAgICAgIHBlc3NvYXM6IHBlc3NvYXMsXHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});