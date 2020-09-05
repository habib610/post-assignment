import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "50px",
    border: "2px solid tomato",
    borderRadius: "10px",
    float: "left",
    margin: "1%",
    height: "480px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  media: {
    height: 140,
  },
  title: {
    color: "#eb2f06",
    textTransform: "capitalize",
    fontWeight: "500",
  },
});

const PostDetails = (props) => {
  const { id, title, body } = props.user;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_1280.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h4">
              Use ID: {id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/post/${id}`}>
            <Button variant="contained" color="primary">
              See More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default PostDetails;
