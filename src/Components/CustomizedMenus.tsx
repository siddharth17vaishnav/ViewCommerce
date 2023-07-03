import React, { useRef } from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box, useMediaQuery } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import myList from './NavbarList'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}))

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const selectedButtonRef = useRef<(EventTarget & HTMLButtonElement) | null>(null)
  const selectedButton = selectedButtonRef.current?.textContent

  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    selectedButtonRef.current = event.currentTarget
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        // alignItems: 'center',
        position: 'relative',
        flexDirection: isLargeScreen ? 'row' : 'column',
        justifyContent: isLargeScreen ? 'space-between' : 'center',
        ml: isLargeScreen ? 6 : 0,
        mt: isLargeScreen ? 0 : 2
      }}>
      {myList.menuItems.map((item, ind) => {
        return (
          <Button
            ref={selectedButtonRef}
            key={ind}
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: '#000000',
              ml: isLargeScreen ? 1 : 0,
              mb: isLargeScreen ? 0 : 2,
              width: isLargeScreen ? null : '150px',
              fontWeight: 600
            }}>
            {item.title}
          </Button>
        )
      })}
      <Button sx={{ background: '#C1C1C1', color: '#fff', ml: isLargeScreen ? 'auto' : 0 }}>
        Login
      </Button>
      <IconButton
        sx={{
          color: '#000000',
          cursor: 'pointer',
          ml: isLargeScreen ? 'auto' : 0,
          position: isLargeScreen ? '' : 'absolute',
          top: 0,
          right: 0
        }}>
        <SearchIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {myList.menuItems.map(item => {
          const title = item.title
          if (title === selectedButton) {
            return item.submenu?.map((submenuItems, index) => {
              return (
                <MenuItem onClick={handleClose} key={index} disableRipple>
                  {submenuItems.title}
                </MenuItem>
              )
            })
          }
        })}
      </StyledMenu>
    </Box>
  )
}
