// bodlogo1. Өгөгдсөн 2 тооны ихийг олох функц бич.

function bod1(x1, y1) {
  if (x1 > y1) {
    return x1;
  } else {
    return y1;
  }
}
console.log("Bodlogo1: ", bod1(15, 16));

// bodlogo2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.

let array = [10, 20, 30, 40, 50];

function findIndex(searchArr, findToo) {
  console.log("Bodlogo2: Array: ", array);
  console.log("Bodlogo2: Find number: ", findToo);
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i] === findToo) {
      return i;
    }
  }
  return -1;
}
let idx = findIndex(array, 40);

console.log("Bodlogo2: index: ", idx);

// bodlogo3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

let array3 = ["айыбөй", "айыбөй", "айыбөйаас", "айыбөй", "айыбөй"];

function findAas(searchArr, findText) {
  console.log("Bodlogo3: Array: ", array3);
  console.log("Bodlogo3: Find number: ", findText);
  for (i = 0; i < searchArr.length; i++) {
    if (searchArr[i].indexOf(findText) !== -1) {
      return i;
    }
  }
  return -1;
}
let text3 = findAas(array3, "аас");
console.log("Bodlogo3: ", text3);

// bodlogo4. Өгөгдсөн array - ийн дундажыг олох функц бич.

let array4 = [10, 20, 30, 40, 50];

function avg(avgArray) {
  let s = 0;
  for (let i = 0; i < avgArray.length; i++) {
    s += avgArray[i];
  }

  return s / avgArray.length;
}

let av = sum([8934, 34, 3, 2]);
console.log("Bodlogo4: ", av);
let av1 = avg([8934, 34, 3, 2]);
console.log("Bodlogo4: ", avg([8934, 34, 3, 2]));

// bodlogo5. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.

function sum(sumArray) {
  let s = 0;
  for (let i = 0; i < sumArray.length; i++) {
    s += sumArray[i];
  }
  return s;
}
let summ = sum(array4);
console.log("Bodlogo5: ", summ);

// bodlogo6. Өгөгдсөн тоо анхны эсэхийг олох функц бич.

function num(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return "Анхны тоо биш";
    }
  }
  return "Анхны тоо";
}
let aToo = num(11);
console.log("Bodlogo6: ", aToo);

// bodlogo7. Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false

function pali(x) {
  let y = 0;
  let z = 0;
  let u = x;
  while (x !== 0) {
    y = x % 10;
    x = x - y;
    x = x / 10;
    z = z * 10 + y;
  }
  if (u === z) {
    return "Палиндром";
  } else {
    return "Палиндром биш";
  }
}
let palindrom = pali(1234321);
console.log("Bodlogo7: ", palindrom);

// library - math object
let mm = Math.max(10, 12, 15, 4);
console.log("Max turshilt: ", mm);

// math.floor - dooshoo bvhelcildeg
// math.ceil - deeshee bvhelcildeg
// math.round - toimloh

let random = Math.random(); // 0-1 hoorond random too gargah
console.log(random);

// bodlog8. Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh
