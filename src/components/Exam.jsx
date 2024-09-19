import { useData } from "../Context/DataProvider"
import Timer from "./Timer"

const Exam = () => {
  const {
    numofQuestions,
    maxPoints,
    currQuestion,
    onNext,
    answer,
    index,
    examPoints,
    dispatch,
    questions,
  } = useData()

  const isClicked = answer === null
  return (
    <div className="exam-wrapper">
      <img src="public/vite.svg" alt="" />
      <h1>React Fundamental Quiz</h1>

      <div className="exam">
        <div className="status">
          <progress max={17} value={index} />
          <section className="stastics">
            <span>
              Question <strong>{index + 1}</strong> / {numofQuestions}
            </span>
            <span>
              <strong>{examPoints}</strong>/{maxPoints} points
            </span>
          </section>
        </div>
        <div className="question">
          {currQuestion ? (
            <>
              <p>{currQuestion.question}</p>
              <section className="options">
                {currQuestion.options.map((option, optionIndex) => (
                  <button
                    className={`option ${
                      isClicked ? "" : answer === optionIndex ? "cliked" : ""
                    } 
                    ${
                      isClicked
                        ? ""
                        : optionIndex === currQuestion.correctOption
                        ? "correct"
                        : "wrong"
                    }`}
                    key={optionIndex}
                    onClick={() =>
                      dispatch({ type: "setAnswer", payload: optionIndex })
                    }
                    disabled={!isClicked}
                  >
                    {option}
                  </button>
                ))}
              </section>
            </>
          ) : null}
        </div>
        <footer>
          <Timer />
          <div className="next">
            {isClicked ? null : index < questions.length - 1 ? (
              <button className="btn-next" onClick={onNext}>
                Next
              </button>
            ) : (
              <button
                className="btn-next"
                onClick={() => dispatch({ type: "finish" })}
              >
                Finish
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Exam
