import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { BiPlus } from 'react-icons/bi'
import Alert from '@material-ui/lab/Alert'
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../redux/todoDucks'

const InputBar = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const addItem = () => {
        dispatch(addTodoAction(value))
        setValue('')
    }

    return (
        <Grid container>
            <Grid item container
                direction='row'
                justify='space-around'
                alignItems='center'
                style={{ margin: 12 }}>

                <TextField
                    label="TODO"
                    fullWidth
                    value={value}
                    variant="outlined"
                    color='primary'
                    onChange={changeValue}
                />
                <Grid item style={{ marginTop: 5 }}>
                    {
                        value.length >= 6 && value.length <= 40 ?
                            <Button variant='contained' color='primary'
                                onClick={addItem}
                            ><BiPlus /></Button>
                            : <Button variant='contained' disabled color='primary'><BiPlus /></Button>
                    }
                </Grid>
            </Grid>
            <Grid item style={{ width: '100%', margin: 12 }}>
                <Alert severity='info'> Minimo 6 caracters - Maximo 40 caracteres | para buscar una terea minimo 6 caracteres</Alert>
            </Grid>
        </Grid>
    )
}

export default InputBar
