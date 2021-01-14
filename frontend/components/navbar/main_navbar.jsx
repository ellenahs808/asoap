import React, { Component } from 'react'

import Banner from './banner'
import LeftNavbarContainer from './left_navbar_container'
import CategorySidebarContainer from "./category_sidebar_container"
import RightNavbarContainer from './right_navbar_container'
import CartItemContainer from '../cart/cart_item_container'


class MainNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

        this.openToggle = this.openToggle.bind(this)
    }


    
    componentDidMount() {
        if (this.props.currentUser) {
            this.props.fetchAllCartItems()
        }
        window.scrollTo(0, 0)
    }



    openToggle() {
        this.setState({ open: !this.state.open })
    }




    render() {

        // debugger
        const cart = <CartItemContainer openToggle={this.openToggle} />

        let totalQty = 0
        this.props.cartItems.forEach((item) => {
            totalQty += item.quantity
        })

        let showQty = this.props.cartItems.length ? <div className="show-qty-div" onClick={this.openToggle}><p className="show-qty">{totalQty}</p></div> : null
        

        // let shoppingCart = <div className="cart-open" onClick={this.openToggle}>Cart</div>

        let shoppingCart = this.props.currentUser ? <div className="cart-display"><div className="cart-open" onClick={this.openToggle}>Cart</div>{showQty}</div> : null

        return (
            <div>
      
                {this.state.open && cart}
                <nav className="banner"><Banner /></nav>
                <div className="main-nav">
                    <nav className="left-nav">
                        <LeftNavbarContainer />
                    </nav>

                    <nav className="right-nav">
                        <div className="right-nav-greeting">
                            <RightNavbarContainer />
                            {shoppingCart}
                        </div>
                    </nav>

                </div>
            </div>
        )
    }
}


export default MainNavbar