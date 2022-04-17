import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'

const NAVIGATE_LIST = [
  {
    id:1,
    title:'Homepage',
    href:'#home',
    icon:<Home/>,
  },
  {
    id:2,
    title:'Pages',
    href:'#simple-list',
    icon:<Article/>,
  },
  {
    id:3,
    title:'Group',
    href:'#simple-list',
    icon:<Group/>,
  },
  {
    id:4,
    title:'Marketplace',
    href:'#simple-list',
    icon:<Storefront/>,
  },
  {
    id:5,
    title:'Person',
    href:'#simple-list',
    icon:<Person/>,
  },
  {
    id:6,
    title:'Profile',
    href:'#simple-list',
    icon:<AccountBox/>,
  },
  {
    id:7,
    title:'Settings',
    href:'#simple-list',
    icon:<Settings/>,
  },
  {
    id:8,
    title:'Settings',
    href:'#simple-list',
    icon:<Settings/>,
  },
  {
    id:9,
    title:null,
    href:'#simple-list',
    icon:<ModeNight/>,
  },
]

const Sidebar = ({handleMode}) => {
  const [checked,setChecked] = useState(false);
  
  const handleChange = (e) =>{
    setChecked(e.target.checked);
    if(checked){
      handleMode('light');
    }else{
      handleMode('dark');
    }
  }
  return (
    <Box 
     flex={1}
     p={2}
     sx={{display:{xs:'none',sm:'block'}}}
     >
      <Box position='fixed'>
        <List>
          {
            NAVIGATE_LIST.map(item =>{
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton component="a" href={item.href}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    {item.title ? <ListItemText primary={item.title}/> : 
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                    ></Switch>}
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar