import { useData } from "../Context/DataProvider"

const Finish = () => {
  const { dispatch, examPoints, maxPoints } = useData()

  const percentage = Math.round((examPoints / maxPoints) * 100)
  return (
    <div className="exam-wrapper">
      <img src="public/vite.svg" alt="" />
      <h1>React Fundamental Quiz</h1>

      <p className="finish-text">
        You scored <b> {examPoints}</b> out of 340 points ({`${percentage}`}%)
      </p>
      <button
        className="btn-restart"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  )
}

export default Finish
