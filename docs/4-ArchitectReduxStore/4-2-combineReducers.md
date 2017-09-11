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
We've separated our reducers to handle distinct, independent slices of state. This process is called **reducer composition**. However, we now have a problem: Redux’s `createStore()` method only accepts one reducer! In order to create a valid store, we still need to figure out a way to combine both of these reducers together into one reducer.


Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/f92571e94b6b42cad3391983887261d91192a775) with the changes made in this [video](https://youtu.be/icUjbluFOlQ).

