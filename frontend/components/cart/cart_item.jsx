import React from 'react'
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.cartId,
            product_id: props.productId,
            quantity: props.quantity
        }
    }

    render() {
        let { product, quantity, openToggle } = this.props
        if (!product) return null;

        return (
            <div>
                <div className="cart-item">
                    <Link to={`/products/${product.id}`} onClick={openToggle}>
                        { product.name }
                    </Link>
                    <h2>{ product.size }</h2>
                    <h2>{ quantity }</h2>
                    <div>{ product.price }</div>
                </div>

            </div>
        )
    }
}


export default CartItem