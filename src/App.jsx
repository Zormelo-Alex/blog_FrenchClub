import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://htu.edu.gh/" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZNyjjMkW-S6p5fNu1XY2uWWmc8gKhuMCqNrZJPtdivOULcS1wlYiUWfepj8wYqFMaCw&usqp=CAU" className="logo" />
        </a>
      </div>
      <h1>Coming soon</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p onClick={() => setCount((count) => count + 1)}>
          click me😏
        </p>
      </div>
    </>
  )
}

export default App
