import { createContext, useContext, useReducer } from "react"
import PropTypes from "prop-types"

import questionData from "../data/questions"

const DataContext = createContext()

const initialState = {
  questions: questionData,
  status: "ready",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "quiz/start":
      return {
        ...state,
        status: "active",
      }
    default:
      throw new Error("unknown action is applied")
  }
}

const DataProvider = ({ children }) => {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState)

  const value = {
    dispatch,
    questions,
    status,
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
