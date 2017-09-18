# 4-3-Normalization

[video](https://youtu.be/WonB11EM1uw)

## Building an Effective Redux Store
When architecting a Redux store, there are two things you should keep in mind:

1. **Do not duplicate data.** If data lives in multiple places, you have no single source of truth, and you waste resources trying to keep the data in sync with each other.

2. **Keep your store as shallow as possible.** Nested data makes reducer logic more complicated (trying to update deeply nested data can get slow and complex quickly).

Let's take a look at a simple example. Below we have a `people` object and a `friends` array:
```JavaScript
const people = {
  kassidi: {
    name: 'Kassidi Henry',
    age: 24,
    favoriteMovie: 'Remember the Titans'
  },
  tyler: {
    name: 'Tyler McGinnis',
    age: 25,
    favoriteMovie: 'Fatigue: A JavaScript Story'
  },
  jake: {
    name: 'Jake Lingwall',
    age: 26,
    favoriteMovie: 'Casablanca'
  },
}

const friends = ['kassidi', 'jake']
```
Now if I need to create a new array which references all of my friends, the code is simply:
```JavaScript
friends.map((friend) => people[friend])
```
I’m never going to have a data consistency error because all of my data is really just referencing other data. This is exactly how data should work in Redux. You want to avoid duplication of data as much as possible; instead, favor creating *references*.

This pattern is beautifully summarized in the Redux docs:

> "In a more complex app, you’re going to want different entities to reference each other. We suggest that you keep your state as normalized as possible, without any nesting. Keep every entity in an object stored with an ID as a key, and use IDs to reference it from other entities, or lists."
The next tip is keeping state in your store as shallow as possible. The reason for this comes down to increasing performance and minimizing complexity.

Say we have an object that looks like this:
```JavaScript
const books = {
  fiction: {
    fantasy: {
      teens: {
        0: {
          title: 'Harry Potter and the Nested Data',
          author: 'JK Rowling',
        }
      },
      adults: {}
    },
    romance: {},
    scifi: {},
  }, 
  nonFiction: {}
}
```
If we want to create a new object (because we never want to modify the original state), but alter the title of Harry Potter, our reducer function will have to look something like this:
```JavaScript
function books (state, action) {
  const { bookType, genre, category, id, title } = action
  if (action.type = CHANGE_TITLE) {
    return {
      ...state,
      [bookType]: {
        ...state[bookType],
        [genre]: {
          ...state[bookType][genre]: {
            [id]: {
              ...state[bookType][genre][id],
              title,
            }
          }
        }
      }
    }
  }

  return state
}
```
Look at that nested structure -- yikes! You get the picture. Not only is this extremely inefficient because we're cloning state with every spread operator (`...`), it's also extremely difficult to reason about -- both as a writer or reader of that code.

By referencing different entities in your state and keeping your state as shallow as possible, you increase performance and make your code much easier to reason about.

## Normalization Recap
**Normalization** is the process of removing duplicate pieces of data and making sure that the data is as shallow as possible. Not only does this allow applications to maintain the “single source of truth” in the store’s state -- reducer logic that updates that state is also kept clean and reasonable. Ultimately, normalizing your Redux store will lead to more efficient and consistent queries.

## Further learning
- [Normalizr](https://github.com/paularmstrong/normalizr)
- [Normalizing State Shape from the Redux docs](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)
