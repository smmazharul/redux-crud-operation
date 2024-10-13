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
                <th className="text-2xl font-bold">SL.</th>
                <th className="text-2xl font-bold">Book Name</th>
                <th className="text-2xl font-bold">Athor</th>
                <th className="text-2xl font-bold">Update</th>
                <th className="text-2xl font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <ShowBook
                  key={book.id}
                  book={book}
                  
                ></ShowBook>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ShowBooks;