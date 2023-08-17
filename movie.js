//  // const API_KEY = "92a9a9e3708a3e9451b7037d5906879a";


// //  const BASE_URL = "https://api.themoviedb.org/3";
// //  const END_POINT = "/trending/movie/week";

// const refs = {
//     movieList: document.getElementById("movieList"),
//     loadMore: document.getElementById("loadMore"),
//   };

// let page = 1;

// refs.loadMore.addEventListener('click', onLoadMore)


// function onLoadMore() {
//   page += 1;
//   serviceMovie(page).then((data) => {
//     refs.movieList.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     refs.loadMore.disabled = false;
//   })
// }


// serviceMovie().then(data => {
//   refs.movieList.insertAdjacentHTML("beforeend", createMarkup(data.results))
  
//   if (data.page < data.total_page) {
//     refs.loadMore.classList.replace("load-more-hidden", "js-load-more");
//     refs.loadMore.disabled = false;

//     console.log(data)
//   }
// }).catch(err => console.log(err))


// function serviceMovie(page = 1) {
//   const BASE_URL = "https://api.themoviedb.org/3";
//   const END_POINT = "/trending/movie/week";
//   const API_KEY = "92a9a9e3708a3e9451b7037d5906879a";
//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page
//   })  
//   return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText)
//     }

//     return resp.json()
//   })
// }   

// function createMarkup(arr) {
//   return arr.map(
//       ({ poster_path, release_date, original_title, vote_average }) =>
//         `<li class="movie-card">
//          <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//           <div class="movie-info">
//             <h2>${original_title}</h2>
//            <p>Release Date: ${release_date}</p>
//            <p>Vote Average: ${vote_average}</p>
//         </div>
//       </li>`
//     )
//     .join("");
// }


// __________________module 11___________________

// const Bace_URL = 'http://localhost:3000'

// fetch("http://localhost:3000/books").then((date) => date.json()).then(console.log)

// const newbook = {title: "Fish", author: "David Orlon" }

// function addBook(book) {
//   const options = {
//     method: "POST",
//     headers: {
//       'Content-Type': "application/json"
//     },
//     body: JSON.stringify(book)
//   }

//   return fetch("http://localhost:3000/books", options).then((res) => res.json())
// };

// addBook(newbook).then((b) => console.log(b))

  // const options = {
  //   method: "PATCH",
  //   headers: {
  //     'Content-Type': "application/json"
  //   },
  //   body: JSON.stringify({title: "Princess"})
  // }


// fetch("http://localhost:3000/books/2", options).then((res) => res.json())




// const fetchBtn = document.querySelector(".fetch");
// const list = document.querySelector(".list");
// const addBtn = document.querySelector(".add");
// const formWrapper = document.querySelector(".form-wrapper");
// const loader = document.querySelector(".loader")

// addBtn.style.display = 'none';
// loader.style.display = 'none';

// const URL = 'http://localhost:3000'

// fetchBtn.addEventListener("click", getUser)

// function getUser() {
//   loader.style.display = 'block';
//   fetch(`${URL}/books`)
//     .then(response => response.json())
//     .then(books => {
//       console.log(books)
//       const markup = books.map(({ id, title, author }) => `
//       <li id=${id}>
//        <p>Title: <span class="title">${title}</span></p>
//        <p>Author: <span class="author">${author}</span></p>
//        <button type="button" class="delete">Delete</button>
//        <button type="button" class="edit">Edit</button>
//       </li>
//       `).join("");

//       list.innerHTML = '';
//       list.insertAdjacentHTML("beforeend", markup);
//       fetchBtn.style.display = 'none';
//       addBtn.style.display = "inline";

//       const delBtns = document.querySelectorAll(".delete");
//       delBtns.forEach(btn => btn.addEventListener('click', deleteUser));

//        const editBtns = document.querySelectorAll(".edit");
//       editBtns.forEach(btn => btn.addEventListener('click', editUser));
//     })
//     .catch(error => console.log(error)).finally(() => {
//       loader.style.display = 'none';
//     })
  
// }

// function deleteUser(event) {
//   const id = event.target.parentNode.id;
//   console.log(id)
//   const options = {
//   method: "DELETE",
//     headers: {
//     authorization: 'admin',
//   },
//   };
//   event.target.textContent = 'Deleting'
//   fetch(`${URL}/books/${id}`, options)
//     .then(() => getUser())
//     .catch(er => console.log(err))
// };

