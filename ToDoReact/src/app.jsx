import { useState } from 'preact/hooks'

import './app.css'

export function App() {
  const [text, setText] = useState("")
  const handleInput = (e) => {
    let inputText = e.target.value
    setText(inputText)
  }

  return (
    <>
      <div>
        <p>{text}</p>
        <input value={text} onChange={handleInput}></input>
      </div>
    </>
  )
}
