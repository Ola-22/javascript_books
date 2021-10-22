const BookMain = document.getElementById("books_main"),
  AddBook = document.getElementById("add-book"),
  modal = document.getElementById("modal"),
  searchForm = document.getElementById("search"),
  title = document.getElementById("title-form"),
  author = document.getElementById("author"),
  FileInput = document.getElementById("file-input"),
  formBook = document.getElementById("form-book"),
  closeForm = document.getElementById("cancel"),
  remove = document.getElementById('remove');



const books = [
  {
    id: 1,
    title: "The Fallen",
    author: "David Baldacci",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/107739-%D8%B1%D9%88%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%A7%D9%82%D8%B7.jpg"
  },
  {
    id: 2,
    title: "17th Suspect",
    author: "James Paterson",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/36702-%D8%A7%D9%84%D9%85%D8%B4%D8%A8%D9%88%D9%87-%D8%A7%D9%84%D9%8017.jpg"
  },
  {
    id: 3,
    title: "The President Is Missing",
    author: "Bill Clinton",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/77166-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3-%D8%A7%D9%84%D9%85%D9%81%D9%82%D9%88%D8%AF.jpg"
  },
  {
    id: 4,
    title: "The Cast",
    author: "Danielle steel",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/50638-%D8%B1%D9%88%D8%A7%D9%8A%D8%A9-%D9%81%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%AA%D9%85%D8%AB%D9%8A%D9%84.jpg"
  }
]


function newArray(books) {

  books.map((book) => {
    const booksMain = document.createElement("div");
    BookMain.appendChild(booksMain);
    booksMain.classList.add("book_box");
    booksMain.innerHTML = `
<div>
    <img src=${book.image} alt=${book.title} />
    <h1>${book.title}</h1>
    <p>${book.author}</p>
</div>
  `
  })
}

function addBooks() {
  BookMain.innerHTML = "";

  newArray(books);
}
console.log(newArray)


searchForm.addEventListener("keyup", e => {
  e.preventDefault();

  const searchBar = e.target.value;
  let filterd = books.filter(book => book.title.includes(searchBar));
  if (filterd) BookMain.innerHTML = "";

  newArray(filterd);
});

window.addEventListener("load", addBooks)



AddBook.addEventListener("click", () => {
  modal.style.display = "flex";
})


formBook.addEventListener("submit", (e) => {
  e.preventDefault();

  const reader = new FileReader();
  console.log(reader)
  reader.readAsDataURL(FileInput.files[0]);
  reader.onload = () => {
    books.push({
      title: title.value,
      author: author.value,
      image: reader.result
    });
    addBooks();

    modal.style.display = "none";
    title.value = "";
    author.value = "";
    FileInput.value = ""
  };
});

closeForm.addEventListener("click", () => {
  modal.style.display = "none"
})