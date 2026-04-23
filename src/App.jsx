import './App.css'
/* component */
import Menu from "./component/menu" 
import Banner from "./component/banner"
import Interview_suisei from './component/interview_suisei.jsx'
import Contact_suisei from './component/contact_suisei.jsx'
import Single_suisei from './component/single_suisei.jsx'

function App() {
  return(
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <Banner />
        <Interview_suisei />
        <Contact_suisei />
        <Single_suisei />
      </main>
    </div>
  )
}
export default App
