import React from 'react'
import { Link } from 'react-router-dom';

import LeftNavbar from '../navbar/left_navbar'
import SearchProductItem from './search_product_item'


class SearchProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }





    handleInput() {
        return (e) => {
            this.setState({ search: e.target.value })
        };
    }





    render() {

        const { products } = this.props;

        let filteredProducts = products.filter((product) => {
            let userInput = this.state.search.toLowerCase();

            if (!this.state.search.length) {
                return false;
            }
            if (product.category.toLowerCase().indexOf(userInput) !== -1) {
                return true;
            }
            if (product.name.toLowerCase().indexOf(userInput) !== -1) {
                return true;
            }
            if (product.sub_category.toLowerCase().indexOf(userInput) !== -1) {
                return true;
            }
            if (product.texture.toLowerCase().indexOf(userInput) !== -1) {
                return true;
            }
            if (product.aroma.toLowerCase().indexOf(userInput) !== -1) {
                return true;
            }
        })

        

        let filtered;
        if (!products.length) {
            return null;
        } else {
            filtered = (
                filteredProducts.map((product) => {
                    return (
                        // <div key={product.id} onClick={() => this.props.closeModal()}>
                        //     <SearchProductItem product={product}/>
                        // </div>
                        <SearchProductItem 
                            key={product.id}
                            product={product}
                            onClick={() => this.props.closeModal()}
                        />
                    )
                })
            )
        }

        return (
            <div id="slider" className="slide-in">

                <div id="search-wrap">
                    <div className="first-sidebar-nav-li-div">
                        <div className="sidebar-nav-li">
                            <LeftNavbar />
                            <p className="close-btn-nav"><button className="sidebar-close-btn" onClick={() => this.props.closeModal()}>X</button></p>
                        </div>
                    </div>

            
                    <div className="asoap-logo"><Link to="/"><img src={window.images.logo} onClick={this.close}/></Link>
                        <br /><br /><br /><br />
                        <div className='search-form-wrap'>
                            <input type="text" value={ this.state.search } onChange={this.handleInput()} className="search-input" />

                            <ul onClick={() => this.props.closeModal()}>
                                <li>{filtered}</li>
                            </ul>

                        </div>
                    </div>
                        
                </div>

            </div>
        )
    }
    
}


export default SearchProducts;