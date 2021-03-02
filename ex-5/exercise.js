function loadBooks(array) {
    for (let i of array) {
        let p1 = document.createElement("p"); 
        p1.textContent = i.title;
        let p2 = document.createElement("p"); 
        p2.textContent = i.author;
        document.querySelector("body").appendChild(p1);
        document.querySelector("body").appendChild(p2);

    }
}

// Paste here your array
var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false }, { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true }, { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true }
  ];

// This function will execute when the window loads
window.onload = loadBooks(books);
