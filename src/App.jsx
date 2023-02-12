import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import users from "./users.json"
import colors from "./colors.json"
import QuoteBox from './QuoteBox'

function App() {
  const [count, setCount] = useState(0)
  // console.log(users)
  // console.log(colors)
  return (
    // className="App" style={{background: "whitesmoke"}}
    <div >
      <QuoteBox/>
    </div>
  )
}

export default App
