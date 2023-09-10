import { AppBar, Box, Container, Paper, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom';


interface INavbar {
  title: string
}

interface Routes {
  name: string
  path: string
}
const pages: Routes[] = [
  {
    name: 'Search',
    path: '/search',
  },
  {
    name: 'Favorites',
    path: '/favorites',
  }

]

export const Navbar: FC<INavbar> = ({ title = 'Torre' }) => {
  return (
    <AppBar position='fixed' >
      <Container sx={{ margin: '0' }} id='container'>
        <Toolbar disableGutters>
          <Paper sx={{ height: '40px', width:'40px'}}>
            <img src="src/assets/images/logo.jpeg" style={{ objectFit: 'fill', width:' 100%' }}/>
          </Paper>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                style={{ color: 'white', display: 'block', marginRight: '10%', textDecoration: 'none' }}

              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>)
}

