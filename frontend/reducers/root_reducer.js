import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';


const rootReducer = combineReducers ({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});



export default rootReducer;



//can do it this way too:
// import entities from './entities_reducer';
// import ui from './ui_reducer';
// import session from './session_reducer';
// import errors from './errors_reducer';

// const rootReducer = combineReducers({
//     entities,
//     session,
//     ui,
//     errors,
// });