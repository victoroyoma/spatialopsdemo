import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
} from "@mui/material";

const initialTasks = [
  {
    TicketID: "T1",
    Title: "Fix login bug",
    Status: "Open",
    Component: "Authentication",
    Assignee: "Alice",
    Milestone: "M1",
    Description: "Login form not responsive.",
  },
  {
    TicketID: "T2",
    Title: "Update documentation",
    Status: "In Progress",
    Component: "Docs",
    Assignee: "Bob",
    Milestone: "M2",
    Description: "Update the API section.",
  },
  {
    TicketID: "T3",
    Title: "Design new logo",
    Status: "Done",
    Component: "Design",
    Assignee: "Charlie",
    Milestone: "M1",
    Description: "Create a new logo.",
  },
  {
    TicketID: "T4",
    Title: "Implement feature X",
    Status: "Open",
    Component: "Development",
    Assignee: "Dave",
    Milestone: "M3",
    Description: "Implement the new feature as discussed.",
  },
  {
    TicketID: "T5",
    Title: "Test new release",
    Status: "In Progress",
    Component: "QA",
    Assignee: "Eve",
    Milestone: "M2",
    Description: "Perform testing on the new release.",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "green";
    case "In Progress":
      return "red";
    case "Done":
      return "blue";
    default:
      return "grey";
  }
};

const Project = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({
    TicketID: "",
    Title: "",
    Status: "",
    Component: "",
    Assignee: "",
    Milestone: "",
    Description: "",
  });

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    if (newTask.Title.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask({
        TicketID: "",
        Title: "",
        Status: "",
        Component: "",
        Assignee: "",
        Milestone: "",
        Description: "",
      });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Project Management - Task Tracking
      </Typography>

      {/* Task Input Form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          mb: 2,
        }}
      >
        {/* Add input fields for each task attribute */}
        <TextField
          label="Ticket ID"
          name="TicketID"
          value={newTask.TicketID}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        {/* Add more input fields for Title, Status, etc. */}
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>

      {/* Task Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticket ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Component</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Milestone</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow
                key={index}
                sx={{ "&:hover": { backgroundColor: "action.hover" } }}
              >
                <TableCell>
                  <Card variant="outlined" sx={{ borderRadius: 2 }}>
                    <CardContent>{task.TicketID}</CardContent>
                  </Card>
                </TableCell>
                <TableCell>{task.Title}</TableCell>

                <TableCell sx={{ color: getStatusColor(task.Status) }}>
                  <Select
                    value={task.Status}
                    onChange={(e) => {
                      const newTasks = [...tasks];
                      newTasks[index] = { ...task, Status: e.target.value };
                      setTasks(newTasks);
                    }}
                    size="small"
                  >
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                  </Select>
                  {task.Status}
                </TableCell>

                <TableCell>{task.Component}</TableCell>
                <TableCell>{task.Assignee}</TableCell>
                <TableCell>{task.Milestone}</TableCell>
                <TableCell>{task.Description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Project;
