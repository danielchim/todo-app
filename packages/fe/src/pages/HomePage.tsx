import { Box, Button, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

import NewItemDialog from './../component/NewItemDialog'

const HomePage = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' flexDirection={'column'}>
      <Typography variant='h2' margin='2vh'>
        Todo App
      </Typography>
      <Paper>
        <Box padding='2vh'>
          <nav aria-label='main mailbox folders'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='Inbox' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='Drafts' />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Button onClick={handleClickOpen}>Add new item!</Button>
        </Box>

        <NewItemDialog open={open} handleClose={handleClose}></NewItemDialog>
      </Paper>
    </Box>
  )
}

export default HomePage
