import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from '../product_index_item';




class BodyIndex extends React.Component {
    constructor(props) {
        super(props)

    };

    
    componentDidMount() {
        this.props.fetchProducts();
        window.scrollTo(0, 0)
    };





    render() {
        const { product, categories, products } = this.props;
        if (!products) return null;

        const bodyProducts = products.filter((product) => product.category === 'Body & Hand')
        const body = bodyProducts.filter((product) => product.sub_category === 'Body')
        const hand = bodyProducts.filter((product) => product.sub_category === 'Hand')



        return (
            <div className="product-idx-main-div">
                <div className="product-idx-sub-header">
                    <div className="asoap-logo"><Link to="/"><img src={window.images.logo} /></Link></div>
                    <h1 className="category-subheader">Body &</h1>
                    <h1 className="category-subheader">Hand</h1>
                </div>

                <div>
                    <div className="sub-category-products1">
                        <div className="sub-category-container">
                            <div className="sub-category-detail">
                                <div className="sub-category-detail-div">
                                    <h1 className="sub-category-name">Body</h1>
                                    <p className="sub-category-par">Body cleansers, hydrators and elegant treatment oils enriched with skin-nourishing botanical ingredients ensure clean, soft and smooth skin throughout the seasons.</p>
                                </div>
                            </div>

                            {body.map((product) => (
                                <ProductIndexItem product={product} key={product.id} />
                            ))}

                        </div>
                    </div>
                </div>


                <div>
                    <div className="sub-category-products2">
                        <div className="sub-category-container">
                            <div className="sub-category-detail">
                                <div className="sub-category-detail-div">
                                    <h1 className="sub-category-name">Hand</h1>
                                    <p className="sub-category-par">Modest instruments to which we owe our daily comforts, the hands deserve care befitting their unflinching service. Accordingly, consider richly aromatic cleansers and balms that hydrate, nourish and soften.</p>
                                </div>
                            </div>

                            {hand.map((product) => (
                                <ProductIndexItem product={product} key={product.id} />
                            ))}

                        </div>
                    </div>
                </div>


            </div>
        )
    }
};


export default BodyIndex;