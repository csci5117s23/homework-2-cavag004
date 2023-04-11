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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst useInputValue = (initialValue)=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);\n    return {\n        value,\n        onChange: (e)=>setValue(e.target.value),\n        resetValue: ()=>setValue(\"\")\n    };\n};\n_s(useInputValue, \"L08zUdRTae9t+nWvf9xbU6NcRrM=\");\nfunction postFetch(text) {\n    return fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n        method: \"post\",\n        headers: {\n            \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        //make sure to serialize your JSON body\n        body: JSON.stringify({\n            todoItem: text,\n            done: false\n        })\n    }).then((response)=>{\n        return response.json().then((data)=>{\n            console.log(data._id);\n            return data._id;\n        }).catch((err)=>{\n            console.log(err);\n        });\n    });\n// .then(response => response.json())\n// .then(data => {\n//     obj = data;\n// })\n// .then(() => {\n//     id = obj._id;\n//     return id;\n// });\n}\nconst Form = (param)=>{\n    let { onSubmit  } = param;\n    _s1();\n    const { resetValue , ...text } = useInputValue(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        onSubmit: (e)=>{\n            e.preventDefault();\n            onSubmit(text.value);\n            resetValue();\n            console.log(postFetch(text.value));\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"field is-grouped\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control is-expanded\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"todo-add\",\n                            class: \"input\",\n                            type: \"text\",\n                            ...text,\n                            placeholder: \"Enter Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"button is-info\",\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Form, \"ZCGjg7oNTT9+GvjHwf5Kd02wJ4k=\", false, function() {\n    return [\n        useInputValue\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxNQUFNRSxnQkFBZ0JDLENBQUFBLGVBQWdCOztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBRW5DLE9BQU87UUFDSEM7UUFDQUUsVUFBVUMsQ0FBQUEsSUFBS0YsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO1FBQ3RDSyxZQUFZLElBQU1KLFNBQVM7SUFDL0I7QUFDSjtHQVJNSDtBQVVOLFNBQVNRLFVBQVVDLElBQUksRUFBRTtJQUNyQixPQUFPQyxNQUFNLHVEQUF1RDtRQUNoRUMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsWUFBWTtZQUNaLFVBQVU7WUFDVixnQkFBZ0I7UUFDcEI7UUFFQSx1Q0FBdUM7UUFDdkNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNqQkMsVUFBVVA7WUFDVlEsTUFBTSxLQUFLO1FBQ2Y7SUFDSixHQUNLQyxJQUFJLENBQUNDLENBQUFBLFdBQVk7UUFDZCxPQUFPQSxTQUFTQyxJQUFJLEdBQUdGLElBQUksQ0FBQyxDQUFDRyxPQUFTO1lBQ2xDQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLEdBQUc7WUFDcEIsT0FBT0gsS0FBS0csR0FBRztRQUNuQixHQUFHQyxLQUFLLENBQUMsQ0FBQ0MsTUFBTztZQUNiSixRQUFRQyxHQUFHLENBQUNHO1FBQ2hCO0lBQ0o7QUFDQSxxQ0FBcUM7QUFDckMsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixLQUFLO0FBQ0wsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsTUFBTTtBQUNkO0FBRUEsTUFBTUMsT0FBTyxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3RCLE1BQU0sRUFBRXJCLFdBQVUsRUFBRSxHQUFHRSxNQUFNLEdBQUdULGNBQWM7SUFFOUMscUJBQ0ksOERBQUM2QjtRQUFLbEIsUUFBTztRQUFPaUIsVUFBVXZCLENBQUFBLElBQUs7WUFDL0JBLEVBQUV5QixjQUFjO1lBQ2hCRixTQUFTbkIsS0FBS1AsS0FBSztZQUNuQks7WUFDQWUsUUFBUUMsR0FBRyxDQUFDZixVQUFVQyxLQUFLUCxLQUFLO1FBQ3BDO2tCQUVJLDRFQUFDNkI7WUFBSUMsT0FBTTtzQkFDUCw0RUFBQ0Q7Z0JBQUlDLE9BQU07O2tDQUNQLDhEQUFDRDt3QkFBSUMsT0FBTTtrQ0FDUCw0RUFBQ0M7NEJBQU1DLElBQUc7NEJBQVdGLE9BQU07NEJBQVFHLE1BQUs7NEJBQVEsR0FBRzFCLElBQUk7NEJBQUUyQixhQUFZOzs7Ozs7Ozs7OztrQ0FFekUsOERBQUNMO3dCQUFJQyxPQUFNO2tDQUNQLDRFQUFDSzs0QkFBT0wsT0FBTTs0QkFBaUJHLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yRTtJQXhCTVI7O1FBQzhCM0I7OztLQUQ5QjJCO0FBMEJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS5qc3g/MjkxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VJbnB1dFZhbHVlID0gaW5pdGlhbFZhbHVlID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IGUgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpLFxuICAgICAgICByZXNldFZhbHVlOiAoKSA9PiBzZXRWYWx1ZShcIlwiKVxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBwb3N0RmV0Y2godGV4dCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vYmFja2VuZC0yNnR3LmFwaS5jb2RlaG9va3MuaW8vZGV2L3RvZG9pdGVtc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICd4LWFwaWtleSc6ICczMTU2OGU5OC05NTk1LTRmNTgtYTE0Ny01N2UxOGFmMDAxYzcnLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcblxuICAgICAgICAvL21ha2Ugc3VyZSB0byBzZXJpYWxpemUgeW91ciBKU09OIGJvZHlcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdG9kb0l0ZW06IHRleHQsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuX2lkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5faWQ7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLy8gLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICBvYmogPSBkYXRhO1xuICAgICAgICAvLyB9KVxuICAgICAgICAvLyAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZCA9IG9iai5faWQ7XG4gICAgICAgIC8vICAgICByZXR1cm4gaWQ7XG4gICAgICAgIC8vIH0pO1xufVxuXG5jb25zdCBGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICAgIGNvbnN0IHsgcmVzZXRWYWx1ZSwgLi4udGV4dCB9ID0gdXNlSW5wdXRWYWx1ZShcIlwiKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvblN1Ym1pdCh0ZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIHJlc2V0VmFsdWUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3RGZXRjaCh0ZXh0LnZhbHVlKSk7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgey8qIFRoZSBodG1sIGlucHV0ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGlzLWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLWFkZFwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHsuLi50ZXh0fSBwbGFjZWhvbGRlcj1cIkVudGVyIEl0ZW1cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtaW5mb1wiIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlSW5wdXRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXNldFZhbHVlIiwicG9zdEZldGNoIiwidGV4dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9kb0l0ZW0iLCJkb25lIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiX2lkIiwiY2F0Y2giLCJlcnIiLCJGb3JtIiwib25TdWJtaXQiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzcyIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});