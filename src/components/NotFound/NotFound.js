import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  bigWarning: {
    color: "red",
    fontSize: "60px",

    fontWeight: "700",
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "60vh",
  },
});
const NotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <Typography className={classes.bigWarning}>404</Typography>
        <Typography variant="h5" component="h5">
          Sorry, Page Not Found
        </Typography>
      </Container>
    </div>
  );
};

export default NotFound;
