# 5-4 Thunks

[video](https://youtu.be/thr0BJ9rN6Q)

## Background

Out-of-the-box, the Redux store can only support the synchronous flow of data.  Because of this, the most common usage of middleware in Redux apps is for handling [***asynchronicity***](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559).  Think of [thunk](https://github.com/gaearon/redux-thunk) as a wrapper for the store's `dispatch()` method.  Rather than returning action objects, we can use [***thunk action creators***](http://redux.js.org/docs/advanced/AsyncActions.html) to dispatch functions or Promises.

Note that without thunks, synchronous dispatches are the default.  That is, we *could* still make API calls from React components (e.g. using the `componentDidMount()` lifecycle method do make these requests), but we strive for two things in Redux apps:

- **Reusability** (think *composition*)
- **Predictability**, in which only *action creators* can be the source of each state update

Let's see how it all works!

## Installation

In order to use thunk middleware in an app, be sure to install the [redux-thunk](https://github.com/gaearon/redux-thunk) package:

```terminal
npm install --save redux-thunk
```

### Thunk Action Creator Example

Let's say that we are building a web app that stores a user's "to-do" items.  After the user logs in, the app needs to fetch all of the user's to-do's from a database.  Since Redux only supports the *synchronous* flow of data, we can use thunk middleware to asynchronously produce the HTTP request for this fetch action.

Before we can write our thunk action creators, let
's make sure we setup our store to be ready to receive middlware:

```JavaScript
// store.js

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/root_reducer'

const store = () => createStore(rootReducer, applyMiddleware(thunk))

export default store
```

Here, everything is setup for thunk middleware to be applied to the store:

- [x] thunk middleware is imported from `redux-thunk`
- [x] an instance of thunk is passed to the Redux's `applyMiddleware()` enhancer function.

Additionally, let's say that the HTTP request looks like the following:

```JavaScript
//util/todos_api_util.js

export const fetchTodos = () => fetch('/api/todos')

```

Since thunk middleware allows us to write asynchronous action creators that return *functions* rather than *objects*, our new action creator can now look like:

```JavaScript
// actions/todo_actions.js

import * as TodoAPIUtil from '../util/todo_api_util'

export const RECEIVE_TODOS = "RECEIVE_TODOS"

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
})

export const fetchTodos = () => dispatch => (
  TodoAPIUtil
    .fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)))
)
```

`receiveTodos()` is an action creator that returns an object, with a type key of `RECEIVE_TODOS` along with the `todos` payload.

`fetchTodos()`, on the other hand, allows us to return a function.  Here, we first make the HTTP request from `TodoAPIUtil`. By setting up a Promise, the action to receive all to-do items is dispatched *only* when the original request is resolved.

## Thunk's Underlying Implementation

If the above action creator(`fetchTodos()`) were written *without* the use of thunk middleware, we wouldn't see an ideal response from the reducer.  After all, the reeducer should only receive actions as plain JavaScript objects, not as functions!!

Consider this snippet of thunk middleware's [source code](https://github.com/gaearon/redux-thunk/blob/master/src/index.js) below:

```JavaScript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument)
    }

    return next(action)
  }
}

const thunk = createThunkMiddleware()
thunk.withExtraArgument = createThunkMiddleware

export default thunk
```

Under the hood, thunk middleware intercepts actions of the type `function` before the dispatch is generated.  In addition to `dispatch`, `getState` is also passed in as a second argument;  this allows thunk action creators to read the current state of the store.

Now it's your turn to test your knowledge of how thunks alter the process of dispatching actions!

### Quiz Question

A user clicks a button in the component to render an index page. This component calls a **thunk action creator** that returns a function.  Place the following events in the order that they occur:

Order | Event
----- | -----
Happens 1st | `API request Occurs`
Happens 2nd | `API request is resolved`
Happens 3rd | `Thunk middleware invokes the function with dispatch()`
Happens 4th | `Action is dispatched`

>#### Quiz result:
>
>Thanks for completing that!
>Revisiting the previous example:
>
>```JavaScript
>export const fetchTodos = () => dispatch => (
>  TodoAPIUtil
>      .fetchTodos()
>      .then(todos => dispatch(receiveTodos(todos)))
>);
>```
>
>We expect the API request to occur first. `TodoAPIUtil.fetchTodos()` needs to be resolved before anything else can be done. Once the request is resolved, thunk middleware then invokes the function with `dispatch()`. Keep in mind: the action is ever only dispatched after the API request is resolved.

## Summary & Further Research

If a web application requires interaction with a server, applying middleware such as **thunk** helps solve the issue of asynchronous data flow.  Thunk allows us to write action creators that return functions or Promises (rather than objects).  The thunk can then be used to delay an action dispatch, or to dispatch only if a certain condition is met (e.g., a request is resolved).

### Further Research

- [Redux Thunk on Github](https://github.com/gaearon/redux-thunk)
- [Async Flow from the Redux docs](http://redux.js.org/docs/advanced/AsyncFlow.html)
- Dan Abramov's Stack Overflow on Asynchronicity in Redux](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)