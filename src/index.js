
import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
let initState = {name:'DonaldTrump',age:72};

/*
function reducer2(state,action){
    switch (action.type){
        case 'PUBLISH':
            console.log("its reducer2.");
            return { ...state, who: action.who };
        default:
            return state;
    }

}
*/

function reducer (state, action) {
    switch(action.type){
        case 'PUBLISH':
            return { ...state, who: action.who };
        case 'REPLACE':
            return { ...state, who: 'aGod' };
        case 'INCREASE':
            return { ...state, age:state.age+1 };
        default:
            return state;
    }
}


const store = createStore(reducer,initState);

store.subscribe(() => {
    let theState = store.getState();
    console.log("getState:", theState)


})

/*
store.dispatch({ type: 'PUBLISH', who:'lilei' });
store.replaceReducer(reducer2);
store.dispatch({ type: 'REPLACE', who:'GOOD.' });
store.dispatch({ type: 'PUBLISH', who:'....' });

console.log(styles)
*/

const clickHandle = ()=>{ store.dispatch({type:'INCREASE'}); }

ReactDOM.render(
    <button className='foot' onClick={clickHandle}>Dispatch.AddLog</button>,
    document.querySelector("#root")
);


