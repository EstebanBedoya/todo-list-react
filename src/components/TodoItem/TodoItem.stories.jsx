import React from 'react'
import TodoItem from './TodoItem'

export default {
    title: 'TodoItem',
    component: TodoItem
}

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus corporis vitae!'

export const TodoItemExample = () => <TodoItem textValue={text} status='sin completar' />