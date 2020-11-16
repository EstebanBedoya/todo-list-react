"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateStore;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _todoDucks = _interopRequireDefault(require("./todoDucks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  todos: _todoDucks["default"]
});
var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

function generateStore() {
  var store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));
  return store;
}