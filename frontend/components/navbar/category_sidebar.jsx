
import React from 'react';
import { Link } from 'react-router-dom';




class CategorySidebar extends React.Component {
    constructor(props) {
        super(props)


        this.handleHoverCategory = this.handleHoverCategory.bind(this)

    };




        // this.setState((prevState) => {
        //     return { sideDrawerOpen: !prevState.sideDrawerOpen }
        // });



    handleHoverCategory(category) {
        // debugger
        return e => {
            e.preventDefault();
            this.props.openSidebar('feature')
            this.props.hoverCategory(category)
        }
    };




    render() {

        return (
            <div id="slider2" className="slide-in2">
                    <div className="category-div">
                  
                            <div>
                                <ul className="sidebar-nav-li">
                                    <li className="sidebar-link" onClick={() => this.props.openModal('sidebar')}>Shop</li>
                                    <li className="sidebar-link">Read</li>
                                    <li className="sidebar-link">Stores</li>
                                    <li className="sidebar-link" onClick={() => this.props.openModal('search')}>Search</li>
                                    <li className="sidebar-close-btn" onClick={ () => {this.props.closeModal(); this.props.closeSidebar();} }>X</li>
                                </ul>
                            </div>


                    
                            <div className="asoap-logo"><Link to="/"><img src={window.images.logo} onClick={() => this.props.closeModal()}/></Link></div>
                                    <ul className="sidebar-category-li">
                                        <li className="skin-category">
                                            <Link 
                                                to="/skin" 
                                                className="side-link"
                                                onClick={() => {this.props.closeModal(); this.props.closeSidebar()}}
                                                onMouseEnter={this.handleHoverCategory("Skin")}>
                                                Skin
                                            </Link>         
                                        </li>
                                        <li className="hair-category">
                                            <Link 
                                                to="/hair" 
                                                className="side-link" 
                                                onClick={() => {this.props.closeModal(); this.props.closeSidebar()}}
                                                onMouseEnter={this.handleHoverCategory("Hair")}>
                                                Hair
                                            </Link>
                                        </li>
                                        <li className="body-category">
                                            <Link 
                                                to="/body" 
                                                className="side-link" 
                                                onClick={() => {this.props.closeModal(); this.props.closeSidebar()}}
                                                onMouseEnter={this.handleHoverCategory("Body & Hand")}>
                                                Body & Hand
                                            </Link>
                                        </li>

                                    </ul>
                         
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