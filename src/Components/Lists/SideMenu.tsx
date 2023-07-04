import { Box } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import myList from './NavbarList'
import { useMediaQuery } from '@mui/material'

const SideMenu = () => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  let navigation = myList.sideMenuItems.map((item, ind) => {
    const { icon: IconComponent, text } = item
    return (
      <BottomNavigationAction
        sx={{
          flexDirection: isLargeScreen ? 'column' : 'row',
          columnGap: 2,
          mb: isLargeScreen ? 0 : 3
        }}
        key={ind}
        label={text}
        icon={<IconComponent />}
      />
    )
  })
  return (
    <Box
      sx={{
        width: '300px',
        color: '#8B96A5',
        fontSize: '9.36px',
        ml: 'auto',
        my: isLargeScreen ? 0 : 8
      }}>
      <BottomNavigation
        sx={{
          //   display: isLargeScreen ? null : 'flex',
          flexDirection: isLargeScreen ? 'row' : 'column',
          alignItems: isLargeScreen ? null : 'start'
        }}
        showLabels>
        {navigation}
      </BottomNavigation>
    </Box>
  )
}
export default SideMenu
