import { Typography } from '@material-ui/core';
import React from 'react';
import '../App.css';




function Header(props) {
    return (<div className={`${props.appHeaderStyle}`}>
        <div className={`${props.appHeaderTextSTyle}`}>
        <Typography variant="h1" >
              
              Ryan Ecarma
            
        </Typography>
        </div>
    </div>)
}

export default Header;