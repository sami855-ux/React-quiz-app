import { useData } from "../Context/DataProvider"

const Starter = () => {
  const { dispatch } = useData()

  return (
    <div className="starter-cont">
      <img src="public/vite.svg" alt="" />
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
