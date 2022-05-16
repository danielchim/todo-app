import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface IData {
  id: string
  title: string
  desc: number
}

const getLocalStorageIndex = () => {
  const retrievedObject = localStorage.getItem('index')
  return retrievedObject
}

const getLocalStorageItems = (id: string) => {
  const retrievedObject = localStorage.getItem(id)
  return JSON.parse(retrievedObject || '{}')
}

// remove from localStorage then remove form index
const removeItemFromStorage = (id: string) => {
  localStorage.removeItem(id)
  const tmpArrId = JSON.parse(localStorage.getItem('index') || '[]')
  const index = tmpArrId.indexOf(id)
  if (index > -1) {
    tmpArrId.splice(index, 1)
    localStorage.setItem('index', JSON.stringify(tmpArrId))
  }
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
            <ListItemButton>
              <Link to={String(singleItem.id)} state={singleItem}>
                <ListItemText primary={singleItem.title} />
              </Link>
            </ListItemButton>
            <Button
              onClick={() => {
                removeItemFromStorage(singleItem.id)
              }}>
              <ListItemText primary={'Remove'} />
            </Button>
          </ListItem>
        )
      })}
    </>
  )
}

export default Items
