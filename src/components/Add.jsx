import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon, DateRange, EmojiEmotions, PersonAdd} from '@mui/icons-material'
import React,{useState} from 'react'
import ImageIcon from '@mui/icons-material/Image';

const StyledModal = styled(Modal)(({theme})=>({
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
})); 

const UserBox = styled(Box)(({theme})=>({
    gap:'10px',
    display:'flex',
    alignItems:'center', 
    marginBottom:'15px'
})); 

const Add = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
        <Tooltip onClick={()=>setOpen(true)} title="add" sx={{position:'fixed',bottom:'20px',left:{xs:"calc(50% - 25px)",md:30}}}>
            <Fab color='error' size='small' aria-label='add'>
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} borderRadius={2} p={3}>
                <Typography variant='h6' color='gray' textAlign="center">Create Post</Typography>
                <UserBox>
                    <Avatar
                        src=''
                        sx={{width:30,height:30}}
                    />
                    <Typography fontWeight={500} variant="span">John Doe</Typography>
                </UserBox>
                <TextField
                    sx={{width:'100%'}}
                    multiline
                    rows={2}
                    placeholder="What's on your mind?"
                    variant='standard'
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='success'/>
                    <ImageIcon color='primary'/>
                    <PersonAdd color='error'/>
                </Stack>
                <ButtonGroup
                    fullWidth
                    variant='contained'
                >
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}><DateRange/></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add