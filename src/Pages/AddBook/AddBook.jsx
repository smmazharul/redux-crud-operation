import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../Slices/BookSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
    const dispatch = useDispatch()
    const naviagte =useNavigate()
    const handleAddBook = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.name.value;
        const author = form.author.value;
        const id = numberOfBooks + 1;
        const book = {
          id,
          title,
          author,
        };
        dispatch(addBook(book))
        naviagte("/showbooks")
        console.log(book)
    }
    return (
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleAddBook}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Name</span>
                </label>
                <input
                  type="text"
                                placeholder="Book Name"
                                name='name'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <input
                  type="text"
                                placeholder="Author name"
                                name='author'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className='btn btn-primary' value="Add Book" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddBook;