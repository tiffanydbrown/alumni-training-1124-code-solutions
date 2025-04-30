# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The `event.target` is the "target element" where the event happens.

- Why is it possible to listen for events on one element that actually happens to its descendent elements?
  It is possible to listen for events on one element that actually happens to its descendent elements due to event bubbling.

- What DOM element property tells you what type of element it is?
  The `tagName` property tells you what type of element it is.

- What does the `element.closest()` method take as its argument and what does it return?
  The `element.closest()` method takes a CSS selector string as its argument, and returns the closest ancestor element of the element that matches the selector.

- How can you remove an element from the DOM?
  You can use the `Element.remove()` method to remove the element from the DOM.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  You can utilize event delegation to limit the amount of event listeners needed.
