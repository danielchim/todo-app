import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import create from 'zustand'

const useStore = create(() => ({}))

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // 允许配置文件使用 `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

export const App: React.FC = function App () {
  // ???
  useStore()
  const theme = createTheme({
    status: {
      danger: '#00FF00'
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  )
}
