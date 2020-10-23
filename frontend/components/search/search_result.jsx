// import React from 'react'


// class SearchResult extends React.Component {
//     constructor(props) {
//         super(props)
//     }



//     componentDidMount() {
//         this.props.fetchProducts();
//     }

//     render() {
//         const { currentUserId, product, closeSidebar } = this.props;

//         if (!product) return null;

//         return (
//             <div className="main-subcategory">
//                 <div className="subcategory-div">
//                     <h1>SEARCH RESULT</h1>
//                     <div className="result-close-btn" onClick={() => closeSidebar()}>X</div>
//                     <img src={ product.photoUrls[0] } alt="Photo" />
//                 </div>
//                 <div>
//                     <Link to={`/products/${product.name}/${product.id}`} className="link-product" onClick={() => closeSidebar}>
//                         <p>{product.name}</p>
//                     </Link>
//                 </div> 
//             </div>
//         )
//     }
// }


// export default SearchResult;