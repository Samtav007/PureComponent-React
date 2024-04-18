Question: Which out of the two components (which are performing the same functionality) is performing better and how?

Answer: The pure component performs better because when we change the value of toggle to false, it stops displaying the code repeatedly even after clicking on the increment button.

The simple component displays the value of the count after each onclick, regardless of whether the value of the toggle is true or not. This reduces code efficiency (takes more time) since the dom needs to keep re-rendering even when it's not necessary (when the value hasn't changed).
