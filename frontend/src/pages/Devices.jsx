import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const initialLogs = [
  {
    Timestamp: "2024-01-01 10:00",
    SessionId: "S1",
    User: "Alice",
    EventType: "Viewed",
    UserID: "U1",
    Component: "Logging",
    Callstack: "Error at /login:42",
  },
  {
    Timestamp: "2024-01-01 10:00",
    SessionId: "S1",
    User: "Lewey",
    EventType: "Posted",
    UserID: "U1",
    Component: "Logging",
    Callstack: "Success /login:42",
  },
  {
    Timestamp: "2024-01-01 10:00",
    SessionId: "S1",
    User: "Alice",
    EventType: "Updated",
    UserID: "U1",
    Component: "Logging",
    Callstack: "Error at /login:42",
  },
  {
    Timestamp: "2024-01-01 10:00",
    SessionId: "S1",
    User: "Alice",
    EventType: "Info",
    UserID: "U1",
    Component: "Logging",
    Callstack: "Error at /login:42",
  },
  {
    Timestamp: "2024-01-01 10:00",
    SessionId: "S1",
    User: "Alice",
    EventType: "Error",
    UserID: "U1",
    Component: "Logging",
    Callstack: "Error at /login:42",
  },
  // Add more initial logs here
];

const Devices = () => {
  const [logs] = useState(initialLogs);
  const [filter, setFilter] = useState("");

  const filteredLogs = useMemo(() => {
    return logs.filter((log) =>
      log.EventType.toLowerCase().includes(filter.toLowerCase())
    );
  }, [logs, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Device Logs
      </Typography>

      {/* Filter Form */}
      <Box sx={{ display: "flex", mb: 2 }}>
        <TextField
          label="Filter Logs"
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary">
          Apply Filter
        </Button>
      </Box>

      {/* Logs Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>SessionId</TableCell>
              <TableCell>User</TableCell>
              <TableCell>EventType</TableCell>
              <TableCell>UserID</TableCell>
              <TableCell>Component</TableCell>
              <TableCell>Callstack</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLogs.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.Timestamp}</TableCell>
                <TableCell>{log.SessionId}</TableCell>
                <TableCell>{log.User}</TableCell>
                <TableCell>{log.EventType}</TableCell>
                <TableCell>{log.UserID}</TableCell>
                <TableCell>{log.Component}</TableCell>
                <TableCell>{log.Callstack}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Devices;
