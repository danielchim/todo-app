import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const getLocalStorageIndex = () => {
  const retrievedObject = localStorage.getItem('index')
  return retrievedObject
}

const getLocalStorageItems = (id: string) => {
  const retrievedObject = localStorage.getItem(id)
  return JSON.parse(retrievedObject || '{}')
}

interface IData {
  id: string
  title: string
  desc: number
}

const Items = () => {
  const [index, setIndex] = React.useState<string[] | null>(null)
  const [data, setData] = React.useState<IData[] | null>(null)

  React.useEffect(() => {
    setIndex(JSON.parse(getLocalStorageIndex() || '[]'))
  }, [])

  // TODO: implement map logic with index arrays
  React.useEffect(() => {
    const resultArr: IData[] = []
    index?.forEach((singleIndex: string) => {
      resultArr.push(getLocalStorageItems(singleIndex))
    })
    setData(resultArr)
  }, [index])
  return (
    <>
      {data?.map((singleItem: IData) => {
        return (
          <ListItem disablePadding key={singleItem.id}>
            <Link to={String(singleItem.id)} state={singleItem}>
              <ListItemButton>
                <ListItemText primary={singleItem.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        )
      })}
    </>
  )
}

export default Items
