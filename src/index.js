import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore }  from 'redux'
import {legacy_createStore as createStore} from 'redux'
import cartReducer from './reducers/cart-reducer';
import { addToCart, removeItem } from './actions';

let store = createStore(cartReducer)
store.subscribe(()=> console.log(store.getState()))

store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(removeItem());
store.dispatch(removeItem());



// //1 - STORE - ALL DATA


// //2 - ACTION
//       // All logic starts with action that user/customer could possibly do OR WANT TO DO  on our website (FOR EXAMPLE WE HAVE ONLINE STORE)
//       //We don't change state here, this is only possibility of what happened, but no guarantee that customer will actually do it (add to cart or buy something)

//       //A
// const addToCart = () => {
//   return {
//     type: "ADD_TO_CART"
//   }
// }
//       //B
// const removeItem = () => {
//   return {
//     type: "REMOVE_ITEM"
//   }
// }
//       //C
// const changeNumber = () => {
//   return {
//     type: "CHANGE_NUMBER"
//   }
// }

// //3 - REDUCER
//       //DESCRIPTION of how our possible actions will change a state. But we still don't chcange stte here,
//       //only explaining how it will be changed in the future based on the action that happened

// const cart = (state = 0, action) => {
//   switch(action.type) {
//     case "ADD_TO_CART":
//       return state + 1;

//     case "REMOVE_ITEM":
//       return state - 1;

//     default:
//       return state;
//   }
// }

// let store = createStore(cart);
// store.subscribe(()=> console.log(store.getState()))


// //4 - DISPATCH
//       //this is the only way to change the state! we need to call store.dispatch() and pass in an action object 

// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(addToCart())
// store.dispatch(removeItem())
// store.dispatch(removeItem())
// store.dispatch(removeItem())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
