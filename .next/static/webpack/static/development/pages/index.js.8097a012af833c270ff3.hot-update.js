webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts */ "./components/posts.js");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post */ "./components/post.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "E:\\postapp\\components\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index(token) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoginPage = _useState[0],
      setPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      postId = _useState2[0],
      setPostId = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var storage = window.localStorage;
    var activePostId = storage.getItem("postId");
    var token = storage.getItem("token");
    debugger;

    if (!token) {
      setPage(true);
    } else {
      if (!activePostId) {
        setPostId(activePostId);
        setPage(false);
      } else {
        setPage(false);
      }
    }
  }, []);

  var handlePostOpen = function handlePostOpen(id) {
    setPostId(id);
    window.localStorage.setItem("postId", id);
  };

  var handlePostListOpen = function handlePostListOpen() {
    setPostId("");
    window.localStorage.setItem("postId", "");
  };

  var handleSignIn = function handleSignIn(password) {
    var token = btoa(password);
    window.localStorage.setItem("token", token);
    dispatch({
      type: "SET_TOKEN",
      token: token
    });
    setPage(false);
  };

  var drawPage = function drawPage() {
    if (isLoginPage) {
      return __jsx(_components_login__WEBPACK_IMPORTED_MODULE_1__["default"], {
        handleSignIn: handleSignIn,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      });
    } else if (postId === "") {
      return __jsx(_components_posts__WEBPACK_IMPORTED_MODULE_2__["default"], {
        handlePostOpen: handlePostOpen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      });
    } else {
      return __jsx(_components_post__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handlePostListOpen: handlePostListOpen,
        id: postId,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      });
    }
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, drawPage());
}

/***/ })

})
//# sourceMappingURL=index.js.8097a012af833c270ff3.hot-update.js.map