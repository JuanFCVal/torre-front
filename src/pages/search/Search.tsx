import './_search.scss'
import Grid from '@mui/material/Grid';
import { Box, Typography, Container } from '@mui/material';
import HistoryList from './components/HistoryList';

import { useState } from 'react';
import { IUserSearchByNameResponse } from '../../interfaces/userSearchByName';
import UserResultList from './components/UserResultList';
import SearchUsers from './components/SearchUsers';


const SearchPage = () => {
  const [searchResults, setSearchResult] = useState<Array<IUserSearchByNameResponse>>([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <div className='full-page'>
      <Box sx={{ flexGrow: 1, height: 1, }} id="box-content">
        <Grid container spacing={2} sx={{ height: 1, width: '1/2' }}>
          <Grid item sm={12} md={4} lg={3} sx={{ width: 1 }}>
            <HistoryList />
          </Grid>
          <Grid item sm={12} md={8} lg={9} sx={{ zIndex: 2, width: 1, marginTop: '2rem' }} >
            <Typography variant='h4' marginBottom={3}>
              Búsqueda por nombre
            </Typography>

            <Container maxWidth={'lg'}>
            <form onSubmit={(e) => { e.preventDefault(); }}>
              <SearchUsers setResults={setSearchResult} setLoading={setLoading} onChangeQuery={setQuery}/>
            </form>    
                <Container sx={{paddingLeft:'4rem !important', paddingRight:'4rem !important', borderRadius:'20%', marginTop:'1rem'}} >
                  <UserResultList usersResponse={searchResults} loading={loading} query={query}/>
                </Container>
            </Container>

          </Grid>
        </Grid>

      </Box>
    </div>
  )
}

export default SearchPage
