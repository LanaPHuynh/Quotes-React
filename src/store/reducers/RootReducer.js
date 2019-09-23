import AuthReducer from './AuthReducer';
import QuoteReducer from './QuoteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    auth: AuthReducer,
    quote: QuoteReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default RootReducer;
