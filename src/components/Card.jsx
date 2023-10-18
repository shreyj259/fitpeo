import { Box, Grid, Typography } from '@mui/material'
import React from 'react'


const Card = ({title,image,desc,trend,price}) => {
  return (
    <Box sx={{background:"#fff",display:"flex",minWidth:"170px",flex:1,maxWidth:"275px",borderRadius:"12px"}}>
        <Box sx={{flex:1,padding:"16px"}}>
            <img className='card-img' src={image} alt="" />
        </Box>
        <Box sx={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <Typography sx={{color:"grey",fontSize:'12px',lineHeight:1}}>
                {title}
            </Typography>
            <Typography sx={{color:"#000",fontWeight:"500",fontSize:'22px',lineHeight:1,padding:"4px 0"}}>
                ${price}K
            </Typography>
            <Typography sx={{color:"#333",fontSize:'12px',lineHeight:1}}>
                <span className={`${trend}`}>{desc} </span>this month
            </Typography>
        </Box>
        
    </Box>
    
  )
}

export default Card