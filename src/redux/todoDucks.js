import { TODOS } from '../mock-data.json'

// consts
const dataInit = TODOS

const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS'

// reducer
export default function todoReducer(state = dataInit, action) {
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            return [...state, action.payload]
        case UPDATE_TODO_SUCCESS:
            return action.payload
        case DELETE_TODO_SUCCESS:
            return action.payload
        case COMPLETE_TODO_SUCCESS:
            return action.payload
        default:
            return state
    }
}


// actions

const changeTodo = (id, keyChange, valueChange) => {
    return dataInit.map(t => { // por aca esta el bug
        if (t['id'] === id) {
            t[keyChange] = valueChange
            return t
        }
        return t
    })
}

export const addTodoAction = (value) => (dispatch) => {
    const newEl = {
        "id": dataInit.length,
        "todoValue": value,
        "status": "sin completar"
    }

    dispatch({
        type: ADD_TODO_SUCCESS,
        payload: newEl
    })
}

export const updateTodoAction = (id, newValue) => (dispatch) => {
    dispatch({
        type: UPDATE_TODO_SUCCESS,
        payload: changeTodo(id, 'todoValue', newValue)
    })
}

export const completeTodoAction = (id) => (dispatch) => {
    dispatch({
        type: COMPLETE_TODO_SUCCESS,
        payload: changeTodo(id, 'status', 'completado')
    })
}

export const deleteTodoAction = (id) => (dispatch) => {

    dispatch({
        type: DELETE_TODO_SUCCESS,
        payload: changeTodo(id, 'status', 'eliminado')
    })
}

