import { useState } from "react"

const App = () => {
  const [value, setValue] = useState()
  return <input type={'text'} value={value} onChange={(e) => {
    console.log(e)
    setValue(e.target.value)
  }}/>
}

export default App