
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function Login() {
  const theme = useTheme();

 

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
              mx: 4,
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
             Enter your business details
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1,paddingBottom: 1 }}>
            Tell us about you and your business so that we can verify it. Please provide information per your official documents to get verified quicker.      
  </Typography>
  <div style={{ borderTop: "1px solid black", marginBottom: "1rem" }} />
  <Typography variant="h3" sx={{ paddingTop: 1,paddingBottom: 1 }}>
  Contact information      
  </Typography>
  <Typography variant="h3" sx={{ paddingTop: 1,paddingBottom: 1 }}>
<Typography variant="body1" sx={{ paddingTop: 1 }}>
First and last name      
  </Typography>      
  </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 0 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Name"
                 name="Nmae"
                autoComplete="Nmae"
                autoFocus
              />
<Typography variant="body1" sx={{ paddingTop: 1 }}>
Business phone     
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Number"
                 name="Number"
                autoComplete="Number"
                autoFocus
              />
              <FormControlLabel
                  control={<Checkbox value="remember" color="secondary" />}
                  label="Receive texts to get updates on your account verification status. Message and data rates may apply."
                />
               <Typography variant="h3" sx={{ paddingTop: 4,paddingBottom: 1 }}>
                Business information     
  </Typography>
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Industry     
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Select an industry"
                 name="Select an industry"
                autoComplete="Select an industry"
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Business license type     
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Goods and Services and Tax Number (GSTIN)"
                 name="Goods and Services and Tax Number (GSTIN)"
                autoComplete="Goods and Services and Tax Number (GSTIN)"
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
GSTIN Number     
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Number"
                 name="Number"
                autoComplete="Number"
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Business Name    
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Name"
                 name="Name"
                autoComplete="Name"
                autoFocus
              />
               
              <Typography variant="h3" sx={{ paddingTop: 2,paddingBottom: 1 }}>
              Business address     
  </Typography>
  <Typography variant="body1" sx={{ paddingTop: 1 }}>
  Street address    
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Address"
                 name="address"
                autoComplete="address"
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Suite, unit, floor (optional)    
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Postal code    
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Postal code"
                 name="Postal code"
                autoComplete="Postal code"
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              City    
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="City"
                 name="City"
                autoComplete="City"
                autoFocus
              />
              <Typography variant="body1" sx={{ paddingTop: 1 }}>
              State    
  </Typography>
  <TextField
                margin="normal"
                required
                fullWidth
                label="Select a state"
                 name="Select a state"
                autoComplete="Select a state"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create your Business account
              </Button>
              <Grid container>
                <Grid item xs>
                <p
  style={{
    fontSize: "14px",
    color: "#9e9e9e",
    textAlign: "justify",
  }}
>
  By creating a business account, you agree to the Logo Business Accounts Terms and Conditions. You are creating a business account on behalf of the organization named above and agree that you have the authority to bind that organization.
</p>

                  <div style={{ display: "flex", justifyContent: "center" }}>
 
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
