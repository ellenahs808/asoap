import React from 'react';
import { Link } from 'react-router-dom';


class SearchProductItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
    }


    handleMouseEnter(productId) {
        return () => {
            e.preventDefault();
            this.props.hoverProduct(productId),
            this.props.openSidebar('searchResult')
        }
    }



    render() {
        const { product } = this.props;

        return (
            <div className='searched-item-container'>
                <Link onMouseEnter={this.handleMouseEnter(product.id)} className="searched-item-link" to={`/products/${product.name}/${product.id}`}>
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






// const SearchProductItem = (props) => {
    
//     let { product } = props;

//     return(
//         <div className='searched-item-container'>
//             <Link className="searched-item-link" to={`/products/${product.name}/${product.id}`}>
//                 <span className='searched-item'>
//                     {product.name}
//                 </span>
//             </Link>
//         </div>
//     )
// }

export default SearchProductItem;