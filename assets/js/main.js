const BookMain = document.getElementById("books_main"),
  AddBook = document.getElementById("add-book"),
  modal = document.getElementById("modal"),
  search = document.getElementById("search-input"),
  searchForm = document.getElementById("search"),
  title = document.getElementById("title-form"),
  author = document.getElementById("author"),
  FileInput = document.getElementById("file-input"),
  formBook = document.getElementById("form-book");


const books = [
  {
    title: "The Fallen",
    author: "David Baldacci",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/107739-%D8%B1%D9%88%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%A7%D9%82%D8%B7.jpg"
  },
  {
    title: "17th Suspect",
    author: "James Paterson",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/36702-%D8%A7%D9%84%D9%85%D8%B4%D8%A8%D9%88%D9%87-%D8%A7%D9%84%D9%8017.jpg"
  },
  {
    title: "The President Is Missing",
    author: "Bill Clinton",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/77166-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3-%D8%A7%D9%84%D9%85%D9%81%D9%82%D9%88%D8%AF.jpg"
  },
  {
    title: "The Cast",
    author: "Danielle steel",
    image: "https://img.youm7.com/ArticleImgs/2018/8/10/50638-%D8%B1%D9%88%D8%A7%D9%8A%D8%A9-%D9%81%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%AA%D9%85%D8%AB%D9%8A%D9%84.jpg"
  }
]


function newArray() {
  BookMain.innerHTML = "";

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
console.log(newArray)

searchForm.addEventListener("keyup", function (e) {
  e.preventDefault();

  const searchBar = e.target.value;
  console.log(searchBar)
  const filterBook = books.filter(book => {
    return book.title.includes(searchBar)
  })
  newArray(filterBook)
  console.log(filterBook)
  console.log("new", newArray(filterBook))
})

window.onload = newArray();



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
    newArray();

    modal.style.display = "none";
    title.value = "";
    author.value = "";
    FileInput.value = ""
  };
});



