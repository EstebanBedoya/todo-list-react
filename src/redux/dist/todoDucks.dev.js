"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = todoReducer;
exports.deleteTodoAction = exports.completeTodoAction = exports.updateTodoAction = exports.addTodoAction = void 0;

var _mockData = require("../mock-data.json");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var dataInit = _mockData.TODOS;
var ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
var UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
var DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
var COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS'; // reducer

function todoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dataInit;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return [].concat(_toConsumableArray(state), [action.payload]);

    case UPDATE_TODO_SUCCESS:
      return action.payload;

    case DELETE_TODO_SUCCESS:
      return action.payload;

    case COMPLETE_TODO_SUCCESS:
      return action.payload;

    default:
      return state;
  }
} // actions


var changeTodo = function changeTodo(id, keyChange, valueChange) {
  return dataInit.map(function (t) {
    // por aca esta el bug
    if (t['id'] === id) {
      t[keyChange] = valueChange;
      return t;
    }

    return t;
  });
};

var addTodoAction = function addTodoAction(value) {
  return function (dispatch) {
    var newEl = {
      "id": dataInit.length,
      "todoValue": value,
      "status": "sin completar"
    };
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: newEl
    });
  };
};

exports.addTodoAction = addTodoAction;

var updateTodoAction = function updateTodoAction(id, newValue) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_TODO_SUCCESS,
      payload: changeTodo(id, 'todoValue', newValue)
    });
  };
};

exports.updateTodoAction = updateTodoAction;

var completeTodoAction = function completeTodoAction(id) {
  return function (dispatch) {
    dispatch({
      type: COMPLETE_TODO_SUCCESS,
      payload: changeTodo(id, 'status', 'completado')
    });
  };
};

exports.completeTodoAction = completeTodoAction;

var deleteTodoAction = function deleteTodoAction(id) {
  return function (dispatch) {
    dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: changeTodo(id, 'status', 'eliminado')
    });
  };
};

exports.deleteTodoAction = deleteTodoAction;