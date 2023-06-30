import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  createTheme,
  ThemeProvider
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import myList from './NavbarList'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

console.log(myList.x)

const SubNavbar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, Arial, sans-serif'
    }
  })

  let navItem = myList.x.map(item => {
    return (
      <ListItemButton key={item} sx={{ fontSize: '16px', fontWeight: 500 }}>
        <ListItemText primary={item} />
      </ListItemButton>
    )
  })

  let navigation = myList.y.map((item, ind) => {
    const { icon: IconComponent, text } = item
    return <BottomNavigationAction key={ind} label={text} icon={<IconComponent />} />
  })
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: '#fff',
          height: '61px',
          display: 'flex',
          alignItems: 'center',
          pl: 5,
          pr: 3
        }}>
        {/* <Container sx={{ display: 'flex', alignItems: 'center' }}> */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MenuIcon />
          <Typography
            variant="h5"
            component="p"
            sx={{ fontSize: '16px', fontWeight: 500, whiteSpace: 'nowrap' }}>
            All categories
          </Typography>
        </Box>
        <Container sx={{ display: 'flex' }}>
          <List sx={{ color: '#000000' }}>
            <ListItem disablePadding>{navItem}</ListItem>
          </List>
          <Box
            sx={{
              width: 280,
              color: '#8B96A5',
              fontSize: '9.36px',
              ml: 'auto'
            }}>
            <BottomNavigation
              showLabels
              // value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            >
              {navigation}
            </BottomNavigation>
          </Box>
        </Container>
        {/* </Container> */}
      </Box>
    </ThemeProvider>
  )
}
export default SubNavbar
