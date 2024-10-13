import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateBook } from '../../Slices/BookSlice';

const UpdateBook = () => {
    const location = useLocation()
    const id = location.state.id
    const dispatch=useDispatch()
    console.log(location)
    const handleUpdateBook = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.name.value;
        const author = form.author.value;
        // const Book = { title, author }
        // console.log(Book);
        dispatch(updateBook({id, title, author }));
    }
    return (
      <div>
            <h2>Update Book</h2>
            
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleUpdateBook} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Book Name"
                                    name="name"
                                    defaultValue={location.state.title}
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
                                    name="author"
                                    defaultValue={location.state.author}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update Book"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateBook;