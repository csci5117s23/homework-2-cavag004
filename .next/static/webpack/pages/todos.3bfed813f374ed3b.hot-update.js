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

/***/ "./pages/todos.js":
/*!************************!*\
  !*** ./pages/todos.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabs */ \"./components/Tabs.jsx\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form */ \"./components/Form.jsx\");\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoItem */ \"./components/TodoItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const toggleComplete = (i)=>{\n        setTodos(todos.map((todo, k)=>k === i ? {\n                ...todo,\n                complete: !todo.complete\n            } : todo));\n    };\n    const addTodo = (param)=>{\n        let { item , jsonId  } = param;\n        setTodos([\n            {\n                item,\n                complete: false,\n                jsonId\n            },\n            ...todos\n        ]);\n    };\n    const withTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: addTodo\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"box mt-5\",\n                        children: todos.map((param, i)=>/*#__PURE__*/ {\n                            let { item , complete , jsonId  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: i,\n                                text: item,\n                                complete: complete,\n                                jsonId: jsonId\n                            }, void 0, false, {\n                                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    const withoutTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: (text)=>setTodos([\n                                {\n                                    text,\n                                    complete: false\n                                },\n                                ...todos\n                            ])\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"box mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"//TODO: add todo items\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                            lineNumber: 41,\n                            columnNumber: 39\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    // if there are todos, display the todos box\n    if (todos.length > 0) {\n        return withTodos;\n    }\n    // if there are not any todos, don't display the todos box\n    return withoutTodos;\n}\n_s(Todos, \"ZATHeV9x55jFrDOww2hwcxQ3V1U=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0s7QUFDQTtBQUNRO0FBRTlCLFNBQVNJLFFBQVE7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU1PLGlCQUFpQixDQUFDQyxJQUFNO1FBQzFCRixTQUFTRCxNQUFNSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFBTUEsTUFBTUgsSUFBSTtnQkFDdEMsR0FBR0UsSUFBSTtnQkFDUEUsVUFBVSxDQUFDRixLQUFLRSxRQUFRO1lBQzVCLElBQUlGLElBQUk7SUFDWjtJQUVBLE1BQU1HLFVBQVUsU0FBc0I7WUFBckIsRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUU7UUFDN0JULFNBQVM7WUFBQztnQkFBQ1E7Z0JBQU1GLFVBQVUsS0FBSztnQkFBRUc7WUFBTTtlQUFNVjtTQUFNO0lBQ3hEO0lBRUEsTUFBTVcsMEJBQ0Y7OzBCQUNJLDhEQUFDZix3REFBSUE7Ozs7OzBCQUNMLDhEQUFDZ0I7Z0JBQVFDLE9BQU07O2tDQUNYLDhEQUFDaEIsd0RBQUlBO3dCQUFDaUIsVUFBVU47Ozs7OztrQ0FDaEIsOERBQUNPO3dCQUFJRixPQUFNO2tDQUNOYixNQUFNSSxHQUFHLENBQUMsUUFBNEJELGtCQUNuQztnQ0FEUSxFQUFFTSxLQUFJLEVBQUVGLFNBQVEsRUFBRUcsT0FBTSxFQUFDO21DQUNqQyw4REFBQ1osNERBQVFBO2dDQUFDa0IsSUFBSWI7Z0NBQUdjLE1BQU1SO2dDQUFNRixVQUFVQTtnQ0FBVUcsUUFBUUE7Ozs7Ozt3QkFFeEQ7Ozs7Ozs7Ozs7Ozs7O0lBT3JCLE1BQU1RLDZCQUNGOzswQkFDSSw4REFBQ3RCLHdEQUFJQTs7Ozs7MEJBQ0wsOERBQUNnQjtnQkFBUUMsT0FBTTs7a0NBQ1gsOERBQUNoQix3REFBSUE7d0JBQUNpQixVQUFVRyxDQUFBQSxPQUFRaEIsU0FBUztnQ0FBQztvQ0FBRWdCO29DQUFNVixVQUFVLEtBQUs7Z0NBQUM7bUNBQU1QOzZCQUFNOzs7Ozs7a0NBQ3RFLDhEQUFDZTt3QkFBSUYsT0FBTTtrQ0FBVyw0RUFBQ007c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLeEMsNENBQTRDO0lBQzVDLElBQUluQixNQUFNb0IsTUFBTSxHQUFHLEdBQUc7UUFDbEIsT0FBUVQ7SUFDWixDQUFDO0lBQ0QsMERBQTBEO0lBQzFELE9BQVFPO0FBQ1osQ0FBQztHQTlDdUJuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy5qcz83NzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGFicyBmcm9tICcuLi9jb21wb25lbnRzL1RhYnMnXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvSXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb3MoKSB7XG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKGkpID0+IHtcbiAgICAgICAgc2V0VG9kb3ModG9kb3MubWFwKCh0b2RvLCBrKSA9PiBrID09PSBpID8ge1xuICAgICAgICAgICAgLi4udG9kbyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAhdG9kby5jb21wbGV0ZVxuICAgICAgICB9IDogdG9kbykpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh7IGl0ZW0sIGpzb25JZCB9KSA9PiB7XG4gICAgICAgIHNldFRvZG9zKFt7aXRlbSwgY29tcGxldGU6IGZhbHNlLCBqc29uSWR9LCAuLi50b2Rvc10pO1xuICAgIH1cblxuICAgIGNvbnN0IHdpdGhUb2RvcyA9IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUYWJzLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRUb2RvfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh7IGl0ZW0sIGNvbXBsZXRlLCBqc29uSWR9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9kb0l0ZW0gaWQ9e2l9IHRleHQ9e2l0ZW19IGNvbXBsZXRlPXtjb21wbGV0ZX0ganNvbklkPXtqc29uSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gdG9nZ2xlQ29tcGxldGUoaSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcblxuICAgIGNvbnN0IHdpdGhvdXRUb2RvcyA9IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUYWJzLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0ZXh0ID0+IHNldFRvZG9zKFt7IHRleHQsIGNvbXBsZXRlOiBmYWxzZSB9LCAuLi50b2Rvc10pfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggbXQtNVwiPjxzcGFuPi8vVE9ETzogYWRkIHRvZG8gaXRlbXM8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgdG9kb3MsIGRpc3BsYXkgdGhlIHRvZG9zIGJveFxuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiAod2l0aFRvZG9zKTtcbiAgICB9XG4gICAgLy8gaWYgdGhlcmUgYXJlIG5vdCBhbnkgdG9kb3MsIGRvbid0IGRpc3BsYXkgdGhlIHRvZG9zIGJveFxuICAgIHJldHVybiAod2l0aG91dFRvZG9zKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUYWJzIiwiRm9ybSIsIlRvZG9JdGVtIiwiVG9kb3MiLCJ0b2RvcyIsInNldFRvZG9zIiwidG9nZ2xlQ29tcGxldGUiLCJpIiwibWFwIiwidG9kbyIsImsiLCJjb21wbGV0ZSIsImFkZFRvZG8iLCJpdGVtIiwianNvbklkIiwid2l0aFRvZG9zIiwic2VjdGlvbiIsImNsYXNzIiwib25TdWJtaXQiLCJkaXYiLCJpZCIsInRleHQiLCJ3aXRob3V0VG9kb3MiLCJzcGFuIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todos.js\n"));

/***/ })

});