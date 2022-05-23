
const books =[];
let listBook= document.getElementById("list-book");
let  addForm =document.getElementById("add-form");
let title= document.getElementById("title");
let author=document.getElementById("author");
let addBnt= document.getElementById("add-btn");

const addbook = (book)=>{
     let book ={
         title:title.value,
         author:author.value
     }



}
const displayBooks =()=>{
    let bookDiv =""
    books.forEach(book=>{
        bookDiv +=`
          <div class="book">
          <p class="book-title">${book.title}</p>
          <p class="">${book.author}</p>
          <button type="button" id="remove-btn"> Remove </button>
          </div>
        `
      
    })
listBook.innerHTML= bookDiv;


}
const renderBook =()=>{


}


const removeBook =(book)=>{

}

displayBooks();




