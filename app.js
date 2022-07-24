const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const {valueTonumber, findMean, findMode} = require('./calculations');

app.get('/mean', function(req, res, next) {

  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }

  let numsAsStrings = req.query.nums.split(',');
  let nums = valueTonumber(numsAsStrings);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {result: findMean(nums)}
  return res.send(result);
});



app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }

  let numsAsStrings = req.query.nums.split(',');
  let arr = valueTonumber(numsAsStrings);
  if (arr instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {result: findMode(arr)}
  return res.send(result);
});
app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }

  let numsAsStrings = req.query.nums.split(',');
  let arr = valueTonumber(numsAsStrings);
  if (arr instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {result: findMedian(arr)}
  return res.send(result);
});



app.use(function (req, res, next) {
  const err = new ExpressError("Not Found",404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

app.listen(3000, function () {
    console.log('App on port 3000');
  })