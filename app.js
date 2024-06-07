const something = 8;
const somethingElse = 12345;

const arr = [12,11,10,9,8,7,6,5,4,3,2,1,0];

const newArr = arr.map((num)=>num+1);
console.log(newArr);

const anotherNewArr = Array.from({ length: 8 }, (_, index) => index);

const number = 5;