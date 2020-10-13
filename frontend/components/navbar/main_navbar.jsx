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

        this.toggleOpen = this.toggleOpen.bind(this)
    }


    toggleOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {

        const cart = <CartItemContainer toggleOpen={this.toggleOpen} />

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
                </div>
            </div>
        )
    }
}


export default MainNavbar