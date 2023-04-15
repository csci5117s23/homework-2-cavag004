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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabs */ \"./components/Tabs.jsx\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form */ \"./components/Form.jsx\");\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoItem */ \"./components/TodoItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const toggleComplete = (i)=>{\n        setTodos(todos.map((todo, k)=>k === i ? {\n                ...todo,\n                complete: !todo.complete\n            } : todo));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n                \"method\": \"GET\",\n                \"headers\": {\n                    \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\"\n                }\n            });\n            const data = await response.json();\n            for(var i = 0; i < data.length; i++){\n                var item = data[i].todoItem;\n                var complete = data[i].done;\n                var jsonId = data[i]._id;\n                setTodos([\n                    {\n                        item,\n                        complete,\n                        jsonId\n                    },\n                    ...todos\n                ]);\n            }\n            console.log(todos.length);\n        };\n        fetchData();\n    }, []);\n    const withTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"box mt-5\",\n                        children: todos.map((param, i)=>// {todos.map((todo, i) => (\n                        /*#__PURE__*/ {\n                            let { item , complete , jsonId  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: i,\n                                item: item,\n                                complete: complete,\n                                jsonId: jsonId\n                            }, void 0, false, {\n                                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    const withoutTodos = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"box mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"//TODO: add todo items\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                            lineNumber: 60,\n                            columnNumber: 39\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todos.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    // if there are todos, display the todos box\n    if (todos.length > 0) {\n        return withTodos;\n    }\n    // if there are not any todos, don't display the todos box\n    return withoutTodos;\n}\n_s(Todos, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0M7QUFDSTtBQUNBO0FBQ1E7QUFFOUIsU0FBU0ssUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVEsaUJBQWlCLENBQUNDLElBQU07UUFDMUJGLFNBQVNELE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUFNQSxNQUFNSCxJQUFJO2dCQUN0QyxHQUFHRSxJQUFJO2dCQUNQRSxVQUFVLENBQUNGLEtBQUtFLFFBQVE7WUFDNUIsSUFBSUYsSUFBSTtJQUNaO0lBRUFWLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNYSxZQUFZLFVBQVk7WUFDMUIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHVEQUF1RDtnQkFDaEYsVUFBVTtnQkFDVixXQUFXO29CQUFFLFlBQVk7Z0JBQXVDO1lBQ3BFO1lBQ0EsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDLElBQUssSUFBSVQsSUFBSSxHQUFHQSxJQUFJUSxLQUFLRSxNQUFNLEVBQUVWLElBQUs7Z0JBQ2xDLElBQUlXLE9BQU9ILElBQUksQ0FBQ1IsRUFBRSxDQUFDWSxRQUFRO2dCQUMzQixJQUFJUixXQUFXSSxJQUFJLENBQUNSLEVBQUUsQ0FBQ2EsSUFBSTtnQkFDM0IsSUFBSUMsU0FBU04sSUFBSSxDQUFDUixFQUFFLENBQUNlLEdBQUc7Z0JBQ3hCakIsU0FBUztvQkFBQzt3QkFBRWE7d0JBQU1QO3dCQUFVVTtvQkFBTzt1QkFBTWpCO2lCQUFNO1lBQ25EO1lBQ0FtQixRQUFRQyxHQUFHLENBQUNwQixNQUFNYSxNQUFNO1FBQzVCO1FBRUFMO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTWEsMEJBQ0Y7OzBCQUNJLDhEQUFDekIsd0RBQUlBOzs7OzswQkFDTCw4REFBQzBCO2dCQUFRQyxPQUFNOztrQ0FFWCw4REFBQzFCLHdEQUFJQTs7Ozs7a0NBQ0wsOERBQUMyQjt3QkFBSUQsT0FBTTtrQ0FDTnZCLE1BQU1JLEdBQUcsQ0FBQyxRQUE2QkQsSUFDeEMsNEJBQTRCO3NDQUN4QjtnQ0FGUSxFQUFFVyxLQUFJLEVBQUVQLFNBQVEsRUFBRVUsT0FBTSxFQUFFO21DQUVsQyw4REFBQ25CLDREQUFRQTtnQ0FBQzJCLElBQUl0QjtnQ0FBR1csTUFBTUE7Z0NBQU1QLFVBQVVBO2dDQUFVVSxRQUFRQTs7Ozs7O3dCQUV4RDs7Ozs7Ozs7Ozs7Ozs7SUFPckIsTUFBTVMsNkJBQ0Y7OzBCQUNJLDhEQUFDOUIsd0RBQUlBOzs7OzswQkFDTCw4REFBQzBCO2dCQUFRQyxPQUFNOztrQ0FDWCw4REFBQzFCLHdEQUFJQTs7Ozs7a0NBRUwsOERBQUMyQjt3QkFBSUQsT0FBTTtrQ0FBVyw0RUFBQ0k7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLeEMsNENBQTRDO0lBQzVDLElBQUkzQixNQUFNYSxNQUFNLEdBQUcsR0FBRztRQUNsQixPQUFRUTtJQUNaLENBQUM7SUFDRCwwREFBMEQ7SUFDMUQsT0FBUUs7QUFDWixDQUFDO0dBaEV1QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG9zLmpzPzc3NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJzJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJ1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0l0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKCkge1xuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9IChpKSA9PiB7XG4gICAgICAgIHNldFRvZG9zKHRvZG9zLm1hcCgodG9kbywgaykgPT4gayA9PT0gaSA/IHtcbiAgICAgICAgICAgIC4uLnRvZG8sXG4gICAgICAgICAgICBjb21wbGV0ZTogIXRvZG8uY29tcGxldGVcbiAgICAgICAgfSA6IHRvZG8pKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2JhY2tlbmQtMjZ0dy5hcGkuY29kZWhvb2tzLmlvL2Rldi90b2RvaXRlbXNcIiwge1xuICAgICAgICAgICAgICAgICdtZXRob2QnOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAnaGVhZGVycyc6IHsgJ3gtYXBpa2V5JzogJzMxNTY4ZTk4LTk1OTUtNGY1OC1hMTQ3LTU3ZTE4YWYwMDFjNycgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhW2ldLnRvZG9JdGVtO1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZSA9IGRhdGFbaV0uZG9uZTtcbiAgICAgICAgICAgICAgICB2YXIganNvbklkID0gZGF0YVtpXS5faWQ7XG4gICAgICAgICAgICAgICAgc2V0VG9kb3MoW3sgaXRlbSwgY29tcGxldGUsIGpzb25JZCB9LCAuLi50b2Rvc10pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcy5sZW5ndGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgd2l0aFRvZG9zID0gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRhYnMgLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIHsvKiA8Rm9ybSBvblN1Ym1pdD17KHsgaXRlbSwganNvbklkIH0pID0+IHsgc2V0VG9kb3MoW3sgaXRlbSwgY29tcGxldGU6IGZhbHNlLCBqc29uSWQgfSwgLi4udG9kb3NdKSB9fSAvPiAqL31cbiAgICAgICAgICAgICAgICA8Rm9ybS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBtdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHsgaXRlbSwgY29tcGxldGUsIGpzb25JZCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHt0b2Rvcy5tYXAoKHRvZG8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2RvSXRlbSBpZD17aX0gaXRlbT17aXRlbX0gY29tcGxldGU9e2NvbXBsZXRlfSBqc29uSWQ9e2pzb25JZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbXBsZXRlKGkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG5cbiAgICBjb25zdCB3aXRob3V0VG9kb3MgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGFicyAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0vPlxuICAgICAgICAgICAgICAgIHsvKiA8Rm9ybSBvblN1Ym1pdD17KHsgaXRlbSwganNvbklkIH0pID0+IHsgc2V0VG9kb3MoW3sgaXRlbSwgY29tcGxldGU6IGZhbHNlLCBqc29uSWQgfSwgLi4udG9kb3NdKSB9fSAvPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IG10LTVcIj48c3Bhbj4vL1RPRE86IGFkZCB0b2RvIGl0ZW1zPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApO1xuXG4gICAgLy8gaWYgdGhlcmUgYXJlIHRvZG9zLCBkaXNwbGF5IHRoZSB0b2RvcyBib3hcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gKHdpdGhUb2Rvcyk7XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIGFyZSBub3QgYW55IHRvZG9zLCBkb24ndCBkaXNwbGF5IHRoZSB0b2RvcyBib3hcbiAgICByZXR1cm4gKHdpdGhvdXRUb2Rvcyk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGFicyIsIkZvcm0iLCJUb2RvSXRlbSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsInRvZ2dsZUNvbXBsZXRlIiwiaSIsIm1hcCIsInRvZG8iLCJrIiwiY29tcGxldGUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJsZW5ndGgiLCJpdGVtIiwidG9kb0l0ZW0iLCJkb25lIiwianNvbklkIiwiX2lkIiwiY29uc29sZSIsImxvZyIsIndpdGhUb2RvcyIsInNlY3Rpb24iLCJjbGFzcyIsImRpdiIsImlkIiwid2l0aG91dFRvZG9zIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos.js\n"));

/***/ })

});