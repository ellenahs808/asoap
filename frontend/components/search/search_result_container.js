// import { connect } from 'react-redux'

// import { closeSidebar, openSidebar, hoverProduct } from '../../actions/sidebar_actions'
// import { openModal } from '../../actions/modal_actions'
// import { fetchProducts } from '../../actions/product_actions'
// import SearchResult from './search_result'


// const mapSTP = state => {
//     return {
//         currentUserId: state.session.id,
//         product: state.entities.products[state.ui.hover],
//     }
// }


// const mapDTP = dispatch => {
//     return {
//         closeSidebar: () => dispatch(closeSidebar()),
//         openSidebar: side => dispatch(openSidebar(side)),
//         hoverProduct: productId => dispatch(hoverProduct(productId)),
//         openModal: modal => dispatch(openModal(modal)),
//         fetchProducts: () => dispatch(fetchProducts())
//     }
// }



// export default connect(mapSTP, mapDTP)(SearchResult);