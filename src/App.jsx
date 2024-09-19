import { useData } from "./Context/DataProvider"
import Exam from "./components/Exam"
import Starter from "./components/Starter"

const App = () => {
  const { status } = useData()
  return (
    <div className="main-wrapper">
      {status === "ready" && <Starter />}
      {status === "active" && <Exam />}
      {status === "finish" && <p>Samuel Tale</p>}
    </div>
  )
}

export default App
