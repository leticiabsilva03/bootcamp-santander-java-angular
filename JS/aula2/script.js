// como declarar um array

/*let array = ['string', 1, true];
console.log(array);*/

// arrays podem guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'],['array3'], ['array4'], ['array5']];
console.log(array);

// forEach
array.forEach(function(item,index){console.log(item, index)});

// Push
array.push('novo item');
array.push([]);
console.log(array);

// Pop
array.pop();
console.log(array);

// Shift
array.shift();
console.log(array);

// Unshift
array.unshift('novo item no início');
console.log(array);

//indexOf
array.log(array.indexOf(true));

//Splice
array.splice(0,3);
console.log(array);

//Slice
let novoArray = array.slice(0,3);
console.log(novoArray);

// Objetos

let object = {string : 'string', number: 1, boolean: true, array: ["array"], objectIntern: {objectIntern: 'object intern'}};
console.log(object);
console.log(object.string);

// Desestruturação de objetos
var string = object.string;
console.log(string);

var arrayObject = object.array;
console.log(arrayObject);

var { string, boolean, objectIntern } = object;
console.log(string, boolean, objectIntern);