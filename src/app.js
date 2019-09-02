import React, { useState } from 'react'

export default () => {
  const [login, setLogin] = useState('nnecec')

  function handleSubmit () {
    fetch('/leo/1.0/h5/login')
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <div>
      <label>fetch who?</label>
      <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
