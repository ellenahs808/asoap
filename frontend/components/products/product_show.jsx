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
                <div className='main-show-container'>
                <div>
                    <div className='asoap-logo'><Link to="/"><img src={window.images.logo} /></Link></div>
                    <div className="prod-show-img"><img src={photoUrls[0]} width="10%" height="10%" /></div>
                </div>
                <div>
                    <div className='first-detail-container'>
                        <h3>{category} - {sub_category}</h3>
                        <div>{name}</div>
                        <div>{description}</div>
                    </div>
                    <div className='second-detail-container'>
                        <div>
                            <h3>{subCategoryDetail[0]}</h3>
                            <p>{subCategoryDetail[1]}</p>
                        </div>
                        <div>
                            <h3>Aroma</h3>
                            <p>{aroma}</p>
                        </div>
                        <div>
                            <h3>Key Ingredients</h3>
                            <p>{key_ingredients}</p>
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>
                </div>


                <div className='main-show-container'>
                    <div>
                        <div><img src={prodImg}/></div>
                    </div>
                    <div>
                        <div>
                            <h3>How to use</h3>
                            <p>{how_to_use}</p>
                        </div>
                        <div>
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







// <ul>
//     <img src={product.photoUrls[0]} />
//     <li>{product.category}</li>
//     <li>{product.sub_category}</li>
//     <h3>{product.name}</h3>
//     <li>{product.description}</li>
//     <li>{product.size}</li>
//     {/* <li>{product.price}</li>   add to your cart button  */}
//     <li>{product.how_to_use}</li>
//     <li>{product.key_ingredients}</li>
//     <li>{product.suited_to}</li>
//     <li>{product.skin_feel}</li>
//     <li>{product.dosage}</li>
//     <li>{product.texture}</li>
//     <li>{product.aroma}</li>
// </ul>