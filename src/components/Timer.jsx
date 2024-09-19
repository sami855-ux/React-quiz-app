import { useEffect } from "react"
import { useData } from "../Context/DataProvider"

const Timer = () => {
  const { timeRemaining, dispatch } = useData()

  if (timeRemaining === 0) {
    dispatch({ type: "finish" })
  }
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])
  return (
    <div className="timer">
      <span>{timeRemaining}</span>
    </div>
  )
}

export default Timer
