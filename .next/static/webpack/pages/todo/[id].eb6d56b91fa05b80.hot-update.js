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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TodoItem */ \"./components/TodoItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router.query);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    //Runs on every render\n    });\n    const toggleComplete = (i)=>{\n        setTodos(todos.map((todo, k)=>k === i ? {\n                ...todo,\n                complete: !todo.complete\n            } : todo));\n    };\n    const withTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        class: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box mt-5\",\n            children: todos.map((param, i)=>/*#__PURE__*/ {\n                let { text , complete  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    text: text,\n                    complete: complete,\n                    onClick: ()=>toggleComplete(i)\n                }, void 0, false, {\n                    fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n    return withTodos;\n}\n_s(Todos, \"/4U9Nw414wdNPFyacvT9TkTu07I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2RvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBQ007QUFDUztBQUVsQyxTQUFTSSxRQUFROztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNTyxTQUFTTCxzREFBU0E7SUFDeEJNLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csS0FBSztJQUN4QlQsZ0RBQVNBLENBQUMsSUFBTTtJQUVaLHNCQUFzQjtJQUMxQjtJQUVBLE1BQU1VLGlCQUFpQixDQUFDQyxJQUFNO1FBQzFCTixTQUFTRCxNQUFNUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFBTUEsTUFBTUgsSUFBSTtnQkFDdEMsR0FBR0UsSUFBSTtnQkFDUEUsVUFBVSxDQUFDRixLQUFLRSxRQUFRO1lBQzVCLElBQUlGLElBQUk7SUFDWjtJQUVBLE1BQU1HLDBCQUNGLDhEQUFDQztRQUFRQyxPQUFNO2tCQUNYLDRFQUFDQztZQUFJRCxPQUFNO3NCQUNOZCxNQUFNUSxHQUFHLENBQUMsUUFBcUJELGtCQUM1QjtvQkFEUSxFQUFFUyxLQUFJLEVBQUVMLFNBQVEsRUFBRTt1QkFDMUIsOERBQUNiLDREQUFRQTtvQkFBQ2tCLE1BQU1BO29CQUFNTCxVQUFVQTtvQkFDNUJNLFNBQVMsSUFBTVgsZUFBZUM7Ozs7OztZQUNqQzs7Ozs7Ozs7Ozs7SUFNakIsT0FBUUs7QUFDWixDQUFDO0dBOUJ1QmI7O1FBR0xGLGtEQUFTQTs7O0tBSEpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG8vW2lkXS5qcz9jNzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVG9kb0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgLy9SdW5zIG9uIGV2ZXJ5IHJlbmRlclxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUb2Rvcyh0b2Rvcy5tYXAoKHRvZG8sIGspID0+IGsgPT09IGkgPyB7XG4gICAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgICAgY29tcGxldGU6ICF0b2RvLmNvbXBsZXRlXG4gICAgICAgIH0gOiB0b2RvKSlcbiAgICB9XG5cbiAgICBjb25zdCB3aXRoVG9kb3MgPSAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBtdC01XCI+XG4gICAgICAgICAgICAgICAge3RvZG9zLm1hcCgoeyB0ZXh0LCBjb21wbGV0ZSB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUb2RvSXRlbSB0ZXh0PXt0ZXh0fSBjb21wbGV0ZT17Y29tcGxldGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDb21wbGV0ZShpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcblxuICAgIHJldHVybiAod2l0aFRvZG9zKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJUb2RvSXRlbSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInRvZ2dsZUNvbXBsZXRlIiwiaSIsIm1hcCIsInRvZG8iLCJrIiwiY29tcGxldGUiLCJ3aXRoVG9kb3MiLCJzZWN0aW9uIiwiY2xhc3MiLCJkaXYiLCJ0ZXh0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todo/[id].js\n"));

/***/ })

});