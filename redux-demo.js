const redux = require("redux");


// creating the reducer function
const createReducer = function createReducer(state={counter:0}, action){
    if(action.type === "increment"){
        return {counter: state.counter + 1};
    }

    if(action.type === "decrement"){
        return {counter: state.counter - 1};
    }

    return state;
}

//creating the central data store
const reduxStore = redux.createStore(createReducer);

//creating a subscriber
const counterSubscriber = ()=>{
    const latestState = reduxStore.getState();
    console.log(latestState);
};

//creating a subscription using the subscriber
reduxStore.subscribe(counterSubscriber);

//creating a dispatch for the action
reduxStore.dispatch({type:"increment"});
reduxStore.dispatch({type:"decrement"});
