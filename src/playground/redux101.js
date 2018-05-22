import {createStore} from 'redux';

//ACTION GENERATORS - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//REDUCERS
//1. Reducers are pure functions - only uses what is in function scope and nothing from outside
//2. Never change stat or action - they should be passed in and not changed/mutated


const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count:state.count + action.incrementBy
            }
        case 'DECREMENT' :
            return {
                count:state.count - action.decrementBy
            }
        case 'SET' :
            return {
                count:action.count
            }
        case 'RESET' :
            return {
                count: 0
            }
        default:
            return state;
    }
};


const store = createStore(countReducer);

//do something when state changes and set const to unsubscribe
const unsubscribe = store.subscribe(() => {
        console.log(store.getState());
    });

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

//unsubscribe();

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch (resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy:10 }));

store.dispatch(setCount({ count: -100 }));
