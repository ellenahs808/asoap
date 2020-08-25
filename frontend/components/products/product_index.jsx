import React from 'react';
import { Link } from 'react-router-dom';
// import ProductShowContainer from './product_show_container';



class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        
    };


    componentDidMount() {
        this.props.fetchProducts();
    };



    render() {
        // debugger
        const { product, categories, products, skinCategory } = this.props;
        if (!products) return null;

        return (
            <div className="product-idx-main-div">
                <div className="product-idx-sub-header">
                    <div className="asoap-logo"><Link to="/"><img src={window.images.logo}  /></Link></div>
                    <h1 className="skin-subheader">Skin</h1>
                </div>
                    
                <div className="sub-category-img">
                    {
                        products.map((product) => {
                            return (
                                <ul>
                                    <li><img src={ product.photoUrls[0]}/></li>
                                    <li>{product.name}</li>
                                    <li>{product.size}</li>
                                    <li>{product.price}</li>
                                </ul>
                            )
                        })
                    }

                </div>



       
            </div>
        )
    }
};


export default ProductIndex;