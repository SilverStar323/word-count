import { useState } from "react"

export const Counter = () => {
  const [strText, setStrText] = useState("");

  return (
    <section className="counter">
      <textarea
        name="text"
        placeholder="Type or paste your text"
        value={strText}
        onChange={e => setStrText(e.target.value)}/>
      <button
        className="clear"
        disabled={!strText}
        onClick={() => setStrText("")}>
          Clear
      </button>
      <div className="result">
        <span>Character: {strText.length}</span>
        <span>Word: {strText ? strText.trim().split(/\s+/).length : 0}</span>
      </div>
    </section>
  )
}