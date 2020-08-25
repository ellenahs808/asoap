import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from './product_index_item';
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

        let skinProducts = products.filter((product) => product.category === 'Skin')
        let cleanse = skinProducts.filter((product) => product.sub_category === 'Cleanse')
        let exfoliate = skinProducts.filter((product) => product.sub_category === 'Exfoliant')
        let treat = skinProducts.filter((product) => product.sub_category === 'Treat & Masque')
        let toner = skinProducts.filter((product) => product.sub_category === 'Toner')



        return (
            <div className="product-idx-main-div">
                <div className="product-idx-sub-header">
                    <div className="asoap-logo"><Link to="/"><img src={window.images.logo}  /></Link></div>
                    <h1 className="skin-subheader">Skin</h1>
                </div>
                    
                <div>
                    <div className="sub-category-products">
                        <div className="sub-category-container">
                            <div>
                                <h1>Cleanse</h1>
                                <p>Cleansing skin of daily grime, sweat and other impurities forms the foundation of an intelligent skin care regimen.</p>
                            </div>
                        </div>
                        <div className="sub-category-container">
                            {cleanse.map((product) => (
                                <ProductIndexItem product={product} key={product.id} />
                            ))}
                        </div>
                    </div>
                </div>


                <div>
                    <div className="sub-category-products">
                        <div className="sub-category-container">
                            <div>
                                <h1>Exfoliate</h1>
                                <p>Effective exfoliation liberates skin of grime, excess oil and dead skin cells to reveal soft, fresh and smooth skin.</p>
                            </div>
                        </div>
                        <div className="sub-category-container">
                            {exfoliate.map((product) => (
                                <ProductIndexItem product={product} key={product.id} />
                            ))}
                        </div>
                    </div>
                </div>


                <div>
                    <div className="sub-category-products">
                        <div className="sub-category-container">
                            <div>
                                <h1>Treat & Masque</h1>
                                <p>Formulations to supplement any regimen, from deep-cleansing masques to hydrating treatments and nourishing facial oils.</p>
                            </div>
                        </div>
                        <div className="sub-category-container">
                            {treat.map((product) => (
                                <ProductIndexItem product={product} key={product.id} />
                            ))}
                        </div>
                    </div>
                </div>


                <div>
                    <div className="sub-category-products">
                        <div className="sub-category-container">
                            <div>
                                <h1>Tone</h1>
                                <p>The ever-important connection between cleansing and hydrating, toning balances skin to ensure it derives maximum benefits from hydration.</p>
                            </div>
                        </div>
                        <div className="sub-category-container">
                            {toner.map((product) => (
                                <ProductIndexItem product={product} key={product.id} />
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        )
    }
};


export default ProductIndex;