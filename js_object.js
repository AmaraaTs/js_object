let animal = {
  //property
  name: "Banhar",
  type: "Dog",
  age: 2,
  color: "White",
  uulder: "maltese",
  //method
  sound: function () {
    console.log("Woof woof!");
  },
};

console.log("Amitnii ner:", animal.name);
console.log("Amitnii ongo:", animal.color);
animal.sound();

let employeesName = ["Bataa", "Naraa", "Saraa"];
let employeesAge = [22, 23, 24];

let employees = [
  { name: "Bataa", age: 22, address: { duureg: "BZD", khoroo: 5 } },
  { name: "Naraa", age: 23 },
  { name: "Saraa", age: 24 },
];

for (let i = 0; i < employees.length; i++) {
  console.log("Name: ", employees[i].name);
}

let a = 1000;
let b = a;
console.log("a: ", a);
console.log("b: ", b);
a = 2000;
b = 3000;
console.log("a: ", a);
console.log("b: ", b);

//
let animal2 = animal;

console.log("animal1: ", animal);
console.log("animal2: ", animal2);
animal2.name = "Dorjoo";

console.log("animal1: ", animal);
console.log("animal2: ", animal2);

// spread - ...   object iig huulj awdag

let animal3 = { ...animal };

console.log("animal1: ", animal);
console.log("animal3: ", animal3);

animal3.name = "Dulam";

console.log("animal1: ", animal);
console.log("animal3: ", animal3);

let aaa = [100, 300];
let bbb = [...aaa];
bbb[0] = 200;
console.log(aaa);
console.log(bbb);
