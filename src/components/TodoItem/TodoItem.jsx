import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    deleteTodoAction,
    completeTodoAction,
    updateTodoAction
} from '../../redux/todoDucks'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TodoOptions from '../TodoOptions'
import TextField from '@material-ui/core/TextField'

const TodoItem = ({ id, todoValue, status }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [valueItem, setValueItem] = useState(todoValue)

    const dispatch = useDispatch()

    const changeValueItem = (event) => {
        setValueItem(event.target.value)
    }

    const saveEdit = () => {
        dispatch(updateTodoAction(id, valueItem))
        setIsEdit(false)
    }

    const deleteItem = () => {
        dispatch(deleteTodoAction(id))
    }

    const completeTodo = () => {
        dispatch(completeTodoAction(id))
    }
    return (
        <Grid container item

            direction='row'
            justify='space-around'

        >
            <Grid item xs={8}>
                {
                    !isEdit ?
                        <Typography variant='h6'>
                            {valueItem}
                        </Typography> :
                        <TextField id="standard-basic"
                            fullWidth
                            label={id}
                            defaultValue={valueItem}
                            onChange={changeValueItem} />
                }
            </Grid>
            <Grid item>
                {
                    status == 'sin completar' &&
                    <TodoOptions
                        isEdit={isEdit}
                        isEditFunc={() => setIsEdit(true)}
                        saveEdit={saveEdit}
                        deleteItem={deleteItem}
                        complete={completeTodo} />
                }
            </Grid>

        </Grid>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    todoValue: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
}

export default TodoItem
