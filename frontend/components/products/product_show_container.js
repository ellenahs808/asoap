import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import ProductShow from './product_show';



const mapSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
})

const mapDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default connect(mapSTP, mapDTP)(ProductShow)