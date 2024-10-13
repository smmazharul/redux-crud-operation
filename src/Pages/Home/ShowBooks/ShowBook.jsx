import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../../Slices/BookSlice';
import { Link } from 'react-router-dom';

const ShowBook = ({ book, idx }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <tr>
      <th>{id}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <Link to={`/updatebook/${book.id}`} state={{ id, title, author }}>
          <FaRegEdit className="text-2xl text-green-600" />
        </Link>
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