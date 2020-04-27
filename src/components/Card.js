import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 30
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing(1),
  }
}));

export default function ProductCard({product,deleteItem,editItem}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        title={product.productTitle}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={product.productImageUrl}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.productDescription}
        </Typography>
      </CardContent>
      <CardActions>

      <div>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        endIcon={<DeleteIcon />}
        onClick={() => deleteItem(product.productId)}
      >
        Delete
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        endIcon={<EditIcon/>}
        onClick={() => editItem(product)}
      >
        Edit
      </Button> 
    </div>
      
      </CardActions>
    </Card>
  );
}
