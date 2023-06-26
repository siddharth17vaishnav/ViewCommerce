import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import myList from "./NavbarList";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const Navbar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter, Arial, sans-serif",
    },
  });

  let navItem = myList.Li.map((item) => {
    return (
      <ListItemButton key={item}>
        <ListItemText primary={item} />
        <ExpandMoreIcon />
      </ListItemButton>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "#f8f8f8", py: "10px" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              component="p"
              sx={{ fontSize: "44px", color: "#000", fontWeight: 700 }}
            >
              LOGO
            </Typography>
            <List sx={{ color: "#000000" }}>
              <ListItem disablePadding>{navItem}</ListItem>
            </List>
            <Button sx={{ background: "#C1C1C1", color: "#fff" }}>Login</Button>
            <SearchIcon sx={{ color: "#000000", cursor: "pointer" }} />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default Navbar;