// function editUser(event) {
//   const id = event.target.parentNode.id;
//   const title = event.target.parentNode.querySelector(".title").textContent;
//   const author = event.target.parentNode.querySelector(".author").textContent;
//   formWrapper.innerHTML = creatFormMarkup(title, author);
//   const form = document.querySelector("form");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const user = {
//       title: e.target.elements.title.value,
//       author: e.target.elements.author.value,
//     };

//     const options = {
//     method: "PUT",
//     body: JSON.stringify(user),
//     headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//     };
//     fetch(`${URL}/books/${id}`, options)
//       .then(() => {
//         getUser()
//         formWrapper.innerHTML = ""
//       }
//       ).catch((err) => console.log(err))


//   })

// }

// addBtn.addEventListener("click", addUser);

// function creatFormMarkup(title="", author="") {
//   return `<form>
//   <label>
//   Title: 
//   <input type="text" name='title' value="${title}">
//   </label>
//   <label>
//   Author: 
//   <input type="text" name='author' value="${author}">
//   </label>
//   <button class="save">Save</button>
//   </form>`;
// }

// function addUser() {
//   formWrapper.innerHTML = creatFormMarkup();
//   const form = document.querySelector("form");
//   const saveBtn = document.querySelector(".save");

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const user = {
//       title: e.target.elements.title.value,
//       author: e.target.elements.author.value,
//     };

//     const options = {
//   method: "POST",
//   body: JSON.stringify(user),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//     };
//     saveBtn.textContent = "save...";

//     fetch(`${URL}/books`, options)
//   .then(response => response.json())
//       .then(() => {
//         getUser();
//         formWrapper.innerHTML = ""
//       })
//   .catch(error => console.log(error));
//   })
// }




// ------------module 11 part 2------------------------------
// __________________________________________________________


// try {
//   console.log('1')
//   myVar
// } catch (er) {
//   console.log(er.name)
//   console.log(er.stack)
// }

// console.log("Hello world");


// function getFruits(name) {
//   const fruits = {
//     strawberry: "strawberry",
//     kiwi: "kiwi",
//     apple: 'apple'
//   }

//   return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500))
// };


// async function aMakeSmoothie() {
//   // console.time("aMakeSmoothie")
//   try {
//     const apple = getFruits("apple");
//     const kiwi = getFruits("kiwi");

//     const fruits = await Promise.all([apple, kiwi])
//     console.log(fruits)

//     return fruits
//     // console.timeEnd("aMakeSmoothie")
//   } catch (error) {
//     console.log(error)
//   }
// }
 
// aMakeSmoothie().then(fruits => console.log(fruits))

// function makeSmoothie() {
//   getFruits("apple").then(apple => { console.log(apple) });

//   getFruits("kiwi").then(apple => console.log(apple))
// };







// const Bace_URL = 'http://localhost:3000'

// fetch("http://localhost:3000/books").then((date) => date.json()).then(console.log)

// const newbook = {title: "Fish", author: "David Orlon" }

// function addBook(book) {
//   const options = {
//     method: "POST",
//     headers: {
//       'Content-Type': "application/json"
//     },
//     body: JSON.stringify(book)
//   }

//   return fetch("http://localhost:3000/books", options).then((res) => res.json())
// };

// addBook(newbook).then((b) => console.log(b))

//   const options = {
//     method: "PATCH",
//     headers: {
//       'Content-Type': "application/json"
//     },
//     body: JSON.stringify({title: "Princess"})
//   }


// fetch("http://localhost:3000/books/2", options).then((res) => res.json())





// ---------------------

const Bace_URL = 'http://localhost:3000';


async function addBook(book) {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(book)
  };
  
  const response = await fetch(`${Bace_URL}/books`, options);
  const newbook = await response.json()

  return newbook
};

// async function addBookAndUpdateUI() {
//   try {
//     const book = await addBook({});
//     console.log(book)
//   }catch(e){console.log(e)}
// };

// addBookAndUpdateUI()


async function fetchBook() {
  const response = await fetch("http://localhost:3000/books");
  const books = await response.json();
  return books
};


async function fetchBookbyID(id) {
  const response = await fetch(`http://localhost:3000/books/${id}`);
  const book = await response.json();
  return book
}

function addAndRenderBook() {

  try {
    const book = addBook({});
    console.log(book)
  } catch (er) {
    console.log(er)
  }
}