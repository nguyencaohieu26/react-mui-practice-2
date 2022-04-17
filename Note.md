import { Settings,Add } from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";

function App() {

const BlueButton = styled(Button)(({theme})=>({

      background: 'skyblue',
      display: 'inline-block',
      color:'#fff',
      margin:theme.spacing(5),
      "&:hover":{
        background: 'darkblue',
      }

}));

return (

<div className="App">
<Button variant="text" startIcon={<Add/>}>Text</Button>
<Button variant="contained" color="otherColor" startIcon={<Settings/>} size="small">Text</Button>
<Button variant="outlined" disabled>Text</Button>
<Typography variant="h1" component="h2">
heading
</Typography>
<BlueButton variant="contained">
Custom style button1
</BlueButton>
<BlueButton variant="outlined">
Custom style button2
</BlueButton>
<p>test</p>
</div>
);
}

export default App;
