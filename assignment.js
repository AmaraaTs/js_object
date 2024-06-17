// bodlogo1

let a1 = 10;
let b1 = 20;

function bod1() {
  if (a1 > b1) {
    console.log("Bodlogo1: ", a1);
  } else {
    console.log("Bodlogo1: ", b1);
  }
}
bod1();

// bodlogo2

let a2 = 10;
let b2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c2 = -1;

for (i = 0; i < b2.length; i++) {
  if (a2 === b2[i]) {
    c2 = i;
  }
}
console.log("Bodlogo2: ", c2);

// check

let array = [10, 20, 30, 40, 50];
function search(x) {
  for (i = 0; i < array.length; i++) {
    if (x === array[i]) {
      return i;
    } else {
      -1;
    }
  }
}

console.log("Array x:", search(60));

// bodlogo3

let a3 = "аас";
let b3 = ["айыбөй", "айыбөй", "айыбөй", "айыбөйаас", "айыбөй"];
let c3 = -1;

for (i = 0; i < b3.length; i++) {
  if (b3[i].indexOf(a3) !== -1) {
    c3 = i;
  }
}
console.log("Bodlogo3: ", c3);

// bodlogo 4

let a4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let c4 = 0;
// let b4 = (a4) => {
//   for (i = 0; 0 < a4.length; i++) {
//     c4 = c4 + a4[i];
//   }
// };
function dundaj(a4[]) 
b4();
