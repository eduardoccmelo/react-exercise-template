# Exercise 3: Counter with LocalStorage

Change the counter component so it:

- On first render the `count` state is set to the item under the key `counter` of the LocalStorage
- Everytime the `count` state is changed its value should be store in the LocalStorage, also under the key `counter`

To verify your solution, the counter should keep its state between page reloads.

E.g: increment the counter until 5 and reload the page. The counter should be still at 5.

## Tips

Some reminders about `localStorage`:

- you can get an item stored inside the `localStorage` with the method
  `localStorage.getItem("key")`. If the key exists and has data, it will return
  its content, otherwise it will return `null`.
- you can set an item stored inside the `localStorage` with the method
  `localStorage.setItem("key", value)`.
- Remember that the Local Storage can only save strings.
- JavaScript Info: https://javascript.info/localstorage

Regarding useEffect:

- You should use the `useEffect` hook more than once in this exercise.
