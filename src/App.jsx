import './App.css'
/* component */
import Menu from "./component/menu" 
import Banner from "./component/banner"
import Interview_suisei from './component/interview_suisei.jsx'
import Single_suisei from './component/single_suisei.jsx'

function App() {
  return(
    <div>
      <Menu />
      <Banner />
      <Interview_suisei />
      <Single_suisei />
    </div>
  )
}
export default App
