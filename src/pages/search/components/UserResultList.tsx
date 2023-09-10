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
                            (result) => (
                                <>
                                    <ListItem alignItems="center" key={result.ardaId}>
                                        <ListItemAvatar>
                                            <Avatar alt={result.name} src={result.imageUrl} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <>
                                                    {result.name}
                                                    {result.verified && <img src="src/assets/icons/check.png" width={'15px'} style={{ marginLeft: '1rem' }} />}
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
                                                        {result.professionalHeadline}

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
