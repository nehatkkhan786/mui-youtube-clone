import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme({
    typography:{
        allVariants:{
            fontFamily:'Roboto',
            fontWeight:400
        }
    }
})

const AppThemeProvider = (props) => {
  return (
   <ThemeProvider theme={theme}>
        {props.children}
   </ThemeProvider>
  )
}

export default AppThemeProvider