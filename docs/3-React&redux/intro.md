# Introduction-React & Redux

Up until this point, we’ve only used "vanilla" Redux. That is, everything so far has been agnostic in regards to any sort of framework or view library.

To recap, earlier we created a store with `createStore()`, passing it a reducer function. Then we learned how to use `dispatch()`, `getState()`, and `subscribe()` to hook up Redux to a React app. As you probably noticed: it didn’t work out that well! We ended up passing the store down to the main component in order to get access to dispatch(), `getState()`, and `subscribe()`. This worked fine for a small application, but it doesn't scale well with additional components.

This doesn’t mean Redux is ineffective; we just don’t have the right abstraction. Until this point we’ve been learning about low-level Redux methods and trying to use those with React. What if there were a better abstraction, one specifically for using Redux with React? Good news! There is, and it’s called `react-redux`, made by the creators of Redux itself.

The biggest benefit of `react-redux` is when dispatching actions and accessing the Redux store from inside of your React components. This is all possible through `react-redux`'s `Provider` component and the `connect()` method.

`connect()` allows you to specify which components should receive which data from the store and Provider makes `connect()` work properly. Let’s dive into both of those a bit more.