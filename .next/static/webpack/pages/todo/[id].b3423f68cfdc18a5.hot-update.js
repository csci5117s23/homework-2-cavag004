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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TodoItem */ \"./components/TodoItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router.query);\n    const todoItem = \"\";\n    const done = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var request = new Request(\"https://backend-26tw.api.codehooks.io/dev/todoitems/\" + router.query, {\n            method: \"get\",\n            headers: new Headers({\n                \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            })\n        });\n        fetch(\"https://backend-26tw.api.codehooks.io/dev/todoitems/\", {\n            method: \"get\",\n            headers: {\n                \"x-apikey\": \"31568e98-9595-4f58-a147-57e18af001c7\",\n                \"Accept\": \"application/json\",\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    //Runs on every render\n    });\n    const toggleComplete = (i1)=>{\n        setTodos(todos.map((todo, k)=>k === i1 ? {\n                ...todo,\n                complete: !todo.complete\n            } : todo));\n    };\n    const todo = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        class: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box mt-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: text,\n                complete: complete,\n                onClick: ()=>toggleComplete(i)\n            }, void 0, false, {\n                fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lpcav/Documents/csci5117/homework-2-cavag004/pages/todo/[id].js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n    return withTodos;\n}\n_s(Todos, \"/4U9Nw414wdNPFyacvT9TkTu07I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2RvL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBQ007QUFDUztBQUVsQyxTQUFTSSxRQUFROztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNTyxTQUFTTCxzREFBU0E7SUFDeEJNLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csS0FBSztJQUN4QixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLE9BQU8sS0FBSztJQUdsQlgsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlZLFVBQVUsSUFBSUMsUUFBUSx5REFBeURQLE9BQU9HLEtBQUssRUFBRTtZQUM3RkssUUFBUTtZQUNSQyxTQUFTLElBQUlDLFFBQVE7Z0JBQ2pCLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7UUFDSjtRQUNBQyxNQUFNLHdEQUF3RDtZQUMxREgsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7UUFDSjtJQUNBLHNCQUFzQjtJQUMxQjtJQUVBLE1BQU1HLGlCQUFpQixDQUFDQyxLQUFNO1FBQzFCZCxTQUFTRCxNQUFNZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU1BLE1BQU1ILEtBQUk7Z0JBQ3RDLEdBQUdFLElBQUk7Z0JBQ1BFLFVBQVUsQ0FBQ0YsS0FBS0UsUUFBUTtZQUM1QixJQUFJRixJQUFJO0lBQ1o7SUFFQSxNQUFNQSxxQkFDRiw4REFBQ0c7UUFBUUMsT0FBTTtrQkFDWCw0RUFBQ0M7WUFBSUQsT0FBTTtzQkFDUCw0RUFBQ3ZCLDREQUFRQTtnQkFBQ3lCLE1BQU1BO2dCQUFNSixVQUFVQTtnQkFDNUJLLFNBQVMsSUFBTVYsZUFBZUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNOUMsT0FBUVU7QUFDWixDQUFDO0dBOUN1QjFCOztRQUVMRixrREFBU0E7OztLQUZKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2RvL1tpZF0uanM/Yzc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RvZG9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb3MoKSB7XG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuICAgIGNvbnN0IHRvZG9JdGVtID0gXCJcIjtcbiAgICBjb25zdCBkb25lID0gZmFsc2U7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXCJodHRwczovL2JhY2tlbmQtMjZ0dy5hcGkuY29kZWhvb2tzLmlvL2Rldi90b2RvaXRlbXMvXCIgKyByb3V0ZXIucXVlcnksIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ3gtYXBpa2V5JzogJzMxNTY4ZTk4LTk1OTUtNGY1OC1hMTQ3LTU3ZTE4YWYwMDFjNycsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2JhY2tlbmQtMjZ0dy5hcGkuY29kZWhvb2tzLmlvL2Rldi90b2RvaXRlbXMvXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1hcGlrZXknOiAnMzE1NjhlOTgtOTU5NS00ZjU4LWExNDctNTdlMThhZjAwMWM3JyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy9SdW5zIG9uIGV2ZXJ5IHJlbmRlclxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUb2Rvcyh0b2Rvcy5tYXAoKHRvZG8sIGspID0+IGsgPT09IGkgPyB7XG4gICAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgICAgY29tcGxldGU6ICF0b2RvLmNvbXBsZXRlXG4gICAgICAgIH0gOiB0b2RvKSlcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvID0gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggbXQtNVwiPlxuICAgICAgICAgICAgICAgIDxUb2RvSXRlbSB0ZXh0PXt0ZXh0fSBjb21wbGV0ZT17Y29tcGxldGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbXBsZXRlKGkpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG5cbiAgICByZXR1cm4gKHdpdGhUb2Rvcyk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiVG9kb0l0ZW0iLCJUb2RvcyIsInRvZG9zIiwic2V0VG9kb3MiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ0b2RvSXRlbSIsImRvbmUiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiZmV0Y2giLCJ0b2dnbGVDb21wbGV0ZSIsImkiLCJtYXAiLCJ0b2RvIiwiayIsImNvbXBsZXRlIiwic2VjdGlvbiIsImNsYXNzIiwiZGl2IiwidGV4dCIsIm9uQ2xpY2siLCJ3aXRoVG9kb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo/[id].js\n"));

/***/ })

});