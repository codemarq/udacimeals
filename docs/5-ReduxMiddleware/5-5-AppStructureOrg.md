# App Structure & Organization

## Organizing the Directory Structure of a Redux Application

Aside from using middleware, we can also enhance our app in perhaps a more ancillary manner by choosing how we structure our file paths. After all, there are many moving parts and dependencies when it comes to Redux apps -- `actions`, `reducers`, the `store`, `components`, `API utilities` -- the list goes on.

By consciously thinking about how we organize our app’s assets, not only can we make it easier to find files we’re looking for, we can also make it easier to move things around (i.e., *modularity*). Here are two great ways that you can organize the directory structure when building Redux apps:

### Organization by Capability ("Type")

```Explorer
Frontend
   - Components
      - component1.js
      - component2.js
      - component3.js
   - Actions
      - action1.js
      - action2.js
   - Reducers
      - reducer1.js
   - Util
   - Store
```

By organizing **by capability**, we know exactly where to look for certain assets: any action will be found in the *Actions* folder, any reducer will be found in *Reducers*, and so on. In fact, the “real world” example from [Redux on GitHub](https://github.com/reactjs/redux/tree/master/examples/real-world) structures the app this very way. Under this directory structure, if we wanted to import all actions into a component, we can get them all in a single import!

### Organization by Feature
If we need to make any changes, however, things might get tricky. What if a particular component’s requirements change? We’d have to manually look for that component’s related assets (actions, reducers, etc.) all in separate locations to make the necessary changes. An alternative way to structure the same application, then, is **by feature**:

```Explorer
- nav
   - actions.js
   - index.js
   - reducer.js

- dashboard
   - actions.js
   - index.js
   - reducer.js
```

This form of organization groups assets by their common “feature,” or “concept.” That is, all assets related to a navigation component are all together in a single, modular folder. It’s a great way to visually express what the application is all about, though if the app contains several hundred components, it can become more difficult to navigate through.

Ultimately, the choice is yours. Whatever way you choose to organize your directory structure, just be sure that it’s something that makes sense for your app, and it’s something you’re comfortable with!

## App Structure and Organization Recap

The two most popular ways to organize a Redux application are by:

- **Capability**, in which all actions in an "Actions" folder, all reducers in a "Reducers" folder, etc.
- **Feature**, in which, say, a "Sidebar" folder includes a file for all of the Sidebar's actions, a file for all of the Sidebar's reducers, etc.

All in all, there is no "right way" to split things up, though there are conventions we can practice to help manage the complexity of Redux. Considering the features, scale, and dependencies in your app, feel free to choose whichever structure makes the most sense.

## Further Research

- [GitHub Issue #2378: An alternative way to handle actions and reducers](https://github.com/reactjs/redux/issues/2378)