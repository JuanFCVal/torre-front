import React, { FC } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { IUserSearchByNameResponse } from '../../../interfaces/userSearchByName';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector } from '../../../store/redux_config';
interface IUserResultItem {
    user: IUserSearchByNameResponse
    showAddButton?: boolean
    showRemoveButton?: boolean;
    onAdd?: () => void
    onRemove?: () => void
}
const UserResultItem: FC<IUserResultItem> = ({ user, showAddButton, showRemoveButton, onAdd , onRemove}) => {
    const favorites = useAppSelector((state) => state.favorite.favorites);  
    const redirectToTorre = (username: string) => {
        window.open(`https://torre.ai/${username}`, '_blank')
    }
    const userIsAlreadyFavorite = () => {
        if(showRemoveButton) return false;
        const userValidation: IUserSearchByNameResponse | undefined = favorites.find(
            (favorite) => (favorite.ardaId === user!.ardaId)
            )
        if (userValidation){
            return true;
        }
        return false
    }
    return (
        <>
            <ListItem alignItems="center" key={user.ardaId}  secondaryAction={
                !userIsAlreadyFavorite() && (
                    <IconButton >
                        {
                            showAddButton && ( <AddIcon sx={{color:'green', fontSize:'32px'} } onClick={onAdd}/>)
                        }
                        {
                            showRemoveButton && ( <DeleteIcon sx={{color:'white', fontSize:'32px'}  } onClick={onRemove} />)
                        }
                     
                    </IconButton>)
                  }>
               

                <ListItemAvatar>
                    <Avatar alt={user.name} src={user.imageUrl} />
                </ListItemAvatar>
                <ListItemText sx={{ cursor: 'pointer' }} onClick={() => redirectToTorre(user.username)}
                    primary={
                        <>
                            {user.name}
                            {user.verified && <img src="src/assets/icons/check.png" width={'15px'} style={{ marginLeft: '1rem' }} />}
                        </>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {user.professionalHeadline}

                            </Typography>
                        </React.Fragment>
                    }
                />
       
            </ListItem>
            <Divider variant="inset"  />
        </>
    )
}

export default UserResultItem
