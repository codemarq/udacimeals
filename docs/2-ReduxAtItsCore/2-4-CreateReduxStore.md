# Create A Redux Store

<iframe width="800" height="450" src="https://www.youtube.com/embed/DvubDfXb4dU" frameborder="0" allowfullscreen></iframe>

[video](https://youtu.be/DvubDfXb4dU)

In order to create a store, you pass a reducer function to Redux’s `createStore()` method as the first argument. What’s returned from `createStore()` is the store itself, which has three properties on it:

- `getState()`
- `dispatch()`
- `subscribe()`

## `getState()`
`store.getState()` doesn’t take any arguments and will return the current state of the store.

## `dispatch()`
`store.dispatch(action)` takes in an action object and will call the reducer function, passing it the current state and the action which was dispatched. For example:
```JavaScript
// store.js

import { createStore } from 'redux';
import reducer from '../reducers/reducer';

let store = createStore(reducer);

const receiveComment = comment => ({
  type: 'RECEIVE_COMMENT',
  comment
});

export default store;
```
```JavaScript
store.getState(); // []
store.dispatch(receiveComment('Redux is great!'));
store.getState(); // ['Redux is great!']
```
## `subscribe()`
`store.subscribe(cb)` takes in a listener callback function that will be invoked whenever the state of the store changes.
<iframe width="800" height="450" src="https://www.youtube.com/embed/DDUpBjZZqOM" frameborder="0" allowfullscreen></iframe>

[Video](https://youtu.be/DDUpBjZZqOM)

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/e326c9569d89abc53da12ecd06f62f2c0c7a9389) with the changes made in this video.

How is your app looking so far?

> Task List
>
> - [x] I have installed `redux` and restarted my development server
> - [x] I have imported my reducer as well as `createStore()` into `index.js`
> - [x] I have passed my reducer into `createStore()`, storing the return value in a `store` variable

## Redux DevTools
**Redux Devtools** provides power-ups for your Redux development workflow. Among other things, it allows you to see the current state of your store, as well as how that state changes based on actions that are dispatched.

Feel free to add it to your browser by visiting the [Redux DevTools extension page](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).

<iframe width="800" height="450" src="https://www.youtube.com/embed/6MdV_hzUV9Q" frameborder="0" allowfullscreen></iframe>

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/6b56069be8e155955947e6de7e0c1ba826ad4628) with the changes made in this [video](https://youtu.be/6MdV_hzUV9Q).

### QUESTION 1 OF 2

Please match the following store methods with their role:

- :X: ~~`registers a callback function to dispatch an action when the state is modified`~~
- :X: ~~`returns the previous state of the store`~~
- :X: ~~`tells the reducer to send an action`~~



STORE METHOD  | METHOD DESCRIPTION
------------- | ------------ 
`getState()`  | `returns the current state of the store`
`dispatch()`  | `sends an action (describing a change) to the store's reducer`
`subscribe()` | `registers callback functions to be executed whenever the store updates`



### QUESTION 2 OF 2

What is true about the store in Redux? Select all that apply.

- [X] Updates to the store can only be triggered by dispatching actions
- [ ] The `createStore()` function is imported from React
- [X] The store's `subscribe()` function helps connect React components to the store
- [ ] In Redux apps, all state is required to be kept exclusively in the store

## Summary
Redux comes with a method called `createStore()`. It takes in a reducer function as its first argument and returns a store object which has these methods on it:

- `getState()`
- `dispatch()`
- `subscribe()`