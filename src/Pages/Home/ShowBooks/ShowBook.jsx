import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../../Slices/BookSlice';

const ShowBook = ({ book, }) => {
    const dispatch= useDispatch()
     const handleDelete = id => {
        dispatch(deleteBook(id))
    }
  return (
    <tr>
      <th>{book.id}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        
          <FaRegEdit className="text-2xl text-green-600" />
     
      </td>
      <td>
              <button onClick={() => handleDelete(book.id)}>
              <MdDelete className="text-2xl text-error" />
                 </button>
      </td>
    </tr>
  );
};

export default ShowBook;