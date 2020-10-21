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
            <main>
                <div>X</div>
                <div>
                    <h1>See All</h1>
                    <ul>
                        <li>{subCategory}</li>

                    </ul>
                </div>
            </main>
        )
    }
}




export default SubCategorySidebar;