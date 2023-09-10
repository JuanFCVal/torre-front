import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HistoryItem from './HistoryItem';
import '../_search.scss'
export interface IUser {
  name: string,
  professionalHeadline: string,
  profilePic: string
}

const users: IUser[] = [
  {
    name: 'Juan Francisco Cevallos',
    professionalHeadline: 'Software Developer',
    profilePic: 'https://picsum.photos/200/300',
  },
  {
    name: 'Juan Francisco Cevallos',
    "professionalHeadline": "Senior Talent Scout at Torre",
    profilePic: 'https://picsum.photos/200/300',
  },
  {
    name: 'Juan Francisco Cevallos',
    "professionalHeadline": "Senior Talent Scout at Torre",
    profilePic: 'https://picsum.photos/200/300',
  },
  {
    name: 'Juan Francisco Cevallos',
    "professionalHeadline": "Backend Developer",
    profilePic: 'https://picsum.photos/200/300',
  },

]
const HistoryList = () => {
  return (
    <List sx={{height:1, bgcolor: 'background.paper' }} className='fade-in'>
    <ListItem>
      <ListItemText>
      Búsquedas recientes
      </ListItemText>
    </ListItem>
    {
      users.map((user, index) => (
        <HistoryItem user={user} key={index}/>
      ))
    }

  </List>
  )
}

export default HistoryList
