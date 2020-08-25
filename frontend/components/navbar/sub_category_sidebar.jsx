import React from 'react';
import { Link } from 'react-router-dom';
import { skinIndex } from '../products/skin/skin_index';



class SubCategorySidebar extends React.Component {
    constructor(props) {
        super(props)

        this.close = this.close.bind(this)
    };


    close() {
        this.props.closeMainSidebar(false)
    };




    // componentDidMount() {
    //     this.props.receiveCategories();
    // }


    render() {
        const { isOpen } = this.props;
        let openShow2 = isOpen ? "sub-category-sidebar-open" : ""


        return (
            <div>
                {isOpen && <div className="backdrop" onClick={this.close}></div>}
                    <div className={"sub-category-sidebar " + openShow2}>
                        <ul>
                        <li><Link to="/skin">See all</Link></li>
                            <div className="skin-sub-category">
                                <li><Link>Cleanse</Link></li>
                                <li><Link>Exfoliate</Link></li>
                                <li><Link>Treat & Masque</Link></li>
                                <li><Link>Tone</Link></li>
                            </div>
                            <div className="hair-sub-category">
                                <li><Link>Cleanse</Link></li>
                                <li><Link>Condition</Link></li>
                            </div>
                            <div className="body-sub-category">
                                <li><Link>Hand</Link></li>
                                <li><Link>Body</Link></li>
                            </div>
                        </ul>
                    </div>
            </div>
        )
    }
};




export default SubCategorySidebar;


