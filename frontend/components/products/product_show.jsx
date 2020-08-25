import React from 'react';
import { Link } from 'react-router-dom';



class ProductShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        const { product } = this.props
        if (!product) return null;

        return (
            <div>
                <ul>
                    <img src={product.photoUrls[0]} /> 
                    <li>{product.category}</li>
                    <li>{product.sub_category}</li>
                    <h3>{product.name}</h3>
                    <li>{product.description}</li>
                    <li>{product.size}</li>
                    {/* <li>{product.price}</li>   add to your cart button  */}
                    <li>{product.how_to_use}</li>
                    <li>{product.key_ingredients}</li>
                    <li>{product.suited_to}</li>
                    <li>{product.skin_feel}</li>
                    <li>{product.dosage}</li>
                    <li>{product.texture}</li>
                    <li>{product.aroma}</li>
                </ul>
            </div>
        )
    }
}

export default ProductShowItem;




