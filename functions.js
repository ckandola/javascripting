function eat(food){
    return food + ' tasted really good.';
}
console.log(eat('bananas'));

/*
    - Function objects are linked to Function.prototype, which is linked
    to Object.prototype.
    - They can be stored in vars, objects, and arrays. They can also be
    passed as args and returned from functions. They can also have 
    methods.
    - Every function has a prototype property. Its value is an object 
    with a constructor property whose value is the function.
    - There is no run-time error when the number of args and number of 
    params don't match; extra args will be ignored and undefined will
    take the place of missing args.

    - When a function is not the property of an object, it is invoked
    as a function

    var add = function(a, b){
        return a + b;
    };

    var sum = add(3, 4);

    In this situation, 'this' is bound to the global object. So a
    method can't employ an inner function for help b/c there are
    different references of 'this'. Workaround: if the method 
    defines a variable and assigns it the value of 'this', the
    inner function will have access to 'this' through that var.
        myObject.double = function(){
            var that = this;

            var helper = function(){
                that.value = add(that.value, that.value);
            };

            helper();
        };

        myObject.double();
        document.writeln(myObject.value);

        ---------------------------------------------------
        var helper = function(){
            this.value = add(this.value, this.value);
        }.bind(this);

        helper();

        ---------------------------------------------------
        var helper = () => this.value = 4 + 5;
        helper();
*/