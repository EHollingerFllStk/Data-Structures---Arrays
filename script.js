// const strings = ['a', 'b', 'c', 'd'];
// //4 items on 32 bit systems (4 shelves)
// //becomes 4*4 = 16 bytes of storage

// strings[2] //grab the 3rd item in array

// //push
// strings.push('e'); //O(1) not looping only adding to array

// //pop
// strings.pop(); //O(1) 
// strings.pop(); // O(1) not looping

// //unshift - add to beginning of array
// strings.unshift('x'); // O(n)
// //['a', 'b', 'c', 'd'];
// //  0    1    2    3
// //['x','a', 'b', 'c', 'd'];
// //  0   1    2    3    4
// // have to loop through array to update indices with unshift so is O(n)
// //maybe array isn't the best DS to use to add items to the the beginning of array

// //splice -  insert into array
// strings.splice(2, 0, 'alien')
// //again have to loop through half array so is O(n/2) --> O(n)
// console.log(strings)

//C++
// int a[20];
// int b[5] {1,2,3,4,5} if want to add a 6 will nn to copy and create new array
//JS automatically allocate memory
//C++ can be faster than JS

//Dynamic Arrays
//const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage
//append can be O(1)
//JS only 4 blocks of memory for the array and add another letter.
//with dynamic array will loop over array, copy array and add 8 blocks of memory to add items (can keep adding items) O(1)

////////Classes in JS///////////
//reference type

var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

//context vs scope
// function b() {
//   let a = 4;
// }
// console.log(this);
// this.alert("hello");
//this refers to what object its inside of 

// function a() {
//   console.log(this);
// }
// a() //calls the window because in window
// window.a()  // give same output

// const object4 = {
//   a: function() {
//     console.log(this)
//   }
// }
// object4.a() //outputs Object {a:f}

//instantiation
//use when want to make multiple copies of an object

// class Player {
//   constructor(name, type){ 
//     console.log(this);
//     this.name = name; 
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type)
//   }
//   play() {
//     console.log(`WEEEEEEEE I'm a ${this.type}`)
//   }
// }

// const wizard1 = new Wizard('Shelly', 'Healer')
// const wizard2 = new Wizard('Shawn', 'Dark Magic');

// wizard1.play()
// wizard2.introduce()

//Building arrays -JS

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem =   this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length-1; i++ ) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
    //this.data[this.length-1];
  }
}

//each time run push will add data to length of the object

const newArray = new MyArray();
//console.log(newArray)
//console.log(newArray.get(0)); //undefined b/c nothing in array

newArray.push('hi')
newArray.push('you')
newArray.push('!')
// newArray.pop();
// newArray.pop();
newArray.delete(1)
console.log(newArray);