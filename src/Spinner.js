import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

function Spinner() {
  return (
        <Box sx={{ display: 'flex', flexDirection:'column', gap:20, justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <CircularProgress />
      <Typography variant='h5'>Loading...</Typography>
    </Box>
  )
}

export default Spinner