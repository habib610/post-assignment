import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import Comments from "../Comments/Comments";

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
  mainPostContainer: {
    background: "rgba(0,0,0,0.022)",
    padding: "20px 30px",
    borderRadius: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  backButton: {
    marginBottom: "50px",
  },
});

const MoreDetails = () => {
  //first api call  for getting user post
  const { userId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  //second api call for getting user comment
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const classes = useStyles();
  return (
    <>
      <h1 className={classes.headerText}> Post ID {post.id} Details </h1>
      <Container maxWidth="sm" className={classes.mainPostContainer}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.postTitle}
        >
          {post.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Post:{post.body}
        </Typography>
        <Box>
          {comments.map((comment) => (
            <Comments comment={comment} key={comment.id}></Comments>
          ))}
        </Box>
      </Container>
      <Container className={classes.backButton}>
        <Link to="/home">
          <Button variant="contained" color="secondary">
            Back to Home
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default MoreDetails;
