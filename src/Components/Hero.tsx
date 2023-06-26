import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import banner from "../assets/Banner.png";
const Hero = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter, Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: "55px" }}>
        <Container
          sx={{ position: "relative", width: "100% ", height: "602px" }}
        >
          <Box
            sx={{
              //   position: "absolute",
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "95%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                color: "#1C1C1C",
                left: "135px",
                top: "195px",
              }}
            >
              <Typography
                variant="h1"
                component="p"
                sx={{
                  fontSize: "23px",
                  fontWeight: 400,
                }}
              >
                Latest trending
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "27px",
                  fontWeight: 700,
                }}
              >
                Electronic items
              </Typography>

              <Button
                variant="contained"
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  background: "#FFFFFF",
                  color: "#1C1C1C",
                  textTransform: "none",
                  mt: 3,
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
export default Hero;
