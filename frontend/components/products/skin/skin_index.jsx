import React from 'react';
import { Link } from 'react-router-dom';
import ProductIndexItem from '../product_index_item';




class SkinIndex extends React.Component {
    constructor(props) {
        super(props)
        
    };


    componentDidMount() {
        this.props.fetchProducts();
    };



    render() {
        const { product, categories, products, skinCategory } = this.props;
        if (!products) return null;

        const skinProducts = products.filter((product) => product.category === 'Skin')
        const cleanse = skinProducts.filter((product) => product.sub_category === 'Cleanse')
        const exfoliate = skinProducts.filter((product) => product.sub_category === 'Exfoliant')
        const treat = skinProducts.filter((product) => product.sub_category === 'Treat & Masque')
        const toner = skinProducts.filter((product) => product.sub_category === 'Toner')



        return (
            
            <div className="product-idx-main-div">
                <div className="product-idx-sub-header">
                    <div className="asoap-logo"><Link to="/"><img src={window.images.logo} /></Link></div>
                    <h1 className="category-subheader">Skin</h1>
                </div>

                <div>
                    <div className="sub-category-products1">
                        <div className="sub-category-container">
                            <div className="sub-category-detail">
                                <div className="sub-category-detail-div">
                                    <h1 className="sub-category-name">Cleanse</h1>
                                    <p className="sub-category-par">Cleansing skin of daily grime, sweat and other impurities forms the foundation of an intelligent skin care regimen.</p>
                                </div>
                            </div>

                            {cleanse.map((product) => (
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
                                    <h1 className="sub-category-name">Exfoliate</h1>
                                    <p className="sub-category-par">Effective exfoliation liberates skin of grime, excess oil and dead skin cells to reveal soft, fresh and smooth skin.</p>
                                </div>
                            </div>

                            {exfoliate.map((product) => (
                                <ProductIndexItem product={product} key={product.id} />
                            ))}

                        </div>
                    </div>
                </div>


                <div>
                    <div className="sub-category-products1">
                        <div className="sub-category-container">
                            <div className="sub-category-detail">
                                <div className="sub-category-detail-div">
                                    <h1 className="sub-category-name">Treat & Masque</h1>
                                    <p className="sub-category-par">Formulations to supplement any regimen, from deep-cleansing masques to hydrating treatments and nourishing facial oils.</p>
                                </div>
                            </div>


                            {treat.map((product) => (
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
                                    <h1 className="sub-category-name">Tone</h1>
                                    <p className="sub-category-par">The ever-important connection between cleansing and hydrating, toning balances skin to ensure it derives maximum benefits from hydration.</p>
                                </div>
                            </div>


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


export default SkinIndex;







