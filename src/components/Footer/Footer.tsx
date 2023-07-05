import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { makeStyles } from "@material-ui/core/styles";

interface FooterProps {}

const useStyles = makeStyles((theme) => ({
  mainFooter: {
    backgroundColor: theme.palette.grey[200],
    marginTop: "calc(10% + 60px)",
    width: "100%",
    position: "fixed",
    bottom: 0,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  contentContainer: {
    padding: `0 ${theme.spacing(2)}px`,
  },
  socialIcons: {
    display: "flex",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: theme.spacing(2),
    "& li": {
      marginBottom: theme.spacing(1),
      cursor: "pointer",
    },
  },
  footerText: {
    marginTop: theme.spacing(2),
  },
}));

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainFooter}>
      <Container maxWidth={false}>
        <div className={classes.contentContainer}>
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
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Make Money with Us</Typography>
              <ul className={classes.list}>
                <li>Sell on our site</li>
                <li>Sell under our site Accelerator</li>
                <li>Protect and Build Your Brand</li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <hr />
        <Typography variant="body2" className={classes.footerText}>
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
