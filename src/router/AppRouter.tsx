import {Navigate, Route, Routes} from 'react-router-dom'
import SearchPage from '../pages/search/Search';
import ProfilePage from '../pages/profile/Profile';
import FavoritesPage from '../pages/favorites/Favorite';
const AppRouter = () => {
  return (
        <Routes>
            <Route path='search' element={<SearchPage/>}/> 
            <Route path='profile' element={<ProfilePage/>}/> 
            <Route path='favorites' element={<FavoritesPage/>}/>
            <Route path='/*' element={<Navigate to="/search"></Navigate>}/> 
        </Routes> 
  )
}

export default AppRouter
