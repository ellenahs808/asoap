import React from 'react';


class SubCategorySidebar extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount () {
        this.props.fetchProducts();
    }


    render() {

        const { products, category, skinCategory, hairCategory, bodyCategory } = this.props;

        let subCategory = products.map((product) => {
            // product.sub_category
            // debugger
            if (category === 'Skin') {
                // return product.sub_category
                console.log(skinCategory)
                skinCategory.map((skin) => {
                    console.log(skin.subcategory)
                })
            } else if ({category} === 'Hair') {
                // return product.sub_category
                console.log('hairCategory')
            } else {
                // return product.sub_category
                console.log('bodyCategory')
            }
        })




        return (
            <main className="main-subcategory">
                <div className="subcategory-div">
                    <div>X</div>
                    <div>
                        <h1>THIS IS THE SUB CATEGORY</h1>
                        <h1>See All</h1>
                        {/* <ol>
                            <li>{skinCategory}</li>

                        </ol> */}
                        <div>
                            {subCategory}
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}




export default SubCategorySidebar;