import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

const Development = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Upload logic here
    setTitle("");
    setDescription("");
    setSelectedFile(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary",
        p: 3,
      }}
    >
      <Card sx={{ minWidth: 500, maxWidth: 1000 }}>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "primary.main",
              textAlign: "center",
            }}
          >
            Dev Gallery
          </Typography>

          {/* Upload Image Section */}
          <Box sx={{ mb: 4 }}>
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
                ".MuiOutlinedInput-root": {
                  borderRadius: 5,
                  borderColor: "primary.main",
                },
              }}
            />
            <TextField
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              sx={{
                mb: 2,
                ".MuiOutlinedInput-root": {
                  borderRadius: 5,
                  borderColor: "primary.main",
                },
              }}
            />
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Button
                variant="contained"
                component="label"
                color="secondary"
                sx={{ borderRadius: 2 }}
              >
                Choose File
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleUpload}
                disabled={!selectedFile}
                sx={{ borderRadius: 2 }}
              >
                Upload
              </Button>
            </Stack>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                /* Retrieve images logic */
              }}
              sx={{ borderRadius: 2 }}
            >
              Retrieve Images
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Development;
