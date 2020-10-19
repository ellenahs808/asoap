import React from 'react'
import { Link } from 'react-router-dom';

import LeftNavbar from '../navbar/left_navbar'
import SearchProductItem from './search_product_item'


class SearchProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }


    componentDidMount() {
        this.props.fetchProducts
    }


    handleSlideAnimation(){
        let searchBody = document.getElementById('search-wrap');
        window.setTimeout(() => this.props.closeModal(), 300);
        searchBody.style.transition = "all 0.3s ease-in-out";
        searchBody.style.left = "-1000px";
    }


    handleInput() {
        return (e) => {
            this.setState({ search: e.target.value })
        };
    }


    render() {
        const { products } = this.props;

        
        return (
            <div>
                <div className="modal-background" onClick={()=>this.handleSlide()}></div>
                <div id="search-wrap">
                    <div className="first-sidebar-nav-li-div">
                        <div className="sidebar-nav-li">
                            <LeftNavbar />
                            <p className="close-btn-nav"><button className="sidebar-close-btn" onClick={() => this.props.closeModal()}>X</button></p>
                        </div>
                    </div>

                    {/* <div className="search-section"> */}
                        <div className="asoap-logo"><Link to="/"><img src={window.images.logo} onClick={this.close}/></Link>
                            <div className='search-form-wrap'>
                                <input type="text" value={ this.state.search } onChange={this.handleInput()} className="search-input" />

                                {/* <ul className='search-results'>
                                    {filtered}
                                </ul> */}

                            </div>
                        
                        
                        </div>
                        
                    {/* </div> */}


                </div>

            </div>
        )
    }
    
}


export default SearchProducts;