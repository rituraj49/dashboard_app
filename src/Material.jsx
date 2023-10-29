import { PhotoCamera } from '@mui/icons-material'
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Material() {
  return (
    <>
        <CssBaseline />
        <AppBar position="relative" >
            <Toolbar>
                <PhotoCamera />
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color="GrayText" gutterBottom >
                        Photos ALbum
                    </Typography>
                    <Typography variant='h6' align='center' color='coral' paragraph>
                        This is the text for photo album his is the text for photo albuhis is the text for photo albuhis is the text for photo albuhis is the text for photo albu
                    </Typography>
                </Container>
            </div>
        </main>
    </>
  )
}

export default Material