//throw expression;

//throw 42;
//throw 'Ball';
//throw {
    //head: 'Tall'
// }

// try...catch...finally

// let divide = (a,b) => {
//     try{
//         if (b == 0) {
//             throw "Division by 0"
//         }
//         else {
//             return a / b;
//         }
//     }
//     catch(e) {
//         console.log(e);
//         console.log('Why r u dividng by 0?')
//     }    
// }

// let sum = (a, b, c) => {
//     let div = divide(a,b);
//     return div + c;
// }

//console.log(sum(1, 0, 2))
// compute area oli when length n width are positive numbers

// let area = (length, width) => {
//     try {
//         if (length < 0 || width < 0) {
//             throw "Negative values"
//         }
//         else {
//             return length * width;
//         }
//      }
//      catch(e){
//         alert(e);
//      }
// }
// console.log(area(-4,9))



//sum array
let sumArray = (a) => {
    try {
        if(a.length == 0) {
            throw "Empty Array";
        } else{
            let sum = 0;
            for(let i=0; i < a.length; i++) {
                sum = sum + a[1];
            }
            return sum;
        }
    }
        catch(e) {
            console.log(e);
        }
    }
    console.log(sumArray(1,2,3,4,5))
