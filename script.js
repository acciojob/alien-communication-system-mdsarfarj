//your JS code here. If required.
// Simulating the processing of microtasks and macrotasks

console.log("Aliens have arrived on Earth!");

// Microtask
Promise.resolve().then(() => {
  console.log("Microtask processed: Sending signal 1");
});

// Macrotask
setTimeout(() => {
  console.log("Macrotask processed: Sending signal 2");
}, 0);

// Microtask
Promise.resolve().then(() => {
  console.log("Microtask processed: Sending signal 3");
});

console.log("Processing tasks...");

// Output:
// Aliens have arrived on Earth!
// Processing tasks...
// Microtask processed: Sending signal 1
// Microtask processed: Sending signal 3
// Macrotask processed: Sending signal 2

