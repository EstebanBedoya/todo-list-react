import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { statusValues } from '../../mock-data.json'
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import CountTodo from '../CountTodo'

const FilterTodo = ({ selectedValue, handleChange, countTodo }) => {


    return (

        <FormControl component="fieldset">
            <RadioGroup row aria-label="position"
                name="position"
                value={selectedValue}
                onChange={handleChange}
                defaultValue={statusValues['state1']}>

                <CountTodo title='Tareas sin completar' counter={countTodo['sinCompletar']}>
                    <FormControlLabel
                        value={statusValues['state1']}
                        control={<Radio color="primary" />}
                        label="sin completar"
                    />
                </CountTodo>


                <CountTodo title='Tareas completadas' counter={countTodo['completos']}>
                    <FormControlLabel
                        value={statusValues['state2']}
                        control={<Radio color="primary" />}
                        label="completados"
                    />
                </CountTodo>

                <CountTodo title='Tareas eliminadas' counter={countTodo['eliminados']}>
                    <FormControlLabel
                        value={statusValues['state3']}
                        control={<Radio color="primary" />}
                        label="eliminados"

                    />
                </CountTodo>

            </RadioGroup>
        </FormControl >

    )
}

FilterTodo.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    countTodo: PropTypes.objectOf(PropTypes.shape({
        sinCompletar: PropTypes.number.isRequired,
        completos: PropTypes.number.isRequired,
        eliminados: PropTypes.number.isRequired,
    }),).isRequired,

}

export default FilterTodo
