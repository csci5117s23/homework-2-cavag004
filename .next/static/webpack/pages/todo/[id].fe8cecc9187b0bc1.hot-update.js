"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo/[id]",{

/***/ "./pages/todo/[id].js":
/*!****************************!*\
  !*** ./pages/todo/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TodoItem */ \"./components/TodoItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Todos() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getId;\n    //Runs on every render\n    });\n    const getId = ()=>{\n        _s1();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        console.log(router.query);\n    };\n    _s1(getId, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n        ];\n    });\n    const toggleComplete = (i)=>{\n        setTodos(todos.map((todo, k)=>k === i ? {\n                ...todo,\n                complete: !todo.complete\n            } : todo));\n    };\n    const withTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        class: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box mt-5\",\n            children: todos.map((param, i)=>/*#__PURE__*/ {\n                let { text , complete  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    text: text,\n                    complete: complete,\n                    onClick: ()=>toggleComplete(i)\n                }, void 0, false, {\n                    fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n    return withTodos;\n}\n_s(Todos, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2RvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBQ007QUFDUztBQUVsQyxTQUFTSSxRQUFROzs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDLElBQU07UUFDWk07SUFDQSxzQkFBc0I7SUFDMUI7SUFFQSxNQUFNQSxRQUFRLElBQU07O1FBQ2hCLE1BQU1DLFNBQVNOLHNEQUFTQTtRQUN4Qk8sUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxLQUFLO0lBQzVCO1FBSE1KOztZQUNhTCxrREFBU0E7OztJQUk1QixNQUFNVSxpQkFBaUIsQ0FBQ0MsSUFBTTtRQUMxQlAsU0FBU0QsTUFBTVMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU1BLE1BQU1ILElBQUk7Z0JBQ3RDLEdBQUdFLElBQUk7Z0JBQ1BFLFVBQVUsQ0FBQ0YsS0FBS0UsUUFBUTtZQUM1QixJQUFJRixJQUFJO0lBQ1o7SUFFQSxNQUFNRywwQkFDRiw4REFBQ0M7UUFBUUMsT0FBTTtrQkFDWCw0RUFBQ0M7WUFBSUQsT0FBTTtzQkFDTmYsTUFBTVMsR0FBRyxDQUFDLFFBQXFCRCxrQkFDNUI7b0JBRFEsRUFBRVMsS0FBSSxFQUFFTCxTQUFRLEVBQUU7dUJBQzFCLDhEQUFDZCw0REFBUUE7b0JBQUNtQixNQUFNQTtvQkFBTUwsVUFBVUE7b0JBQzVCTSxTQUFTLElBQU1YLGVBQWVDOzs7Ozs7WUFDakM7Ozs7Ozs7Ozs7O0lBTWpCLE9BQVFLO0FBQ1osQ0FBQztHQWpDdUJkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG8vW2lkXS5qcz9jNzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVG9kb0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0SWQ7XG4gICAgICAgIC8vUnVucyBvbiBldmVyeSByZW5kZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9IChpKSA9PiB7XG4gICAgICAgIHNldFRvZG9zKHRvZG9zLm1hcCgodG9kbywgaykgPT4gayA9PT0gaSA/IHtcbiAgICAgICAgICAgIC4uLnRvZG8sXG4gICAgICAgICAgICBjb21wbGV0ZTogIXRvZG8uY29tcGxldGVcbiAgICAgICAgfSA6IHRvZG8pKVxuICAgIH1cblxuICAgIGNvbnN0IHdpdGhUb2RvcyA9IChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IG10LTVcIj5cbiAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh7IHRleHQsIGNvbXBsZXRlIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRvZG9JdGVtIHRleHQ9e3RleHR9IGNvbXBsZXRlPXtjb21wbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbXBsZXRlKGkpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuXG4gICAgcmV0dXJuICh3aXRoVG9kb3MpO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlRvZG9JdGVtIiwiVG9kb3MiLCJ0b2RvcyIsInNldFRvZG9zIiwiZ2V0SWQiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ0b2dnbGVDb21wbGV0ZSIsImkiLCJtYXAiLCJ0b2RvIiwiayIsImNvbXBsZXRlIiwid2l0aFRvZG9zIiwic2VjdGlvbiIsImNsYXNzIiwiZGl2IiwidGV4dCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo/[id].js\n"));

/***/ })

});