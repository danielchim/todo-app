import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DetailsPage from './pages/DetailsPage'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path=':detailsID' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
