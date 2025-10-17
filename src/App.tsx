import { useEffect } from "react"
import { getUsers } from "./store/user-store/user-helpers"
import { useUsers } from "./store/user-store/user-selectors"


function App() {
  
  const users = useUsers()

  console.log(users);
  
  useEffect(() => {
    getUsers()
  }, [])
  return (
  <>
    Social APP
  </>
  )
}







export default App
