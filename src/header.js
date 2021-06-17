import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './img/logogrande.svg'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      texto: this.props.texto,
    }
  }
  render(){
   
    return(
      <div>
          <div style={{flexGrow: 1}}>
        <AppBar position="static" style={{background:"#818181"}}>
          <Toolbar variant="dense">
            <Link to="/">

              <Logo style={{maxHeight:"28px", maxWidth:"150px"}}/>

            </Link>
            <Typography variant="h6" color="inherit">
              {this.state.texto}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      </div>

    )
  }
  }

export default Header