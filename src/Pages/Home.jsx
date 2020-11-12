import React, { useState, useEffect } from 'react'
import { TODOS } from '../mock-data.json'
import InputBar from '../components/InputBar'
import TodoItemlist from '../components/TodoItemList'
import Paper from '@material-ui/core/Paper'
import { Container, Grid } from '@material-ui/core'

const Home = () => {
    const [items, setItems] = useState(TODOS)
    const [value, setValue] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const results = items.filter(item => {
            item.todoValue.toLowerCase().includes(value.toLowerCase())
        })

        setSearchResults(results)
        console.log(searchResults)
    }, [value])

    // funcion para hacer modificaciones en un TODO
    const updateItem = (id, keyChange, valueChange) => {
        const todos = items.map(t => {
            if (t['id'] === id) {
                t[keyChange] = valueChange
                return t
            }
            return t
        })
        setItems(todos)
    }

    const funcAdd = () => {
        const newEl = {
            "id": items.length,
            "todoValue": value,
            "status": "sin completar"
        }
        setItems([...items, newEl])
        setValue('')
    }

    return (
        <div className='full'>

            <Container maxWidth='md' style={{marginTop: 30}}>
                <Paper elevation={3}>
                    <InputBar addTodoItem={funcAdd} value={value} handleChange={changeValue} />
                    <TodoItemlist todoArr={items}
                        updateItem={updateItem}
                    />
                </Paper>
            </Container>
        </div >
    )
}

export default Home
