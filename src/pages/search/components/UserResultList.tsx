import { FC} from "react"
import { IUserSearchByNameResponse } from "../../../interfaces/userSearchByName"
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import React from "react";
import { Typography, Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
interface IUserResultList {
    usersResponse: Array<IUserSearchByNameResponse>,
    loading: boolean,
    query: string
}
const UserResultList: FC<IUserResultList> = ({ usersResponse = [], loading = false, query }) => {
    const redirectToTorre = (username: string) => {
        window.open(`https://torre.ai/${username}`, '_blank')
    }
    return (
        <>
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
                                <>
                                
                               
                                    <ListItem alignItems="center" key={user.ardaId} sx={{cursor: 'pointer'}} onClick={() => redirectToTorre(user.username)}>
                                        <ListItemAvatar>
                                            <Avatar alt={user.name} src={user.imageUrl} />
                                        </ListItemAvatar>
                                        <ListItemText
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
                                    <Divider variant="inset" component="li" />
                              
                                </>

                            )
                        )
                    }
            </List> ) }
        </>

    )
}

export default UserResultList
