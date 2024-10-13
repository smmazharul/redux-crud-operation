import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShowBook = ({book}) => {
    return (
      <tr>
        <th>{book.id}</th>
        <td>{book.title}</td>
            <td>{book.author}</td>
        <td><FaRegEdit className='text-2xl text-green-600'/></td>
        <td><MdDelete className='text-2xl text-error'/></td>
      </tr>
    );
};

export default ShowBook;