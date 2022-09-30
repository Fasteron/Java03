//             First

// let s = +prompt("Write Number s: ");
// let sum = 0;

// console.log("Number n: " + s);

// for (let i = s; i > 0; i--){
//     if (s     % i == 0) {
//         sum += i;

//     }
// }
// console.log("suma: " + sum);

//              Second

let c = +prompt("Enter Num C: ")
let d = +prompt("Enter Num D: ")
let count = 0;

console.log("Num c: " + c);
console.log("Num d: " + d);

for (let i = c; i <= d; i++){
    if (((i ** 3 % 10) == 4) || ((i ** 3 % 10) == 9) ) {
        count++;
    }
}

console.log("Count: " + count);
