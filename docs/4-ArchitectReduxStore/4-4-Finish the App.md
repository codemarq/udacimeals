# Finish the App!
In this section, we’ll finish building out the rest of the **Udacimeals** food calendar application. At this point, everything that has to do with Redux is already done! Even though the videos in this section are mainly focused on building out the React components, we'll be making use of Redux throughout. Be sure to follow along!
> ⚠️ Provided Code ⚠️
>
> This section includes a lot of React code that we'll be pasting in, as it's not specifically related to the Redux portion of the app. We'll go over the pasted code in detail in the following videos, but feel free to check out the GitHub links provided, as well.

Here's the [React code](https://github.com/udacity/reactnd-udacimeals-complete/blob/822085c8659757fe12c3489100dbefae832f9038/src/components/App.js) for the calendar grid included in the following [video](https://youtu.be/4LI5y6Paxuw).

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/822085c8659757fe12c3489100dbefae832f9038) with the changes made in this video.

Getting close to the finish line! Let's check in the project:

#### Task List

- [x] I have installed `react-icons`
- [x] I have imported `CalendarIcon` from `react-icons/lib/fa/calendar-plus-o`
- [x] I have imported the `capitalize()` function from `../utils/helpers`
- [x] I have updated the App component's `render()` method
- [x] I have updated `index.css` with the style sheet [here](https://github.com/udacity/reactnd-udacimeals-complete/blob/master/src/index.css)

## Edamam API Keys
To continue, you’ll need to register with Edamam to get an API key for searching recipes. This is free and shouldn’t take too long. You can register for the free plan on the [Edamam developer site](https://developer.edamam.com/edamam-recipe-api).

Once you have registered, place your unique ID and API key in a [`.env`](https://github.com/udacity/reactnd-udacimeals-complete/blob/823876c8e3b669c0338f630fa50120adb7168f6f/.env) file located in the root directory of your project.
Before we jump in, here are the components and methods that we review in the following [video](https://youtu.be/Jqq2Ig4BaTo):

- [The `FoodList` component](https://github.com/udacity/reactnd-udacimeals-complete/blob/823876c8e3b669c0338f630fa50120adb7168f6f/src/components/FoodList.js)
- [The Modal methods and JSX](https://github.com/udacity/reactnd-udacimeals-complete/blob/823876c8e3b669c0338f630fa50120adb7168f6f/src/components/App.js)

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/823876c8e3b669c0338f630fa50120adb7168f6f) with the changes made in this [video](https://youtu.be/Jqq2Ig4BaTo).
Almost there! Let's make sure we're on the same page.

#### Task List

- [x] I have received a unique ID and API key from Edamam
- [x] I have installed `react-loading`
- [x] I have installed `react-modal`
- [x] I have restarted my development server
- [x] I have imported all necessary assets
- [x] I have added local component state to `App`
- [x] I have created the `openFoodModal`, `closeFoodModal`, and `searchFood` methods
- [x] I have updated the `App` component's `render()` method
- [x] The `render()` method for `App` also renders the `FoodList` component (as seen here in this [commit](https://github.com/udacity/reactnd-udacimeals-complete/blob/823876c8e3b669c0338f630fa50120adb7168f6f/src/components/FoodList.js)).

Just as with the `FoodList` component, feel free to also review the [`ShoppingList` component](https://github.com/udacity/reactnd-udacimeals-complete/blob/0e343838ef120c458f3b3b4a5de74dbc167be4d6/src/components/`ShoppingList`.js) referenced in the following [video](https://youtu.be/lD9AzyREDOw).

Here's the [commit](https://github.com/udacity/reactnd-udacimeals-complete/commit/0e343838ef120c458f3b3b4a5de74dbc167be4d6) with the changes made in this [video](https://youtu.be/lD9AzyREDOw).

### Final check-in!
#### Task List
- [x] I have imported the `ShoppingList` component
- [ ] I have updated local component state with a `ingredientsModalOpen` property
- [ ] I have created the `openIngredientsModal`, `closeIngredientsModal`, and generate`ShoppingList` methods
- [ ] I have updated the `App` component's `render()` method
- [ ] The `render()` method for App also renders the `ShoppingList` component (as seen here in this [commit](https://github.com/udacity/reactnd-udacimeals-complete/blob/0e343838ef120c458f3b3b4a5de74dbc167be4d6/src/components/`ShoppingList`.js))

## Finish the App! Recap
In this section, we finished building out the remainder of the **UdaciMeals** project. At this point, you’ve seen how, if used correctly, Redux can make managing state in a React application more efficient and predictable.