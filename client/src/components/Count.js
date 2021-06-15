import { useState } from "react";
import { API_URL } from '../App'

/**
 * This is an example of a componet doing a POST request
 */
export function Count() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  const handleIncrementNumber = async (e) => {
    e.preventDefault()
    if (input) {
      try {
        const res = await fetch(`${API_URL}/increment`, {
          method: 'POST', headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ count: input })
        });

        const json = await res.json()

        if (json?.success === true) {
          setCount(json.count)
          setInput('')
        }

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <header style={{ display: "flex", flexDirection: 'column' }}>
      <div>
        <form onSubmit={e => handleIncrementNumber(e)}>
          <label>
            Add a number:
            <input type="number" value={input} onChange={(e) => {
              setInput(e.target.value)
            }} />
            <button
              type='submit'
            >Increment</button>
          </label>
        </form>
      </div>
      <h2>COUNT: {count}</h2>
    </header>
  )

}