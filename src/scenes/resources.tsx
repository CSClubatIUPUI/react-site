import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { resources } from "../data/resources";

export const ResourcesScene: React.FC = () => (
  <Grid container direction="column" spacing={2}>
    {resources.map(({
      name, url, urlLabel, imageUrl,
    }) => (
      <Grid item key={name}>
        <Grid container alignItems="center">
          <img src={imageUrl} alt={`${name} Icon`} width="64" style={{ marginRight: "1em" }} />
          <Typography variant="h5" style={{ marginRight: "1em" }}>
            {name}
          </Typography>
          <Link href={url}>
            <Typography>
              {urlLabel || url}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    ))}
  </Grid>
);
