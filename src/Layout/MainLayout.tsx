import { Box } from '@mui/material'

import React, { FC } from 'react'
import { Navbar } from '../shared/components/Navbar'

interface IMainLayout {
    children: React.ReactNode
    title?: string

}
const MainLayout: FC<IMainLayout> = ({ children, title = 'Torre'  }) => (
    <>
    <Box sx={{ flexFlow: 1 }}>
    <Navbar title={title}></Navbar>
    <main  style={{height:'100%'}}>
        {children}
    </main>
    </Box>
    </>
)

export default MainLayout
