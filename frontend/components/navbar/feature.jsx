import React from 'react';
import { Link } from 'react-router-dom';


class Feature extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        // this.state = {
        //     hover: this.props.hover
        // }
    }


    componentDidMount () {
        this.props.fetchProducts();
    }




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

    // componentDidUpdate() {
    //     if (this.props.)
    // }




    render() {
        // debugger
        const { products, skinCategory, hairCategory, bodyCategory } = this.props;


        let filteredProducts;
       
        if (this.props.hover === "Skin") {
            filteredProducts = products.filter((product) => product.category === "Skin")
        } else if (this.props.hover === "Hair") {
            filteredProducts = products.filter((product) => product.category === "Hair")
        } else {
            filteredProducts = products.filter((product) => product.category === "Body & Hand")
        }

        // console.log("THIS")
        // console.log(products[0])
  

        let randomize = Math.floor((Math.random() * filteredProducts.length - 1) + 1)
        let product = filteredProducts[randomize]
        let caption = product.skin_feel || product.aroma

        // console.log(randomize)
        // console.log(products)
        // console.log(product)
        // console.log(this.props)
        // console.log(product.skin_feel)
        // console.log(product.caption)
        

        return (
            <div className="blahh">
                <main className="main-feature-container">
                    <div className="feature-div">
                        <div className="feature-close-btn"><p onClick={ () => {this.props.closeModal(); this.props.closeSidebar();} }>X</p></div>
   
                        <h1 className="product-name">{product.name}</h1>
                        <div className="feature-img">
                            <Link 
                                to={`/products/${product.name}/${product.id}`} 
                                onClick={ () => {this.props.closeModal(); this.props.closeSidebar();} }>
                                    <img src={ product.photoUrls[0] } alt="Photo" 
                                    height="450px"
                                    width="190px"/>
                            </Link>
                        </div>
    
                        <div><p className="caption">{caption}</p></div>
            
                        </div>

                    
                </main>

            </div>
        )
    }
}




export default Feature;