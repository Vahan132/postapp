webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\postapp\\components\\post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var postStyle = {
  display: "flex",
  flexDirection: "column"
};
function Post(_ref) {
  var _this = this;

  var handlePostListOpen = _ref.handlePostListOpen,
      id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      post = _useState[0],
      setPost = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var storage = window.localStorage;
    var postsJson = storage.getItem("posts");
    var posts = JSON.parse(postsJson);
    var currentPost = posts.find(function (post) {
      return post.id === +id;
    });

    if (!currentPost.comments) {
      (function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://jsonplaceholder.typicode.com/posts/".concat(id, "/comments")));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

              case 5:
                currentPost.comments = _context.sent;
                window.localStorage.setItem("posts", JSON.stringify(posts));
                setPost(currentPost);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, null, Promise);
      })()["catch"](function (error) {
        return console.log(error);
      });
    } else {
      setPost(post);
    }
  }, []);

  var handleBackClick = function handleBackClick() {
    handlePostListOpen();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, post ? __jsx("div", {
    style: postStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 24
    }
  }, __jsx("button", {
    onClick: handleBackClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Back to posts page"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, " User: ", post.userId), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Post Title: ", post.title), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Post Body: ", post.body), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, post.comments && post.comments.map(function (comment) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 37
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 41
      }
    }, "Username: ", comment.name), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 41
      }
    }, comment.body));
  }))) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "Loading..."));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
var _jsxFileName = "E:\\postapp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Index() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoginPage = _useState[0],
      setPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      postId = _useState2[0],
      setPostId = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var storage = window.localStorage;
    var activePostId = storage.getItem("postId");
    var token = storage.getItem("token");

    if (!token) {
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
          lineNumber: 45,
          columnNumber: 17
        }
      });
    } else if (postId === "") {
      return __jsx(_components_posts__WEBPACK_IMPORTED_MODULE_2__["default"], {
        handlePostOpen: handlePostOpen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
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
          lineNumber: 53,
          columnNumber: 17
        }
      });
    }
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, drawPage());
}

/***/ })

})
//# sourceMappingURL=index.js.804d08cb989699088dcf.hot-update.js.map