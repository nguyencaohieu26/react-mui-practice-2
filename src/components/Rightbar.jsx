import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment } from 'react'

const FRIENDS_LIST = [
  {
    id:1,
    title:''
  },
]

const Rightbar = () => {
  return (
    <Box 
      flex={2}
      p={2}
      sx={{display:{xs:'none',sm:'block'}}}
    >
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4} sx={{justifyContent:'start'}}>
          <Avatar alt='person 1' src='https://images.unsplash.com/photo-1622281587418-f2f4fc06ae7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'></Avatar>
          <Avatar alt='person 2' src='https://images.unsplash.com/photo-1620067925093-801122ac1408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80'></Avatar>
          <Avatar alt='person 3' src='https://images.unsplash.com/photo-1618747946260-9511b46b1ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'></Avatar>
          <Avatar alt='person 4' src='https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'></Avatar>
          <Avatar alt='person 5' src='https://images.unsplash.com/photo-1617175581263-bc0f059cce38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'></Avatar>
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} sx={{marginBottom:'10px'}}> Latest Photos</Typography>
        <ImageList cols={3}>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2' alt=''/>
          </ImageListItem>
        </ImageList>
        <Typography fontWeight={100} mt={2} mb={2} variant='h6'>Lastes Conversations</Typography>
        <List>
           <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar src="" alt=""/>
            </ListItemAvatar>
            <ListItemText primary="Brunch this weekend?"
            secondary={<Fragment>
              <Typography
              sx={{display:'inline'}}
              component='span'
              variant='body2'
              color='text.primary'
              >Ali Connors</Typography>
              {"I'll be in your neighborhood doing errands this..."}
            </Fragment>}
            >
            </ListItemText>
           </ListItem>
           <Divider variant='inset' component='li'/>
           <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar src="" alt=""/>
            </ListItemAvatar>
            <ListItemText primary="Summer BBQ"
            secondary={<Fragment>
              <Typography
              sx={{display:'inline'}}
              component='span'
              variant='body2'
              color='text.primary'
              >to Scott, Alex, Jennifer</Typography>
              {"- Wish I could come, but I'm out of town this... "}
            </Fragment>}
            >
            </ListItemText>
           </ListItem>
           <Divider variant='inset' component='li'/>
           <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar src="" alt=""/>
            </ListItemAvatar>
            <ListItemText primary="Qui Oui"
            secondary={<Fragment>
              <Typography
              sx={{display:'inline'}}
              component='span'
              variant='body2'
              color='text.primary'
              >Sandra Adams</Typography>
              {"- Do you have Paris recommendations? Have you ever..."}
            </Fragment>}
            >
            </ListItemText>
           </ListItem>

        </List>
      </Box>
    </Box>
  )
}

export default Rightbar