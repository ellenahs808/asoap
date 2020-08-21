import React from 'react';


class Splash extends React.Component {
    render() {
        return (
            <div className="splash-image">
                <img src={window.images.splash_img} height='800px' width='100%'/>
            </div>
        )
    }
};


export default Splash;