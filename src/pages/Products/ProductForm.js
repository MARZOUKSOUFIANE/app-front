import React from 'react'
import {useFormik} from 'formik'
import Paper from '@material-ui/core/Paper';
import {addProduct} from './behavior'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  form: {
      padding: 20
  }
}));



function ProductForm(props) {

    const classes = useStyles();

    const history = useHistory();

    const product = props.location.state? props.location.state.product: null

    const formik = useFormik({ 
        enableReinitialize: false,
        initialValues: {
            productId: product? product.productId: '',
            productRef: product? product.productRef: '',
            productQuantity: product? product.productQuantity: '',
            productPrice: product? product.productPrice: '',
            productDescription: product? product.productDescription: '',
            productTitle: product? product.productTitle: '',
            productImageUrl: product? product.productImageUrl: '',
            productCategory: product? product.productCategory: '',
            productIsActive: product? product.productIsActive: ''
        },
        onSubmit: values => {
            props.addProduct(values)
            history.push('/')
        }
    })

    return (
        <div className={classes.root}>
           <Paper  className={classes.form} elevation={3}>
           <form onSubmit={formik.handleSubmit} >
           <    label htmlFor='ref' >Product Ref</label>
                <input  type='number' id='ref' name='productRef' onChange={formik.handleChange} value={formik.values.productRef} />

                <label htmlFor='qte' >productQuantity</label>
                <input  type='number' id='qte' name='productQuantity' onChange={formik.handleChange} value={formik.values.productQuantity} />

                <label htmlFor='price' >productPrice</label>
                <input  type='number' id='price' name='productPrice' onChange={formik.handleChange} value={formik.values.productPrice} />

                <label htmlFor='description' >productDescription</label>
                <input  type='text' id='description' name='productDescription' onChange={formik.handleChange} value={formik.values.productDescription} />

                <label htmlFor='title' >productTitle</label>
                <input  type='text' id='title' name='productTitle' onChange={formik.handleChange} value={formik.values.productTitle} />

                <label htmlFor='image' >productImageUrl</label>
                <input  type='text' id='image' name='productImageUrl'onChange={formik.handleChange} value={formik.values.productImageUrl} />

                <label htmlFor='category' >productCategory</label>
                <input  type='text' id='category' name='productCategory' onChange={formik.handleChange} value={formik.values.productCategory}/>

                <label htmlFor='active' >productIsActive</label>
                <input  type='text' id='active' name='productIsActive' onChange={formik.handleChange} value={formik.values.productIsActive} />

                <button type='submit'>Sumbit</button>
            </form>
           </Paper>
        </div>
    )
}


const mapStateToProps = (state) => {
    const { products, loading, errorOccured } = state.productsPage;
    return {
        products, loading, errorOccured
    }
}
export default connect(mapStateToProps, { addProduct })(ProductForm);

