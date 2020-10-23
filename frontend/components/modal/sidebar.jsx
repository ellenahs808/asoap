import React from 'react';

import FeatureContainer from '../navbar/feature_container'
import CategorySidebarContainer from '../navbar/category_sidebar_container'
import SearchContainer from '../search/search_container'
import SearchResultContainer from '../search/search_result_container'


class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.refreshPage = this.refreshPage.bind(this)
    }


    // updateHoveredProduct(product) {
    //     this.setState({ hoveredProduct: product })
    // }

    componentDidMount() {
        this.props.fetchProducts()
    }


    refreshPage() {
        this.props.closeSidebar()
        window.location.reload(false);
    }


    render() {
    
        const { side, closeSidebar, openSidebar, hoverCategory, hoverProduct, closeModal, products } = this.props

        if (!side) {
            return null;
        }

        let component;
        // let nextComponent;
        
        switch (side) {
            case 'feature':
                // component = <CategorySidebarContainer />
                component = <FeatureContainer />;
                break;
            default:
                return null;
        }

        return (
            <div className="side-screen" onClick={this.refreshPage}>
                {/* <div className="modal-child" onClick={e => e.stopPropagation()}> */}
                    {component}
                {/* </div> */}
            </div>
        );
    }

}


export default Sidebar;