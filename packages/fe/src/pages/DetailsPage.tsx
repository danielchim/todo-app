import { Button } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

import EditItem from './../component/EditItem'

interface ISingleItem {
  id: string
  title: string
  desc: string
}

const DetailsPage = () => {
  const singleItem: ISingleItem = useLocation().state as ISingleItem
  const [showEdit, setShowEdit] = React.useState(false)
  return (
    <div>
      <h1>{singleItem.title}</h1>
      <p>{singleItem.desc}</p>
      <Button onClick={() => setShowEdit(!showEdit)}> Edit me! </Button>
      {showEdit ? <EditItem id={singleItem.id} title={singleItem.title} desc={singleItem.desc} /> : <></>}
    </div>
  )
}

export default DetailsPage
