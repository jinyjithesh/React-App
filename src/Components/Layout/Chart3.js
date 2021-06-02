import classes from './Chart3.module.css';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import LaptopOutlinedIcon from '@material-ui/icons/LaptopOutlined';
function Chart3(){
return(
    <div className={classes.box}>
        <div className={classes.h}>
        <h3 >
        By Devices
        </h3>
        </div>
        <div  className={classes.container}>
           <span>
           <PhoneIphoneOutlinedIcon  style={{ fontSize:44, color: '#414042' }} foclassName={classes.icon}/>
           <div >Adi’s Phone</div>
            40m
           </span>
          
            </div>
        <div>
        <span>
            <LaptopOutlinedIcon style={{ fontSize:139 }} />
      <div> Adi’s Laptop </div> 
       1h 30m
        </span>
        </div>
        <p className={classes.t}>See All Devices</p>
    </div>
)
};
export default Chart3;