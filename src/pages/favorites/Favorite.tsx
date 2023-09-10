import { IUserSearchByNameResponse } from "../../interfaces/userSearchByName";
import { apiLocalService } from "../../services/api.local.service";
import { useAppSelector } from "../../store/redux_config";
import UserResultItem from "../search/components/UserResultItem";
import { Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeFavorite } from "../../store/slices/favorites/favoritesSlice";
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

const FavoritesPage = () => {
  const [showSnackSucces, setshowSnackSucces] = useState(false)
  const favorites = useAppSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch()
  const removeUserFromFavorite = (user: IUserSearchByNameResponse) => {
    apiLocalService.removeFavorite(user).then(
      () => {
        setshowSnackSucces(true)
        dispatch(removeFavorite(user))
      }
    )
  }

  return (
    <>
      <Snackbar
        key={'top' + 'right'}
        open={showSnackSucces}
        autoHideDuration={1000}
        message="Eliminado de favoritos"
      />

      <Container sx={{ marginTop: '100px' }}>
        <Typography variant="h4" sx={{ marginBottom: '2rem' }}>
          Usuarios favoritos
        </Typography>
        {favorites.length > 0 && (
          favorites.map((favorite) => (
            <UserResultItem key={favorite?.ardaId} user={favorite} showRemoveButton onRemove={() => removeUserFromFavorite(favorite)} />
          ))
        )}

      </Container>
    </>
  );
};

export default FavoritesPage;