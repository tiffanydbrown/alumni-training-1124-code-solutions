# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We log things to the console to see if there are any errors.

- What is the purpose of events and event handling?
  The purpose of events and event handling is to respond to user interactions within a web page.

- Are all possible parameters required to use a JavaScript method or function?
  No, not all declared parameters of a function or method are required.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The `addEventListener()` method of element objects lets you set up a function to be called when a specific type of event occurs.

- What is a callback function?
  A callback function is a function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?
  An event object is passed into an event listener callback when the event fires.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The `event.target` is the element that is responsible for the firing of the event. If you weren't sure, you could log the event object to the console.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The difference between these two snippets is in the second one you are passing a callback function called `handleClick` to the element, where the first one you are just attaching an event listener to an element.
