import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './actionTypes'
import axios from 'axios'
import KeycloakService from '../../keycloak/index'


const initialState = {
    products: [],
    loading: false,
    errorOccured: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                products: state.products,
                loading: true,
                errorOccured: false
            };

        case FETCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                errorOccured: false,
                products: action.payload
            };

        case FETCH_PRODUCT_FAILURE:
            return {
                products: [],
                loading: false,
                errorOccured: true
            };
        default:
            return state;
    }
};

const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get("http://localhost:8081/api/products", {
            headers: {
                Authorization: 'Bearer ' + KeycloakService.getToken() //the token is a keycloak token
            }
        })
            .then(response => {
                const products = response.data
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductsFailure(errorMsg))
            })
    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {
        axios.delete("http://localhost:8081/api/products/"+id, {
            headers: {
                Authorization: 'Bearer ' + KeycloakService.getToken() //the token is a keycloak token
            }
        })
            .then(response => {
                console.log('deleting product with success')
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
            })
    }
}


export const addProduct = (product) => {
    return (dispatch) => {
        axios.put("http://localhost:8081/api/products/"+product.productId, product ,{
            headers: {
                Authorization: 'Bearer ' + KeycloakService.getToken() //the token is a keycloak token
            }
        })
            .then(response => {
                console.log('adding product with success')
                fetchProducts()
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
            })
    }
}