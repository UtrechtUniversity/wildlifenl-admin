import React from "react";
import { TableRow, TableCell, TextField, Button } from "@mui/material";
import SpeciesAPI from "../../api/Species";

const SpeciesTableRow = ({ species, setData }) => {
  const handleInputChange = (field, value) => {
    setData((prevData) =>
      prevData.map((s) => (s.ID === species.ID ? { ...s, [field]: value } : s))
    );
  };

  const handleSubmit = async () => {
    try {
      await SpeciesAPI.updateSpecies(species.ID, species);
      console.log("Species updated successfully", species);
    } catch (error) {
      console.error("Error updating species", error);
    }
  };

  return (
    <TableRow>
      <TableCell>
        <TextField value={species.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} />
      </TableCell>
      <TableCell>
        <TextField value={species.commonName || ""} onChange={(e) => handleInputChange("commonName", e.target.value)} />
      </TableCell>
      <TableCell>
        <TextField multiline value={species.description || ""} onChange={(e) => handleInputChange("description", e.target.value)} />
      </TableCell>
      <TableCell>
        <TextField value={species.category || ""} onChange={(e) => handleInputChange("category", e.target.value)} />
      </TableCell>
      <TableCell>
        <TextField multiline value={species.advice || ""} onChange={(e) => handleInputChange("advice", e.target.value)} />
      </TableCell>
      <TableCell>
        <TextField multiline value={species.behavior || ""} onChange={(e) => handleInputChange("behavior", e.target.value)} />
      </TableCell>
      <TableCell>
        <TextField value={species.roleInNature || ""} onChange={(e) => handleInputChange("roleInNature", e.target.value)} />
      </TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SpeciesTableRow;
