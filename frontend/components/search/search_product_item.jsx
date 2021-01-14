import React from 'react';
import { Link } from 'react-router-dom';


class SearchProductItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
    }


    // updateHoveredProduct(product) {
    //     this.setState({ hoveredProduct: product })
    // }

    handleMouseEnter(productId) {

        return (e) => {
            e.preventDefault();
            // this.props.hoverProduct(productId),
            this.props.openSidebar('searchResult')
        }
    }



    render() {
        const { product } = this.props;

        return (
            <div className='searched-item-container'>
                <Link 
                    // onMouseEnter={() => {this.props.hoverProduct(product.id); this.props.openSidebar('searchResult')}} can add as a feature where hover sidebar also pops when hovering on searched items 
                    onMouseEnter={() => {this.props.openSidebar('searchResult')}} 
                    className="searched-item-link" to={`/products/${product.name}/${product.id}`}>
                    <div>
                        <span className='searched-item'>
                            {product.name}
                        </span>
                    </div>
                </Link>
            </div>
        )
    }
}





export default SearchProductItem;