import PropTypes from "prop-types";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const ProfileSelector = ({ activeProfile, setActiveProfile }) => {
  const profiles = ["Suzanne", "Lewey", "Victor", "Richard", "User1", "User2"];

  const handleChange = (event) => {
    setActiveProfile(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} variant="outlined">
      <InputLabel id="profile-selector-label">Profile</InputLabel>
      <Select
        labelId="profile-selector-label"
        id="profile-selector"
        value={activeProfile}
        onChange={handleChange}
        label="Profile"
      >
        {profiles.map((profile) => (
          <MenuItem key={profile} value={profile}>
            {profile}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

ProfileSelector.propTypes = {
  activeProfile: PropTypes.string.isRequired,
  setActiveProfile: PropTypes.func.isRequired,
};

export default ProfileSelector;
