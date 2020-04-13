webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts */ "./components/posts.js");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post */ "./components/post.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var react_redux_lib_connect_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux/lib/connect/connect */ "./node_modules/react-redux/lib/connect/connect.js");
/* harmony import */ var react_redux_lib_connect_connect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_lib_connect_connect__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "E:\\postapp\\pages\\app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var App = function App(_ref) {
  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoginPage = _useState[0],
      setPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      postId = _useState2[0],
      setPostId = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(token, "token");
    var storage = window.localStorage;
    var activePostId = storage.getItem("postId");
    var accessToken = storage.getItem("token");

    if (!accessToken) {
      setPage(true);
    } else {
      if (activePostId !== "") {
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

    Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__["SET_TOKEN"])(token);

    window.localStorage.setItem("token", token);
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, drawPage());
};

var mapStateToProps = function mapStateToProps(store) {
  return function () {
    return {
      token: store.token
    };
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    SET_TOKEN: function SET_TOKEN(token) {
      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__["SET_TOKEN"])(token));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_redux_lib_connect_connect__WEBPACK_IMPORTED_MODULE_5___default()(mapStateToProps, mapDispatchToProps)(App));

/***/ })

})
//# sourceMappingURL=index.js.4d65492b8b86aef015b0.hot-update.js.map