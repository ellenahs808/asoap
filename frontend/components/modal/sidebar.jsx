import React from 'react';


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
    
        const { side, closeSidebar, openSidebar, hoverCategory, hoverProduct, closeModal } = this.props
        if (!side) {
            return null;
        }

        let component;
        // let nextComponent;
        // let thirdComponent;
        
        switch (side) {
            case 'subcategory':
                component = <SubCategorySidebarContainer />;
                break;
            default:
                return null;
        }

        return (
            <div className="outsideModal" onClick={ closeSidebar }>
                {component}
                {/* {nextComponent}
                {thirdComponent} */}
            </div>
        );
    }

}


export default Sidebar;