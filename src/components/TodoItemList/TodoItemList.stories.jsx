import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import TodoItemList from './TodoItemList'
import { TODOS } from '../../mock-data.json'

export default {
    title: 'TodoItemList',
    component: TodoItemList
}

export const TodoItemListExample = () => <TodoItemList todoArr={TODOS} />