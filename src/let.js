// function l() {
//     setTimeout(() => {
//         for (var i = 0; i < 10; i++){
//         console.log(i)
//         }
//    }, 1000)
// }

// function l() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i)
//         setTimeout(() => {
//             console.log(i)
           
//             }, 1000)
//     }
// }
function l() {
    setTimeout(() => {
    for (var i = 0; i < 10; i++) {
        
        setTimeout(function (i) {
            return setTimeout(function(i) {
                return function() {
                console.log(i)  
            }
            }(i), 2000)
        }(i), 1000)
    }
  
    },1000)
    
}
l()
// console.log(l())