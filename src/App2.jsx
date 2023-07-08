import './App.css'
import { useState } from "react"
import MousePosHoc from "./MousePosHoc";

const MousePanel = ({ mousePosition }) => {
  return <div>
    <p>
      {mousePosition.x}, {mousePosition.y}
    </p>
  </div>

}

const MousePoint = ({ mousePosition }) => {
  return <div>
    <p>{mousePosition.x}, {mousePosition.y}, hehehehe</p>
  </div>
}

const HOCMousePanel = () => MousePosHoc(MousePanel)
const HOCMousePoint = () => MousePosHoc(MousePoint)

const App2 = () => {
  const [items, setItems] = useState([
    { id: 1, value: '100' },
    { id: 2, value: '20' },
    { id: 3, value: '50' },
    { id: 4, value: '77' },
    { id: 5, value: '0' }])
  const sortItemsById = () => {
    setItems(prev => [...prev].sort((a, b) => a.id - b.id))
  }

  const sortItemsByValue = () => {
    setItems(prev => [...prev].sort((a, b) => a.value - b.value))
  }

  return (
    <div style={{
      borderStyle: 'solid',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <p>test</p>
      <HOCMousePanel/>
      <HOCMousePoint/>
      <input type={'text'}/>
      <button onClick={(event) => {
        sortItemsById()
      }}>Sort by Id
      </button>
      <button onClick={(event) => {
        sortItemsByValue()
      }}>Sort by Value
      </button>
      {items.map(item => <li key={item.id}>id: {item.id} value:{item.value}</li>)}
    </div>
  )

}

export default App2
