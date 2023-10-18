import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material'
import React from 'react'

const LargeChart = () => {
  return (
    <Box sx={{background:"#fff",borderRadius:"12px",flexBasis:"800px"}}>
        <BarChart sx={{'& .MuiBarElement-root':{
            fill:"#5A32EA"
        }}}
        xAxis={[
            {
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              scaleType: 'band',
            }   
        ]}
        series={[
            {
            data: [2, 5, 3,8,7,6,1,7,6,4,2,1],
            },
        ]}
        height={300}
        />
    </Box>
  )
}

export default LargeChart