# Create Actions

<iframe width="800" height="450" src="https://www.youtube.com/embed/JQg3003PgoU" frameborder="0" allowfullscreen></iframe>

[video](https://youtu.be/JQg3003PgoU)

The browser allows you to set up event listeners and respond to certain events. Redux does too -- but the events are called **actions**. These actions are payloads of information that you set up to describe any event in the application that should update that application’s state.

<iframe width="800" height="450" src="https://www.youtube.com/embed/puzBjQZeVuA" frameborder="0" allowfullscreen></iframe>

[Video](https://youtu.be/puzBjQZeVuA)

Actions are JavaScript objects that describe any event that should update the application’s state. These objects must have a `type` property in order to distinguish the specific type of action that occurred.

```JavaScript
const LOAD_PROFILE = 'LOAD_PROFILE';

const myAction = {
  type: LOAD_PROFILE
};
```
Any other data needed to represent the type of action that occurred can be passed along as properties in the action (i.e., the plain old JavaScript object).
> 💡 Action Recommendations 💡
>
> A couple of things to keep in mind as you build action objects:
>
> - Prefer constants rather than strings as the values of `type` properties. Both work -- but when using constants, the console will throw an error rather than fail silently should there be any misspellings (e.g. `LAOD_PROFILE` vs. `LOAD_PROFILE`).
> - Keep the payload as small as possible. Have your resources only send the necessary data!

### QUESTION 1 OF 2

What is true about Redux actions? Please check all that apply:
- [x] Actions are just plain old JavaScript objects
- [ ] Actions must include a payload of data
- [x] Actions **must** include a `type` property
- [ ] Actions themselves directly write to state in the store
- [ ] Actions can be arrays, as long as they include a payload

## Action Creators
While Redux actions are just JavaScript objects -- these objects are not very portable. In order to make actions more portable and easier to test, we can wrap these actions in functions. These functions are called **action creators**. The term "action creator" makes sense, since it's really just a function that creates and returns an action.
```JavaScript
const submitUser = user => ({
  type: SUBMIT_USER,
  user
});
```
Now, whenever we need a `SUBMIT_USER` action, we can just call the `submitUser()` function, pass it a `user`, and it will generate the action!

```JavaScript
/* Create An Action Creator
 *
 * You need to create an action creator called 'mealCreator' that should:
 *   - Accept an id
 *   - Return a Redux action with a 'type' property that has a value of 'CREATE_MEAL'
 *   - Include the id passed to the action creator
*/

const CREATE_MEAL = 'CREATE_MEAL';

const mealCreator = id => ({
    type: CREATE_MEAL,
    id: id
});

console.log(mealCreator(1));
```

```JavaScript
/* Create An Action Creator
 *
 * You need to create an action creator called 'mealCreator' that should:
 *   - Accept an id
 *   - Return a Redux action with a 'type' property that has a value of 'CREATE_MEAL'
 *   - Include the id passed to the action creator
*/
const CREATE_MEAL = 'CREATE_MEAL';
const mealCreator = id => ({
    type: CREATE_MEAL,
    id: id
});
console.log(mealCreator(1));
```

## Starting the Project
Let's go ahead and begin building the in-class project, Udacimeals! The app will feature a customizable calendar for users to track their breakfast, lunch, and dinner through the week. Users will leverage [Edamam's Recipe Search API](https://developer.edamam.com/edamam-recipe-api) to add meals, then generate a shopping list of ingredients based on the meals chosen.

We'll begin by writing actions representing two ways that state can be changed in the application:

1. Adding a new recipe
2. Removing a food item from the calendar

We'll use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to scaffold the application. Be sure sure you have it installed, then create a new app. For a refresher, feel free to check out the previous React Fundamentals course again.

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/6c458c57016e56c8e5f29c20a84dd705ea632cc8) for the project skeleton.

Let's make sure we're on the same page! Please confirm the following:

> Task List:
> - [x] I have installed `create-react-app`
> - [x] I have used `create-react-app` to create the `Udacimeals` project
> - [x] I have created `actions`, `components`, and `utils` folders in my `src` directory
> - [x] I have moved `App.js` into my `components` folder (and resolved any import directories)
> - [x] I have created the `api.js` and `helper.js` files in the `utils` folder (as seen here in this [commit](https://github.com/udacity/reactnd-udacimeals-complete/tree/6c458c57016e56c8e5f29c20a84dd705ea632cc8/src/utils))

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/53bebcf6ce77202e1dd83ec255a70f5da8e73239) with the changes made in this [video](https://youtu.be/ByiA95y6JgU).

Let's make sure your actions are good to go!

> Task List:
> - [x] I have created an `index.js` file in my `actions` folder
> - [x] I have created and exported an `addRecipe` function
> - [x] I have created and exported a `removeFromCalendar` function
> - [x] Values for my `type` properties are constants rather than strings

## Summary
In this section, we looked at **actions** and **action creators**.

Actions in Redux are JavaScript objects that you set up to describe any event in your application that should update your application’s state.
```JavaScript
const LOAD_PROFILE = 'LOAD_PROFILE';

const loadProfileAction = {
  type: LOAD_PROFILE
};
```
Plain objects aren't very portable, so in order to make actions more portable and easy to test, they’re usually wrapped in functions called "action creators". These actions aren’t modifying the state themselves; instead, they’re just specifying that some event occurred which should update the state. It is important to keep actions as concentrated as possible, free of side effects.

```JavaScript
const loadProfile = user => ({
  type: LOAD_PROFILE,
  user
});
```
> **Now the question is:** what’s next? As of right now all we’ve done is talk about creating objects (actions) and wrapping those objects in functions (action creators). There are still two questions we need to answer. First, how does Redux know that invoking these action creators should modify the application’s state? Second, how do we specify how the application’s state should change, based off of these actions? These questions lead us to the topic of **reducers** in Redux.