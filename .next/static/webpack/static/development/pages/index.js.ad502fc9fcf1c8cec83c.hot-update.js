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

    if (!token) {
      setPage(true);
    } else {
      if (activePostId) {
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
          lineNumber: 48,
          columnNumber: 17
        }
      });
    } else if (postId === "") {
      return __jsx(_components_posts__WEBPACK_IMPORTED_MODULE_2__["default"], {
        handlePostOpen: handlePostOpen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
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
          lineNumber: 56,
          columnNumber: 17
        }
      });
    }
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, drawPage());
}

/***/ }),

/***/ "./components/posts.js":
/*!*****************************!*\
  !*** ./components/posts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\postapp\\components\\posts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function PostList(_ref) {
  var _this = this;

  var handlePostOpen = _ref.handlePostOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (function _callee() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://jsonplaceholder.typicode.com/posts"));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 5:
              data = _context.sent;
              window.localStorage.setItem("posts", JSON.stringify(data));
              setPosts(data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    })()["catch"](function (error) {
      return console.log(error);
    });
  }, []);

  var handlePostClick = function handlePostClick(event) {
    var id = event.currentTarget.getAttribute("data-id");
    handlePostOpen(id);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Posts Page"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, posts.length !== 0 && posts.map(function (element) {
    return __jsx("li", {
      key: element.id,
      onClick: handlePostClick,
      "data-id": element.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 33
      }
    }, "User: ", element.userId), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    }, "Post Title: ", element.title), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 33
      }
    }, "Post Body: ", element.body));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=index.js.ad502fc9fcf1c8cec83c.hot-update.js.map