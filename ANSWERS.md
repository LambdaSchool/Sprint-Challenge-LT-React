[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    Proptypes allow us to set the expected data type for any information used by the application.  This ensures we have full control over the application.  Adding 2 + '2' can have significant effects when the we're expecting an output of 4 but get '22' instead.


[ ] Describe a life-cycle event in React?

    Life-cycle events in React are methods that can occur at specific points in the "life" of the application.  The most common is componentDidMount which is invoked when the element is first rendered to the DOM.  With these methods we can have things triggered at specific times based on the life-cycle events.


[ ] Explain the details of a Higher Order Component?

    Higher Order Components allow for more compartmentalization of our application.  We can use these components to set up certain rules and guidelines or functionality that we want passed to some number of other components.  Passing theses other components into our HOC gives all these components everything defined in the HOC cleaning up our code and making things more modular.


[ ] What are three different ways to style components in React? Explain some of the benefits of each.

    Inline: Specificity is clear here as inline styles trump just about everything.  Easy to know what will be styled and how.

    Imported CSS: This just uses standard CSS, so no need to learn anything new.  We can keep style files separate so it's is to go through and see how things are styled at a glance.

    Imported Libraries: The two we talked about were BootStrap and Styled-Components.  BootStrap gives us pre-made styles that are really easy to incorperate.  Styled-Components gives up the ability to do CSS in JS giving us access to the use of variables and conditions so are styling can become much more dynamic.