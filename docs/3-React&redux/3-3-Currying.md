# 3-3-Currying

[video](https://youtu.be/UKv9rnsiXeM)

Here we have a simple `plate()` function which takes in two arguments: avegetable and a fruit.

```JavaScript
function plate(vegetables, fruit) {
  return `I ate a plate of ${vegetables} and ${fruit}!`;
}

plate('corn', 'apples');
```
Now say that for whatever reason we want to delay getting the fruit until a later point. One way we could achieve this would be to return a function which accepts the fruit that can be invoked at a later point.

```JavaScript
function plate(vegetables) {
  return function fruitFunc (fruit) {
    return `I ate a plate of ${vegetables} and ${fruit}!`;
  }
}

const fruitFunc = plate('corn');
```
Now we have a `fruitFunc()` that we can call, pass it a fruit, and the vegetables (corn) are still accessible via closures.

Another way to write this without the delay would be like this:

```JavaScript
function plate(vegetables) {
  return function fruitFunc (fruit) {
    return `I ate a plate of ${vegetables} and ${fruit}!`;
  }
}

const sentence = plate('corn')('apples');
```
It may take a second for your brain to wrap your head around that double invocation, but try to break it down into steps. When you call the plate function, that returns the `fruitFunc()`, which is then invoked and passed “apples”. This technique is used in functional programming (as well as Redux) and is called ***currying*** (also partial application).

### QUESTION 1 OF 2

Here is a partially applied function:

```JavaScript
function iceCreamOrder(name) {
  return function flavorPicker (flavor) {
    return function scoops (numScoops) {
      return `${name} ordered ${numScoops} scoops of ${flavor} ice cream!`;
    };
  };
}
```
Which of the following is the correct invocation?

- [ ] iceCreamOrder('chocolate')(3)
- [ ] iceCreamOrder('Richard', 'Cookies & Cream', 2)
- [ ] iceCreamOrder('Richard')('Strawberry', 1)
- [x] const func = iceCreamOrder('Richard')('Mint Chocolate Chip') 
func(5)


>#### 💡 Function Calls 💡
>
>If you’re ever in doubt of how many functions need to be returned, take a look at the number of function calls! The general rule is that number of functions returned is one less than the number of functions called. For example, if you see ***three*** function calls, you need to return ***two*** functions.

### QUESTION 2 OF 2
```JavaScript
/* Write a Curried Function
 *
 * Create a function called "houseBuilder" that should:
 *   - Accept the number of stories (floors)
 *   - Return a function
 *
 * The returned function should:
 *   - Accept the color of the house
 *   - Return a string in the following format:
 *     "building a <numOfStories>-story, <color> house"
 *
 * Example:
 * const response = houseBuilder(3)('blue');
 * console.log(response); // building a 3-story, blue house
*/

function houseBuilder(floors) {
    return (color) => {
        return `building a ${floors}-story, ${color} house`
    }
};

const response = houseBuilder(3)('blue');
console.log(response); // building a 3-story, blue house
```

## Currying Recap
**Currying** is the process of partially providing the input to a function that requires additional data. The part of the Redux API that uses currying is its `connect()` method. Let's take a look!

## Further Research
- [Beginner’s Guide to Currying in Functional JavaScript](https://www.sitepoint.com/currying-in-functional-javascript/)
- [Gettin’ Freaky Functional w/ Curried JavaScript](http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/)
- [Currying in JavaScript](http://kevvv.in/currying-in-javascript/)