import React, { SyntheticEvent, FormEvent } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, useTheme } from "@mui/material";
import paneImage from "../../assets/plane.jpg";
import facebook from '../../assets/Facebook.jpg';
import Google from '../../assets/Google.jpg';

export default function Login() {
  const theme = useTheme();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      Reapeatpassword: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Grid container>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 24,
                mx: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  mx: 2,
                  my: 6,
                },
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Repeatpassword"
                  label="RepeatPassword"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Allready have a account? Login"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  ml: 1,
                  marginTop: 8,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: theme.palette.grey[300],
                  
                }}
              >
                <Typography variant="body1" >-----------OR-----------</Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <a href="www.google.com">
                    <img src={Google} alt="Google" width={136} height={50} />
                  </a>
                  <a href="www.facebook.com">
                    <img src={facebook} alt="Facebook" width={136} height={50} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={7}
            sx={{
            
              backgroundImage: `url(${paneImage})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              
             
            }}
          />
        </Grid>
      </Box>
    </Container>
  );
}
