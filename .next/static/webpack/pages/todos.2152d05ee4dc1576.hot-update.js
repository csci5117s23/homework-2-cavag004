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

/***/ "./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst useInputValue = (initialValue)=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);\n    return {\n        value,\n        onChange: (e)=>setValue(e.target.value),\n        resetValue: ()=>setValue(\"\")\n    };\n};\n_s(useInputValue, \"L08zUdRTae9t+nWvf9xbU6NcRrM=\");\nconst testFunction = ()=>{\n    console.log(\"test\");\n};\nasync function postFetch(text) {\n    let obj;\n    const res = await fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n        method: \"post\",\n        headers: {\n            \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        //make sure to serialize your JSON body\n        body: JSON.stringify({\n            todoItem: text,\n            done: false\n        })\n    });\n    obj = await res.json();\n    testFunction();\n    console.log(obj._id);\n    return obj.id;\n}\nconst Form = (param)=>{\n    let { onSubmit  } = param;\n    _s1();\n    const { resetValue , ...text } = useInputValue(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        onSubmit: (e)=>{\n            e.preventDefault();\n            onSubmit(text.value);\n            resetValue();\n            postFetch(text.value);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"field is-grouped\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control is-expanded\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"todo-add\",\n                            class: \"input\",\n                            type: \"text\",\n                            ...text,\n                            placeholder: \"Enter Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"button is-info\",\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Form, \"ZCGjg7oNTT9+GvjHwf5Kd02wJ4k=\", false, function() {\n    return [\n        useInputValue\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxNQUFNRSxnQkFBZ0JDLENBQUFBLGVBQWdCOztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBRW5DLE9BQU87UUFDSEM7UUFDQUUsVUFBVUMsQ0FBQUEsSUFBS0YsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO1FBQ3RDSyxZQUFZLElBQU1KLFNBQVM7SUFDL0I7QUFDSjtHQVJNSDtBQVVOLE1BQU1RLGVBQWUsSUFBTTtJQUN2QkMsUUFBUUMsR0FBRyxDQUFDO0FBQ2hCO0FBRUEsZUFBZUMsVUFBVUMsSUFBSSxFQUFFO0lBQzNCLElBQUlDO0lBQ0osTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHVEQUF1RDtRQUMzRUMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsWUFBWTtZQUNaLFVBQVU7WUFDVixnQkFBZ0I7UUFDcEI7UUFFQSx1Q0FBdUM7UUFDdkNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNqQkMsVUFBVVQ7WUFDVlUsTUFBTSxLQUFLO1FBQ2Y7SUFDSjtJQUNBVCxNQUFNLE1BQU1DLElBQUlTLElBQUk7SUFDcEJmO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0csSUFBSVcsR0FBRztJQUNuQixPQUFPWCxJQUFJWSxFQUFFO0FBQ2pCO0FBRUEsTUFBTUMsT0FBTyxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3RCLE1BQU0sRUFBRXBCLFdBQVUsRUFBRSxHQUFHSyxNQUFNLEdBQUdaLGNBQWM7SUFFOUMscUJBQ0ksOERBQUM0QjtRQUFLWixRQUFPO1FBQU9XLFVBQVV0QixDQUFBQSxJQUFLO1lBQy9CQSxFQUFFd0IsY0FBYztZQUNoQkYsU0FBU2YsS0FBS1YsS0FBSztZQUNuQks7WUFDQUksVUFBVUMsS0FBS1YsS0FBSztRQUN4QjtrQkFFSSw0RUFBQzRCO1lBQUlDLE9BQU07c0JBQ1AsNEVBQUNEO2dCQUFJQyxPQUFNOztrQ0FDUCw4REFBQ0Q7d0JBQUlDLE9BQU07a0NBQ1AsNEVBQUNDOzRCQUFNUCxJQUFHOzRCQUFXTSxPQUFNOzRCQUFRRSxNQUFLOzRCQUFRLEdBQUdyQixJQUFJOzRCQUFFc0IsYUFBWTs7Ozs7Ozs7Ozs7a0NBRXpFLDhEQUFDSjt3QkFBSUMsT0FBTTtrQ0FDUCw0RUFBQ0k7NEJBQU9KLE9BQU07NEJBQWlCRSxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckU7SUF4Qk1QOztRQUM4QjFCOzs7S0FEOUIwQjtBQTBCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0uanN4PzI5MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlSW5wdXRWYWx1ZSA9IGluaXRpYWxWYWx1ZSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgcmVzZXRWYWx1ZTogKCkgPT4gc2V0VmFsdWUoXCJcIilcbiAgICB9O1xufTtcblxuY29uc3QgdGVzdEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdEZldGNoKHRleHQpIHtcbiAgICBsZXQgb2JqO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iYWNrZW5kLTI2dHcuYXBpLmNvZGVob29rcy5pby9kZXYvdG9kb2l0ZW1zXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYXBpa2V5JzogJzMxNTY4ZTk4LTk1OTUtNGY1OC1hMTQ3LTU3ZTE4YWYwMDFjNycsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vbWFrZSBzdXJlIHRvIHNlcmlhbGl6ZSB5b3VyIEpTT04gYm9keVxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0b2RvSXRlbTogdGV4dCxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBvYmogPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHRlc3RGdW5jdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKG9iai5faWQpO1xuICAgIHJldHVybiBvYmouaWQ7XG59XG5cbmNvbnN0IEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XG4gICAgY29uc3QgeyByZXNldFZhbHVlLCAuLi50ZXh0IH0gPSB1c2VJbnB1dFZhbHVlKFwiXCIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG9uU3VibWl0KHRleHQudmFsdWUpO1xuICAgICAgICAgICAgcmVzZXRWYWx1ZSgpO1xuICAgICAgICAgICAgcG9zdEZldGNoKHRleHQudmFsdWUpO1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIHsvKiBUaGUgaHRtbCBpbnB1dCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBpcy1leHBhbmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kby1hZGRcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiB7Li4udGV4dH0gcGxhY2Vob2xkZXI9XCJFbnRlciBJdGVtXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWluZm9cIiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUlucHV0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVzZXRWYWx1ZSIsInRlc3RGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0RmV0Y2giLCJ0ZXh0Iiwib2JqIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2RvSXRlbSIsImRvbmUiLCJqc29uIiwiX2lkIiwiaWQiLCJGb3JtIiwib25TdWJtaXQiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzcyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});