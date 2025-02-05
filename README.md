# Lab: Building Components with JavaScript

## Getting Started

In this lab you will be starting with the BrainStation template that you are familiar with. The starter code has already turned the `body` of the page into a large component called `Main` for you.

To get started, please download the starter files [here](./building-components-js-starter.zip).

## Instructions

1.  Open `index.html` and take a look at its appearance in the browser

    - Identify the visual components
    - Which components are nested inside other components?
    - Do you think that there is a single answer to this question?

2.  Currently our HTML is rendered as one big string in `script.js`. Let’s turn this into separate components: `Header`, `Hero`, `MainContent` and `Footer`.
3.  For each of your chosen components:

    - Identify the portion of HTML to be rendered inside of that component. You will have to cut & paste the relevant HTML for that component from the `Main` component.
    - Create a new function that returns your component’s HTML.
    - Refactor the `Main` component to render this portion of the page using the new functional component.
    - If you used arrow functions to define your functional components, be careful about the order in which you defined your functions and rendered them in the `Main` component as arrow functions are not hoisted!

4.  Think about some challenges faced, potential bottlenecks, and improvements for your implementation. We will use React going forward to create components so it’s good to reflect on current pain points to better understand how React will help us solve all the challenges faced by using just plain old JavaScript.
