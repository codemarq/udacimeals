# 3-4-Connect

[video](https://youtu.be/0sUIbyTak8Y)

## Installation
If you haven’t already, go ahead and install **react-redux**:
```
npm install --save react-redux
```
Once you do that, you can grab `connect()` from the react-redux package:
```JavaScript
import { connect } from 'react-redux';
```
## Using Connect
`connect()` is a function that makes it possible for a component to get both state and dispatch from the Redux store. Its signature is interesting. Fully used, it looks like this:
```JavaScript
connect(mapStateToProps, mapDispatchToProps)(`MyComponent`)
```
As a preview, `MyComponent` is the component you want to receive store state, dispatch, or both. `mapStateToProps()` is a function that receives the current store, current props, and what it returns will be available to `MyComponent` as props. `mapDispatchToProps()` allows you wrap action creators inside of dispatch. Let's take a closer look at each of them!

## `mapStateToProps()`
`mapStateToProps()` allows you to specify which data from the store you want passed to your React component. It takes in the store's `state`, an optional `ownprops` argument, and returns an object. Check out its complete signature:
```JavaScript
mapStateToProps(state, [ownProps])
```
As stated in the Redux docs:

> “If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props.”

In other words: the properties of the object returned from `mapStateToProps()` will be passed to the component as props! You can think of `mapStateToProps()` as just a function that lets `connect()` know how to map specific parts of the store’s state into usable props.

Consider the following example:
```JavaScript
import { connect } from 'react-redux';

const User = ({ name, age }) => {
  // ...
};

const mapStateToProps = (state, props) => ({
  name: state.user.name,
  age: state.user.age
});

export default connect(mapStateToProps)(User);
```
In the above example, both `name` and `age` will be available as props for the `User` component to access.

## ownProps *(optional argument)*
`mapStateToProps()`'s optional argument, `ownProps`, gives us access to props passed into a connected component. Let's say we have a component with props passed *directly* down from a parent component:
```JavaScript
<ConnectedComponent firstName={'Harper'} lastName={'Lee'} />
```
These props can be merged along with other portions of state through `ownProps`:
```JavaScript
const mapStateToProps = (state, ownProps) => ({
  occupation: state.occupation,
  userInfo: `${ownProps.firstName} ${ownProps.lastName}: ${state.occupation}.`
});

export default connect(mapStateToProps)(MyComponent);
```
A great place to use `ownProps` is when filtering some data. Let's say we want to build a component `MyPhotos` that, upon login, renders an index of all the user's photos. The logged-in user is stored in another location in the application, and is passed down to the `MyPhotos` component as a prop. We can then leverage `ownProps` to access and display only what we need:
```JavaScript
const mapStateToProps = (state, ownProps) => ({
  photos: state.photos.filter(photo => photo.user === ownProps.user)
});

export default connect(mapStateToProps)(MyPhotos);
```
This way, we can quickly pass in a prop to a component (e.g., `user`) and return all of the photos authored by that user from the store's state.

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/e01aeaf5719ab83cb4af8bf6aa944148335122f9) with the changes made in this [video](https://youtu.be/vf7M8p-ZRko).

## `mapDispatchToProps()`
When you connect a component, that component will automatically be passed Redux's `dispatch()` method. What that means is that if you want to dispatch an action, you can do so in the component like this:

```JavaScript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName } from './actions';

class User extends Component {
  state = { name: '' }
  handleUpdateUser = () => {
    this.props.boundUpdateName(this.state.name)
  }
  render () {
    // ...
  }
}

export default `connect()`(User);
```
`mapDispatchToProps()` can clean up the code above just a bit. The whole point of `mapDispatchToProps()` is to make it so you can bind `dispatch()` to your action creators before they ever hit your component. In code, that looks like this:

```JavaScript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName } from './actions';

class User extends Component {
  state = { name: '' }
  handleUpdateUser = () => {
    this.props.boundUpdateName(this.state.name)
  }
  render () {
    // ...
  }
}

const mapDispatchToProps = dispatch => ({
  boundUpdateName: (name) => dispatch(updateName(name))
});

export default connect(null, mapDispatchToProps)(User);
```

`mapDispatchToProps()` is completely optional and I'm not convinced it makes things that much cleaner, but it is nice to know about.

Let's see how it all works!

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/66a4a3ecae2d9dd4f3b20611529c4c55be19a3b2) with the changes made in this [video](https://youtu.be/uaAxnfPxSXE).
How are things looking so far?

#### Task List

- [x] I have imported `connect()` from `react-redux` into `App.js`
- [x] I have imported the `addRecipe` and `removeFromCalendar` actions into `App.js`
- [x] I have created the `mapStateToProps` function
- [x] I have created the `mapDispatchToProps` function
- [x] I have used `connect()` to curry and return a function that takes in `App`

### QUESTION 1 OF 3

`connect()` connects which two items?

- [ ] Action
- [ ] Action creator
- [x] Store
- [ ] Reducer
- [ ] API util
- [x] Component

### QUESTION 2 OF 3

Consider a simple React component, **`MyComponent`**. How does `MyComponent` access state?

- [ ] The entire store is passed in to `connect()`, which is curried along with `MyComponent`
- [ ] The only way is to pass the store down from parent to child component until it reaches `MyComponent`
- [x] A container component connects the store to `MyComponent`, giving `MyComponent` slices of state accessible via props
- [ ] `MyComponent` can access state via `this.state`, since all state should always be stored in the component itself in Redux apps

### QUESTION 3 OF 3

What will `ContactForm` receive as props?

```JavaScript
const ContactForm = ({ firstName, handleAdd }) => (<div>...</div>);

const mapStateToProps = state => ({
  fullName: state.name
});

const mapDispatchToProps = dispatch => ({
  handleAdd: contact => dispatch(addContact(contact))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
```

- [x] `fullName`
- [ ] `mapDispatchToProps`
- [ ] `mapStateToProps`
- [ ] `contact`
- [x] `handleAdd`
- [ ] `the entire state`

## Connect Recap
`connect()` connects a React component to the Redux store. `mapStateToProps()` allows us to specify which state from the store you want passed to your React component. `mapDispatchToProps()` allows us to bind dispatch to your action creators before they ever hit your component.

## Further Learning
[`connect()` from the react-redux docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
[`connect()` vs. subscribe() on StackOverflow](https://stackoverflow.com/a/41963751)
