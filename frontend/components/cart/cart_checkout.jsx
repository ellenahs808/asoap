import React from 'react'


class CartCheckout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        // this.orderNumber = this.orderNumber.bind(this)
    }

    // orderNumber() {
    //     // debugger
    //     console.log(this.props.currentUser)
    //     return Math.floor((Math.random() * 10000) + 1)
    // }

    


    render() {

        const { first_name, last_name } = this.props.currentUser;

        let orderNumber = Math.floor((Math.random() * 100000) + 1)


        return (
            <div className="checkout-form" 
                onClick={e => e.stopPropagation() }>
       
                    <div>
                        <p>Thank you for your purchase {first_name} {last_name}
                            <br />
                            Your order number is <strong>{orderNumber}</strong>
                        </p>
                    </div>

                    <div className="recent-projects">

                        <p>Please Visit My Recent Projects!</p>
                        <div>
                            <a href="https://github.com/ellenahs808" ><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/shanelle-valencia/" ><i className="fab fa-linkedin"></i></a>
                            <a href="https://angel.co/u/shanelle-valencia" ><i className="fab fa-angellist"></i></a>
                        </div>
                    </div>
            </div>
        )
    }
}


export default CartCheckout;