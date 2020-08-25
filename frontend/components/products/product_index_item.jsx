import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="product-index-item">
                <Link to={`/products/${name}~${id}`} className="product-link">
                    <div className="sub-category-container">
                        <ul className="prod-idx-item-li">
                            <li className="prod-idx-img"><img src={photoUrls[0]} width="100%" height="90%"/></li>
                            <li>{name}</li>
                            <li>{size} / ${price}.00</li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    }
};



export default ProductIndexItem;