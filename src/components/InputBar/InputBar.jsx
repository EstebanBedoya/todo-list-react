import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { BiPlus } from 'react-icons/bi'
import Alert from '@material-ui/lab/Alert'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
});

const InputBar = ({ addTodoItem, handleChange, value }) => {
    const classes = useStyles()

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
                    onChange={handleChange}
                />
                <Grid item style={{marginTop: 5}}>
                    {
                        value.length >= 6 && value.length <= 40 ?
                            <Button variant='contained' color='primary'
                                onClick={addTodoItem}
                            ><BiPlus /></Button>
                            : <Button variant='contained' disabled color='primary'><BiPlus /></Button>
                    }
                </Grid>

            </Grid>

            <Grid item style={{ width: '100%', margin: 12 }}>
                <Alert severity='info'> Minimo 6 caracters - Maximo 40 caracteres </Alert>
            </Grid>
        </Grid>
    )
}

InputBar.propTypes = {
    addTodoItem: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,

}

export default InputBar
