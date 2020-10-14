import React, { Component } from 'react'
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


    openToggle() {
        this.setState({ open: !this.state.open })
    }

    render() {

        const cart = <CartItemContainer openToggle={this.openToggle} />

        let testing1 = <div className="cart-open-none" onClick={this.openToggle}>Cart Open None</div>
        let testing2 = <div className="cart-open" onClick={this.openToggle}>Cart Open</div>

        return (
            <div>
                {this.state.open && cart}  
                <div className="main-nav">
                    <nav className="left-nav">
                        <LeftNavbarContainer />
                        <CategorySidebarContainer />
                    </nav>
                    <nav className="right-nav">
                        <RightNavbarContainer />
                    </nav>

                    {testing1}
                    {testing2}
                </div>
            </div>
        )
    }
}


export default MainNavbar