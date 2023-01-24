import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handelSubmit(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:8000/api/register', {
      method: "post",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <div className="App">
      <form action="" onSubmit={handelSubmit}>
        <h1>Register</h1>
        <div>
          <label htmlFor="name">Name</label><br />
          <input type="name" name='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Password</label><br />
          <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default App
