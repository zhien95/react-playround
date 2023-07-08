import DraggableHoc from "./DraggableHoc";
import { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <DraggableHoc>
        <h1>Home Page {count}</h1>
      </DraggableHoc>
    </div>
  )
}

export default Home