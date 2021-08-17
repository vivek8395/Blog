import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=6&m=887987150&s=612x612&w=0&h=LNwDiO847vPnFnrTWLvaoessy-Uf3hctFxa1SpyEyNU=')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  }
  
}));

const Blog = () => {
      const classes = useStyles();
      return (
            <div>
            <Box className={classes.hero}>
        <Box>Author Blog</Box>
      </Box>
            </div>
      )
}

export default Blog
