import { useState } from "react"
import { authAPI } from "../../../api/auth-api"

export const Home = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // authAPI.login()

  const myLogin = () => {
    authAPI.login({email, password})
  }
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={myLogin}>Login</button>
    </div>
  )
}
