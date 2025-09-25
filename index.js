function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function");
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function");
  };
}

// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
