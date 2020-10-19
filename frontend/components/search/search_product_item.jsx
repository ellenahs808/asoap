import React from 'react';
import { Link } from 'react-router-dom';



const SearchProductItem = (props) => {
    
    let { product } = props;

    return(
        <div className='searched-item-container'>
            <Link className="searched-item-link" to={`/products/${product.name}/${product.id}`}>
                <span className='searched-item'>
                    {product.name}
                </span>
            </Link>
        </div>
    )
}

export default SearchProductItem;