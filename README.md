# Sprint Challenge: Lambda Times (React)

In the past week we have taken a deeper dive into React. We went from writing small functional components, to building class components, using lifecycle events, type checking our props, and styling our components dynamically. React is a powerful library and to be able to use all of these concepts while building an app will be extremely beneficial. In this sprint challenge, we will be revisiting all of these concepts. Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Assessing your Intermediate React Fu

- Answers to your written questions will be recorded in _ANSWERS.md_
- This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have, and documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words.

### Questions:

1.  What are PropTypes used for?
1.  What is a lifecycle event in React?
1.  What is a Higher Order Component?
1.  What are three different ways to style components in React?

## Challenge

Today we are going to revisit an old friend, Lambda Times! This time around, we are going to take our old Vanilla JavaScript app, and convert it to a React app! Much of the initial work has been done for you, but there are some missing pieces you will need to complete to get the app working properly. As before, the styling is modeled after the [LA Times Website](http://www.latimes.com). We have gone through the trouble of creating your base React app, and including some components. Included as well is a CSS file that you may reference when writing your own code. Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Project Setup

[ x ] - This project was put together using Create React App so you should be very familiar with the file structure up to this point.
[ x ] - From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps:

### Part I

[ x ] - Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.
[ x ] - Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
[ x ] - Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
[ x ] - You should now be able to filter cards using your tabs!

### Part II

[ x ] - Make sure all of your props being passed are validated using PropTypes.

### Part III

[ x ] - Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished. Once you have finished the `TopBar` and `Header` components, please move on to Part II. If you have time at the end, you may convert all of the components to styled-components.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

[ x ] - Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

[ x ] - You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

[ x ] - Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
