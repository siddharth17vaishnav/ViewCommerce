import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import dribble from '../../assets/dribbble.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'

interface FooterProps {}

const useStyles = makeStyles(theme => ({
  mainFooter: {
    backgroundColor: '#FFFFFF', // White color
    marginTop: 'calc(10% + 60px)',
    width: '100%',
    bottom: 0,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1480px',
  },
  
  contentContainer: {
    width: '100%',
    padding: ` ${theme.spacing(2)}px`
    
  },
  socialIcons: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  list: {
    listStyle: 'none',
    padding: '6px',
    margin: 0,
    marginTop: theme.spacing(2),
    '& li': {
      marginBottom: theme.spacing(1),
      cursor: 'pointer'
    }
  },
  footerText: {
    marginTop: theme.spacing(2),
    fontFamily: 'Poppins'
  }
}))

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainFooter}>
      <Container maxWidth={false}>
        <div className={classes.contentContainer}>
          <Grid container spacing={6}>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="h4">E-commerce</Typography>
              
              <div className={classes.socialIcons}>
                <a href="https://Linkedin.com/">
                  <img src={linkedin} alt="LinkedIn" width={30} height={30} />
                </a>
                <a href="https://www.instagram.com/">
                  <img src={dribble} alt="Dribbble" width={30} height={30} />
                </a>
                <a href="mailto:ashu.chauhan018@gmail.com">
                  <img src={twitter} alt="Twitter" width={30} height={30} />
                </a>
                <a href="mailto:ashu.chauhan018@gmail.com">
                  <img src={facebook} alt="Facebook" width={30} height={30} />
                </a>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6">Connect with Us</Typography>
              <ul className={classes.list}>
                <li>Facebook</li>
                <li>Donate</li>
                <li>Instagram</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6">Get to Know Us</Typography>
              <ul className={classes.list}>
                <li>About Us</li>
                <li>Press Releases</li>
                <li>Our Business</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6">Let Us Help You</Typography>
              <ul className={classes.list}>
                <li>Help Center</li>
                <li>Trust and Safety</li>
                <li>Privacy Settings</li>
              </ul>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6">Make Money with Us</Typography>
              <ul className={classes.list}>
                <li>Sell on our site</li>
                <li>Sell under our site Accelerator</li>
                <li>Protect and Build Your Brand</li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <hr></hr>
        <Typography variant="body2" className={classes.footerText}>
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </Typography>
      </Container>
    </div>
  )
}

export default Footer