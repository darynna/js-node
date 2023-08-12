// // const promise = new Promise((resolve, reject) => {
// //     const canFullfil = Math.random() > 0.5;

// //     setTimeout(() => {
// //         if (canFullfil) {
// //         resolve("Sucssessful with result")
// //     }

// //     reject("REJECT")
// //     }, 1000)

// // });

// // console.log(promise)


// // promise.then((result) => {
// //     console.log(result)
// // }, error => {
// //     console.log(error)
// // });

// // function sucssessful (result){
// //     console.log(result);
// //     return 6;
// // }

// // // function rejected(e) {
// // //     console.log(e);
// // //     return 1
// // // }

// // promise.then(sucssessful)
// //     .then(x => {
// //         console.log(x)

// //         throw new Error("Erro in the second then")
// //     })
// //     .then(y => {
// //         console.log("Hello", y)
// //     })
// //     .catch(error => console.log(error))
// //     .finally(() => console.log("I gonna be executed anyway"))




// // const makeorder = (dish) => {
// //     const DELAY = 1000;
    
// //     const promise = new Promise((resolve, reject) => {
// //      const passed = Math.random() > 0.5;

// //         setTimeout(() => {
// //             if (passed) {
// //                 resolve("Your dish is ready")
// //             } else {
// //                 reject("No products")
// //             }

// //         }, DELAY);
// //     })
// //     return promise
// // };


// // const makeorder = (dish) => {
// //     return Promise.resolve("This is your dish")
// // };


// // makeorder("cake").then(onMakeOrderSucssessful)

// // function onMakeOrderSucssessful(result) {
// //     console.log("onMakeOrderSucssessful")
// //     console.log(result)
// // };

// // function onMakeOrderError(error) {
// //     console.log("onMakeOrderError")
// //     console.lof(error)
// // }


// // // pokemon

// // const fetchPokemonId = id => {
// //     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
// // };

// // fetchPokemonId(1).then(onFetchSucses).catch(error)


// // function onFetchSucses(pokemon) {
// //     console.log(pokemon)
// // };

// // function error(er) {
// //     console.log("Error")
// //     console.log(er)
// // }


// // const makePokemon = () => {
// //     return new Promise((resolve, reject) => {
// //         const passed = Math.random > 0.5;
// //         if (passed) {
// //             resolve("Hey. this is resolve")
// //         }
// //         reject("REGECT")
// //     });
// // };

// // makePokemon().then(result => console.log(result)).catch(error => console.log(error))



// const hourses = [
//     'secretariat',
//     'eclipse',
//     'wes avstr',
//     'fox',
//     'seabiscuit'
// ];


// const refs = {
//     startBtn: document.querySelector(".js-start-race"),
//     winner: document.querySelector(".is-winner"),
//     progressField: document.querySelector(".is-progress"),
//     tableBody: document.querySelector(".js-result-table > tbody"),
// };

// refs.startBtn.addEventListener("click", () => {
//     const promises = hourses.map(race);
     
//     apdate('')
//     refs.progressField.textContent = 'Заезд начался, ставки не принимаются!'

//     Promise.race(promises).then(({ hourse, time }) =>{
//         apdate(`Победил ${hourse}, финишировал за ${time} времени`);
    
//         updateResultTable({hourse, time})});
    
//     Promise.all(promises).then(x => {
//     refs.progressField.textContent = "Заезд окончен принимается ствки"
// })
// })

// function apdate(message){
// refs.winner.textContent = message
// }
// // console.log("%c Заезд начался, ставки не принимаются!", "color: brown")

// function updateResultTable({hourse, time}) {
//     const tr = `<tr><td></td><td>${hourse}</td><td>${time}</td></tr>`;
//     refs.tableBody.insertAdjacentHTML("beforeend", tr)
// }



// // Promise.race(promises).then(x => console.log(`Победил ${x.hourse}, финишировал за ${x.time} времени`))

// // Promise.all(promises).then(x => {
// //     console.log("Заезд окончен принимается ствки");
// //     console.log(x)
// // })


// function race(hourse) {
//     return new Promise((resolve, reject) => {
//         const time = getRandomTim(2000, 3500)
        
//         setTimeout(() => {
//             resolve({ hourse, time });
//         }, time);
//     })
// };



// function getRandomTim(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }





// const promise = new Promise((res, reg) => {
//     const rand = Math.random();
//  setInterval(()=> { if(rand > 0.5){
//     res("Done")
// }else{
//     reg("No")
// }}, 1000)
// }) 


// promise.then((resp) => console.log("Then: ", resp)).catch((err) => console.log("err", err))
