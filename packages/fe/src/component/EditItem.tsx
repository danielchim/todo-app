import { Button, TextField } from '@mui/material'
import React from 'react'

interface IEditItemProps {
  id: string
  title: string
  desc: string
}

const EditItem = ({ id, title, desc }: IEditItemProps) => {
  const [newTitle, setNewTitle] = React.useState<string>(title)
  const [newDesc, setNewDesc] = React.useState<string>(desc)
  const updateLocalStorage = () => {
    // update item into local storage
    const tmpObj: { id: string; title: string; desc: string } = { id, title: newTitle, desc: newDesc }
    localStorage.setItem(id, JSON.stringify(tmpObj))
  }
  return (
    <div>
      <TextField
        sx={{ width: 1 }}
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        defaultValue={title}
        onChange={(e) => {
          setNewTitle(e.target.value)
        }}
      />
      <TextField
        sx={{ width: 1 }}
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        defaultValue={desc}
        multiline
        rows={4}
        onChange={(e) => {
          setNewDesc(e.target.value)
        }}
      />
      <Button onClick={updateLocalStorage}>Save</Button>
    </div>
  )
}

export default EditItem
