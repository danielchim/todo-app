import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React from 'react'

interface INewItemDialogProps {
  open: boolean
  handleClose: () => any
}

const NewItemDialog = ({ open, handleClose }: INewItemDialogProps) => {
  const [newTitle, setNewTitle] = React.useState<string>('')
  const [newDesc, setNewDesc] = React.useState<string>('')

  const writeLocalStorage = () => {
    console.log(newTitle)
    console.log(newDesc)
    const newId = Date.now().toString(36) + Math.random().toString(36).substr(2)
    const tmpObj: { id: string; title: string; desc: string } = { id: newId, title: newTitle, desc: newDesc }

    // TODO: implement logic to write into data and update index
    localStorage.setItem(newId, JSON.stringify(tmpObj))
    const tmpIndex = JSON.parse(localStorage.getItem('index') || '{}')
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{'Please enter the todo event'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              sx={{ width: 1 }}
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
              onChange={(e) => {
                setNewTitle(e.target.value)
              }}
            />
            <TextField
              sx={{ width: 1 }}
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
              multiline
              rows={4}
              onChange={(e) => {
                setNewDesc(e.target.value)
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={writeLocalStorage} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default NewItemDialog
