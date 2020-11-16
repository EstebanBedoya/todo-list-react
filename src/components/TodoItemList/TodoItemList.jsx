import React, { useState } from 'react'
import TodoItem from '../TodoItem'
import { statusValues } from '../../mock-data.json'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import FilterTodo from '../FilterTodo'
import { useDispatch, useSelector } from 'react-redux'

const renderTodoItem = ({ id, todoValue, status }, filter) => {
    if (status === filter) {
        return (
            <ListItem key={id}>
                <Grid container
                    justify='space-around'
                    alignItems='center'>

                    <TodoItem id={id}
                        todoValue={todoValue}
                        status={filter} />
                </Grid>
            </ListItem>
        )
    }
}

const TodoItemList = () => {

    const todos = useSelector(state => state.todos)

    const [stateFilter, setStateFilter] = useState(statusValues['state1'])

    const onCahenge = (e) => {
        setStateFilter(e.target.value)
    }
    const countTodo = {
        sinCompletar: todos.filter(item => item.status === statusValues['state1']).length,
        completos: todos.filter(item => item.status === statusValues['state2']).length,
        eliminados: todos.filter(item => item.status === statusValues['state3']).length,
    }
    return (
        <List>
            <Grid container
                justify='space-around'
                alignItems='center'>
                <FilterTodo selectedValue={stateFilter} handleChange={onCahenge} countTodo={countTodo} />
            </Grid>
            {
                todos.map(todo => renderTodoItem(todo, stateFilter))
            }
        </List>
    )
}

export default TodoItemList
