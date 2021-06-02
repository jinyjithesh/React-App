
import React from 'react';

import classes from './MainSection.module.css'

function MainSection(props){
   

 
    return(
    <section className={classes.container}>
     <select className={classes.b} onClick={props.onshownModal}> 
         <option  >All </option>
         Activities during class-time, study-time and play time are shown.
         
         <option >Class-time only</option>
         <option >Study-time only</option>
         <option>Free-time only</option>
      
       </select> 
      
    </section>
  
      
    );
};
export default MainSection;