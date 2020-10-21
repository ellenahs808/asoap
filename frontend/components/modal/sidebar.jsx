
import React from 'react';
import { connect } from "react-redux";


// import SideFormContainer from '../session_form/side_form_container';
// import SecondSideFormContainer from '../session_form/second_side_form_container';
// import ThirdSideFormContainer from '../session_form/third_side_form_container';
// import SecondResultContainer from '../session_form/second_result_container';

import SubCategorySidebarContainer from '../navbar/sub_category_sidebar_container'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    // updateHoveredProduct (product) {
    //     this.setState({ hoveredProduct: product })
    // }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
    
        const { hover, hoverProduct, closeModal } = this.props
        if (!hover) {
            return null;
        }

        let component;
        // let nextComponent;
        // let thirdComponent;
        
        switch (hover) {
            case 'sub-category':
                component = <SubCategorySidebarContainer />;
                break;
            // case 'second':
            //     component = <SideFormContainer />;
            //     nextComponent = <SecondSideFormContainer />;
            //     break;
            // case 'third':
            //     component = <SideFormContainer />;
            //     nextComponent = <SecondSideFormContainer />;
            //     thirdComponent = <ThirdSideFormContainer />;
            //     break;
            // case 'search':
            //         component = <SideFormContainer products={ this.props.products } openSide={ openSide } />;
            //     break;
            // case 'result':
            //     component = <SideFormContainer products={this.props.products} openSide={openSide} />;
            //     nextComponent = <SecondResultContainer />;
            //     break;
            default:
                return null;
        }

        return (
            <div className="outsideModal" onClick={ closeModal }>
                {component}
                {/* {nextComponent}
                {thirdComponent} */}
            </div>
        );
    }

}


export default Sidebar;