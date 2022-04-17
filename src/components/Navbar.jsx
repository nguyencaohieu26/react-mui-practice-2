import { Mail, NotificationAdd, Pets } from '@mui/icons-material'
import { AppBar, styled, Toolbar, Typography,Box, InputBase, Badge, Avatar, MenuItem,Menu } from '@mui/material'
import React,{useState} from 'react'

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
})

const Search = styled("div")(({theme})=>({
  background: 'white',
  width: '40%',
  padding:'0 10px',
  borderRadius:theme.shape.borderRadius 
}));

const IconsContainer = styled(Box)(({theme})=>({
  display: 'none',
  gap:15,
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display: 'flex',
  }
}));

const UserBox = styled(Box)(({theme})=>({
  display: 'flex',
  gap: 15,
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display: 'none',
  }
}))

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{
          display: {xs:'none',sm:'block'},
        }} variant='h6'>LOGO</Typography>
        <Pets sx={{display:{xs:'block',sm:'none'}}}/>
        <Search>
          <InputBase placeholder='Search' />
        </Search> 
        <IconsContainer>
          <Badge color='error' badgeContent={3}>
            <Mail/>
          </Badge>
          <Badge color='error' badgeContent={2}>
            <NotificationAdd/>
          </Badge>
          <Avatar onClick={()=>setOpen(true)} sx={{width:'30px',height:'30px'}} src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'/>
        </IconsContainer>
        <UserBox onClick={()=>setOpen(true)}>
          <Avatar sx={{width:'30px',height:'30px'}} src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'/>
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right',
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right',
        }}
      >
         <MenuItem>Profile</MenuItem>
         <MenuItem>My account</MenuItem>
         <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar