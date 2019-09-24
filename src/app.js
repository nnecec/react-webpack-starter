import React, { useMemo, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import Emotion from './hooks/emotion'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // count
  const memoCount = useMemo(() => {
    console.log('calculate memoCount')
    return `previous count: ${count}`
  }, [count])

  const handleClick = (offset) => {
    setCount(count + offset)
  }

  // name
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const memoName = () => {
    console.log('calculate memoName')
    return `my name is: ${name}`
  }

  console.log('app -- rerender')
  return (
    <div>
      <h1>modify count</h1>
      <p>count: {count}</p>
      <p>{memoCount}</p>

      <button onClick={() => handleClick(1)}>increase</button>
      <button onClick={() => handleClick(-1)}>decrease</button>

      <h1>modify name</h1>
      <input type="text" value={name} onChange={handleChange} />
      <p>{memoName()}</p>

      <Emotion />
    </div>
  )
}

export default hot(App)
