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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst useInputValue = (initialValue)=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);\n    return {\n        value,\n        onChange: (e)=>setValue(e.target.value),\n        resetValue: ()=>setValue(\"\")\n    };\n};\n_s(useInputValue, \"L08zUdRTae9t+nWvf9xbU6NcRrM=\");\nasync function postFetch(text) {\n    let obj;\n    const res = await fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n        method: \"post\",\n        headers: {\n            \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        //make sure to serialize your JSON body\n        body: JSON.stringify({\n            todoItem: text,\n            done: false\n        })\n    });\n    obj = await res.json();\n}\nconst Form = (param)=>{\n    let { onSubmit  } = param;\n    _s1();\n    const { resetValue , ...text } = useInputValue(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        onSubmit: (e)=>{\n            e.preventDefault();\n            var obj;\n            fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n                method: \"post\",\n                headers: {\n                    \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                //make sure to serialize your JSON body\n                body: JSON.stringify({\n                    todoItem: text,\n                    done: false\n                })\n            }).then((res)=>res.json()).then((data)=>{\n                obj = data;\n            }).then(()=>{\n                onSubmit(text.value, obj._id);\n            });\n            // postFetch(text.value);\n            // onSubmit(text.value);\n            resetValue();\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"field is-grouped\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control is-expanded\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"todo-add\",\n                            class: \"input\",\n                            type: \"text\",\n                            ...text,\n                            placeholder: \"Enter Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"button is-info\",\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                lineNumber: 68,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Form, \"ZCGjg7oNTT9+GvjHwf5Kd02wJ4k=\", false, function() {\n    return [\n        useInputValue\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxNQUFNRSxnQkFBZ0JDLENBQUFBLGVBQWdCOztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBQ25DLE9BQU87UUFDSEM7UUFDQUUsVUFBVUMsQ0FBQUEsSUFBS0YsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO1FBQ3RDSyxZQUFZLElBQU1KLFNBQVM7SUFDL0I7QUFDSjtHQVBNSDtBQVNOLGVBQWVRLFVBQVVDLElBQUksRUFBRTtJQUMzQixJQUFJQztJQUNKLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSx1REFBdUQ7UUFDM0VDLFFBQVE7UUFDUkMsU0FBUztZQUNMLFlBQVk7WUFDWixVQUFVO1lBQ1YsZ0JBQWdCO1FBQ3BCO1FBRUEsdUNBQXVDO1FBQ3ZDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDakJDLFVBQVVUO1lBQ1ZVLE1BQU0sS0FBSztRQUNmO0lBQ0o7SUFDQVQsTUFBTSxNQUFNQyxJQUFJUyxJQUFJO0FBQ3hCO0FBRUEsTUFBTUMsT0FBTyxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3RCLE1BQU0sRUFBRWYsV0FBVSxFQUFFLEdBQUdFLE1BQU0sR0FBR1QsY0FBYztJQUU5QyxxQkFDSSw4REFBQ3VCO1FBQUtWLFFBQU87UUFBT1MsVUFBVWpCLENBQUFBLElBQUs7WUFDL0JBLEVBQUVtQixjQUFjO1lBRWhCLElBQUlkO1lBQ0pFLE1BQU0sdURBQXVEO2dCQUN6REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxZQUFZO29CQUNaLFVBQVU7b0JBQ1YsZ0JBQWdCO2dCQUNwQjtnQkFFQSx1Q0FBdUM7Z0JBQ3ZDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ2pCQyxVQUFVVDtvQkFDVlUsTUFBTSxLQUFLO2dCQUNmO1lBQ0osR0FDS00sSUFBSSxDQUFDZCxDQUFBQSxNQUFPQSxJQUFJUyxJQUFJLElBQ3BCSyxJQUFJLENBQUNDLENBQUFBLE9BQVE7Z0JBQ1ZoQixNQUFNZ0I7WUFDVixHQUNDRCxJQUFJLENBQUMsSUFBTTtnQkFDUkgsU0FBU2IsS0FBS1AsS0FBSyxFQUFFUSxJQUFJaUIsR0FBRztZQUNoQztZQUVKLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEJwQjtRQUNKO2tCQUVJLDRFQUFDcUI7WUFBSUMsT0FBTTtzQkFDUCw0RUFBQ0Q7Z0JBQUlDLE9BQU07O2tDQUNQLDhEQUFDRDt3QkFBSUMsT0FBTTtrQ0FDUCw0RUFBQ0M7NEJBQU1DLElBQUc7NEJBQVdGLE9BQU07NEJBQVFHLE1BQUs7NEJBQVEsR0FBR3ZCLElBQUk7NEJBQUV3QixhQUFZOzs7Ozs7Ozs7OztrQ0FFekUsOERBQUNMO3dCQUFJQyxPQUFNO2tDQUNQLDRFQUFDSzs0QkFBT0wsT0FBTTs0QkFBaUJHLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yRTtJQWhETVg7O1FBQzhCckI7OztLQUQ5QnFCO0FBa0ROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS5qc3g/MjkxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VJbnB1dFZhbHVlID0gaW5pdGlhbFZhbHVlID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgcmVzZXRWYWx1ZTogKCkgPT4gc2V0VmFsdWUoXCJcIilcbiAgICB9O1xufTtcblxuYXN5bmMgZnVuY3Rpb24gcG9zdEZldGNoKHRleHQpIHtcbiAgICBsZXQgb2JqO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iYWNrZW5kLTI2dHcuYXBpLmNvZGVob29rcy5pby9kZXYvdG9kb2l0ZW1zXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYXBpa2V5JzogJzMxNTY4ZTk4LTk1OTUtNGY1OC1hMTQ3LTU3ZTE4YWYwMDFjNycsXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vbWFrZSBzdXJlIHRvIHNlcmlhbGl6ZSB5b3VyIEpTT04gYm9keVxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0b2RvSXRlbTogdGV4dCxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBvYmogPSBhd2FpdCByZXMuanNvbigpO1xufVxuXG5jb25zdCBGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICAgIGNvbnN0IHsgcmVzZXRWYWx1ZSwgLi4udGV4dCB9ID0gdXNlSW5wdXRWYWx1ZShcIlwiKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBvYmo7XG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vYmFja2VuZC0yNnR3LmFwaS5jb2RlaG9va3MuaW8vZGV2L3RvZG9pdGVtc1wiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICd4LWFwaWtleSc6ICczMTU2OGU5OC05NTk1LTRmNTgtYTE0Ny01N2UxOGFmMDAxYzcnLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vbWFrZSBzdXJlIHRvIHNlcmlhbGl6ZSB5b3VyIEpTT04gYm9keVxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0l0ZW06IHRleHQsXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0KHRleHQudmFsdWUsIG9iai5faWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBwb3N0RmV0Y2godGV4dC52YWx1ZSk7XG4gICAgICAgICAgICAvLyBvblN1Ym1pdCh0ZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIHJlc2V0VmFsdWUoKTtcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7LyogVGhlIGh0bWwgaW5wdXQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaXMtZXhwYW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tYWRkXCIgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgey4uLnRleHR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgSXRlbVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvXCIgdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VJbnB1dFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlc2V0VmFsdWUiLCJwb3N0RmV0Y2giLCJ0ZXh0Iiwib2JqIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2RvSXRlbSIsImRvbmUiLCJqc29uIiwiRm9ybSIsIm9uU3VibWl0IiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImRhdGEiLCJfaWQiLCJkaXYiLCJjbGFzcyIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});