import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
export const AppContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [page, setPage] = useState('')
  const [location, setLocation] = useState({})
  const toggelSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  const openSubMenu = (text, coordinates) => {
    console.log(coordinates)
    setPage(text)
    setLocation(coordinates)
    setIsSubMenuOpen(true)
  }

  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubMenuOpen,
        toggelSideBar,
        openSubMenu,
        closeSubMenu,
        location
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
