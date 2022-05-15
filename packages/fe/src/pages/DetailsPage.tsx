import React from 'react'
import { useLocation } from 'react-router-dom'

interface ISingleItem {
  id: number
  title: string
  desc: string
}

const DetailsPage = () => {
  const singleItem: ISingleItem = useLocation().state as ISingleItem
  return (
    <div>
      <h1>{singleItem.title}</h1>
      <p>{singleItem.desc}</p>
    </div>
  )
}

export default DetailsPage
