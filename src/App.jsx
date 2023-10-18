import React, { useState } from 'react'
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import './app.css'
import { Box } from '@mui/material'

const App = () => {
  const [mobileOpen,setMobileOpen]=useState(true)
  const handleDrawerToggle=()=>{
    setMobileOpen(prev=>!prev)
  }

  return (
    <>
    <Box sx={{display:"flex"}}>

    <SideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    <Dashboard  handleDrawerToggle={handleDrawerToggle} />
    </Box>
    </>
  )
}

export default App