// function tickets(peopleInLine){
//     const obj = {
//         twentyfive: 0,
//         fifty: 0,
//         hundred: 0,
//     }
    
//     const m = peopleInLine.every((el) => {
//         console.log(obj)
//         if (el === 25) {
            
//           obj.twentyfive +=1
//         } else if (el === 50 ) {
//             if (obj.twentyfive >= 1) {
//                 obj.fifty += 1
//                 obj.twentyfive -= 1
//                 // message = "YES"
//            } else   return false; 
//         } else if (el === 100) {
//             if (obj.fifty >= 1 && obj.twentyfive >= 1) {
//                     obj.hundred += 1
//                     obj.fifty -= 1
//                     obj.twentyfive -= 1
//             } else if (obj.twentyfive >= 3) {
//                      obj.hundred += 1
//                     obj.twentyfive -= 3
//                 } else return false
//         }
//         return true
//     })
//     // console.log(obj)
//     return m?"YES":"NO"
// }


// console.log(tickets([25, 25, 50, 50]));
// console.log(tickets([25, 25, 50, 50, 50, 50]));
// console.log(tickets([25, 100]));
// console.log(tickets([25,25,50,100,25,25,50,100,25,25,50,100,25,100,50]));


// function queueTime(customers, n) {
    
//     // for (let i = 0; i < n; i++){
        
//     // }
//     // isOpen = true
    
//     // const oneToll = el => {
//     //     // const cust = []

//     //     return new Promise((resolved) => {
//     //         setTimeout(() => resolved(el), el)
//     //     })
        
//     // }
//     const delay = ms => {
//    return new Promise((resolve) => {
//         setTimeout(() => resolve(ms), ms)
//   })
// };
// //   const b = customers.forEach((el)=> oneToll(el))
//     const a = delay(5000).then(console.log("hey"))
    
//     return a 
// }

// console.log(queueTime([], 1));
console.log(queueTime([1,2,3,4], 1));
// console.log(queueTime([2,2,3,3,4,4], 2));
// console.log(queueTime([1,2,3,4,5], 100));