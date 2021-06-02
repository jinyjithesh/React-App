import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import classes from './Header.module.css'
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import { Fragment } from 'react';
import MenuButton from './MenuButton';
import MainSection from './MainSection';
import { Container } from '@material-ui/core';
import ContainerChart from './ContainerChart';
function Header(){
    return(
        <Fragment>
              <nav className={classes.header}>
                  
            <div><h1> <AccountCircleIcon /> Aditya Prasad</h1></div>
            <div>
                <button className={classes.but1} type="button"><PhoneIphoneOutlinedIcon/>Add Device</button>
              
            </div>
            <div>
            <MenuButton/>
            </div>
        </nav>
        <div className={classes['main-1']}>
            <div>
            Activities Summary
            </div>
       
        <MainSection/>
        <ContainerChart/>
        </div>
       
        </Fragment>
      
    );

};
export default Header;
