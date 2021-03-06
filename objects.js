var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
};

console.log(pizza);

/*
    Everything is an object except for numbers, strings, booleans, null, and
    undefined.

    Objects can be arrays, functions, regular expressions, and objects.
    Objects can be nested in other objects.

    var empty_object = {};

    Every object is linked to a prototype object from which it can inherit 
    properties. Object.prototype comes standard w/ JS

    When creating a new object, you can select the object that should be
    its prototype.

    if(typeof Object.create != 'function'){
        Object.create = function(o){
            var F = function(){};
            F.prototype = o;
            return new F();
        };
    }
    var another_cat = Object.create(cat);

    prototyping is only used in retrieval, not in updating

    hasOwnProperty() doesn't look at prototype chain
*/