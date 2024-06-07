const something = 8;
const somethingElse = 12345;

const arr = [12,3,4,5,6,7,10,12,12,12,12,12,12,11];

const newArr = arr.map((num)=>num+1);
console.log(newArr);

const anotherNewArr = Array.from({ length: 8 }, (_, index) => index);

const number = 5;