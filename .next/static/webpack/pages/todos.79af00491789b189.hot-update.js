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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst useInputValue = (initialValue)=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);\n    return {\n        value,\n        onChange: (e)=>setValue(e.target.value),\n        resetValue: ()=>setValue(\"\")\n    };\n};\n_s(useInputValue, \"L08zUdRTae9t+nWvf9xbU6NcRrM=\");\nconst Form = (param)=>{\n    let { onSubmit  } = param;\n    _s1();\n    const { resetValue , ...text } = useInputValue(\"\");\n    var obj;\n    const postFetch = (text)=>{\n        fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n            method: \"post\",\n            headers: {\n                \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            //make sure to serialize your JSON body\n            body: JSON.stringify({\n                todoItem: text,\n                done: false\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            obj = data;\n        }).then(()=>{\n            console.log(JSON.parse(obj._id));\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        onSubmit: (e)=>{\n            e.preventDefault();\n            onSubmit(text.value);\n            resetValue();\n            postFetch(text.value);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"field is-grouped\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control is-expanded\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"todo-add\",\n                            class: \"input\",\n                            type: \"text\",\n                            ...text,\n                            placeholder: \"Enter Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"button is-info\",\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Form, \"ZCGjg7oNTT9+GvjHwf5Kd02wJ4k=\", false, function() {\n    return [\n        useInputValue\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxNQUFNRSxnQkFBZ0JDLENBQUFBLGVBQWdCOztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBRW5DLE9BQU87UUFDSEM7UUFDQUUsVUFBVUMsQ0FBQUEsSUFBS0YsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO1FBQ3RDSyxZQUFZLElBQU1KLFNBQVM7SUFDL0I7QUFDSjtHQVJNSDtBQVVOLE1BQU1RLE9BQU8sU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUN0QixNQUFNLEVBQUVGLFdBQVUsRUFBRSxHQUFHRyxNQUFNLEdBQUdWLGNBQWM7SUFDOUMsSUFBSVc7SUFFSixNQUFNQyxZQUFZLENBQUNGLE9BQVM7UUFDeEJHLE1BQU0sdURBQXVEO1lBQ3pEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsWUFBWTtnQkFDWixVQUFVO2dCQUNWLGdCQUFnQjtZQUNwQjtZQUVBLHVDQUF1QztZQUN2Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsVUFBVVQ7Z0JBQ1ZVLE1BQU0sS0FBSztZQUNmO1FBQ0osR0FDS0MsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVE7WUFDVmIsTUFBTWE7UUFDVixHQUNDSCxJQUFJLENBQUMsSUFBTTtZQUNSSSxRQUFRQyxHQUFHLENBQUNULEtBQUtVLEtBQUssQ0FBQ2hCLElBQUlpQixHQUFHO1FBQ2xDO0lBRVI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS2YsUUFBTztRQUFPTCxVQUFVSixDQUFBQSxJQUFLO1lBQy9CQSxFQUFFeUIsY0FBYztZQUNoQnJCLFNBQVNDLEtBQUtSLEtBQUs7WUFDbkJLO1lBQ0FLLFVBQVVGLEtBQUtSLEtBQUs7UUFDeEI7a0JBRUksNEVBQUM2QjtZQUFJQyxPQUFNO3NCQUNQLDRFQUFDRDtnQkFBSUMsT0FBTTs7a0NBQ1AsOERBQUNEO3dCQUFJQyxPQUFNO2tDQUNQLDRFQUFDQzs0QkFBTUMsSUFBRzs0QkFBV0YsT0FBTTs0QkFBUUcsTUFBSzs0QkFBUSxHQUFHekIsSUFBSTs0QkFBRTBCLGFBQVk7Ozs7Ozs7Ozs7O2tDQUV6RSw4REFBQ0w7d0JBQUlDLE9BQU07a0NBQ1AsNEVBQUNLOzRCQUFPTCxPQUFNOzRCQUFpQkcsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JFO0lBbERNM0I7O1FBQzhCUjs7O0tBRDlCUTtBQW9ETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0uanN4PzI5MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlSW5wdXRWYWx1ZSA9IGluaXRpYWxWYWx1ZSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgcmVzZXRWYWx1ZTogKCkgPT4gc2V0VmFsdWUoXCJcIilcbiAgICB9O1xufTtcblxuY29uc3QgRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IHtcbiAgICBjb25zdCB7IHJlc2V0VmFsdWUsIC4uLnRleHQgfSA9IHVzZUlucHV0VmFsdWUoXCJcIik7XG4gICAgdmFyIG9iajtcblxuICAgIGNvbnN0IHBvc3RGZXRjaCA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9iYWNrZW5kLTI2dHcuYXBpLmNvZGVob29rcy5pby9kZXYvdG9kb2l0ZW1zXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gtYXBpa2V5JzogJzMxNTY4ZTk4LTk1OTUtNGY1OC1hMTQ3LTU3ZTE4YWYwMDFjNycsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvL21ha2Ugc3VyZSB0byBzZXJpYWxpemUgeW91ciBKU09OIGJvZHlcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbTogdGV4dCxcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG9iaiA9IGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uob2JqLl9pZCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb25TdWJtaXQodGV4dC52YWx1ZSk7XG4gICAgICAgICAgICByZXNldFZhbHVlKCk7XG4gICAgICAgICAgICBwb3N0RmV0Y2godGV4dC52YWx1ZSk7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgey8qIFRoZSBodG1sIGlucHV0ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGlzLWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLWFkZFwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHsuLi50ZXh0fSBwbGFjZWhvbGRlcj1cIkVudGVyIEl0ZW1cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtaW5mb1wiIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlSW5wdXRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXNldFZhbHVlIiwiRm9ybSIsIm9uU3VibWl0IiwidGV4dCIsIm9iaiIsInBvc3RGZXRjaCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9kb0l0ZW0iLCJkb25lIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGFyc2UiLCJfaWQiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzcyIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});