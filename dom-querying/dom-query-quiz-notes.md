# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Things are logged to the console, so that they can be seen and read.

- What is a "model"?
  A "model" is the HTML document which is "modeled" after a tree-like object.

- Which "document" is being referred to in the phrase Document Object Model?
  The "document" being referred to is the web page.

- What is the word "object" referring to in the phrase Document Object Model?
  The word "object" is referring to are the HTML elements.

- What is a DOM Tree?
  A DOM Tree is the tree-like structure of the HTML elements in the DOM Model.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  Two examples of `document` methods that retrieve a single element from the DOM are:
  _`querySelector(selector)`
  _`getElementByClassName(className)`

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  One example of a `document` method that retrieves multiple elements from the DOM at once is `querySelectorAll(selector)`.

- Why might you want to assign the return value of a DOM query to a variable?
  You might want to assign the return value of a DOM query to a variable, because then you can reuse it later in your code.

- What `console` method allows you to inspect the properties of a DOM element object?
  The `console.dir()` method allows you to inspect the properties of a DOM element object.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  A `<script>` tag needs to be placed at the bottom of the HTML content, because it will improve page load speed and user experience. This placement helps ensure the entire HTML structure is parsed before the JavaScript code attempts to interact with it, preventing potential errors and making the page render faster.

- What does `document.querySelector()` take as its argument and what does it return?
  `document.querySelector()` takes a `selector` as its argument and returns the first element that matches a specified CSS selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  `document.querySelectorAll()` takes a `selector` as its argument and returns a NodeList of all elements in the document that match a specified CSS selector.
