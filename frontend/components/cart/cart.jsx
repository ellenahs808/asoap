import React from 'react'
import CartItem from './cart_item'
import CartItemContainer from './cart_item_container'


class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true
        }

        this.handleCheckout = this.handleCheckout.bind(this)
    }



    componentDidMount() {
        this.props.fetchProducts()
        this.props.fetchAllCartItems()
    }




    

    handleCheckout(){
        return(e) => {
            e.preventDefault();
            this.props.deleteAllCartItems(this.props.cartItems)
            .then(this.props.openToggle())
            .then(this.props.openModal('checkout'))
        }

        
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
                    openToggle={this.props.openToggle}
                />
            )
        })
        let cartStatus = cartItems.length === 0 ? emptyCart : itemsInCart

        let totalPrice = 0;
        let totalQuantity = 0;
        cartItems.forEach((item) => {
            if (!products[item.product_id]) return null;
            totalPrice += products[item.product_id].price * item.quantity;
            totalQuantity += item.quantity;
        })

        return (
       
            // <main>
                <main className="cart-div">
                    <div className="cart-labels">
                        <li><strong>Cart</strong></li>
                        <li><strong>Size</strong></li>
                        <li><strong>Quantity</strong></li>
                        <li>
                            <div onClick={this.props.openToggle} className="x-btn"> 
                                <strong>X</strong>
                            </div>
                        </li>
                    </div>
                    {cartStatus}
                    <div className="cart-bottom">
                        <div className="cart-bottom-left">
                            <p>Shipping to the United States.</p>
                        </div>
                        <div className="cart-bottom-right">
                            <p>Enjoy complimentary standard shipping on all orders.</p>
                            <div className="subtotal">
                                <p><strong>Subtotal</strong> (Tax Excl.)</p>
                                <div>${totalPrice}.00</div>
                            </div>
                            <button className="checkout" onClick={this.handleCheckout()}>   
                                Checkout
                            </button>
                            <div className="pay-icons">
                                <i className="fab fa-cc-visa"></i>
                                <i className="fab fa-cc-mastercard"></i>
                                <i className="fab fa-cc-amex"></i>
                                <i className="fab fa-cc-diners-club"></i>
                                <i className="fab fa-cc-discover"></i>
                                <i className="fab fa-cc-paypal"></i>
                                <i className="fab fa-alipay"></i>
                                <i className="fab fa-apple-pay"></i>
                                <i className="fab fa-amazon-pay"></i>
                            </div>
                        </div>

                    </div>
                </main>

            // </main>

        )
    }
}


export default Cart;