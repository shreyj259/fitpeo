import { Box } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import React from 'react'

const SmallChart = () => {
  return (
    <Box sx={{background:"#fff",borderRadius:"12px",flex:1,display:"flex",alignItems:"center"}}>
        <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  height={200}
/>
    </Box>
  )
}

export default SmallChart