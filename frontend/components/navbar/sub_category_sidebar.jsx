import React from 'react';
import { Link } from 'react-router-dom';


class SubCategorySidebar extends React.Component {
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

    // category() {
    //     if (props.hover === "Skin") {
    //         // return this.props.skinCategory
    //         console.log("category = skin") 
    //     } else if (props.hover === "Hair") {
    //         // return this.props.hairCategory
    //         console.log("category = hair") 
    //     } else {
    //         // return this.props.bodyCategory
    //         console.log("category = body") 
    //     }
    // }
    


    render() {
        // debugger
        const { closeSidebar, skinCategory, hairCategory, bodyCategory } = this.props;

        // console.log(category())

        // let skin = console.log(this.props.skinCategory)
        // let hair = console.log(this.props.hairCategory)
        // let body = console.log(this.props.bodyCategory)

        // let hover = console.log(this.props.hover)

        let products;
        if (this.props.hover === "Skin") {
            products = skinCategory
        } else if (this.props.hover === "Hair") {
            products = hairCategory
        } else {
            products = bodyCategory
        }

        console.log("THIS")
        console.log(products[0])

        let randomize = Math.floor((Math.random() * products.length) + 1)
        let product = products[randomize]
        

        return (
            <main className="main-subcategory">
                <div className="subcategory-div">
                    <div>X</div>
                    <div>
                        <h1>THIS IS THE SUB CATEGORY</h1>
                        <h1>IS THIS WORKING</h1>
 
                        <ul className="second-drawer-list">
      
                            <div className="single-product">
                                <img src={ product.photoUrls[0] } alt="Photo" />
                                <Link to={`/products/${product.name}/${product.id}`} className="link-product" onClick={() => closeSidebar}>
                                    <li>
                                        <p>{product.name}</p>
                                        <p>{product.size} / ${product.price}</p>
                                    </li>
                                </Link>
                            </div>
         
                        </ul>



                    </div>

                </div>
            </main>
        )
    }
}




export default SubCategorySidebar;