// src/components/UserList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../features/users/userSlice"; // Redux action'larını import et
import AddUserForm from "./AddUserForm"; // AddUserForm component'ini import et

const UserList = () => {
  const dispatch = useDispatch();

  // Redux store'dan kullanıcı verilerini al
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Kullanıcıları yüklemek için action'ı dispatch et
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId)); // Kullanıcıyı sil
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-list">
      <AddUserForm /> {/* Kullanıcı ekleme formunu buraya ekle */}
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
