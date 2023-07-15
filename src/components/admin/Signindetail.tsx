import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MyCard() {
  return (
    <div style={{ margin: "0 20px", display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 720,
          height: "auto",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "20px",
          }}
        >
          <Typography variant="h5" align="center" sx={{ paddingBottom: 3 }}>
            Enter your full name and choose your business password
          </Typography>
          <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
            <Typography variant="body1" sx={{ color: "grey", fontSize: 18 }}>
              Your Name
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
            />
          </div>
          <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
            <Typography variant="body1" sx={{ color: "grey", fontSize: 18 }}>
              Email
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              autoComplete="Email"
            />
          </div>
          <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
            <Typography variant="body1" sx={{ color: "grey", fontSize: 18 }}>
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Password"
              label="Password"
              name="Password"
              autoComplete="Password"
            />
            <Typography variant="body1" sx={{ color: "grey", fontSize: 12 }}>
              Passwords must be at least 6 characters.
            </Typography>
          </div>
          <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
            <Typography variant="body1" sx={{ color: "grey", fontSize: 18 }}>
              Password again
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Password"
              label="Password"
              name="Password"
              autoComplete="Password"
            />
          </div>
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: 5,
              height: 54,
            }}
          >
            Next Step
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
