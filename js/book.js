const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    const url = `https://openlibrary.org/search.json?q=${searchValue}`;
 fetch(url)
 .then(res => res.json())
 .then(data => showHere(data.docs))
}

const showHere = books => {
    const bookDetails = document.getElementById('book-details');
   books.forEach(book => {
       console.log(book);
       const div = document.createElement("div");
       div.classList.add('styles');
       div.innerHTML = `
       <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
       <h2>${book.title}</h2>
       <h4>Author Name: ${book.author_name}</h4>
       <h4>First Publish Date: ${book.publish_date[0]}</h4>
       
       `
        bookDetails.appendChild(div);
   }) 
}
    