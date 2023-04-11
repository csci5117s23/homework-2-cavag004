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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst useInputValue = (initialValue)=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);\n    return {\n        value,\n        onChange: (e)=>setValue(e.target.value),\n        resetValue: ()=>setValue(\"\")\n    };\n};\n_s(useInputValue, \"L08zUdRTae9t+nWvf9xbU6NcRrM=\");\nconst saveId = (id)=>{\n    console.log(id);\n};\nasync function postFetch(text) {\n    let obj;\n    const res = await fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n        method: \"post\",\n        headers: {\n            \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        //make sure to serialize your JSON body\n        body: JSON.stringify({\n            todoItem: text,\n            done: false\n        })\n    });\n    obj = await res.json();\n    saveId(obj._id);\n    console.log(obj._id);\n    return obj.id;\n}\nconst Form = (param)=>{\n    let { onSubmit  } = param;\n    _s1();\n    const { resetValue , ...text } = useInputValue(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        onSubmit: (e)=>{\n            e.preventDefault();\n            onSubmit(text.value);\n            resetValue();\n            postFetch(text.value);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"field is-grouped\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control is-expanded\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"todo-add\",\n                            class: \"input\",\n                            type: \"text\",\n                            ...text,\n                            placeholder: \"Enter Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"button is-info\",\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Form, \"ZCGjg7oNTT9+GvjHwf5Kd02wJ4k=\", false, function() {\n    return [\n        useInputValue\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxNQUFNRSxnQkFBZ0JDLENBQUFBLGVBQWdCOztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBRW5DLE9BQU87UUFDSEM7UUFDQUUsVUFBVUMsQ0FBQUEsSUFBS0YsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO1FBQ3RDSyxZQUFZLElBQU1KLFNBQVM7SUFDL0I7QUFDSjtHQVJNSDtBQVVOLE1BQU1RLFNBQVMsQ0FBQ0MsS0FBTztJQUNuQkMsUUFBUUMsR0FBRyxDQUFDRjtBQUNoQjtBQUVBLGVBQWVHLFVBQVVDLElBQUksRUFBRTtJQUMzQixJQUFJQztJQUNKLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSx1REFBdUQ7UUFDM0VDLFFBQVE7UUFDUkMsU0FBUztZQUNMLFlBQVk7WUFDWixVQUFVO1lBQ1YsZ0JBQWdCO1FBQ3BCO1FBRUEsdUNBQXVDO1FBQ3ZDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDakJDLFVBQVVUO1lBQ1ZVLE1BQU0sS0FBSztRQUNmO0lBQ0o7SUFDQVQsTUFBTSxNQUFNQyxJQUFJUyxJQUFJO0lBQ3BCaEIsT0FBT00sSUFBSVcsR0FBRztJQUNkZixRQUFRQyxHQUFHLENBQUNHLElBQUlXLEdBQUc7SUFDbkIsT0FBT1gsSUFBSUwsRUFBRTtBQUNqQjtBQUVBLE1BQU1pQixPQUFPLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDdEIsTUFBTSxFQUFFcEIsV0FBVSxFQUFFLEdBQUdNLE1BQU0sR0FBR2IsY0FBYztJQUU5QyxxQkFDSSw4REFBQzRCO1FBQUtYLFFBQU87UUFBT1UsVUFBVXRCLENBQUFBLElBQUs7WUFDL0JBLEVBQUV3QixjQUFjO1lBQ2hCRixTQUFTZCxLQUFLWCxLQUFLO1lBQ25CSztZQUNBSyxVQUFVQyxLQUFLWCxLQUFLO1FBQ3hCO2tCQUVJLDRFQUFDNEI7WUFBSUMsT0FBTTtzQkFDUCw0RUFBQ0Q7Z0JBQUlDLE9BQU07O2tDQUNQLDhEQUFDRDt3QkFBSUMsT0FBTTtrQ0FDUCw0RUFBQ0M7NEJBQU12QixJQUFHOzRCQUFXc0IsT0FBTTs0QkFBUUUsTUFBSzs0QkFBUSxHQUFHcEIsSUFBSTs0QkFBRXFCLGFBQVk7Ozs7Ozs7Ozs7O2tDQUV6RSw4REFBQ0o7d0JBQUlDLE9BQU07a0NBQ1AsNEVBQUNJOzRCQUFPSixPQUFNOzRCQUFpQkUsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JFO0lBeEJNUDs7UUFDOEIxQjs7O0tBRDlCMEI7QUEwQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD8yOTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZUlucHV0VmFsdWUgPSBpbml0aWFsVmFsdWUgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvbkNoYW5nZTogZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSksXG4gICAgICAgIHJlc2V0VmFsdWU6ICgpID0+IHNldFZhbHVlKFwiXCIpXG4gICAgfTtcbn07XG5cbmNvbnN0IHNhdmVJZCA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdEZldGNoKHRleHQpIHtcbiAgICBsZXQgb2JqO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iYWNrZW5kLTI2dHcuYXBpLmNvZGVob29rcy5pby9kZXYvdG9kb2l0ZW1zXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYXBpa2V5JzogJzMxNTY4ZTk4LTk1OTUtNGY1OC1hMTQ3LTU3ZTE4YWYwMDFjNycsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vbWFrZSBzdXJlIHRvIHNlcmlhbGl6ZSB5b3VyIEpTT04gYm9keVxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0b2RvSXRlbTogdGV4dCxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBvYmogPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNhdmVJZChvYmouX2lkKTtcbiAgICBjb25zb2xlLmxvZyhvYmouX2lkKTtcbiAgICByZXR1cm4gb2JqLmlkO1xufVxuXG5jb25zdCBGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICAgIGNvbnN0IHsgcmVzZXRWYWx1ZSwgLi4udGV4dCB9ID0gdXNlSW5wdXRWYWx1ZShcIlwiKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvblN1Ym1pdCh0ZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIHJlc2V0VmFsdWUoKTtcbiAgICAgICAgICAgIHBvc3RGZXRjaCh0ZXh0LnZhbHVlKTtcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7LyogVGhlIGh0bWwgaW5wdXQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaXMtZXhwYW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tYWRkXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgey4uLnRleHR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgSXRlbVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvXCIgdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VJbnB1dFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlc2V0VmFsdWUiLCJzYXZlSWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0RmV0Y2giLCJ0ZXh0Iiwib2JqIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2RvSXRlbSIsImRvbmUiLCJqc29uIiwiX2lkIiwiRm9ybSIsIm9uU3VibWl0IiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});