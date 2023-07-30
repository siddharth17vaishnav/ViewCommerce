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
              alignItems: "left",
              [theme.breakpoints.down("sm")]: {
                mx: 2,
                my: 6,
              },
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ paddingBottom: 2 ,textAlign: "left" }}
              
            >
             Verify email address
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1,paddingBottom: 1 }}>
            To verify your email, we've sent a One Time Password (OTP) to Your@email.com
            </Typography><a href="#">change</a>
            <Typography variant="body1" sx={{ paddingTop: 2 }}>
    Enter otp
  </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 0 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Enter Otp"
                label="Enter Otp "
                name="Enter Otp"
                autoComplete="Enter Otp"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Verify  Email-id
              </Button>
              <Grid container>
                <Grid item xs>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#9e9e9e",
                      textAlign: "center",
                    }}
                  >
                    By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.{" "}
                    
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
  <a
    href="#"
    style={{ textDecoration: "none" }}
  >
    Resend otp
  </a>
</div>

                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
