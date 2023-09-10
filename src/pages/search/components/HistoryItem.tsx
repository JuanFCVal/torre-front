import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FC } from 'react';
import { Typography } from '@mui/material';
export interface IHistoryItem{
    query: string
    createdAt?: string
    updatedAt?: string
}
interface  IHistoryItemProps {
    history: IHistoryItem
}
const HistoryItem:FC<IHistoryItemProps> = ({history}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Typography>{history.query[0]}</Typography>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={history.query}/>
    </ListItem>
  )
}

export default HistoryItem
