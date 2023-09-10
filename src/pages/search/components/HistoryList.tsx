import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HistoryItem from './HistoryItem';
import '../_search.scss'
import { useAppSelector } from '../../../store/redux_config';
import { Typography } from '@mui/material';

const HistoryList = () => {
  const histories = useAppSelector((state) => state.favorite.history);
  return (
    <List sx={{height:1, bgcolor: 'background.paper' }} className='fade-in'>
    <ListItem>
      <Typography variant='h4'>
      Búsquedas recientes
      </Typography>
    </ListItem>
    {
      histories.map((history, index) => (
        <HistoryItem history={history} key={index}/>
      ))
    }

  </List>
  )
}

export default HistoryList
