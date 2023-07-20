import { FormEvent } from "react";
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
            <Typography variant="body1" sx={{ paddingBottom:3,textAlign: "center" , color: "gray" }}>
            Login in to your Business account    
  </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{ paddingBottom: 2 ,textAlign: "center" }}
              
            >
             Log-in
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1,paddingBottom: 1,textAlign: "center", color: "gray"  }}>
            Please login using account detail bellow.
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
                id="Password"
                label="Password"
                name="Password"
                autoComplete="Password"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                  <div style={{ display: "flex", justifyContent: "center" }}>
  <a
    href="#"
    style={{ textDecoration: "none" }}
  >
    Forgot password?
  </a>
</div>
<p style={{ fontSize: '14px', color: '#9e9e9e', textAlign: 'center', marginTop: '100px' }}>If you are new here, proceed to <a href="#">Sign up</a>.</p>

                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
