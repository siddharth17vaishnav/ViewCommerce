import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery } from '@mui/material'
import Divider from '@mui/material/Divider'
import SideMenu from '../Navbar/SideMenu'
import CustomizedAccordions from '../CustomizedAccordions'
import SearchInput from '../SearchField/SearchInput'
import AllButton from '../Buttons/AllButton'

const PrimaryDrawer = () => {
  const [open, setOpen] = useState(false)

  const isLargeScreen = useMediaQuery('(max-width:1200px)')
  console.log(isLargeScreen)
  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            overflowX: 'hidden'
          }
        }}>
        <CustomizedAccordions handleClose={handleClose} />
        <Divider sx={{ my: 4 }} />
        <SideMenu />
        <Divider sx={{ my: 4 }} />
        <SearchInput />
        <Divider sx={{ my: 4 }} />
        <AllButton text="Login" />
      </Drawer>
      {isLargeScreen && (
        <MenuIcon onClick={handleClose} sx={{ ml: 'auto', color: '#000000', cursor: 'pointer' }} />
      )}
    </>
  )
}
export default PrimaryDrawer
