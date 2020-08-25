import React from 'react';


class Homepage extends React.Component {
    render() {
        return (
            <div>

                <div className="splash-image">
                    <img src={window.images.splash_img} height='800px' width='100%'/>
                </div>

            </div>
        )
    }
};


export default Homepage;