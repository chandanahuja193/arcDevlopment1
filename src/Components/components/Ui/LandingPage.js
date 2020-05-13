import React from "react";
import { makeStyles , useTheme } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import animationData from "../../../animations/landinganimation/data";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import ButtonArrow from "../ButtonArrow";
import Typography from "@material-ui/core/Typography";
import CustomSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import Mobile from "../../../assets/mobileIcon.svg";

import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme => ({
  mainContainer : {
    marginTop : '5em',
    [theme.breakpoints.down('md')] : {
    marginTop : '3em'
    },
    [theme.breakpoints.down('xs')] : {
      marginTop : '2em'
      }
  
  },
  heroTextContainer : {
    minWidth : '21.5em',
    marginLeft : '1em',
    [theme.breakpoints.down('xs')] : {
      marginLeft : 0
      }
  },
  heroContainer : {
    [theme.breakpoints.down('sm')] : {
      justifyContent : 'center'
      }
  },
  animation : {
    marginTop : '2em',
    marginLeft : '10%',
    minWidth : '21em',
    maxWidth : '58em',
    // [theme.breakpoints.down('sm')] : {
    //   maxWidth : '30em',
    //   marginLeft : '-1em'
    //   }
  },
  estimateButton : {
    ...theme.typography.estimate,
    backgroundColor : theme.palette.common.orange,
    borderRadius : 50,
    marginRight : 40,
    height : 45,
    width : 145,
    '&:hover' : {
    backgroundColor : theme.palette.secondary.light
    }
  },
  learnButtonHero : {
   ...theme.typography.learnButton,
    height : 45,
    width : 146,
  },
  learnButton : {
  ...theme.typography.learnButton,
  height : 35,
  fontSize : '0.7rem',
  padding : 5,
  [theme.breakpoints.down('sm')] : {
    marginBottom : '2em'
    }
  
  },
  specialText : {
  fontFamily : "Pacifico",
  color : theme.palette.common.orange
  },
  icon : {
    marginLeft : '2em',
    [theme.breakpoints.down('xs')] : {
      marginLeft : '0em'
      }
  },
  socialContainer : {
    marginTop : '12em',
    [theme.breakpoints.down('sm')] : {
      justifyContent : 'center'
      },
      [theme.breakpoints.down('xs')] : {
        padding : 25
        }
  }

}))



const LandingPage = () => {

  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'))


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };





  return (
    <Grid container direction="column"  className={classes.mainContainer} >
      <Grid item>{/* ----Hero Block----  */}
        <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.heroContainer}  >
          <Grid item sm className={classes.gridItem} className={classes.heroTextContainer}>
            <Typography align="center" variant={"h2"} >Bringing West Coast Technology <br />
              to the Midwest 
              </Typography>
          
            <Grid container justify="center" style={{marginTop : '1em' }}>
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                <span style={{marginRight : 10 }} >Learn More </span> 
                <ButtonArrow height={15} width={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation} >
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
               />
          </Grid>
        </Grid>
      </Grid>
      
       {/*Services Block */}
        <Grid container direction="row" className={classes.socialContainer}  >
          <Grid item style={{ marginLeft : matchesSm ? '' : '5em' , textAlign : matchesSm ? 'center' : '' }} >
          <Typography variant={"h4"}>
              Custom Software Development
              </Typography>
              <Typography style={{ marginBottom : '1em' }} variant={"subtitle1"}>
              Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant={"subtitle1"}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{marginRight : 10 }} >Learn More </span> 
                <ButtonArrow height={10} width={10} fill={theme.palette.common.blue} />
                </Button>
          </Grid>
          <Grid item >
            <img src={CustomSoftwareIcon} alt="CustomSoftwareIcon" className={classes.icon} />
          </Grid>
        </Grid>
        
        {/* Ios/Andrioid Devlopmemny  */ }
        <Grid container direction="row" className={classes.socialContainer} style={{ justifyContent : matchesSm ? 'center' : 'flex-end' }} >
          <Grid item style={{ textAlign : matchesSm ? 'center' : ''  }} >
          <Typography variant={"h4"}>
            iOS/Android App Development
              </Typography>
              <Typography style={{ marginBottom : '1em' }} variant={"subtitle1"}>
              Extend Functionality. Extend Access. Increase Engagement
              </Typography>
              <Typography variant={"subtitle1"}>
            Integrate your web experience or create a standalone app
               <br />
              with either mobile platform.
            </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{marginRight : 10 }} >Learn More </span> 
                <ButtonArrow height={10} width={10} fill={theme.palette.common.blue} />
                </Button>
          </Grid>
          <Grid item >
            <img src={Mobile} alt="Android Ios Devlopment" className={classes.icon} />
          </Grid>
        </Grid>
      

    </Grid>
    
   


  )
}

export default LandingPage