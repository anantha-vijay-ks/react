// import * as React from 'react'; 
// import './App.css';
// import { Button } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Login';
// function App() {
//   return (
//     <div className="App">
//       <ButtonGroup variant="contained">
//   <Button endIcon={<LoginIcon />} color="primary">
//     Login
//   </Button>
//   <Button startIcon={<LogoutIcon />} color="secondary">
//     Logout
//   </Button>
// </ButtonGroup>
     /* <Button startIcon={<AccessTimeIcon/>}  color="error" size='large' variant="contained">time</Button>
     <br /><br />
     <Button startIcon={<RocketLaunchIcon></RocketLaunchIcon>} color="success" size='medium' variant="contained">to</Button>
     <br /><br />
     <Button startIcon={<MenuBookIcon></MenuBookIcon>} color="warning" size='large' variant="contained">study</Button> */
// import { ThirtyFpsSelect } from '@mui/icons-material';
//     </div>
//   );
// }

// export default App;

import React,{Component} from 'react';
import './App.css';

class Counter extends Component{
  state={
    count: 0,

  };
  handleIncrement= () =>{
    this.setState({count:this.state.count+1})
  };
  handleDecrement= () =>{
    this.setState({count:this.state.count-1})
  };
  check=()=>{
    if(this.state.count===4){
      throw new Error('crashed')
    }
  }
  render(){
    return(
      <div className='App-header'>
        <this.check/>   
        <button onClick={this.handleIncrement} >Increment</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
};

export default Counter;
