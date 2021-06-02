import React,{} from 'react';
import classes from './Chart1.module.css';
// import DoughnutChart from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
const  Chart1=()=>{
  const data = {
    legend: {
      position: 'left',
    },
    labels: [ 'class',  'study',  'free time'],
      datasets: [
        {
        
          backgroundColor: [ ' #2D82FE',' #2FED51C2','#FF9E57',],
          data: [130,20,80,30],
          label: '# of Votes',
          
          borderWidth:0,
          borderradius: 27,
        },
      ],
      
      hoverOffset: 1,
      
    };
    
    return(

       <div className={classes.box}>
         <div  className={classes.h}>
         <h3>All Screen Time</h3>
         </div>
           
           <div className={classes.box1}>
           <Doughnut  data={data} /> 
         {/* <DoughnutChart data={data}/>   */}
           </div>
        
       </div>
       
      
    );
};

export default Chart1;