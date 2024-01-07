import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SpatialOps
        </Typography>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "16px",
          }}
        >
          <Button color="inherit">Home</Button>
        </Link>
        <Link
          to="/messaging"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "16px",
          }}
        >
          <Button color="inherit">Messaging</Button>
        </Link>
        <Link
          to="/project"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "16px",
          }}
        >
          <Button color="inherit">Project</Button>
        </Link>
        <Link
          to="/devices"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginRight: "16px",
          }}
        >
          <Button color="inherit">Devices</Button>
        </Link>
        <Link
          to="/development"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button color="inherit">Development</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
