import React from 'react'
import NavBar from './NavBar'
import { Box, Container } from '@mui/material'
import Card from './Card'
import LargeChart from './LargeChart'
import SmallChart from './SmallChart'
import BasicTable from './Table'


const TopCardsData=[
  {id:0,image:"./assets/card-1.png",title:"Earning",desc:"↑37.8%",trend:"positive",price:"198"},
  {id:1,image:"./assets/card-2.png",title:"Orders",desc:"↓2% ",trend:"negative",price:"2.4"},
  {id:2,image:"./assets/card-3.png",title:"Balance",desc:"↓2% ",trend:"negative",price:"2.4"},
  {id:3,image:"./assets/card-4.png",title:"Total Sales",desc:"↑11% ",trend:"positive",price:"89"}
]

const Dashboard = ({handleDrawerToggle}) => {
  return (
    <Container fixed>
    <NavBar handleDrawerToggle={handleDrawerToggle}/>
    <Box sx={{display:'flex',gap:"20px",flexWrap:"wrap",my:2,justifyContent:"center"}}>
      {TopCardsData.map(item=><Card key={item.id} title={item.title} image={item.image} desc={item.desc} trend={item.trend} price={item.price} />)}
    </Box>

    <Box sx={{display:'flex',gap:"20px",flexWrap:"wrap",my:2}}>
    <LargeChart/>
    <SmallChart/>
    </Box>
    <BasicTable/>

    </Container>
    
  )
}

export default Dashboard