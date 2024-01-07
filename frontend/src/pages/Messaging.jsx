import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  TextField,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OnlineIndicator from "../components/OnlineIndicator";

const drawerWidth = 240;

const Messaging = () => {
  const [channels, setChannels] = useState(["General", "Random"]);
  const [newChannel, setNewChannel] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers] = useState(["Alice", "Bob", "Charlie"]); // Dummy online users

  const handleAddChannel = () => {
    if (newChannel.trim()) {
      setChannels([...channels, newChannel]);
      setNewChannel("");
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "50vh" }}>
      {/* Left Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {channels.map((channel, index) => (
            <ListItem button key={index}>
              <ListItemText primary={`# ${channel}`} />
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            <TextField
              size="small"
              label="New Channel"
              variant="outlined"
              value={newChannel}
              onChange={(e) => setNewChannel(e.target.value)}
              sx={{ flexGrow: 1, mr: 1 }}
            />
            <IconButton onClick={handleAddChannel} color="primary">
              <AddCircleOutlineIcon />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main chat area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
      >
        <Toolbar />
        <Typography variant="h6" gutterBottom>
          Channel Name
        </Typography>
        <Box sx={{ height: "70vh", overflowY: "auto", mb: 2 }}>
          {messages.map((message, index) => (
            <Typography key={index}>{message}</Typography>
          ))}
        </Box>

        {/* Message input */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            label="Type a message"
            variant="outlined"
            sx={{ mr: 2 }}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Box>
      </Box>

      {/* Right Sidebar */}
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "primary.main",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <Typography variant="h6" sx={{ p: 2 }}>
          Online Users
        </Typography>
        <List>
          {onlineUsers.map((user, index) => (
            <ListItem key={index}>
              <OnlineIndicator />{" "}
              {/* Custom component to indicate online status */}
              <ListItemText primary={user} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Messaging;
