## 1. What are PropTypes used for?

## To insure that the data being passed around in our props is of the type we are expecting. this can help us catch bugs easier or before they even become a problem

## 2. What is a lifecycle event in React?

## The react library comes with some specific events/lifecycles that we can access at specific times in the applications dynamic life to ensure that the props and the behavior that we are expecting are occurring at the correct times. the only required one is the render method to display the components to the DOM. the others can be utilized if needed and can fire a new render if need be...i.e. loading data we get back from an api into props in the componentDidMount lifecycle

## 3. What is a Higher Order Component?

## A component that takes in another component as its argument and returns to us a new component. they benefit from being able to encapsulate shared functionality and this helps keep code DRY

## 4. What are three different ways to style components in React?

## You can use native css in an all-encompassing css file or individual component css files, you can utilize a third party css library like reactstrap, tachyons, materialize, etc through npm and following their specific guidelines, and you can import a library called styled-components and do the components styling directly inside your js file and utilize the added functionality that comes with that library
