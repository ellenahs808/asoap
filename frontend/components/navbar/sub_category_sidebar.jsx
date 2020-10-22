import React from 'react';


class SubCategorySidebar extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount () {
        this.props.fetchProducts();
    }


    render() {

        const { products } = this.props;

        let subCategory = products.map((product) => {
            return product.sub_category
        })

        return (
            <main className="main-subcategory">
                <div className="subcategory-div">
                    <div>X</div>
                    <div>
                        <h1>THIS IS THE SUB CATEGORY</h1>
                        <h1>See All</h1>
                        <ul>
                            <li>{subCategory}</li>

                        </ul>
                    </div>

                </div>
            </main>
        )
    }
}




export default SubCategorySidebar;