const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents )
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

opC()
  .then((resultC) => {
    print(null, resultC);
    return opB();
  })
  .then((resultB) => {
    print(null, resultB);
    return opA();
  })
  .then((resultA) => {
    print(null, resultA);
  })
  .catch((err) => {
    print(err);
  });