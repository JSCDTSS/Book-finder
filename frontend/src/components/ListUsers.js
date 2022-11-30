import { useState } from "react";
import SearchBar from "./SearchBar";
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { listUsers } from "../utils/backendRequest";
import { useLocation } from 'react-router-dom';
import BanUserButton from "./BanUserButton";

export default function ListUsers() {
  const [searchValue, setSearchValue] = useState('')
  const [selectedUser, setSelectedUser] = useState('')
  const [searchResults,setSearchResults] = useState([])
  const location = useLocation()

  function updateSearchBar(e) {
    setSearchValue(e.target.value)
  }
  
  function makeReq() {
    const search = searchValue ?
      {username: searchValue} : ''
    listUsers(location.state.token, search)
      .then(res => {
        const accounts = res?.data?.accounts
        if (!accounts) return
        setSelectedUser('')
        setSearchResults(accounts)
      })
  }

  function handleChange(e) {
    setSelectedUser(e.target.value)
  }

  return <div>

    <SearchBar value={searchValue} setValue={updateSearchBar} />
    <button onClick={makeReq}>Search Users</button>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedUser}
        onChange={handleChange}
      >
        {searchResults.map((result,i) => 
          <MenuItem value={result} key={i}>{result.username}</MenuItem>
        )}
      </Select>
    </FormControl>
    <BanUserButton selectedUser={selectedUser}/>
  </div>
}