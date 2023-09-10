import { Route, Navigate, Routes } from 'react-router-dom'
import SearchPage from '../pages/search/Search';
import FavoritesPage from '../pages/favorites/Favorite';
const AppRouter = () => {
  return (
        <Routes>
            <Route path='search' element={<SearchPage/>}/> 
            <Route path='favorites' element={<FavoritesPage/>}/>
            <Route path='/*' element={<Navigate to="/search"></Navigate>}/> 
            <Route path='/' element={<Navigate to="/search"></Navigate>}/> 
        </Routes> 
  )
}

export default AppRouter
