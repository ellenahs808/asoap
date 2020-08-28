import React from 'react';
import Footer from './footer'


class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-image">
                    <img src={window.images.splash_img} height='800px' width='100%'/>
                </div>

                <footer>
                    <Footer />
                </footer>


            </div>
        )
    }
};


export default Homepage;