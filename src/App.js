import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';
import {useState} from 'react';

function App() {
  const [mode,setMode] = useState('light');
  
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  }) 
  const handleMode = (mode) =>{
    setMode(mode);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar/>
          <Stack 
          direction="row" 
          spacing={2}
          justifyContent="space-between"
          >
            <Sidebar handleMode={handleMode}/>
            <Feed/>
            <Rightbar/>
          </Stack>
          <Add/>
        </Box>
    </ThemeProvider>
  );
}

export default App;
