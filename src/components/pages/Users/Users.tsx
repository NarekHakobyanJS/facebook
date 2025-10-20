import { Box, Pagination } from "@mui/material"
import { useEffect } from "react"
import { changePage, getUsers } from "../../../store/user-store/user-helpers"
import { usePage, useTotalCount, useUsers } from "../../../store/user-store/user-selectors"
import UserCard from "../../organisms/UserCard/UserCard"
import { useSearchParams } from "react-router-dom"

export const Users = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  //Custom hooks with Zustand
  const users = useUsers()
  const totalCount = useTotalCount()
  const page = usePage()


  const handleChangePage = (e : any, newPage : number) => {
    changePage(newPage)
  }

  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("page", page.toString());
      searchParams.set("count", '100');
      return searchParams;
    });
    
  }, [page])


  useEffect(() => {
    getUsers()
  }, [page])
  return (
    <Box>

      <Box>
        <Pagination onChange={handleChangePage} page={page} count={totalCount} color="secondary" />
      </Box>

      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}
      >
        {
          users.map((user) => <UserCard key={user.id} user={user} />)
        }
      </Box>
    </Box>
  )
}
