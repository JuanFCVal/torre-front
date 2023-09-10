import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import {  FC, useEffect, useState } from 'react';
import { apiAIService } from '../../../services/api.ai.service';
import { IUserSearchByNameResponse } from '../../../interfaces/userSearchByName';

interface ISearchUsers {
  setResults: (results: Array<IUserSearchByNameResponse>) => void
  setLoading: (status: boolean) => void
  onChangeQuery: (query: string) => void
}

const SearchUsers:FC<ISearchUsers> = ({setResults, setLoading, onChangeQuery}) => {
  const [query, setQuery] = useState('')
  const _debounceTime = 300
  useEffect(() => {
    //debounce
   const timeOut = setTimeout(async () => {
     onChangeQuery(query)
      if(query.length == 0) {
        setResults([])
        return
      }
      setLoading(true)
      const results = await apiAIService.searchPeopleByName(query).then(async (response) => {
            const { results } = response;
            return results;
        
      }).catch(error => {
        return []
      });
      setLoading(false)
     setResults(results)
    }, _debounceTime)
    return () => clearTimeout(timeOut)
  }, [query])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  
  return (
    <FormControl sx={{width:1, paddingLeft:'2rem', paddingRight:'2rem'}} >

    <OutlinedInput value={query} placeholder="Juan Francisco Cevallos" sx={{width:1,  borderRadius: '1rem'}} onChange={handleChange}/>
  </FormControl>
  )
}

export default SearchUsers
