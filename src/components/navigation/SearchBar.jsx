import { Box, Button, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const SearchBar = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center'}}>
        <Paper component='form' sx={{
            display:'flex',
            alignItems:'center',
            width:400,
            boxShadow:0,
            border:'1px solid #ccc',
            borderRadius:5,
            mr:1         
        }}>
            
            <InputBase sx={{ml:1, pl:1, flex:1}} placeholder='Search'/>
            <IconButton type='button'>
                <SearchIcon/>
            </IconButton>
        </Paper>
        <Button>
            <MicIcon color="inherit"/>
        </Button>
    </Box>
  )
}

export default SearchBar