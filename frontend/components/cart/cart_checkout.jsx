import React from 'react'


class CartCheckout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="checkout-form" onClick={e => e.stopPropagation()}>
                <p>Thank you for your purchase</p>
                <p>Please Visit My Recent Projects!</p>
                <div>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-angellist"></i>
                </div>
            </div>
        )
    }
}


export default CartCheckout;