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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst useInputValue = (initialValue)=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);\n    return {\n        value,\n        onChange: (e)=>setValue(e.target.value),\n        resetValue: ()=>setValue(\"\")\n    };\n};\n_s(useInputValue, \"L08zUdRTae9t+nWvf9xbU6NcRrM=\");\nconst Form = (param)=>{\n    let { onSubmit  } = param;\n    _s1();\n    const { resetValue , ...text } = useInputValue(\"\");\n    const postFetch = (text)=>{\n        fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems\", {\n            method: \"post\",\n            headers: {\n                \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            //make sure to serialize your JSON body\n            body: JSON.stringify({\n                todoItem: text,\n                done: false\n            })\n        }).then((response)=>{\n            var itemJSON = response.json();\n            console.log(itemJSON.get(\"_id\"));\n        //do something awesome that makes the world a better place\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        onSubmit: (e)=>{\n            e.preventDefault();\n            onSubmit(text.value);\n            resetValue();\n            postFetch(text.value);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"field is-grouped\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control is-expanded\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"todo-add\",\n                            class: \"input\",\n                            type: \"text\",\n                            ...text,\n                            placeholder: \"Enter Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"control\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"button is-info\",\n                            type: \"submit\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/components/Form.jsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Form, \"ZCGjg7oNTT9+GvjHwf5Kd02wJ4k=\", false, function() {\n    return [\n        useInputValue\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDTztBQUVoQyxNQUFNRSxnQkFBZ0JDLENBQUFBLGVBQWdCOztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUNFO0lBRW5DLE9BQU87UUFDSEM7UUFDQUUsVUFBVUMsQ0FBQUEsSUFBS0YsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO1FBQ3RDSyxZQUFZLElBQU1KLFNBQVM7SUFDL0I7QUFDSjtHQVJNSDtBQVVOLE1BQU1RLE9BQU8sU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUN0QixNQUFNLEVBQUVGLFdBQVUsRUFBRSxHQUFHRyxNQUFNLEdBQUdWLGNBQWM7SUFFOUMsTUFBTVcsWUFBWSxDQUFDRCxPQUFTO1FBQ3hCRSxNQUFNLHVEQUF1RDtZQUN6REMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7WUFFQSx1Q0FBdUM7WUFDdkNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDakJDLFVBQVVSO2dCQUNWUyxNQUFNLEtBQUs7WUFDZjtRQUNKLEdBQ0tDLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ2hCLElBQUlDLFdBQVdELFNBQVNFLElBQUk7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ksR0FBRyxDQUFDO1FBQ3pCLDBEQUEwRDtRQUM5RDtJQUNSO0lBRUEscUJBQ0ksOERBQUNDO1FBQUtkLFFBQU87UUFBT0osVUFBVUosQ0FBQUEsSUFBSztZQUMvQkEsRUFBRXVCLGNBQWM7WUFDaEJuQixTQUFTQyxLQUFLUixLQUFLO1lBQ25CSztZQUNBSSxVQUFVRCxLQUFLUixLQUFLO1FBQ3hCO2tCQUVJLDRFQUFDMkI7WUFBSUMsT0FBTTtzQkFDUCw0RUFBQ0Q7Z0JBQUlDLE9BQU07O2tDQUNQLDhEQUFDRDt3QkFBSUMsT0FBTTtrQ0FDUCw0RUFBQ0M7NEJBQU1DLElBQUc7NEJBQVdGLE9BQU07NEJBQVFHLE1BQUs7NEJBQVEsR0FBR3ZCLElBQUk7NEJBQUV3QixhQUFZOzs7Ozs7Ozs7OztrQ0FFekUsOERBQUNMO3dCQUFJQyxPQUFNO2tDQUNQLDRFQUFDSzs0QkFBT0wsT0FBTTs0QkFBaUJHLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yRTtJQTlDTXpCOztRQUM4QlI7OztLQUQ5QlE7QUFnRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD8yOTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZUlucHV0VmFsdWUgPSBpbml0aWFsVmFsdWUgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvbkNoYW5nZTogZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSksXG4gICAgICAgIHJlc2V0VmFsdWU6ICgpID0+IHNldFZhbHVlKFwiXCIpXG4gICAgfTtcbn07XG5cbmNvbnN0IEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XG4gICAgY29uc3QgeyByZXNldFZhbHVlLCAuLi50ZXh0IH0gPSB1c2VJbnB1dFZhbHVlKFwiXCIpO1xuXG4gICAgY29uc3QgcG9zdEZldGNoID0gKHRleHQpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2JhY2tlbmQtMjZ0dy5hcGkuY29kZWhvb2tzLmlvL2Rldi90b2RvaXRlbXNcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1hcGlrZXknOiAnMzE1NjhlOTgtOTU5NS00ZjU4LWExNDctNTdlMThhZjAwMWM3JyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vbWFrZSBzdXJlIHRvIHNlcmlhbGl6ZSB5b3VyIEpTT04gYm9keVxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtOiB0ZXh0LFxuICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1KU09OID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1KU09OLmdldChcIl9pZFwiKSk7XG4gICAgICAgICAgICAgICAgLy9kbyBzb21ldGhpbmcgYXdlc29tZSB0aGF0IG1ha2VzIHRoZSB3b3JsZCBhIGJldHRlciBwbGFjZVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG9uU3VibWl0KHRleHQudmFsdWUpO1xuICAgICAgICAgICAgcmVzZXRWYWx1ZSgpO1xuICAgICAgICAgICAgcG9zdEZldGNoKHRleHQudmFsdWUpO1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIHsvKiBUaGUgaHRtbCBpbnB1dCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBpcy1leHBhbmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kby1hZGRcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiB7Li4udGV4dH0gcGxhY2Vob2xkZXI9XCJFbnRlciBJdGVtXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWluZm9cIiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUlucHV0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVzZXRWYWx1ZSIsIkZvcm0iLCJvblN1Ym1pdCIsInRleHQiLCJwb3N0RmV0Y2giLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvZG9JdGVtIiwiZG9uZSIsInRoZW4iLCJyZXNwb25zZSIsIml0ZW1KU09OIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzcyIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});