/**
  
 ** Exercise 1: The book list **
  I 'd like to display my three favorite books inside a nice webpage!
  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).
  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
  */

  function createBookList(books) {
    const headTitle = document.createElement('h1');
    headTitle.textContent = 'Book List';
    headTitle.style.fontSize = '50px';
    headTitle.style.paddingLeft = '60px';
    document.body.appendChild(headTitle);
  }

  const ulElement = document.createElement('ul');
  ulElement.style.display = 'flex';
  ulElement.style.flexWrap = 'wrap';
  document.body.appendChild(ulElement);

  for (let i = 0; i < myBooks.length; i++) {
    const liElement = document.createElement('li');
    liElement.style.listStyle = 'none';
    liElement.style.padding = '25px';
    liElement.style.margin = '20px';
    liElement.style.borderRadius = '25px';
    liElement.style.width = '20%';

    ulElement.appendChild(liElement);

    const pElement = document.createElement('p');
    pElement.textContent = `${myBooks[i].title} - ${myBooks[i].author}`;
    pElement.style.textAlign = 'center';
    pElement.style.fontSize = '15px';

    liElement.appendChild(pElement);

    const imgElement = document.createElement('img');
    imgElement.src = myBooks[i].imgSrc;
    imgElement.style.width = '100%';
    imgElement.style.height = '200px';
    imgElement.style.marginTop = '10px';
    liElement.appendChild(imgElement);

    if (myBooks[i].alreadyRead === true) {
      liElement.style.backgroundColor = 'green';
    } else {
      liElement.style.backgroundColor = 'red';
    }
  }
  
  const books = [{
      title: 'The Chatter',
      author: 'Ethon Kross',
      alreadyRead: true,
      imgSrc: "/Users/sahar/Desktop/Javascript2/Browsers-DOM/js-exercise/week1/BookList/TheChatter.png"
    },
    {
      title: 'Algorithms to Live By',
      author: 'Brian Christian',
      alreadyRead: false,
      imgSrc: "/Users/sahar/Desktop/Javascript2/Browsers-DOM/js-exercise/week1/BookList/Algorithms.png"
    },
    {
      title: 'Selfie',
      author: 'Will Storr',
      alreadyRead: false,
      imgSrc: "/Users/sahar/Desktop/Javascript2/Browsers-DOM/js-exercise/week1/BookList/Selfie.png"
    }
  ];
  
  let ulElement = createBookList(books);
  
  document.querySelector("#bookList").appendChild(ulElement);