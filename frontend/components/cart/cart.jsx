import React from 'react'
import CartItem from './cart_item'


class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchProducts()
        this.props.fetchAllCartItems()
    }

    render() {
        let { currentUserId, products, cartItems, updateCartItem, deleteCartItem } = this.props;

        let emptyCart = <div className="empty-cart" >You have no items in your cart</div>;
        let itemsInCart = cartItems.map((item) => {
            return (
                <CartItem 
                    key={item.id}
                    product={products[item.product_id]}
                    productId={item.productId}
                    cartId={item.id}
                    quantity={item.quantity}
                    updateCartItem={updateCartItem}
                    deleteCartItem={deleteCartItem}
                    toggleOpen={this.props.toggleOpen}
                />
            )
        })
        return (
       
            <div className="cart-div">
                <h1>This is the cart component</h1>
                <div className="cart-labels">
                    <li>Cart</li>
                    <li>Size</li>
                    <li>Quantity</li>
                    <li>X</li>
                </div>
            </div>

        )
    }
}


export default Cart;