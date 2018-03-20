function sum() {

  let array = Array.from(arguments);

  let sum = 0;

  array.forEach( (el) => sum += el)
  return sum;
}

function sum1(...args) {

  let sum = 0;
  args.forEach( (el) => sum += el)
  return sum;

}



Function.prototype.myBind = function (context) {
  const bindArgs  = Array.from(arguments).slice(1);
  const fn = this;

  return function() {
    const callArgs = Array.from(arguments);
    return fn.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind = function (context, ...bindArgs) {
  // const fn = this; //markov says function

  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  const numbers = [];

  let _curriedSum =  (num) => {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let numSum = 0;
      numbers.forEach( (el) => numSum += el);
      return numSum;
    }
    return _curriedSum;
  };

  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  const fn = this;
  const elements = [];

  let curried = (el) => {
    elements.push(el);

    if (elements.length == numArgs) {
      return fn(...elements);
    }
    return curried;
  };
  return curried;
};

Function.prototype.curry = function(numArgs) {
  const fn = this;
  const elements = [];

  let curried = (el) => {
    elements.push(el);

    if (elements.length == numArgs) {
      return fn.apply(fn, elements);
    }
    return curried;
  };
  return curried;
};

function Cat(name) {
  this.name = name;
}

// window == this
Cat.prototype.meow = () => {
  console.log(`${this.name} says meow!`);
}

const gizmo = new Cat('gizmo')
gizmo.meow()
