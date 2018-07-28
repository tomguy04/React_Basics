// import React from 'react';
// import { render } from 'react-dom';

// import {Main} from './components/Main';
// import {User} from './components/User';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             userName:'Glen'
//         };
//     }

//     changeUserName(newName){
//         this.setState({
//             userName:newName
//         });
//     }

//     render(){
//         return(
//             <div className='container'>
//             {/* pass a reference to the changeUserName method so we can use it in Main in its button*/}
//                 <Main changeUserName={this.changeUserName.bind(this)}/>
//                 <User 
//                     initialUserName={this.state.userName}
//                 />
//             </div>
//         );
//     }
// }
// render(<App/>, window.document.getElementById('app'));

//run this with npm run bulid

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
//create reducer


const initialMathState = {
    result: 1,
    lastValues:[],
};

const initialUserState = {
    name: 'Glen',
    language: 'js'
};

// const reducer = (state, action) => {
const mathReducer = (state = initialMathState, action) => {//if no state is sent to the reducer, it will use initialState
    switch (action.type){
        case 'ADD':
            // state = state + action.payload;
            state = { //create a copy of the state object so we can kow the current state we are dealing with.
                ...state, //give me all the properties of the state obj param and add them as properties to the new object
                result: state.result + action.payload, //override whatever I want from the passed in state object.
                lastValues: [...state.lastValues, action.payload]
            };
            
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result : state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};

const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case 'SET_NAME':
            state = {
                ...state,
                name : action.payload,
            };
            break;
        case 'SET_LANG':
            state = {
                ...state,
                language: action.payload
            }
            break;
    }
    return state;
        
}



// create store
// const store = createStore(reducer,1); // (reducer you want to use , initial state)
// const store = createStore(combineReducers({mathReducer, userReducer})); // takes name of reducers, es6 will turn this into key-value pairs
const myLogger = (store) => (next) =>(action)=>{ //standard pattern.  store is the arg, pass it to the 'next' method and that is passed to action.
    console.log('Logged action: ', action);
    next(action);//standard pattern
}
// using middleware, 2nd arg is the inital state, an empty object which will get overridden by the reducers that have their own initial state. applyMiddleware takes an arg, being the name of the middleware you want to use.
const store = createStore( 
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(myLogger, createLogger()));  //logger is the built in middelware provided from 'redux-logger'

//whenever the store is update, execute this fatarrow function.
store.subscribe(() => {
    console.log('store updated', store.getState());
})

//dispatch the action
store.dispatch({
    type: 'ADD',
    payload: 100
});

store.dispatch({
    type: 'ADD',
    payload : 22
})

store.dispatch({
    type:'SUBTRACT',
    payload:80
})

store.dispatch({
    type:'SET_NAME',
    payload:'Lucy'
})

store.dispatch({
    type:'SET_LANG',
    payload: 'Python'
})