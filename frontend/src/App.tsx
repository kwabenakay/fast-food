import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import { addTodo } from './redux/slice'

function App() {
  const {todo} = useSelector((state:any)=>state)
  const dispatch = useDispatch()
  return (
    <>
      
    </>
  )
}

export default App
