import React from 'react';

class SkinIndex extends React.Component {
    constructor(props) {
        super(props)
        
    };


    componentDidMount() {
        this.props.fetchProducts();
    };



    render() {
        return (
            <div>

            </div>
        )
    }
};


export default SkinIndex;