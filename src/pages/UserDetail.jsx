import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../features/users/userSlice';

const UserDetail = () => {
  const { id } = useParams();  
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  const user = users.find((user) => user.id === parseInt(id));

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">Error: {error}</div>;

  if (!user) return <div className="text-center">User not found</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">{user.name}</h1>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Details for {user.name}</h5>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="card-text">
            <strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
          </p>
          <p className="card-text">
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="/" className="btn btn-primary">Back to Users List</a>
      </div>
    </div>
  );
};

export default UserDetail;
