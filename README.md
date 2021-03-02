# Traffic Light with React

Sometimes we want to create components with an internal state that changes overtime, imagine a traffic light that changes color every 3 seconds, for that we normally will make a variable color and set it to a default color:

```js
let color = "blue";
```

But we want our component to re-render and change the website HTML every time the variable color changes, that's why we use hooks:

```js
//        ↓ variable name             ↓ default value
const [ color, setColor] = useState("red");
//               ⬆ function to change the color
```

From now one, every time we use the function `setColor` to change the variable color, the component will re-render and the entire traffic light HTML will be updated with the new color. 

> You can [read more about hooks here](https://content.breatheco.de/lesson/react-hooks-explained).

## 💻 Installation

Start a new react project.

## 📝 Instructions

Let's simulate a traffic light [like this one](https://github.com/breatheco-de/exercise-traffic-light-react/blob/master/preview.gif).

The light has to glow when clicked.

- The whole purpose of the component is displaying a traffic light with red, yellow and green lights.
- When any light is clicked (selected) it has to glow, but the other lights have to stop glowing.
- The component must have a hooked state variable that tracks the color: