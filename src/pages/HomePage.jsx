import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import UserList from '../components/UserList';
import AddUserModal from '../components/AddUserModal';
import { Alert, Container, Button, Spinner } from 'react-bootstrap';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, status, error } = useSelector((state) => state.users);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </Spinner>
      </Container>
    );
  }

  if (status === 'failed') {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          Hata: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Kullanıcı Listesi</h1>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          Yeni Kullanıcı Ekle
        </Button>
      </div>

      <UserList users={users} />

      <AddUserModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
      />
    </Container>
  );
};

export default HomePage;
