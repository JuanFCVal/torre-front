import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import {  FC, useEffect, useState } from 'react';
import { apiAIService } from '../../../services/api.ai.service';
import { IUserSearchByNameResponse } from '../../../interfaces/userSearchByName';
import { apiLocalService } from '../../../services/api.local.service';
import { useDispatch } from 'react-redux';
import { addHistoryValue } from '../../../store/slices/favorites/favoritesSlice';

interface ISearchUsers {
  setResults: (results: Array<IUserSearchByNameResponse>) => void
  setLoading: (status: boolean) => void
  onChangeQuery: (query: string) => void
}

const SearchUsers:FC<ISearchUsers> = ({setResults, setLoading, onChangeQuery}) => {
  const [query, setQuery] = useState('')
  const _debounceTime = 300   
  const dispatch = useDispatch()
  useEffect(() => {
    //debounce
   const timeOut = setTimeout(async () => {
     onChangeQuery(query)
      if(query.length == 0) {
        setResults([])
        return
      }

      if(query.length >= 2){
        setLoading(true)
        const results = await apiAIService.searchPeopleByName(query).then(async (response) => {
              const { results } = response;
              return results;
        }).catch(error => {
          return []
        });
        setLoading(false)
       setResults(results)
       postNewHistoryItem()
     }

    }, _debounceTime)
    return () => clearTimeout(timeOut)
  }, [query])

  const postNewHistoryItem = () => {
    apiLocalService.addHistoryValue(query).then(
      () => {
        dispatch(addHistoryValue({query}))
   
      }
    )
  
  }
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
