import { Box } from '@mui/material'

import React, { FC, useEffect } from 'react'
import { Navbar } from '../shared/components/Navbar'
import { apiLocalService } from '../services/api.local.service'
import { setFavorites, setHistory } from '../store/slices/favorites/favoritesSlice'
import { useDispatch } from 'react-redux';

interface IMainLayout {
    children: React.ReactNode
    title?: string

}  

const MainLayout: FC<IMainLayout> = ({ children, title = 'Torre'  }) => { 
    const dispatch = useDispatch()
    useEffect(() => {
    apiLocalService.searchFavoritesByIp().then(
      (response) => {
        dispatch(setFavorites(response))
      }
    )
    apiLocalService.getHistory().then(
      (response) => {
        console.log(response)
        dispatch(setHistory(response))
      }
    )
  }, [])
return (
    <>
    <Box sx={{ flexFlow: 1 }}>
    <Navbar title={title}></Navbar>
    <main  style={{height:'100%'}}>
        {children}
    </main>
    </Box>
    </>
)

}

export default MainLayout
