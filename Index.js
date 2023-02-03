import React, { useState } from "react";

const bookData = [
  { id: 1, name: "A place called Home" },
  { id: 2, name: "Living with the Dead" },
  { id: 3, name: "To kill a Mockingbird" },
];

const Modal = ({modalText}) => {
  return <p>{modalText}</p>
};

const UseReducer = () => {
  const [books, setBooks] = useState(bookData);
  const [isModalOpen , setIsModalOpen] = useState(false);
  const [modalText , setModalText] = useState("");
  const [bookName, setBookName] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  setBooks((prevState) => {
    const newBook = {id: new Date().getTime().toString, name: bookName };
    return [...prevState , newBook ]
  });
  setIsModalOpen(true);
  setModalText("Book is added By UuH")
 }

  return (
    <div>
      <h3>Book List</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      { isModalOpen && <Modal modalText ={modalText} 
       />}

      {books.map((book) => {
        const { id, name } = book;

        return <li key={id}> {name} </li>;
      })}
    </div>
  );
};

export default UseReducer;
