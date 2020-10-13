import React from 'react'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.cartId,
            product_id: props.productId,
            qty: props.qty
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link to={``}>
                    </Link>
                </div>

            </div>
        )
    }
}


export default CartItem