import { useEffect } from "react"
import { useData } from "../Context/DataProvider"

const Timer = () => {
  const { timeRemaining, dispatch } = useData()

  const min = Math.floor(timeRemaining / 60)
  const sec = timeRemaining % 60

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])
  return (
    <div className="timer">
      <span>
        {`${min}`.padStart(2, 0)}: {`${sec}`.padStart(2, 0)}
      </span>
    </div>
  )
}

export default Timer
