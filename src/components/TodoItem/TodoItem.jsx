import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { statusValues } from '../../mock-data.json';
import TodoOptions from '../TodoOptions'
import TextField from '@material-ui/core/TextField'

const TodoItem = ({ id, todoValue, status, updateItem }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [valueItem, setValueItem] = useState(todoValue)

    const changeValueItem = (event) => {
        setValueItem(event.target.value)
    }

    const saveEdit = () => {
        updateItem(id, 'todoValue', valueItem)
        setIsEdit(false)
    }

    const deleteItem = () => {
        updateItem(id, 'status', statusValues['state3'])
    }

    const completeTodo = () => {
        updateItem(id, 'status', statusValues['state2'])
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
    todoValue: PropTypes.string.isRequired,
    updateItem: PropTypes.func.isRequired,
}

export default TodoItem
