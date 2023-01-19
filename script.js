const strings = ['a', 'b', 'c', 'd'];
//4 items on 32 bit systems (4 shelves)
//becomes 4*4 = 16 bytes of storage

strings[2] //grab the 3rd item in array

//push
strings.push('e'); //O(1) not looping only adding to array

//pop
strings.pop(); //O(1) 
strings.pop(); // O(1) not looping

//unshift - add to beginning of array
strings.unshift('x'); // O(n)
//['a', 'b', 'c', 'd'];
//  0    1    2    3
//['x','a', 'b', 'c', 'd'];
//  0   1    2    3    4
// have to loop through array to update indices with unshift so is O(n)
//maybe array isn't the best DS to use to add items to the the beginning of array

//splice -  insert into array
strings.splice(2, 0, 'alien')
//again have to loop through half array so is O(n/2) --> O(n)


console.log(strings)



