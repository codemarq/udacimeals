# Implementing Middleware

[video](https://youtu.be/ss_q8hV8B6M)

## Where Does Middleware Go in a Redux App?

Recall that the `createStore()` method is used to create the Redux store. Aside from passing in a `reducer` (oftentimes the combined "root reducer"), `createStore()` can also take in an optional `enhancer` argument, as well! Here is the method signature for `createStore()`:

```JavaScript
store.createStore(reducer, [preloadedState], [enhancer])
```

Redux provides us with the `applyMiddleware()` function that we can use as our `enhancer` argument. `applyMiddleware()` can accept multiple arguments, so if needed, we can apply more than one middleware to an app. Let’s see this all in action, starting with the **logger** middleware!

### Example: logger Middleware

Remember that Redux is a “predictable state container” for web applications. When an action is dispatched, we expect to see a new state processed and saved (e.g. state cannot update by itself, nor should any external sources write directly to state). Wouldn’t it be great to log every action that occurs in the app, as well as the state before and after it?

We can apply **logger** middleware to do just that! The logger produces a *side effect*: printing the store’s state before and after the reducer processes the action.

Let’s jump in!

[video](https://youtu.be/T2Pe08S5yfk)

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/2b60fe731b2e4f8ebcfaaafc0ac36ecd11e5215d) with the changes made in this video.

> ### 💡 The `redux-logger` npm Package💡
>
> In the previous video, we used a custom logger to print the store’s state to the console. You are welcome to check out [redux-logger](https://www.npmjs.com/package/redux-logger), too, for a pre-made logging tool. To install:

```
npm install --save redux-logger
```

The `redux-logger` package comes with default options out-of-the-box, but feel free to add [further customizations](https://github.com/evgenyrodionov/redux-logger#options) as needed!