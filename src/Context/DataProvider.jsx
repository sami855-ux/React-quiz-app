import { createContext, useContext, useReducer } from "react"
import PropTypes from "prop-types"

import questionData from "../data/questions"

const DataContext = createContext()

const initialState = {
  questions: questionData,
  status: "ready",
  index: 15,
  answer: null,
  examPoints: 0,
  timeRemaining: 20,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "quiz/start":
      return {
        ...state,
        status: "active",
      }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      }
    case "setAnswer":
      if (action.payload === state.questions[state.index].correctOption) {
        return {
          ...state,
          answer: action.payload,
          examPoints: state.examPoints + state.questions[state.index].points,
        }
      }
      return {
        ...state,
        answer: action.payload,
      }
    case "tick":
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
      }
    case "finish":
      return {
        ...state,
        status: "finish",
      }
    default:
      throw new Error("unknown action is applied")
  }
}

const DataProvider = ({ children }) => {
  const [
    { questions, status, index, answer, examPoints, timeRemaining },
    dispatch,
  ] = useReducer(reducer, initialState)

  const numofQuestions = questions.length
  const maxPoints = questions.reduce((perv, curr) => perv + curr.points, 0)
  const currQuestion = questions[index]

  function handelNext() {
    dispatch({ type: "nextQuestion" })
  }

  const value = {
    dispatch,
    questions,
    status,
    numofQuestions,
    maxPoints,
    currQuestion,
    onNext: handelNext,
    answer,
    index,
    examPoints,
    timeRemaining,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

DataProvider.propTypes = {
  children: PropTypes.object,
}

function useData() {
  const useData = useContext(DataContext)

  return useData
}
export { DataProvider, useData }
