import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import Sidebar from './sidebar'


const mSTP = (state) => {
    return ({
        side: state.ui.side,
        products: Object.values(state.entities.products)
    });
};


const mDTP = (dispatch) => {
    return ({
        closeSide: () => dispatch(closeSide()),
        fetchProducts: () => dispatch(fetchProducts()),
        openSide: (side) => dispatch(openSide(side)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mSTP, mDTP)(Sidebar);