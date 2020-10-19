import React from 'react';
import { Link } from 'react-router-dom';



class LeftNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.open = this.open.bind(this);
        this.handleSlideAnimation = this.handleSlideAnimation.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    };


    open() {
        this.props.openSidebar(true)
    };


    handleSlideAnimation(){
        // let searchBody = document.getElementById('search-wrap');
        // window.setTimeout(() => this.props.closeModal(), 300);
        // searchBody.style.transition = "all 0.3s ease-in-out";
        // searchBody.style.left = "-1000px";

        let searchBody = document.getElementById("search-wrap")
        searchBody.style.width = "500px";
    }

    handleSearch() {
        return (
            this.props.openModal('search'),
            this.handleSlideAnimation()
        )
    }
 

    render() {

        return (

            <div>
                <ul className="left-nav-li">
                    <li className="shop-link" onClick={this.open}>Shop</li>
                    <li className="read-link" onClick={this.open}>Read</li>
                    <li className="stores-link" onClick={this.open}>Stores</li>
                    <li className="search-link" onClick={this.handleSearch()}>Search</li>
                </ul>
            </div>
        )
    }
};



export default LeftNavbar;

