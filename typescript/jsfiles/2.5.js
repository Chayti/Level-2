{
    // function with generics
    // Array
    var createArray = function (param) {
        return [param];
    };
    var createArrayWithGeneric = function (param) {
        return [param];
    };
    var res1 = createArray('BD');
    var res2 = createArrayWithGeneric(true);
    var res3 = createArrayWithGeneric({ name: 'x', age: 56 });
    // Tuple
    var createArrayWithTuple = function (param1, param2) {
        return [param1, param2];
    };
    var res4 = createArrayWithTuple('BD', 23);
    // 
}
