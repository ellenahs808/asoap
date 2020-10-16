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


    handleQuantity() {
        return (e) => {
            this.setState({ quantity: e.target.value }, () => this.props.updateCartItem(this.state))
        }
    }


    quantityDropDown() {
        let qty = [];
        for (let i = 1; i <= 5; i++) {
            qty.push(<option value={`${i}`} key={i} >{i}</option>)
        }
        return qty;
    }


    handleRemoveItem() {
        return(e) => {
            e.preventDefault()
            this.props.deleteCartItem(this.props.cartId)
                .then(console.log("removed"))
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
                    <div className="update-qty">
                        <select id="cart" value={quantity} onChange={this.handleQuantity()}>
                            {this.quantityDropDown()}
                        </select>
                        <div className="remove-cart-item">
                            <button onClick={this.handleRemoveItem()}>Remove</button>
                        </div>
                    </div>
                    <div>{quantity}</div>
                    <div>{ product.price }</div>
                </div>

            </div>
        )
    }
}


export default CartItem