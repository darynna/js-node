// if (rand > 0.5) {
//     res("🤑");
//   } else {
//     rej("👿");
//   }


// const refs = {
//     start: document.getElementById("start"),
//     container: document.getElementById("container")
// };

// refs.start.addEventListener("click", startGame);

// function startGame(){
//     const promises = [...refs.container.children].map(() => createPromise());
    
//     Promise.allSettled(promises).then((items) => {
//         console.log(items);

//         const isWinner = 
//         items.every((item) => item.status === "fulfilled") || 
//         items.every((item) => item.status === 'rejected');

//         console.log(isWinner)
        

//         items.forEach((item, i) => {
//             refs.container.children[i].textContent = '';

//             setTimeout(() => {
//                 refs.container.children[i].textContent = item.reason || item.value;

//                 if(i === items.length - 1){
//                     console.log("Done")
//                     const instance = basicLightbox.create(`<h1>${isWinner ? "Winner" : "Loser"}</h1>`);
//                     instance.show();
//                 };

//             }, 1000 * (i + 1))
//         })

//     })
// };

// function createPromise(){
//    return new Promise((res, rej) => {
//     const rand = Math.random();

//  if(rand > 0.5){
//     res("🤑");
// }else{
//     rej("👿");
// }
// }) 
// }

