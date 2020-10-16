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
        let cartStatus = cartItems.length === 0 ? emptyCart : itemsInCart

        return (
       
            <main>
                <div className="cart-div">
                    <div className="cart-labels">
                        <li>Cart</li>
                        <li>Size</li>
                        <li>Quantity</li>
                        <li><strong>X</strong></li>
                    </div>
                    {cartStatus}
                </div>

            </main>

        )
    }
}


export default Cart;