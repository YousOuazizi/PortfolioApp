import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "", // Champ pour le type d'enquête
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique d'envoi du formulaire
    console.log(formData); // Pour l'exemple, nous affichons les données dans la console
  };

  return (
    <div>
      <Paper
        elevation={3}
        style={{ padding: "40px", backgroundColor: "#552ca7", width: "100%" }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "white" }}
        >
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            style={{ backgroundColor: "#552ca7", color: "white", width: "70%" }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            style={{ backgroundColor: "#552ca7", color: "white", width: "70%" }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          <FormControl margin="normal" style={{ width: "70%" }}>
            <InputLabel style={{ color: "white" }}>Type of Enquiry</InputLabel>
            <Select
              label="Type of Enquiry"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#552ca7",
                color: "white",
              }}
              InputLabelProps={{ style: { color: "white" } }}
            >
              <MenuItem value="General">General</MenuItem>
              <MenuItem value="Technical">Technical</MenuItem>
              <MenuItem value="Billing">Billing</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            required
            style={{ backgroundColor: "#552ca7", color: "white", width: "70%" }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", width: "50%" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ContactForm;
