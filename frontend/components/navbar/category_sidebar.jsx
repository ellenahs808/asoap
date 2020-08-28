
import React from 'react';
import { Link } from 'react-router-dom';




class CategorySidebar extends React.Component {
    constructor(props) {
        super(props)

        this.close = this.close.bind(this)
        // this.open = this.open.bind(this)
        this.handleHoverCategory = this.handleHoverCategory.bind(this)
    };


    close() {
        this.props.closeSidebar(false)
    };


    // open() {
    //     this.props.openSidebar(true)
    // };

    handleHoverCategory(category) {
        return e => {
            e.preventDefault();
            this.props.openSidebar(CategorySidebar)
            this.props.hoverCategory(category)
        }
    };



    render() {
        const { isOpen } = this.props;
        let openShow = isOpen ? "category-sidebar-open" : ""


        return (
            <div>
                {isOpen && <div className="backdrop" onClick={this.close}></div>}
                    <div className={"category-sidebar " + openShow}>
                        <div className="first-sidebar">
                            <div className="first-sidebar-nav-li-div">
                                <ul className="sidebar-nav-li">
                                    <li className="shop-link" onClick={this.open}>Shop</li>
                                    <li className="read-link" onClick={this.open}>Read</li>
                                    <li className="stores-link" onClick={this.open}>Stores</li>
                                    <li className="search-link" onClick={this.open}>Search</li>
                                    <li className="close-btn-nav"><Link to="/" className="sidebar-close-btn" onClick={this.close}>X</Link></li>
                                </ul>
                            </div>


                    
                        <div className="asoap-logo"><Link to="/"><img src={window.images.logo} onClick={this.close}/></Link></div>
                                <ul className="sidebar-category-li">
                                    <li className="skin-category"><Link to="/skin" className="skin-link" onMouseEnter={this.handleHoverCategory("Skin")} onClick={this.close} >Skin</Link></li>
                                    <li className="hair-category"><Link to="/hair" className="hair-link" onClick={this.close} >Hair</Link></li>
                                    <li className="body-category"><Link to="/body" className="body-link" onClick={this.close} >Body & Hand</Link></li>
                                </ul>
                         
                            </div>
                        </div>
                
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