import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {fetchProducts,deleteProduct} from './behavior'
import Alert from '@material-ui/lab/Alert';
import  ProductCard from '../../components/Card';
import { Redirect } from "react-router-dom";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function ProductPage(props) {

    const { products, loading, errorOccured} = props;
    const [navigate, setnavigate] = useState(false)
    const [selectedProuct, setSelectedProuct] = useState(null)

    //const history = useHistory();

   useEffect(() => {
    props.fetchProducts()
    }, [])

    const deleteItem = (id) => {
        props.deleteProduct(id)
        props.fetchProducts()
      }

    
    const editProduct = (product) => {
        setnavigate(true)
        setSelectedProuct(product)
        //history.push("/edit")
      }
      

   if(navigate) 
       return <Redirect to={{
        pathname: '/edit/'+selectedProuct.productId,
        state: { product:  selectedProuct }
    }} />
    
   if (loading)
    //    return <CircularProgress />
       return (
        <div>
             <BarLoader
                css={override}
                size={150}
                width='200%'
                color={"#123abc"}
                loading={loading}
            />
            {
                products.map((product,index) => 
                    (
                        <ProductCard key={product.productRef}
                        product={product}
                        deleteItem = {deleteItem} 
                        />
                    ))
            }
        </div>
    )

   if (errorOccured)
       return <Alert severity="error">An error Occured</Alert>


    return (
        <div>
            {
                products.map((product,index) => 
                    (
                        <ProductCard key={product.productRef}
                        product={product}
                        deleteItem = {deleteItem} 
                        editItem = {editProduct} 
                        />
                    ))
            }
        </div>
    )
}



const mapStateToProps = (state) => {
    const { products, loading, errorOccured } = state.productsPage;
    return {
        products, loading, errorOccured
    }
}

export default connect(mapStateToProps, { fetchProducts,deleteProduct })(ProductPage);
