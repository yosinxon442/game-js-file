// function top1(k) {
//     if (k === 0) return 0;
//     return (k % 10) + top1(Math.floor(k / 10));
// }

// let a = 123, b = 456, c = 789;
// let totalSum = top1(a) + top1(b) + top1(c);
// console.log("Raqamlar yig'indisi", totalSum);




// function top2(n) {
//     if (n === 1 || n === 2) return 1;
//     return top2(n - 1) + top2(n - 2);
// }

// console.log("10-element Fibonacci soni", top2(10));



// function top3(n) {
//     if (n === 1) return 1;
//     return n * top3(n - 1);
// }

// let x = 5, y = 4, z = 3;
// console.log("Faktoriyallar", top3(x), top3(y), top3(z));
