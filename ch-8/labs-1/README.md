## Parallel Execution

In the labs-1 folder, the `parallel.js` file contains the following:

```
const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}
const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}
const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}
const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

opC((err, resultC) => {
  print(err, resultC);
  opB((err, resultB) => {
    print(err, resultB);
    opA((err, resultA) => {
      print(err, resultA);
    });
  });
});opC((err, resultC) => {
  print(err, resultC);
  opB((err, resultB) => {
    print(err, resultB);
    opA((err, resultA) => {
      print(err, resultA);
    });
  });
});
```

The _opA_ function must be called before _opB_, and _opB_ must be called before _opC_.

Call functions in `parallel.js` in such a way that [ C ] then [ B ] then [ A ] is printed out.
