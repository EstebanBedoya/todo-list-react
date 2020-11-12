import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { green, red, blue } from '@material-ui/core/colors'
import { AiFillDelete, AiOutlineEdit, AiFillSave, AiOutlineCheck } from 'react-icons/ai'

const TodoOptions = ({ isEdit, isEditFunc, saveEdit, deleteItem, complete }) => {

    return (
        <>
            <Button variant='contained' style={{ backgroundColor: green[600] }} onClick={complete} >
                <AiOutlineCheck />
            </Button>
            {
                !isEdit ?
                    <Button variant='contained'  style={{ backgroundColor: blue[600] }} onClick={isEditFunc} >
                        <AiOutlineEdit />
                    </Button> :
                    <Button variant='contained'  style={{ backgroundColor: blue[600] }} onClick={saveEdit} >
                        <AiFillSave />
                    </Button>

            }
            <Button variant='contained'  style={{ backgroundColor: red[600] }} onClick={deleteItem} >
                <AiFillDelete />
            </Button>
        </>
    )
}

TodoOptions.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    isEditFunc: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    complete: PropTypes.func.isRequired

}

export default TodoOptions
