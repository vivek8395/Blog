import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import axios from "axios";
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => (
  {
    blogsContainer: {
      paddingTop: theme.spacing(3)
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    card: {
      maxWidth: "100%",
    
    },
    media: {
      height: 240
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    author: {
      display: "flex"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center"
    }
}));

const Cards = () => {
  const [data, setdata] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log("response", res.data);
        setdata(res.data);
      })
      .catch();
  }, []);

  return (
    <div > 
      <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
      {data.map((datas) => (
        
        <div>
          <Grid container spacing={3}>
          <Grid item xs={9} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
          </div>
        

      ))}
      <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
    </div>
  );
};

export default Cards;




