import React from 'react';

class SkinIndex extends React.Component {
    constructor(props) {
        super(props)
        
    };


    componentDidMount() {
        this.props.fetchProducts();
    };



    render() {
        const { skinProducts, categories } = this.props;

        return (
            <div>
                <ul>
                    <img src={product.photoUrls[0]} />
                </ul>
            </div>
        )
    }
};


export default SkinIndex;