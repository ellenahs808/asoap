import React from 'react'
import CartItem from './cart_item'


class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="cart-div">
                <h1>This is the cart component</h1>
                <div className="cart-labels">
                    <CartItem
                        
                    />
                </div>
            </div>
        )
    }
}


export default Cart;