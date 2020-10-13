import React from 'react'


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