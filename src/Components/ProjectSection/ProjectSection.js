import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import projects from "./projectData";

const ProjectSection = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#005430" }}>
      <Typography
        variant="h4"
        style={{ marginBottom: "20px", display: "flex", color: "#ffff" }}
      >
        Featured Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={10} sm={6} key={project.title}>
            <Card style={{ borderRadius: "10px" }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                style={{ objectFit: "cover" }}
              />
              <CardContent style={{ padding: "16px", textAlign: "left" }}>
                {" "}
                <Typography variant="h6" style={{ marginBottom: "8px" }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginBottom: "16px" }}
                >
                  {project.description}
                </Typography>
                <Button variant="text" color="primary">
                  See more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectSection;
