import React from 'react';



class LeftNavbar extends React.Component {
    constructor(props) {
        super(props)

        // this.open = this.open.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSidebar = this.handleSidebar.bind(this)
    };


    // open() {
    //     this.props.openSidebar(true)
    // };




    handleSidebar() {
        // var slider2 = document.getElementById('slider2');
        // var $toggle = document.getElementById('toggle');

        // $toggle.addEventListener('click', function() {
        //     var isOpen2 = slider2.classList.contains('slide-in2');

        //     slider2.setAttribute('className', isOpen2 ? 'slide-out2' : 'slide-in2');
        // });


        this.props.openModal('sidebar')
    }




    handleSearch() {
        // var slider1 = document.getElementById('slider');
        // var $toggle = document.getElementById('toggle');

        // $toggle.addEventListener('click', function() {
        //     var isOpen = slider1.classList.contains('slide-in');

        //     slider1.setAttribute('className', isOpen ? 'slide-out' : 'slide-in');
        // });

        this.props.openModal('search')
    }




 

    render() {

        return (

            <ul className="left-nav-li" id="toggle" >
                <li className="shop-link" onClick={() => this.handleSidebar()}>Shop</li>
                <li className="read-link" onClick={() => this.handleSidebar()}>Read</li>
                <li className="stores-link" onClick={() => this.handleSidebar()}>Stores</li>
                <li className="search-link" onClick={() => this.handleSearch()}>Search</li>
            </ul>
        )
    }
};



export default LeftNavbar;


