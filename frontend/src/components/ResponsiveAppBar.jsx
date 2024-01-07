import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ResponsiveAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <List>
      {/* Replace these with your actual navigation links */}
      <ListItem button onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Register" />
      </ListItem>
      {/* Add more navigation links as needed */}
    </List>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SpatialOps
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default ResponsiveAppBar;
