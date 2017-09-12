# Object Spread Notation-:rubberduck: :neckbeard:

Consider the below reducer function.  We will run through it step-by-step to explain Object Spread Notation:

```JavaScript

function food (state={}, action) {
  switch (action.type) {
    case 'ADD_RECIPE' :
      const { recipe } = action
      return {
        ...state,
        [recipe.label]: recipe
      }
    default: 
      return state
  }
}

```

* We don't want the calendar reducer to also handle the state of our food, so we need to create a separate reducer, food, which will handle any of the recipes for us.  

* This minimizes duplicating data.  So we need to create another property on our state.  We will pass in a separate state object of our calendar as well as our food at the same level (this.state)

* First we initialize our food reducer by passing in the state with the initial state as an empty object. We also pass in an action. e.g.:
```JavaScript
initialState = state: [{
  calendar:{
  }, {
  food: {
    // recipes
  }
}];

action = {//passed in to reducer from }
};
``` 
* We will setup a switch on action.type (all redux actions are objects and must have a key of 'type' which is an object describing what should occur or what event has happened `{object}`).  

* Whenever we receive an `ADD_RECIPE` action or whenever the `ADD_RECIPE` action is dispatched, we will grab the `{ recipe }` from that action.

* we will return a brand new object.

  ```JavaScript
   return {
     ...state,
     [recipe.label]: recipe
   }
   ```
   * We are going to say the `state` is whatever the `state` currently was. 

   * But now we are going to say that *this specific* `recipe` (the one with `recipe.label`), is now going to be *this* (the one being passed in as `recipe` from the action `ADD_RECIPE`.

* By default, the switch will return the state, which all reducers have to do-return the previous state or a modified copy of the current state.

So at this point, we have used Object Spread notation in both of our reducers `calendar` and `food`.  
We have also handled two different state changes to occur based upon the `ADD_RECIPE` action.  Whenever this action is dispatched, we will modify our `calendar` `state` but and the `food` section of our `store`.

#### One problem:
How?

We are exporting `calendar` from our reducers folder, and then inside our root `index.js` what we are doing is:
```JavaScript
import reducer from './reducers'
```
which is just calendar.  We are then passing that to create `store`.  What we need to do is figure out a way to combine our `calendar` reducer along with our `food` reducer.

## Using Object Spread notation

## Resources
* [MDN Docs on Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)