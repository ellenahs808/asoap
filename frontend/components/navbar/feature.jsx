import React from 'react';
import { Link } from 'react-router-dom';


class Feature extends React.Component {
    constructor(props) {
        super(props)
        // debugger

    }


    // componentDidMount () {
    //     this.props.fetchProducts();
    // }


    // componentDidUpdate(prevProps, prevState) {
    // // only update chart if the data has changed
    //     // debugger
    //     if (prevProps.hover !== this.props.hover) {
    //         // console.log("hover has changed!")
            
    //         this.setState((prevProps) => {
    //             return { hover: prevProps.hover }
    //         });
    //         console.log(this.state.hover)
    //     }

        
    //     // console.log("prevProps")
    //     // console.log(prevProps.hover)
    //     // console.log(prevState)
    // }




    render() {
        // debugger
        const { closeSidebar, skinCategory, hairCategory, bodyCategory } = this.props;


        let products;
       
        if (this.props.hover === "Skin") {
            products = skinCategory
        } else if (this.props.hover === "Hair") {
            products = hairCategory
        } else {
            products = bodyCategory
        }

        // console.log("THIS")
        // console.log(products[0])
  

        let randomize = Math.floor((Math.random() * products.length) + 1)
        let product = products[randomize]

        // let caption = product.skin_feel || product.aroma

        return (
            <div className="blahh">
                <main className="main-feature-container">
                    <div className="feature-div">
                        <div className="feature-close-btn"><p>X</p></div>
                        {/* <div className="feature-title"><h1>Featured Product</h1></div> */}
                        <div className="feature-img">
                            <Link to={`/products/${product.name}/${product.id}`}>
                                <img src={ product.photoUrls[0] } alt="Photo" 
                                height="460px"
                                width="200px"/>
                            </Link>
                        </div>

    
                        <div className="featured-product">
                            <Link to={`/products/${product.name}/${product.id}`} 
                                to={`/products/${product.name}/${product.id}`} className="product-itm-link" onClick={() => closeSidebar}>
                            
                                    <p>{product.name}</p>
                                    {/* <p>{caption}</p> */}
                        
                            </Link>
                        </div>
            
                



                        </div>

                    
                </main>

            </div>
        )
    }
}




export default Feature;