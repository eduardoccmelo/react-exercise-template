# Exercise 2: Window Resize

Make an effect that will be executed only on the first render of the `App`
component. The effect should:

- Setup an event listener for the `window` object for the `resize` event. When
  handling the event, set the `windowWidth` state to the new `window.innerWidth`.
- Make sure you return a cleanup function inside your effect that removes the
  event listener for the `resize` event from the `window`

## Tips

The `window` object is accessible in every browser. It's the so called `global` object of the browser.

You can read about the global `global` object here: https://javascript.info/global-object

The `window` object also has the method `addEventListener` like HTMLElements. It has the same format:

`window.addEventListener('event-name' handlerFunction)`

The same way we can add event listeners, we can remove them, using:

`window.removeEventListener('event-name', handlerFunction)`

What is important is that the `handlerFunction` is the same function. For that reason, we have to define the function before and not use an inline anonymous function as we are used to.
