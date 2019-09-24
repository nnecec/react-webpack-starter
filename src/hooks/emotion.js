import React, { useState, memo } from 'react'

export default memo((props) => {
  const [status, setStatus] = useState(false)

  const handleToggle = () => {
    setStatus(!status)
  }
  console.log('child -- rerender')
  return (
    <div>
      <p>{status ? '😊' : '😭'}</p>
      <button onClick={handleToggle}>toggle emotion</button>
    </div>
  )
})
