import React from "react";
import { Box, Typography, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  headerText: {
    textAlign: "center",
    padding: "10px 20px",
    marginBottom: "10px",
    color: "white",
    background: "#5f27cd",
  },
  postTitle: {
    color: "#5f27cd",
    textTransform: "capitalize",
    fontWeight: 700,
  },
  profileDetails: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    borderRadius: "10px",
    padding: "5px",
  },
  profilePicture: {
    borderRadius: "100%",
    marginRight: "20px",
    width: "80px",
    height: "80px",
    border: "2px solid #eb2f06",
  },
  mainPostContainer: {
    background: "rgba(0,0,0,0.022)",
    padding: "20px 30px",
    borderRadius: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  commenterName: {
    color: "#5f27cc",
    textTransform: "capitalize",
  },
});

const Comments = (props) => {
  const { body, email, id, name } = props.comment;

  let photoId = id;
  if (photoId <= 100) {
    photoId = photoId - 1;
  } else if (photoId > 100 && photoId <= 200) {
    photoId = photoId - 101;
  } else if (photoId > 200 && photoId <= 300) {
    photoId = photoId - 201;
  } else if (photoId > 300 && photoId <= 400) {
    photoId = photoId - 301;
  } else if (photoId > 400 && photoId <= 500) {
    photoId = photoId - 401;
  }
  const photoUrl = `https://randomuser.me/api/portraits/men/${photoId}.jpg`;

  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Box className={classes.profileDetails}>
          <Box>
            <img src={photoUrl} alt="" className={classes.profilePicture} />
          </Box>

          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.commenterName}
            >
              Name: {name}
            </Typography>
            <Typography component="p">Email: {email}</Typography>
            <Typography variant="body2" color="textPrimary">
              <strong>Comment:</strong> {body}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography component="p"></Typography>
        </Box>
      </Container>
    </>
  );
};

export default Comments;
