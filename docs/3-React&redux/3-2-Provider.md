# Provider

[video](https://youtu.be/BTmDYx9CxPQ)

## Setup
Before we can use **Provider**, we need to install it:
```
npm install --save react-redux
```
Be sure to also import Provider to the component being rendered into the DOM by `ReactDOM`. Note that the file name of this component can be flexible, but you may commonly see it as `app.js`, `root.js`, or `index.js` (as in the following [video on using the Provider Component](https://youtu.be/CPTJMOtgLxs)).

```JavaScript
import { Provider } from 'react-redux';
```

## Using the Provider component

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/b8d39c14c22f7b9067a807a3a76ae133923b1669) with the changes made in this [video on using the Provider Component](https://youtu.be/CPTJMOtgLxs).

Time for a quick check-in!

### Task List

- [x] I have removed the lower-level methods from the `App` component
- [x] I have imported the `Provider` component from `react-redux` into `index.js`
- [x] I have passed the `store` prop to `Provider`
- [x] I have wrapped the `App` with `Provider`

## Using Provider
The magic behind Provider is React’s [context](https://facebook.github.io/react/docs/context.html) feature. From the React docs:

> "In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. You can do this directly in React with the powerful 'context' API"

The reason `Provider` makes `connect()` possible is because, just as the docs describe, Provider makes it possible to “pass data through the component tree without having to pass the props down manually at every level”.

### QUIZ QUESTION

What is true about Provider? Please check all that apply:
- [ ] It provides API endpoints to the store
- [x] It provides the `store` globally to all subcomponents
- [ ] It provides action creators to the store
- [x] `Provider` is just a React component that wraps the application
- [ ] All React-Redux apps cannot function without Provider

# Provider Recap
Provider makes it possible for Redux to pass data from the store to any React components that need it. It uses React’s [context](https://facebook.github.io/react/docs/context.html) feature to make this work.

Components that need access to the store, however, still need a way to “connect” to it. We mentioned the `connect()` function earlier, which utilizes a technique in functional programming called ***currying***. Before we see `connect()` in action, let’s take a closer look at how currying works!