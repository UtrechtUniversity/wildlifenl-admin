import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Button,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import PetsIcon from "@mui/icons-material/Pets";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

function NavBar() {
  const [speciesOpen, setSpeciesOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleSpeciesMenu = () => {
    setSpeciesOpen(!speciesOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    navigate("/"); 
  };

  return (
    <nav className="navBar">
      <List sx={{ width: "100%", maxWidth: 300, minWidth: 250}}>
        {/* Users */}
        <ListItemButton component={NavLink} to="/Users">
          <ListItemIcon sx={{ color: "white" }}> {/* Icon color */}
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Users" sx={{ color: "white" }} />
        </ListItemButton>

        {/* Species Parent Menu */}
        <ListItemButton onClick={toggleSpeciesMenu}>
          <ListItemIcon sx={{ color: "white" }}>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="Species" sx={{ color: "white" }} />
          {speciesOpen ? (
            <ExpandLess sx={{ color: "white" }} />
          ) : (
            <ExpandMore sx={{ color: "white" }} />
          )}
        </ListItemButton>

        {/* Species Sub-menu */}
        <Collapse in={speciesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="/EditSpecies"
              sx={{ pl: 4 }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Species" sx={{ color: "white" }} />
            </ListItemButton>

            <ListItemButton
              component={NavLink}
              to="/CreateSpecies"
              sx={{ pl: 4 }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Species" sx={{ color: "white" }} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Box sx={{ position: "absolute", bottom: 20, textAlign: "center", p: 2 }}>
  <Button
    variant="contained"
    color="error"
    startIcon={<List/>}
    onClick={handleLogout}
    sx={{
      width: "90%",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: "8px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#d32f2f",
        transform: "scale(1.05)",
      },
    }}
  >
    Logout
  </Button>
</Box>


    </nav>
  );
}

export default NavBar;
