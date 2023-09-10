import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { IUser } from './HistoryList';
import { FC } from 'react';
interface  IHistoryItem {
    user: IUser
}
const HistoryItem:FC<IHistoryItem> = ({user}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={user.professionalHeadline} />
    </ListItem>
  )
}

export default HistoryItem
