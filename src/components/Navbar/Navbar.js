import React from "react";
import logo from "../../logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#fff",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#eb2f06",
  },
  logo: {
    height: "50px",
    width: "auto",
    padding: "10px 0px",
    // paddingLeft: "15vw"
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.header}>
        <Container>
          <Toolbar>
            <img src={logo} alt="" className={classes.logo} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
