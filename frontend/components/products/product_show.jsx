import React from 'react';
import { Link } from 'react-router-dom';




class ProductShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            size: '',
        }

        this.handleClick = this.handleClick.bind(this)
        // this.addItem = this.addItem.bind(this);
    }


    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchAllCartItems();
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.productId !== this.props.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }



    addItem(newItem) {
        // debugger
   
        let cartItemsId = this.props.userCartItems

        let sameItem = cartItemsId.some((item) => item.product_id === newItem.id)
        // let itemValues = cartItemsId.some((item) => {
        //     item.product_id === newItemId
        // })

        let currentItem = cartItemsId.find( (item) => {
            // debugger
            return item.quantity
        })
        console.log(currentItem.quantity)



        // const inventory = [
        //     {name: 'apples', quantity: 2},
        //     {name: 'bananas', quantity: 0},
        //     {name: 'cherries', quantity: 5}
        // ];

        // const result = inventory.find( ({ name }) => name === 'cherries' );

        // console.log(result) // { name: 'cherries', quantity: 5 }



    
        // console.log(newItemId)
        // console.log(cartItemsId)
        // console.log(sameItem)
        // console.log(itemValues)
        // console.log(newItem)
        // console.log(itemValues)
        
        if (sameItem) {
            // debugger
            let updatedItem = {
                user_id: this.props.currentUserId,
                product_id: newItem.id,
                quantity: currentItem.quantity + 1
            }

            this.props.updateCartItem(updatedItem)
        } else {
            this.props.createCartItem({
                user_id: this.props.currentUserId,
                product_id: newItem.id,
                quantity: 1,
            });
        }

        this.props.history.push('/');
        // window.location.reload(false);
    }


    handleClick(e) {
        // console.log(this.props)
        // return ( 
        //     this.props.createCartItem(this.state)
        // )

        e.preventDefault();
        // debugger
        if (this.props.currentUserId) {
            let productIdArray = this.props.userCartItems.map(item => (
                item.product_id
            ))
            // if (!productIdArray.includes(this.props.product.id)) {
            this.addItem(this.props.product);

        } else {
            this.props.history.push('/login')
        }



        // e.preventDefault()
        // let { product } = this.props

        // if (this.props.currentUserId) {
        //     product['quantity'] = this.state.quantity
        //     this.props
        //         .createCartItem({ cart_item: { product: product } })
        // } else {
        //     this.props.history.push("/login")
        // }

    }



    // handleClick() {
    //     let existingCartItem;
    //     const cart = this.props.cartItems 
    //     const { product } = this.props 
    //     console.log(product)

    //     // cart.forEach((item) => {
    //     //     if (item.product_id === product.id) {
    //     //         existingCartItem = item
    //     //     }
    //     // })

    //     console.log(Object.values(cart).product_id)
    // }

    render() {
        
        if (!this.props.product) return null;
        const { photoUrls, category, sub_category, name, price, description, key_ingredients, how_to_use, dosage, texture, aroma } = this.props.product;
        
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
                <div className='asoap-logo-show'><Link to="/"><img src={window.images.logo}  /></Link></div>

                <div className='main-show-container'>
                    <div className="first-img-container">
                            <div className="prod-show-img"><img src={photoUrls[0]} width="200px" height="450px" /></div>
                    </div>
                    <div className="detail-container">
                        <div className='first-detail-container'>
                            {/* <div className="detail1">{category} - {sub_category}</div> */}
                            <div className="detail1">{name}</div>
                            <div className="detail2">{description}</div>
                        </div>
                        <div className='second-detail-container'>
                            <div className="detail3">
                                <h3 className="product-key">{subCategoryDetail[0]}</h3>
                                <p className="product-val">{subCategoryDetail[1]}</p>
                            </div>
                            <div className="detail3">
                                <h3 className="product-key">Aroma</h3>
                                <p className="product-val">{aroma}</p>
                            </div>
                            <div className="detail4">
                                <h3 className="product-key">Key Ingredients</h3>
                                <p className="product-val">{key_ingredients}</p>
                            </div>
                          
                                <button className="cart-btn" onClick={this.handleClick}>Add to your cart - ${price}.00</button>
                            </div>
                    </div>
                <div>
            </div>
                </div>


                <div className='main-second-container'>
                    <div className="second-img-container">
                        <img src={prodImg} className="prod-img" />
                    </div>
            
                    <div className="third-detail-container">
                        <div className="detail2">
                            <h3 className="product-key">How to use</h3>
                            <p className="how-to-use">{how_to_use}</p>
                        </div>
                    
                    {/* <div className='second-detail-container'> */}
                        <div className="detail3">
                            <h3 className="product-key">Dosage</h3>
                            <p className="product-val">{dosage}</p>
                        </div>
                    {/* </div> */}
                        <div className="detail3">
                            <h3 className="product-key">Texture</h3>
                            <p className="product-val">{texture}</p>
                        </div>
                        <div className="detail4">
                            <h3 className="product-key">Aroma</h3>
                            <p className="product-val">{aroma}</p>
                        </div>
                    </div>
                </div>

   
            </div>
        )
    }
};



export default ProductShowItem;






