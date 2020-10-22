import React from 'react';

import SubCategorySidebarContainer from '../navbar/sub_category_sidebar_container'
import SearchContainer from '../search/search_container'
import SearchResultContainer from '../search/search_result_container'


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
    
        const { side, closeSidebar, openSidebar, hoverCategory, hoverProduct, closeModal, products } = this.props

        if (!side) {
            return null;
        }

        let component;
        
        switch (side) {
            case 'subcategory':
                component = <SubCategorySidebarContainer />;
                break;
            case 'search':
                component = <SearchContainer />
                break;
            case 'searchResult':
                component = <SearchResultContainer />
                break;
            default:
                return null;
        }

        return (
            <div className="outsideModal" onClick={ closeSidebar }>
                {component}
   
            </div>
        );
    }

}


export default Sidebar;