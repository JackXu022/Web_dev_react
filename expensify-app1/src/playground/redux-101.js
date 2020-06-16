import { createStore } from 'redux';

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

// Reducers
// 1. Reducer are pure functions (output just depends on the input within function scope)
// 2. Never change state or action

const countReducer = (state = { count:0 }, Action) => {
    switch (Action.type) {
        case 'INCREMENT':
            return {
                count: state.count + Action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - Action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET': 
            return {
                count: Action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Action - an object that gets sent to the store

// increment, decrement, reset

// I'd like to increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(decrementCount({ decrementBy: 10 }) )

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count:123 }));
// I'd like to reset the count to zero