import { useState } from "react"
import { authAPI } from "../../../api/auth-api"
import { login } from "../../../store/auth-store/auth-helpers"
import { useUserId } from "../../../store/auth-store/auth-selctors"
import { Navigate } from "react-router-dom"

export const Home = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const userId = useUserId()

  console.log(userId);
  

  if(userId) {
    return <Navigate to={`/users/profile/${userId}`}/>
  }
  // authAPI.login()

  const myLogin = () => {
    login({email, password})
  }
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={myLogin}>Login</button>
    </div>
  )
}
