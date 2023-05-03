import { useState } from 'react'
import { IconButton, Menu, MenuItem, MoreVertIcon } from '@mui/material'

const ITEM_HEIGHT = 48

export default function TableActions({ item, options }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '15ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.name.props.children[1]}
            selected={option === 'Pyxis'}
            onClick={() => [handleClose(), option.action(item)]}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
