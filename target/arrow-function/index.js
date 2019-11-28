const fn = function() {
  console.log("foo");
}.bind(this);

[1, 2, 3].map(function(v) {
  return v * v;
});

Promise.resolve()
  .then(function() {
    console.log("foo");
  })
  .then(function() {
    return 1;
  });