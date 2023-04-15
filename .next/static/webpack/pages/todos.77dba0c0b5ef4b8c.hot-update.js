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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabs */ \"./components/Tabs.jsx\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form */ \"./components/Form.jsx\");\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoItem */ \"./components/TodoItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const toggleComplete = (i)=>{\n        setTodos(todos.map((todo, k)=>k === i ? {\n                ...todo,\n                complete: !todo.complete\n            } : todo));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n                \"method\": \"GET\",\n                \"headers\": {\n                    \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\"\n                }\n            });\n            const data = await response.json();\n            for(var i = 0; i < data.length; i++){\n                var item = data[i].todoItem;\n                var complete = data[i].done;\n                var jsonId = data[i]._id;\n                setTodos([\n                    {\n                        item,\n                        complete,\n                        jsonId\n                    },\n                    ...todos\n                ]);\n            }\n            console.log(todos.length);\n        };\n        fetchData();\n    }, []);\n    const withTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: react__WEBPACK_IMPORTED_MODULE_1__.useEffect\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"box mt-5\",\n                        children: todos.map((todo, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: i,\n                                item: todo.todoItem,\n                                complete: todo.done,\n                                jsonId: todo._id\n                            }, void 0, false, {\n                                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    const withoutTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: react__WEBPACK_IMPORTED_MODULE_1__.useEffect\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"box mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"//TODO: add todo items\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                            lineNumber: 58,\n                            columnNumber: 39\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    // if there are todos, display the todos box\n    if (todos.length > 0) {\n        return withTodos;\n    }\n    // if there are not any todos, don't display the todos box\n    return withoutTodos;\n}\n_s(Todos, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0M7QUFDSTtBQUNBO0FBQ1E7QUFFOUIsU0FBU0ssUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVEsaUJBQWlCLENBQUNDLElBQU07UUFDMUJGLFNBQVNELE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUFNQSxNQUFNSCxJQUFJO2dCQUN0QyxHQUFHRSxJQUFJO2dCQUNQRSxVQUFVLENBQUNGLEtBQUtFLFFBQVE7WUFDNUIsSUFBSUYsSUFBSTtJQUNaO0lBRUFWLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNYSxZQUFZLFVBQVk7WUFDMUIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHVEQUF1RDtnQkFDaEYsVUFBVTtnQkFDVixXQUFXO29CQUFFLFlBQVk7Z0JBQXVDO1lBQ3BFO1lBQ0EsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDLElBQUssSUFBSVQsSUFBSSxHQUFHQSxJQUFJUSxLQUFLRSxNQUFNLEVBQUVWLElBQUs7Z0JBQ2xDLElBQUlXLE9BQU9ILElBQUksQ0FBQ1IsRUFBRSxDQUFDWSxRQUFRO2dCQUMzQixJQUFJUixXQUFXSSxJQUFJLENBQUNSLEVBQUUsQ0FBQ2EsSUFBSTtnQkFDM0IsSUFBSUMsU0FBU04sSUFBSSxDQUFDUixFQUFFLENBQUNlLEdBQUc7Z0JBQ3hCakIsU0FBUztvQkFBQzt3QkFBRWE7d0JBQU1QO3dCQUFVVTtvQkFBTzt1QkFBTWpCO2lCQUFNO1lBQ25EO1lBQ0FtQixRQUFRQyxHQUFHLENBQUNwQixNQUFNYSxNQUFNO1FBQzVCO1FBRUFMO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTWEsMEJBQ0Y7OzBCQUNJLDhEQUFDekIsd0RBQUlBOzs7OzswQkFDTCw4REFBQzBCO2dCQUFRQyxPQUFNOztrQ0FDWCw4REFBQzFCLHdEQUFJQTt3QkFBQzJCLFVBQVU3Qiw0Q0FBU0E7Ozs7OztrQ0FDekIsOERBQUM4Qjt3QkFBSUYsT0FBTTtrQ0FFTnZCLE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxNQUFNRixrQkFDZCw4REFBQ0wsNERBQVFBO2dDQUFDNEIsSUFBSXZCO2dDQUFHVyxNQUFNVCxLQUFLVSxRQUFRO2dDQUFFUixVQUFVRixLQUFLVyxJQUFJO2dDQUFFQyxRQUFRWixLQUFLYSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUy9GLE1BQU1TLDZCQUNGOzswQkFDSSw4REFBQy9CLHdEQUFJQTs7Ozs7MEJBQ0wsOERBQUMwQjtnQkFBUUMsT0FBTTs7a0NBQ1gsOERBQUMxQix3REFBSUE7d0JBQUMyQixVQUFVN0IsNENBQVNBOzs7Ozs7a0NBQ3pCLDhEQUFDOEI7d0JBQUlGLE9BQU07a0NBQVcsNEVBQUNLO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3hDLDRDQUE0QztJQUM1QyxJQUFJNUIsTUFBTWEsTUFBTSxHQUFHLEdBQUc7UUFDbEIsT0FBUVE7SUFDWixDQUFDO0lBQ0QsMERBQTBEO0lBQzFELE9BQVFNO0FBQ1osQ0FBQztHQTlEdUI1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy5qcz83NzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFicydcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybSdcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9JdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUb2Rvcyh0b2Rvcy5tYXAoKHRvZG8sIGspID0+IGsgPT09IGkgPyB7XG4gICAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgICAgY29tcGxldGU6ICF0b2RvLmNvbXBsZXRlXG4gICAgICAgIH0gOiB0b2RvKSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iYWNrZW5kLTI2dHcuYXBpLmNvZGVob29rcy5pby9kZXYvdG9kb2l0ZW1zXCIsIHtcbiAgICAgICAgICAgICAgICAnbWV0aG9kJzogJ0dFVCcsXG4gICAgICAgICAgICAgICAgJ2hlYWRlcnMnOiB7ICd4LWFwaWtleSc6ICczMTU2OGU5OC05NTk1LTRmNTgtYTE0Ny01N2UxOGFmMDAxYzcnIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YVtpXS50b2RvSXRlbTtcbiAgICAgICAgICAgICAgICB2YXIgY29tcGxldGUgPSBkYXRhW2ldLmRvbmU7XG4gICAgICAgICAgICAgICAgdmFyIGpzb25JZCA9IGRhdGFbaV0uX2lkO1xuICAgICAgICAgICAgICAgIHNldFRvZG9zKFt7IGl0ZW0sIGNvbXBsZXRlLCBqc29uSWQgfSwgLi4udG9kb3NdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3MubGVuZ3RoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHdpdGhUb2RvcyA9IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUYWJzIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dXNlRWZmZWN0fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge3RvZG9zLm1hcCgoeyBpdGVtLCBjb21wbGV0ZSwganNvbklkIH0sIGkpID0+ICggKi99XG4gICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2RvSXRlbSBpZD17aX0gaXRlbT17dG9kby50b2RvSXRlbX0gY29tcGxldGU9e3RvZG8uZG9uZX0ganNvbklkPXt0b2RvLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbXBsZXRlKGkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG5cbiAgICBjb25zdCB3aXRob3V0VG9kb3MgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGFicyAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3VzZUVmZmVjdH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IG10LTVcIj48c3Bhbj4vL1RPRE86IGFkZCB0b2RvIGl0ZW1zPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApO1xuXG4gICAgLy8gaWYgdGhlcmUgYXJlIHRvZG9zLCBkaXNwbGF5IHRoZSB0b2RvcyBib3hcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gKHdpdGhUb2Rvcyk7XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIGFyZSBub3QgYW55IHRvZG9zLCBkb24ndCBkaXNwbGF5IHRoZSB0b2RvcyBib3hcbiAgICByZXR1cm4gKHdpdGhvdXRUb2Rvcyk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGFicyIsIkZvcm0iLCJUb2RvSXRlbSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsInRvZ2dsZUNvbXBsZXRlIiwiaSIsIm1hcCIsInRvZG8iLCJrIiwiY29tcGxldGUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJsZW5ndGgiLCJpdGVtIiwidG9kb0l0ZW0iLCJkb25lIiwianNvbklkIiwiX2lkIiwiY29uc29sZSIsImxvZyIsIndpdGhUb2RvcyIsInNlY3Rpb24iLCJjbGFzcyIsIm9uU3VibWl0IiwiZGl2IiwiaWQiLCJ3aXRob3V0VG9kb3MiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todos.js\n"));

/***/ })

});