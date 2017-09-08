# Create Reducers

<iframe width="800" height="450" src="https://www.youtube.com/embed/X-hLReMAOI4" frameborder="0" allowfullscreen></iframe>

[video](https://youtu.be/X-hLReMAOI4)

Recall that **actions** describe the fact that some event occurred in your application -- but they don’t concern themselves with *how* the actual state should change in response to that action. That’s the job of the **reducer**. A reducer receives the current state and an action that was dispatched, then decides how to transform the current state into a brand new state based on the action it received.

How does a reducer know in which way to modify the app’s state based on the type of action it receives? Let’s look at an example and find out.

A reducer is just a function which receives the current state and the specific action which was returned from an action creator:
```JavaScript
function reducer (state, action) {
  // ...
}
```
Inside of the reducer, we create a switch statement (or if/else statements) to match the `type` property of the action. Then we return a new, updated state.
```JavaScript
function reducer (state, action) {
  switch (action.type) {
    case 'SUBMIT_USER' :
      return Object.assign({}, state, {
        user: action.user
      })
  }
}
```
In the example above, whenever a `submitUser` action creator is invoked and passed to a reducer, our `switch` statement will match the `'SUBMIT_USER'` case. Then a new state will be created and a `user` property will be added (or edited) to that new state whose value is the user we originally passed to the `submitUser` action creator.

There are some rules for how reducers should behave. The most crucial is that your reducer *must* be a **pure function**.

## A Reducer is Pure
> Recall that pure functions:
> 
> 1. Return one and the same result if the same arguments are passed in
> 2. Depend solely on the arguments passed into them
> 3. Do not produce side effects
>
>For a refresher, feel free to review Pure Functions from Lesson 1: Why Redux?

The whole point of a reducer is that it takes in the current state, an action, and returns the new state. That’s it! If you’re doing anything more than that in your reducer, your code is probably doing something wrong. A reducer should not:

- Change its arguments
- Have side-effects (asynchronous requests, changing scope variables, etc.)
- Use other impure functions

In other words, a reducer needs to be a pure function!

### QUESTION 1 OF 3

> Select all that are true:
>
> - [ ] Reducers can make asynchronous calls
> - [x] Reducers should always return the state
> - [ ] Reducers should always mutate the existing state
> - [x] Reducers should never use `Date.now()`

Refer to this reducer in the question below.
```JavaScript
function reducer(state = {}, action) {
    switch(action.type){
        case "ADD_ITEM":
            return action.item;
        case "EMPTY_CART":
            return {};
        case "UPDATE_ITEMS":
            state.items = action.items;
            return state;
        default:
            return state;
    }
}
```

### QUESTION 2 OF 3

> What is wrong with the reducer above? Please check all that apply:
>
> - [ ] The default state is not returned
> - [ ] The switch statement is checking the incorrect expression
> - [ ] The switch statement is incorrectly formatted
> - [ ] It mutates the previous state
> - [ ] It doesn't account for all action types

Now it's time to create a reducer on your own!
```JavaScript
/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/



1
2
3
4
5
6
7
8
9
10
11
12
13
14
15

```

```JavaScript
/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/

```

## Quiz Solution: Create a Reducer
For a quick recap of how we solved the previous quiz, check out this [screencast](https://youtu.be/itvhVyQVFo4)

[another video](https://youtu.be/lWPaJu6Fc5s)

### Reducers and State
A reducer in Redux specifies the shape of the application's state and decides how the state should change based off specific actions.

You specify the initial state of the Reducer by using ES6’s default parameters feature.
```JavaScript
function myReducer (state = initialState, action) {
  // ...
}
```

What is returned from the reducer will be the new state of the application, so you need to make sure you always return either the new state or the previous state.
```JavaScript
function myReducer (state = initialState, action) {
  if ( /* ... */ ) {
    return {
      ...state,
      name: 'Tyler'
    };
  }

  return state;
}
```
The way you decide how to change the state is based on the type of action that was dispatched.

```JavaScript
function myReducer (state = initialState, action) {
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      name: 'Tyler'
    };
  }

  return state;
}
```

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/9303a724d8fe4388b7c9c2bdbeec8dd9339ad9c1) with the changes made in this [video](https://youtu.be/o_MwoKzdD9E).

How does your reducer look? Please confirm the following:
> Task List
>
> - [ ] I have created an `index.js` file inside a `reducers` folder in my `src` directory
> - [ ] I have imported the two `actions` created
> - [ ] I have created an `initialCalendarState` object
> - [ ] My `calendar` reducer function takes in `state` (with a default parameter of `initialCalendarState` ) and an `action`
> - [ ] My `calendar` reducer function handles both adding recipes as well as removing them from the calendar
> - [ ] My `calendar` reducer function **does not** mutate state directly
> - [ ] My `calendar` reducer function returns the initial state by default
> - [ ] I have exported the `calendar` reducer function
> 💡 Data Normalization 💡
> 
> How should you format your data when it's needed in different places? For one, you can make sure your data is **normalized**. Don’t worry about it too much for now. We’ll get to data normalization in a later Lesson!
## UI State
A fundamental part of being able to construct a well-built React/Redux application is understanding when to have state live in Redux, and when to have state live in React components. Now, there isn’t a hard set rule for this and it’s something even the React community can’t come to an agreement on, so everything below will be my opinion.

The first question I ask myself when deciding where a piece of state should live is, “Will two components rely on this same piece of state?” If that answer is yes, you’ll almost always want to have Redux manage that piece of state. The reason for that is if the piece of state lives in Redux, no matter what the relationship is between the two components, each can gain access to the needed state.

The next question I ask myself is, “What does that caching story for this piece of state look like?” If the operation to get the data was expensive, it may be worth putting it in Redux so you don’t have to re-fetch it every time the component mounts. For any other scenarios, you’re probably fine just sticking to local component state as you’re used to.
## Summary
Reducers are just functions; they receive the current state and an action object, they must be a pure function, and they should always return either the new state or the previous state.

```JavaScript
function myReducer (state = initialState, action) {
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      name: 'Tyler'
    };
  }

  return state;
}
```
Store your state in Redux if two components rely on the same piece of state, or if the operation to get that state was expensive.