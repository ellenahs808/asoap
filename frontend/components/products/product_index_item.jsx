import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';

class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.forceUpdate()
    }

    render() {
        const { id, name, size, price, photoUrls} = this.props.product

        return (
            
            <div className="testing">
                <div className="sub-category-container">
                    <Link to={`/products/${id}`} className="product-link" className="product-itm-link">
        
                        <div><img src={photoUrls[0]} width="150px" height="380px" /></div>
                            <h2>{name}</h2>
                            <p className="prod-size-price">{size} / ${price}.00</p>
        
                    </Link>
                </div>
            </div>
        )
    }
};



export default ProductIndexItem;