import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FooterAdornment from "../../../assets/FooterAdornment.svg";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Facebook from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twitter.svg";
import Instagram from "../../../assets/instagram.svg";


const useStyles = makeStyles(theme => ({

  footor: {
    width: '100%',
    backgroundColor: theme.palette.common.blue,
    zIndex: 1302,
  },
  andorment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontSize: '0.75em',
    fontFamily: 'Arial',
    textDecoration : 'none',
    fontWeight : 'bold'
  },
  gridItem : {
    margin : '3em'
  },
  icon : {
  width : '4em',
  height : '4em',
  [theme.breakpoints.down('xs')] : {
    width : '2.5em',
    height : '2.5em',
  }
  },
  socialContainer : {
  position : 'absolute',
  marginTop : '-6em',
  right : '2em',
  [theme.breakpoints.down('xs')] : {
    right : '1em',
  }
  }
}
))

const Footor = ({ setValue , setSelectedIndex  }) => {

  const classes = useStyles();

  return (
    <footer className={classes.footor} >
      <Hidden mdDown >
      <Grid container justify="center" className={classes.mainContainer} >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/" onClick={() =>{setValue(0)}} >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/services" onClick={() =>{setValue(1)}}>
              Services
              </Grid>
            <Grid item className={classes.link} component={Link} to="/customsoftware" onClick={() =>{
              setValue(1);
            setSelectedIndex(2)}}>
              Custom Software Devlopment
              </Grid>
            <Grid item className={classes.link} component={Link} to="/mobileapps" onClick={() =>{
              setValue(1);
            setSelectedIndex(3)}}>
              Mobile App Devlopment
              </Grid>
            <Grid item className={classes.link} component={Link} to="/websites" onClick={() =>{
              setValue(1);
            setSelectedIndex(4)}}>
              Website Devlopment
              </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() =>{setValue(2)}}>
              The Revolution
          </Grid>
            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() =>{setValue(2)}}>
              Vision
          </Grid>
            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() =>{setValue(2)}}>
              Technology
          </Grid>
            <Grid item className={classes.link} component={Link} to="/revolution" onClick={() =>{setValue(2)}}>
              Process
          </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/about" onClick={() =>{setValue(3)}} >
              About Us
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about" onClick={() =>{setValue(3)}}>
              History
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about" onClick={() =>{setValue(3)}}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}> 
            <Grid item className={classes.link} component={Link} to="/contact" onClick={() =>{setValue(4)}}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <img
        alt="black andorment slash"
        src={FooterAdornment}
        className={classes.andorment}
      />
      <Grid container justify="flex-end" className={classes.socialContainer} spacing={2} >
        <Grid item component={'a'} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img src={Facebook} alt="facebbok" className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img src={Twitter} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img src={Instagram} alt="instagram"  className={classes.icon}/>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footor