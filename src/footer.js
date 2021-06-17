import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      texto: this.props.texto,
    }
  }
  render(){
   
    return(
          <div style={{bottom:0, position:"absolute", width:"100%"}}>
        <AppBar position="static" style={{background:"#818181", boxShadow: "1px 1px 7px black"}}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              {this.state.texto}
            </Typography>
          </Toolbar>
            
        </AppBar>
      </div>
    )
  }
  }

export default Footer