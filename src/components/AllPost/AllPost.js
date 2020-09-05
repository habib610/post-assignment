import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PostDetails from "../PostDetails/PostDetails";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  banner: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
    color: "white",
    display: "flex",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontSize: "50px",
    fontWeight: "700",
    textAlign: "center",
  },
  postHeader: {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "#5f27cd",
    color: "#fff",
    marginTop: "0px",
    padding: "20px",
  },
});

const AllPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const classes = useStyles();
  return (
    <>
      <Box>
        <Box className={classes.banner}>
          User Post Application
          <Typography></Typography>
        </Box>
        <h2 className={classes.postHeader}>Latest Post</h2>
      </Box>

      <Container>
        <Box>
          {post.map((user) => (
            <PostDetails user={user} key={user.id}></PostDetails>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default AllPost;
