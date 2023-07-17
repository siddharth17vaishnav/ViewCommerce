import React, { FormEvent } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, useTheme } from "@mui/material";
import sao from "../../assets/sao.jpg";


export default function Login() {
  const theme = useTheme();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
     
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 4 }}>
        <Grid container>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
  sx={{
    my: 12,
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
  <Typography component="h1" variant="h5" sx={{ paddingBottom: 3 }}>
    Let us create your free LOGO Business account
  </Typography>
  <Typography variant="body1" sx={{ paddingTop: 1 }}>
    Enter the work email you'd like to use for your business account.
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
                
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                 Get Started
                </Button>
                <Grid container>
                  <Grid item xs>
                  <p style={{ fontSize: '14px', color: '#9e9e9e', textAlign: 'center',  }}>Already an LOGO Business customer?  <a href="#">Login</a>.</p>
                  </Grid>
                </Grid>
              </Box>
              
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${sao})`,
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
