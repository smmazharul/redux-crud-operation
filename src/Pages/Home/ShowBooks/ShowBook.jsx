import React from 'react';

const ShowBook = ({book}) => {
    return (
      <tr>
        <th>{book.id}</th>
        <td>{book.title}</td>
            <td>{book.author}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    );
};

export default ShowBook;