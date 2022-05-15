import { Box, Button, Container, Grid, List, Pagination, Paper, Typography } from '@mui/material'
import React from 'react'

import Items from './../component/Items'
import NewItemDialog from './../component/NewItemDialog'

const HomePage = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const totalSize = JSON.parse(localStorage.getItem('testObject') || '{}')

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={2} justifyContent={'space-between'}>
        <Typography variant='h2' margin='2vh'>
          Todo App
        </Typography>
        <Button onClick={handleClickOpen}>Add new item!</Button>
      </Grid>

      <Paper>
        <Box padding='2vh'>
          <nav aria-label='main todolist'>
            <List>
              <Items />
            </List>
          </nav>
          {totalSize.length / 10 > 1 ? <Pagination count={totalSize.length / 10 + 1} /> : <></>}
          <Box>
            <Button onClick={handleClickOpen}>Add new item!</Button>
          </Box>
        </Box>
        <NewItemDialog open={open} handleClose={handleClose}></NewItemDialog>
      </Paper>
    </Container>
  )
}

export default HomePage
