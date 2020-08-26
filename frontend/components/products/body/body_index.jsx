import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from '../product_index_item';




class BodyIndex extends React.Component {
    constructor(props) {
        super(props)

    };


    componentDidMount() {
        this.props.fetchProducts();
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
                                    <h1 className="sub-category-name">Cleanse</h1>
                                    <p className="sub-category-par">Gentle yet efficacious cleansing begins at the scalp, addressing skin at the hair root then along the hair shaft. Select a shampoo that meets specific needs, and cleanse hair as needed rather than daily.</p>
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
                                    <h1 className="sub-category-name">Condition</h1>
                                    <p className="sub-category-par">Our lightweight conditioners hydrate and strengthen hair without weighing it down. Formulations vary to meet the individual needs of coarse, curly, coloured, or chemically-treated hair.</p>
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