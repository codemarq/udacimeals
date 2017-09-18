# 4-1-combineReducers

[video](https://youtu.be/kuPPE0l_XtE)

## Reducer Composition
Up until this point, we’ve only ever had *one* reducer. This works, but as our app scales, it’ll probably become difficult to manage. Say we had a "users" reducer:
```JavaScript
function users (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER' :
      return {};
    case 'REMOVE_USER':
      return {};
    default :
      return state;
  }
}
```
What if we wanted to add books to our Redux store? `Users` and `books` are two very distinct pieces of data. It doesn’t make sense to have the users reducer manage books' state. This leads us to create another reducer:

function users (state = {}, action) { 
  // ... 
}

function books (state = {}, action) { 
  // ... 
}
We've separated our reducers to handle distinct, independent slices of state. This process is called **reducer composition**. However, we now have a problem: Redux’s ```createStore()``` method only accepts one reducer! In order to create a valid store, we still need to figure out a way to combine both of these reducers together into one reducer.


Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/f92571e94b6b42cad3391983887261d91192a775) with the changes made in this [video](https://youtu.be/icUjbluFOlQ).

## ``combineReducers()``
The shape of our state tree has been pretty simple up until this point. For example, it might look like the following:
```JavaScript
const initialState = {
  data: [],
  isFetching: false,
  error: ''
}
```
But as you can imagine, our application's state is going to get much more complex. As our app scales, we'll want to create more than just one reducer, which currently may manage *all* the different sections of the state. We want to go from the state shown above to something more like this:
```JavaScript
{
  users: {},
  modal: {},
  posts: {},
  replies: {},
  listeners: {}
}
```
We also want to practice ***reducer composition*** and have each reducer be responsible for separate, independent portions of state. This way, for example, the replies reducer is only going to receive the "replies" part of the state. Likewise, the users reducer will only receive the "users" part of the state. And even when we grow to multiple reducers, the same pattern will hold true: a reducer will receive a section of state and an action, and return a new, modified section of that state. The way we can accomplish this is to first create more than one reducer, and second, use Redux's ``combineReducers()`` method.

``combineReducers()`` is a helper function provided by Redux that turns an object whose values are different reducing functions into a single reducing function. We then pass this single "root reducer" into ``createStore()`` to create the application's store. Let's take a look at how this might look:
```JavaScript
// reducers/root_reducer.js

import { combineReducers } from 'redux';

function users (state = {}, action) {
  // ...
}

function books (state = {}, action) {
  // ...
}

export default combineReducers({
  users,
  books,
});
```
```JavaScript
// store/store.js

import rootReducer from '../reducers/root_reducer';

const store = createStore(rootReducer)
console.log(store.getState()) // { users: {}, books: {} }
```
The main reducer returned by `combineReducers` will call every child reducer, and gathers their results into a single state object. The shape of the state object matches the keys of the passed reducers; this means that if your 'reducers' object above has a 'users' and a 'books' property, those will now be properties on your state tree!

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/8948986f81b9ff82640a484037445ecbbfc5dc8f) with the changes made in this [video](https://youtu.be/1EqA4qc4cJ8).

### Time to check in!

#### Task List
- [x] I have created two reducer functions: `food` and `calendar`
- [x] I have passed in an object with both reducers into `combineReducers()`
- [x] I have updated the mapStateToProps function
- [x] I have exported the return value of `combineReducers()`

### QUESTION 1 OF 2

What is true about combining reducers? Please check all that apply:

- [ ] Rather than using `combineReducers()`, an alternative is to simply pass multiple reducer arguments to `createStore()`
- [ ] `combineReducers()` is imported from react-redux
- [x] `combineReducers()` takes in an object as an argument
- [x] `combineReducers()` returns a single reducer that can be used to create the store

### QUESTION 2 OF 2

What is wrong with the following root reducer?
```JavaScript
import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers(booksReducer, userReducer);

export default rootReducer;
```
- [ ] `combineReducers()` should be imported from react-redux
- [ ] `combineReducers()` should be a curried function
- [ ] The wrong value is being exported
- [x] An object that maps state keys to individual reducers should be passed into `combineReducers()`
- [ ] `combineReducers()` should have the store passed into it instead

### Great Job
The correct usage of `combineReducers()` can look like:
```JavaScript
import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    books: booksReducer,
    users: userReducer
});

export default rootReducer;
```

## `combineReducers()` Recap
As an application grows, so will the need for multiple reducers to manage different aspects of the Redux store. The problem is that Redux’s `createStore()` method takes in a single reducer, not multiple. To combine all of your reducers into one, you can use Redux’s `combineReducers()` method. This allows you to use **reducer composition** to manage the state in your store.
