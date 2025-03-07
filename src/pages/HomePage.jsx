import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser, addUser } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom"; // useNavigate'yi import ettik
import AddUserForm from "../components/AddUserForm";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook'unu kullanalım
  const { users, loading, error } = useSelector((state) => state.users);
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });
  console.log("Users:", users);

  useEffect(() => {
    console.log("Fetching users...");
    dispatch(fetchUsers()); // Kullanıcıları al
  }, [dispatch]);

  const handleDelete = (e, id) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    console.log("Delete clicked for user with id:", id); // Silme butonuna tıklayınca id'yi logla
    dispatch(deleteUser(id)); // Redux store'dan ve backend'den sil
  };

  const handleEdit = (e, id) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    console.log("Edit clicked for user with id:", id); // Düzenleme butonuna tıklayınca id'yi logla
    // Düzenleme işlemini başlatabiliriz, örneğin bir modal açılabilir
  };

  const handleAddUser = async () => {
    console.log("Add user clicked with data:", newUser); // Formdaki veriyi konsola yazdır
    if (newUser.name && newUser.email && newUser.phone) {
      // Backend'e kullanıcıyı ekleyelim
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify({
            name: newUser.name,
            email: newUser.email,
            phone: newUser.phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      // Backend'den dönen kullanıcıyı Redux store'a ekleyelim
      dispatch(addUser(data)); // Backend'den dönen veriyi ekle

      console.log("User added:", data); // Kullanıcı eklendiğinde veriyi logla
      setNewUser({ name: "", email: "", phone: "" }); // Formu sıfırla
    } else {
      console.log("Invalid user data:", newUser); // Geçersiz veri durumunda logla
    }
  };

  const handleCardClick = (id) => {
    navigate(`/user/${id}`); // Kart tıklandığında yönlendirme
  };

  return (
    <div className="container mt-4">

      {loading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {error && (
        <div className="alert alert-danger text-center">Error: {error}</div>
      )}

         
          <> <AddUserForm /> </>
         
       

      {/* Kullanıcı Listesi */}
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4 mb-3">
            <div
              className="card p-3 shadow"
              onClick={() => handleCardClick(user.id)} // Kart tıklandığında yönlendirme
              style={{ cursor: "pointer" }} // Kullanıcı kartına tıklanabilir olduğunu gösteren stil
            >
              <h5>{user.name}</h5>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(e, user.id)} // Silme butonuna tıklayınca yönlendirmeyi engelle
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleEdit(e, user.id)} // Düzenleme butonuna tıklayınca yönlendirmeyi engelle
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
