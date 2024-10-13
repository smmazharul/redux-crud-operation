import React from 'react';
import { useSelector } from 'react-redux';
import ShowBook from './ShowBook';

const ShowBooks = () => {
    const books = useSelector(state => state.booksReducer.books)
    console.log(books)
    return (
      <div>
        <h2>All Books List</h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
           
            <thead>
              <tr>
                <th></th>
                <th>Book Name</th>
                <th>Athor</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
           
             {
              books.map(book=><ShowBook key={book.id} book={book}></ShowBook>)
             }
             
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ShowBooks;