import React from 'react'
import CartItem from './cart_item'


class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.handleCheckout = this.handleCheckout.bind(this)
        // this.handleToggle = this.handleToggle.bind(this)
    }



    componentDidMount() {
        this.props.fetchProducts()
        this.props.fetchAllCartItems()
    }


    

    handleCheckout(){
        return(e) => {
            e.preventDefault();
            this.props.deleteAllCartItems(this.props.cartItems)
            .then(this.props.openModal('checkout'))
        }

        
    }



    // handleToggle() {
    //     var $slider = document.getElementById('slider');
    //     var $toggle = document.getElementById('toggle');

    //     $toggle.addEventListener('click', function() {
    //         var isOpen = $slider.classList.contains('slide-in');

    //         $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
    //     });

    //     this.openToggle()
    // }



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
       
            <main>
         
                <div className="cart-div">
                    <div className="cart-labels">
                        <li>Cart</li>
                        <li>Size</li>
                        <li>Quantity</li>
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
                                <p>Subtotal (Tax Excl.)</p>
                                <div>${totalPrice}.00</div>
                            </div>
                            <button className="checkout" onClick={this.handleCheckout()}>   
                                Checkout
                            </button>
                            <div>
                                <i className="fab fa-cc-visa"></i>
                                <i className="fab fa-cc-mastercard"></i>
                                <i className="fab fa-cc-amex"></i>
                                <i className="fab fa-cc-diners-club"></i>
                                <i className="fab fa-cc-discover"></i>
                                <i className="fab fa-cc-paypal"></i>
                                <i className="fab fa-alipay"></i>
                            </div>
                        </div>

                    </div>
                </div>

            </main>

        )
    }
}


export default Cart;