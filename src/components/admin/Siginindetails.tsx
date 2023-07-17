import React, { FormEvent } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, useTheme } from "@mui/material";


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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
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
            <Typography
            variant="h6"
              sx={{ paddingBottom: 2 ,textAlign: "center" }}>
             Fill your Details
            </Typography>
            
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 0 }}
            >
            <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Your Name    
  </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Name"
                label="Name"
                name="Name"
                autoComplete="Name"
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Email   
  </Typography>
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
               <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Password   
  </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Password"
                label="Password "
                name="Password"
                autoComplete="Password"
                autoFocus
              />
              <Typography
                  variant="body1"
                  sx={{ color: "grey", fontSize: 12, textAlign: "right" }}
                >
                  Passwords must be at least 6 characters.
                </Typography>
                <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Password again   
  </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Password again"
                label="Password again "
                name="Password again"
                autoComplete="Password again"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Next  step
              </Button>               
             </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
