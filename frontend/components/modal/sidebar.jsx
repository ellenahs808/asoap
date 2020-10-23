import React from 'react';

import CategorySidebarContainer from '../navbar/category_sidebar_container'
import SubCategorySidebarContainer from '../navbar/sub_category_sidebar_container'
import SearchContainer from '../search/search_container'
import SearchResultContainer from '../search/search_result_container'


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }


    // updateHoveredProduct(product) {
    //     this.setState({ hoveredProduct: product })
    // }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
    
        const { side, closeSidebar, openSidebar, hoverCategory, hoverProduct, closeModal, products } = this.props

        if (!side) {
            return null;
        }

        let component;
        let nextComponent;
        
        switch (side) {
            case 'subcategory':
                component = <SubCategorySidebarContainer />;
                break;
            case 'search':
                component = <SearchContainer />
                break;
            case 'searchResult':
                // component = < CategorySidebarContainer products={this.props.products} openSidebar={openSidebar}/>
                component = <SearchResultContainer  />
                break;
            default:
                return null;
        }

        return (
            <div className="outsideModal" onClick={ closeSidebar }>
                {component}
                {nextComponent}
            </div>
        );
    }

}


export default Sidebar;