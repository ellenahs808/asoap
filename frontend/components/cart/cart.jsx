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



    handleCheckout() {
        return (e) => {
            e.preventDefault();
            if (this.props.currentUserId) {
                // this.props.deleteAllCartItems(this.props.checkoutItems)
                this.props.openModal("checkout");
                //     .then(console.log("Checkout"))
            }
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
                    toggleOpen={this.props.toggleOpen}
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
       
            <main>
                <div className="cart-div">
                    <div className="cart-labels">
                        <li>Cart</li>
                        <li>Size</li>
                        <li>Quantity</li>
                        <li>
                            {/* doesnt work */}
                            <div onClick={this.props.toggleOpen} className="x-btn"> 
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
                                <p>Subtotal (Tax Excl.)</p>
                                <div>${totalPrice}.00</div>
                            </div>
                            <button className="checkout" onClick={this.handleCheckout()}>Checkout</button>
                            <div>
                                <i class="fab fa-cc-visa"></i>
                                <i class="fab fa-cc-mastercard"></i>
                                <i class="fab fa-cc-amex"></i>
                                <i class="fab fa-cc-diners-club"></i>
                                <i class="fab fa-cc-discover"></i>
                                <i class="fab fa-cc-paypal"></i>
                                <i class="fab fa-alipay"></i>
                            </div>
                        </div>

                    </div>
                </div>

            </main>

        )
    }
}


export default Cart;