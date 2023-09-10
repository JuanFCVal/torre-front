import { FC, useState } from 'react';
import { IUserSearchByNameResponse } from "../../../interfaces/userSearchByName"
import List from '@mui/material/List';
import { Typography, Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import UserResultItem from "./UserResultItem";
import { apiLocalService } from "../../../services/api.local.service";
import Snackbar from '@mui/material/Snackbar';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../../store/slices/favorites/favoritesSlice';
interface IUserResultList {
    usersResponse: Array<IUserSearchByNameResponse>,
    loading: boolean,
    query: string
}


const UserResultList: FC<IUserResultList> = ({ usersResponse = [], loading = false, query }) => {
    const [showSnackSucces, setshowSnackSucces] = useState(false)
    const dispatch = useDispatch()
    const addUserToFavorite = (user: IUserSearchByNameResponse) => {
        apiLocalService.addNewFavorite(user).then(
            (response) => {
                    setshowSnackSucces(true)
                    dispatch(addFavorite(response))
            }
        )
    }
    return (
        <>
                <Snackbar
                key={'top' + 'right'}
                open={showSnackSucces}
                autoHideDuration={1000}
                message="Agregado a favoritos"
/>
            {
                (loading  )&& (
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                )
            }
            {
                (usersResponse.length == 0 && query.length != 0 && !loading) && (
                    <Typography variant='h6' sx={{ textAlign: 'center', marginTop: '2rem' }}>
                        No se encontraron resultados
                    </Typography>
                )
            }        
        {    
         usersResponse.length > 0 && (
            <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '1rem', maxHeight: '500px', overflowY: 'scroll' }}>
                   {
                        usersResponse.map(
                            (user) => (
                                <UserResultItem user={user} key={user.ardaId} showAddButton onAdd={() => addUserToFavorite(user)}/>
                            )
                        )
                    }
            </List> ) }
        </>

    )
}

export default UserResultList
