import { useEffect, useState } from "react";

const MousePosHoc = (WrappedComponent) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0, y: 0
  })
  useEffect(() => {
    const handleMouseChange = (e) => {
      setMousePosition({
        x: e.clientX, y: e.clientY
      })
    }

    window.addEventListener("mousemove", handleMouseChange)
    return () => {
      window.removeEventListener("mousemove", handleMouseChange)
    }
  }, [])
  return <WrappedComponent mousePosition={mousePosition}/>
}

export default MousePosHoc