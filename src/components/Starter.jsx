import { useData } from "../Context/DataProvider"

const Starter = () => {
  const { dispatch, diffculty, length, questions } = useData()

  return (
    <div className="starter-cont">
      <img src="public/vite.svg" alt="" />
      <h1>React Fundamental Quiz</h1>
      <h2>Test your React Knowledege by taking this simple quiz</h2>
      <section className="rules-cont">
        <div className="rules">
          <h3>Rules</h3>
          <p>There will be X question to be completed with 30 minutes</p>
          <p>
            Entering exam room with mobile, smart watch and other realted are
            prohibted
          </p>
          <p>Cheating will disqualifes</p>
          <p>Using chat-gpt or related technology is not allowed</p>
        </div>
        <div className="luck">
          <p>Good Luck!</p>
        </div>
      </section>
      <section className="filter">
        <article>
          <label htmlFor="diffculty">Diffculty</label>
          <select
            value={diffculty}
            onChange={(e) =>
              dispatch({ type: "diffculty", payload: e.target.value })
            }
          >
            <option value="none">None</option>
            <option value="easy">Esay</option>
            <option value="intermidate">Intermidate</option>
            <option value="advanced">Advanced</option>
          </select>
        </article>
        <article>
          <label htmlFor="Number section">Number Section</label>
          <select
            value={length}
            onChange={(e) =>
              dispatch({ type: "length", payload: Number(e.target.value) })
            }
          >
            <option value={`${questions.length}`}>{questions.length}</option>
            <option value="7">7</option>
            <option value="11">11</option>
            <option value="15">15</option>
          </select>
        </article>
      </section>
      <button
        className="btn-start"
        onClick={() => dispatch({ type: "quiz/start" })}
      >
        Start the Exam
      </button>
    </div>
  )
}

export default Starter
