import React from 'react'
import InputBar from '../components/InputBar'
import TodoItemlist from '../components/TodoItemList'
import Paper from '@material-ui/core/Paper'
import { Container} from '@material-ui/core'
import { Provider } from 'react-redux'
import generateStore from '../redux/store'

const Home = () => {
    // const [searchResults, setSearchResults] = useState([])
    // const [arrayToRender, setArrayToRender] = useState(items)
    // useEffect(() => {
    //     const results = items.filter(item =>
    //         value.length >= 3 && item.todoValue.toLowerCase().includes(value.toLowerCase())
    //     )

    //     value != '' ? setSearchResults(results) : setSearchResults([])

    //     results.length != 0 ? setArrayToRender(searchResults) : setArrayToRender(items)
    // }, [value])

    const store = generateStore()

    return (  
    <Provider store={store}>
        <div className='full'>
            <Container maxWidth='md' style={{ marginTop: 30 }}>
                <Paper elevation={3}>
                    <InputBar />
                    <TodoItemlist/>
                </Paper>
            </Container>
        </div >
    </Provider>

    )
}

export default Home
