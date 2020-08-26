import React from 'react';
import { Link } from 'react-router-dom';



class ProductShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchProduct(this.props.match.params.productId);
    }



    render() {
        
        if (!this.props.product) return null;
        const { photoUrls, category, sub_category, name, description, key_ingredients, how_to_use, dosage, texture, aroma } = this.props.product;
        
        const skinFeel = this.props.product.skin_feel
        let feelOrSuited;
        if (!skinFeel) {
            feelOrSuited = {
                suit1: "Suited to",
                suit2: this.props.product.suited_to 
            }
        } else {
            feelOrSuited = {
                feel1: "Skin feel",
                feel2: skinFeel
            }
        };

        let subCategoryDetail = Object.values(feelOrSuited)



        const prodName = this.props.product.name
        let prodImg;
        if (prodName.includes("Tea Tree")) {
            prodImg = window.images.powder
        } else if (prodName.includes("Chamomile")) {
            prodImg = window.images.moisturizer
        } else if ((prodName.includes("Paste")) || (prodName.includes("Balm")) || (prodName.includes("Purifying"))) {
            prodImg = window.images.paste
        } else {
            prodImg = window.images.cleanser
        };



        return (
            <div>
                <div className='asoap-logo-show'><Link to="/"><img src={window.images.logo} /></Link></div>

                <div className='main-show-container'>
                    <div className="first-img-container">
                            <div className="prod-show-img"><img src={photoUrls[0]} width="90%" height="90%" /></div>
                    </div>
                    <div className="detail-container">
                        <div className='first-detail-container'>
                            {/* <div className="detail1">{category} - {sub_category}</div> */}
                            <div className="detail1">{name}</div>
                            <div className="detail2">{description}</div>
                        </div>
                        <div className='second-detail-container'>
                            <div className="detail3">
                                <h3>{subCategoryDetail[0]}</h3>
                                <p>{subCategoryDetail[1]}</p>
                            </div>
                            <div className="detail4">
                                <h3>Aroma</h3>
                                <p>{aroma}</p>
                            </div>
                            <div className="detail5">
                                <h3>Key Ingredients</h3>
                                <p>{key_ingredients}</p>
                            </div>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                <div>
            </div>
                </div>


                <div className='main-show-container'>
                    <div className="second-img-container">
                        <div><img src={prodImg}/></div>
                    </div>
                    <div className="detail-container">
                        <div className='first-detail-container'>
                            <h3>How to use</h3>
                            <p>{how_to_use}</p>
                        </div>
                        <div className='second-detail-container'>
                            <h3>Dosage</h3>
                            <p>{dosage}</p>
                        </div>
                        <div>
                            <h3>Texture</h3>
                            <p>{texture}</p>
                        </div>
                        <div>
                            <h3>Aroma</h3>
                            <p>{aroma}</p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
};



export default ProductShowItem;






