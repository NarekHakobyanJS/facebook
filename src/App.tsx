import { useEffect } from "react"
import { usersAPI } from "./api/users-api"


function App() {
  
  useEffect(() => {
    usersAPI.getUsers()
  }, [])
  return (
  <>
    Social APP
  </>
  )
}

export default App
