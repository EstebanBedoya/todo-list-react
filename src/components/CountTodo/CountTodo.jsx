import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Badge } from '@material-ui/core'

const CountTodo = ({ children, title, counter }) => {
    return (
        <Tooltip title={`${title} - ${counter}`} arrow placement="top-start">
            <Badge badgeContent={counter} color='primary' anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}>
                {children}
            </Badge>
        </Tooltip>
    )
}

CountTodo.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
}

export default CountTodo
