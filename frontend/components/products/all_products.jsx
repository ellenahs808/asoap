import React from 'react';
import { Link } from 'react-router-dom';



class AllProducts extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { categories } = this.props;

        return (
            <div>
                <Link to="/products/skin">Skin</Link>
                <Link>Hair</Link>
            </div>
        )
    }

};


export default AllProducts;
