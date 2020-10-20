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
    }



    openToggle() {
        this.setState({ open: !this.state.open })
    }




    render() {


        const cart = <CartItemContainer openToggle={this.openToggle} />

        // let shoppingCart = <div className="cart-open" onClick={this.openToggle}>Cart</div>

        let shoppingCart = this.props.currentUser ? <div className="cart-open" onClick={this.openToggle}>Cart</div> : null

        // let testing2 = <div className="cart-open-none" onClick={this.openToggle}>Cart Open</div>

        return (
            <div>
                {this.state.open && cart}
                <nav className="banner"><Banner /></nav>
                <div className="main-nav">
                    <nav className="left-nav">
                        <LeftNavbarContainer />
                        {/* <CategorySidebarContainer /> */}
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