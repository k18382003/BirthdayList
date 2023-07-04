# Birtday List

### Learning Goal
Understand how React UseState() works

## Steps

#### Import Data

In App.jsx, import the data (from data.js) which contains personal information.
The data is a list of object that can be iterated over later on.

#### Setup State Variable
```jsx
const [people, setPeople] = useState(data)
```
Then, set up the data as a state variable using the useState hook.
The server is used to be stateless, however, if we use useState hook which allows us
to memorize and update the state of a variable. Also, it triggers re-render eveytime we update the state.

#### Iterate and Render and diplay by nested components

Display the number of items in the list by using the length property of the state variable. To render the list of people, iterate over the data array using the map method. 
Create a List component to hold the rendered items and they also contain the list of Person components.
Create a Person component to render the information for each person's image, name, and age.
We should passing People object as a prop from the parent to each child component.

#### Clear List

In App.jsx, add a button to clear the list, and set up the functionality by defining a function that resets the state variable to an empty array.


##### Learning source 
https://www.udemy.com/course/react-tutorial-and-projects-course/?kw=React+18+tu&src=sac#
