
import React from 'react';
import { Link } from 'react-router-dom';




class CategorySidebar extends React.Component {
    constructor(props) {
        super(props)

        // this.close = this.close.bind(this)
        // this.open = this.open.bind(this)
        // this.handleHoverCategory = this.handleHoverCategory.bind(this)
    };


    // close() {
    //     this.props.closeSidebar(false)
    // };


    // open() {
    //     this.props.openSidebar(true)
    // };



    // handleHoverCategory(category) {
    //     return e => {
    //         e.preventDefault();
    //         this.props.openSidebar(CategorySidebar)
    //         this.props.hoverCategory(category)
    //     }
    // };



    render() {
        // const { isOpen } = this.props;
        // let openShow = isOpen ? "category-sidebar-open" : ""


        return (
            <div id="slider2" className="slide-in2">
                {/* {isOpen && <div className="backdrop" onClick={this.close}></div>} */}
                    <div className="category-div">
                        {/* <div className="first-sidebar"> */}
                            <div className="first-sidebar-nav-li-div">
                                <ul className="sidebar-nav-li">
                                    <li className="shop-link" onClick={() => this.props.openModal('sidebar')}>Shop</li>
                                    <li><Link to="/category" className="read-link">Read</Link></li>
                                    <li><Link to="/category" className="read-link">Stores</Link></li>
                                    <li className="search-link" onClick={() => this.props.openModal('search')}>Search</li>
                                    <li className="sidebar-close-btn" onClick={() => this.props.closeModal()}>X</li>
                                </ul>
                            </div>


                    
                            <div className="asoap-logo"><Link to="/"><img src={window.images.logo} onClick={() => this.props.closeModal()}/></Link></div>
                                    <ul className="sidebar-category-li">
                                        <li className="skin-category"><Link to="/skin" className="skin-link" onClick={() => this.props.closeModal()} >Skin</Link></li>
                                        <li className="hair-category"><Link to="/hair" className="hair-link" onClick={() => this.props.closeModal()} >Hair</Link></li>
                                        <li className="body-category"><Link to="/body" className="body-link" onClick={() => this.props.closeModal()} >Body & Hand</Link></li>
                                        {/* <li className="hair-category"><Link to="/hair" className="hair-link" >Hair</Link></li>
                                        <li className="body-category"><Link to="/body" className="body-link" >Body & Hand</Link></li> */}
                                    </ul>
                         
                        </div>
                    {/* </div> */}
             </div>
        )
    };
};


export default CategorySidebar;

{/* <li className="skin-category"><Link className="skin-link" onMouseEnter={this.handleHoverCategory("Skin")}  >Skin</Link></li> */}


{/* <li><Link onMouseEnter={this.handleHoverCategory("Skin")}>Skin</Link></li>
    <li><Link onMouseEnter={this.handleHoverCategory("Skin")}>Hair</Link></li>
    <li><Link onMouseEnter={this.handleHoverCategory("Skin")}>Body & Hand</Link></li> */}


{/* <li className="skin-category"><Link to="/skin" className="skin-link" onMouseEnter={this.handleHoverCategory("Skin")}  >Skin</Link></li> */}