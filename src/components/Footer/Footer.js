import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainFooter: {
    backgroundColor: theme.palette.grey[200],
    marginTop: "calc(10% + 60px)",
    width: '100%',
    position: 'fixed',
    bottom: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
 
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.mainFooter}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4">E-commerce</Typography>
            <div className={classes.socialIcons}>
              <a href="https://Linkedin.com/">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram size={30} />
              </a>
              <a href="mailto:ashu.chauhan018@gmail.com">
                <HiOutlineMail size={30} />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h7">Connect with Us</Typography>
            <ul className={classes.list}>
              <li>Facebook</li>
              <li>Donate</li>
              <li>Instagram</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h7">Get to Know Us</Typography>
            <ul className={classes.list}>
              <li>About Us</li>
              <li>Press Releases</li>
              <li>Our Business</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h7">Let Us Help You</Typography>
            <ul className={classes.list}>
              <li>Help Center</li>
              <li>Trust and safety</li>
              <li>Privacy settings</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h7">Make Money with Us</Typography>
            <ul className={classes.list}>
              <li>Sell on our site</li>
              <li>Sell under our site Accelerator</li>
              <li>Protect and Build Your Brand</li>
            </ul>
          </Grid>
        </Grid>
        <hr />
        <div className={classes.footerText}>
          <Typography variant="body2">
            &copy;{new Date().getFullYear()} Commerce, Inc. | Privacy policy | Terms Of Service | Cookies
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
