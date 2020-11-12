import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import { statusValues } from '../../mock-data.json'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import FilterTodo from '../FilterTodo'

const renderTodoItem = ({ id, todoValue, status }, filter, updateItem) => {
    if (status === filter) {
        return (

            <ListItem key={id}>
                <Grid container
                    justify='space-around'
                    alignItems='center'>

                    <TodoItem id={id}
                        todoValue={todoValue}
                        status={filter}
                        updateItem={updateItem} />
                </Grid>

            </ListItem>
        )
    }

}

const TodoItemList = ({ todoArr, updateItem }) => {
    const [stateFilter, setStateFilter] = useState(statusValues['state1'])

    const onCahenge = (e) => {
        setStateFilter(e.target.value)
    }
    const countTodo = {
        sinCompletar: todoArr.filter(item => item.status === statusValues['state1']).length,
        completos: todoArr.filter(item => item.status === statusValues['state2']).length,
        eliminados: todoArr.filter(item => item.status === statusValues['state3']).length,
    }
    return (

        <List >
            <Grid container
                justify='space-around'
                alignItems='center'>
                <FilterTodo selectedValue={stateFilter} handleChange={onCahenge} countTodo={countTodo} />
            </Grid>

            {
                todoArr.map(todo => renderTodoItem(todo, stateFilter, updateItem))
            }
        </List>


    )
}

TodoItemList.propTypes = {
    todoArr: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        todoValue: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    })).isRequired,
    updateItem: PropTypes.func.isRequired,
}

export default TodoItemList
