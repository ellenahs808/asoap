
import React from 'react';
import { Link } from 'react-router-dom';



class FirstSlideDrawer extends React.Component {
    constructor(props) {
        super(props)

        this.close = this.close.bind(this)
    };

    close() {
        this.props.closeMainSidebar(false)
    }

    render() {
        const { isOpen } = this.props;
        let openShow = isOpen ? "sidebar-open" : ""

        return (
            <div>
                {isOpen && <div className="backdrop" onClick={this.close}></div>}
                
                    <div className={"sidebar " + openShow}>
                        <ul>
                            <li>Skin</li>
                            <li>Hair</li>
                            <li>Body & Hand</li>
                        </ul>
                    </div>
                
            </div>
        )
    };
};


export default FirstSlideDrawer;