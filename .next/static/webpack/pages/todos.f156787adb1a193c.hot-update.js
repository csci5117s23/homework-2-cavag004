"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos",{

/***/ "./components/TodoItem.jsx":
/*!*********************************!*\
  !*** ./components/TodoItem.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst TodoItem = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"my-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            class: \"checkbox\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    class: \"checkbox\",\n                    type: \"checkbox\",\n                    checked: props.complete,\n                    onChange: props.onClick\n                }, void 0, false, {\n                    fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/TodoItem.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: {\n                        pathname: \"/todo/:\".concat(props.id),\n                        query: {\n                            id: props.jsonId\n                        }\n                    },\n                    class: \"ml-2 pt-3\",\n                    style: {\n                        textDecoration: props.complete ? \"line-through\" : \"\"\n                    },\n                    children: props.item\n                }, void 0, false, {\n                    fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/TodoItem.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/TodoItem.jsx\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/TodoItem.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\n_c = TodoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9JdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNJO0FBRTdCLE1BQU1FLFdBQVcsQ0FBQ0MsUUFBVTtJQUN4QixxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTTtrQkFDUCw0RUFBQ0M7WUFBTUQsT0FBTTs7OEJBQ1QsOERBQUNFO29CQUFNRixPQUFNO29CQUFXRyxNQUFLO29CQUFXQyxTQUFTTixNQUFNTyxRQUFRO29CQUFFQyxVQUFVUixNQUFNUyxPQUFPOzs7Ozs7OEJBRXhGLDhEQUFDWCxrREFBSUE7b0JBQUNZLE1BQU07d0JBQUVDLFVBQVUsVUFBbUIsT0FBVFgsTUFBTVksRUFBRTt3QkFBSUMsT0FBTzs0QkFBQ0QsSUFBSVosTUFBTWMsTUFBTTt3QkFBQTtvQkFBQztvQkFBR1osT0FBTTtvQkFDaEZhLE9BQU87d0JBQ0hDLGdCQUFnQmhCLE1BQU1PLFFBQVEsR0FBRyxpQkFBaUIsRUFBRTtvQkFDeEQ7OEJBQ0VQLE1BQU1pQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QjtLQWRNbEI7QUFnQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvSXRlbS5qc3g/MGE4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBUb2RvSXRlbSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJteS0zXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17cHJvcHMuY29tcGxldGV9IG9uQ2hhbmdlPXtwcm9wcy5vbkNsaWNrfS8+XG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvdG9kby86JHtwcm9wcy5pZH1gfSBjbGFzcz1cIm1sLTIgcHQtM1wiICovfVxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvdG9kby86JHtwcm9wcy5pZH1gLCBxdWVyeToge2lkOiBwcm9wcy5qc29uSWR9fX0gY2xhc3M9XCJtbC0yIHB0LTNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBwcm9wcy5jb21wbGV0ZSA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPntwcm9wcy5pdGVtfTwvTGluaz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlRvZG9JdGVtIiwicHJvcHMiLCJkaXYiLCJjbGFzcyIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsImNvbXBsZXRlIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiaHJlZiIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsImpzb25JZCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoItem.jsx\n"));

/***/ })

});