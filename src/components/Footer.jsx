import { Typography } from '@material-ui/core';
import React from 'react';


const year = new Date().getFullYear();


function Footer(){
        
    
    return(<div  >
    <Typography variant="body2" color="textSecondary">Ecarma ©{year}</Typography>
    
    </div>)
}

export default Footer;