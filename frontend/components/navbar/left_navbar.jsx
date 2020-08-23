import React from 'react';
import { Link } from 'react-router-dom';



class LeftNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.open = this.open.bind(this);
    };


    open() {
        this.props.openMainSidebar(true)
    };
 

    render() {
  
        return (

            <div>
                <ul className="left-nav-li">
                    <li><Link className="shop-link" onClick={this.open}>Shop</Link></li>
                    <li><Link className="read-link" onClick={this.open}>Read</Link></li>
                    <li><Link className="stores-link" onClick={this.open}>Stores</Link></li>
                    <li><Link className="search-link" onClick={this.open}>Search</Link></li>
                </ul>
            </div>
        )
    }
};



export default LeftNavbar;

