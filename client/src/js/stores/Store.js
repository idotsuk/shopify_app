import { combineReducers, createStore } from "redux";

import productReducer from './reducers/ProductReducer'

import userReducer from './reducers/UserReducer'


//const exploreReducers = combineReducers(productReducer)


const rootReducer = combineReducers({products : productReducer, user : userReducer})
const store = createStore(rootReducer)
store.subscribe(() => {

});


store.dispatch({type: "IMPORT_PRODUCTS"})
console.log(store.getState())
//export default exploreProductsStore;
//exploreProductsStore.on("change",someHandler)
export default store