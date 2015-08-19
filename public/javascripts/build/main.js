/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2)
	module.exports.template = __webpack_require__(3)


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    el: '#app',
	    data: {
	      view: '',
	      currentUser: {},
	      showLogin: false,
	      year: new Date().getFullYear(),
	      messages: [],
	      params: {}
	    },
	    methods: {
	      logout: function() {
	        __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./api\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).user.logout();
	      }
	    },
	    components: {
	      'home': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./home.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'cafe': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./cafe.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'topic': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./topic.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'user': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./user.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'cafe-list': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./cafe-list.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'user-list': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./user-list.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'overlay': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/overlay.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'user-avatar': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/user-avatar.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      'login-form': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/login-form.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	    }
	  }

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"top-nav\">\n    <div class=\"container\">\n      <div class=\"site-nav clearfix\">\n        <a class=\"site-logo\" href=\"/\">\n          <div class=\"logo\" v-if=\"!$site.logo\">\n            <div><span class=\"left-yellow\"></span><span class=\"right-green\"></span></div>\n            <div><span class=\"full-green\"></span></div>\n            <div><span class=\"left-green\"></span><span class=\"right-red\"></span></div>\n          </div>\n        </a>\n        <nav>\n          <a href=\"{{url}}\" v-repeat=\"$site.links\" v-text=\"name\"></a>\n        </nav>\n      </div>\n\n      <div class=\"site-account\">\n        <div class=\"site-account-inner\" v-if=\"!currentUser.username\">\n          <button v-on=\"click: showLogin=true\">Log in</button>\n        </div>\n        <div class=\"site-account-inner\" v-if=\"currentUser.username\">\n          <button class=\"circle\" v-on=\"click: logout\">Logout</button>\n          <user-avatar user=\"{{currentUser}}\" class=\"tip\"></user-avatar>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <component is=\"{{view}}\"\n    params=\"{{params}}\"\n    v-transition\n    transition-mode=\"out-in\">\n  </component>\n\n  <div class=\"footer\">\n    <div class=\"container\">\n      <div style=\"float: left\">Copyright &copy; {{year}} {{$site.name}}</div>\n      <div style=\"float: right\">\n        <a href=\"https://github.com/zerqu\">ZERQU</a> •\n        <a href=\"https://github.com/zerqu/qingcheng\">青城</a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"message\" aria-live=\"assertive\">\n    <div class=\"message message-{{type}}\" v-repeat=\"messages\" v-text=\"text\" v-transition=\"fade\"></div>\n  </div>\n  <overlay v-if=\"showLogin\" v-transition=\"fade\" show=\"{{@ showLogin }}\">\n    <login-form></login-form>\n  </overlay>";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map