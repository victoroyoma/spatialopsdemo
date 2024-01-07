import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profiles] = useState([
    { name: "Suzanne", details: "Details about Suzanne" },
    { name: "Lewey", details: "Details about Lewey" },
    // ... other profiles
  ]);
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
    handleClose();
  };

  const handleEditDetails = (event) => {
    setSelectedProfile({ ...selectedProfile, details: event.target.value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 500, mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Welcome to SpatialOps
          </Typography>

          {/* Profile Selector */}
          <Button
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ mb: 2 }}
          >
            {selectedProfile.name}
          </Button>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {profiles.map((profile) => (
              <MenuItem
                key={profile.name}
                onClick={() => handleSelectProfile(profile)}
              >
                {profile.name}
              </MenuItem>
            ))}
          </Menu>

          {/* Editable Details */}
          <TextField
            label="Profile Details"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={selectedProfile.details}
            onChange={handleEditDetails}
            sx={{ mb: 2 }}
          />

          {/* Login and Register Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ mr: 1 }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
