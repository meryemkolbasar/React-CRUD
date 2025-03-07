// src/components/UserList.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { deleteUser, setSelectedUser } from '../features/users/userSlice';
import EditUserModal from './EditUserModal';
import { useNavigate } from 'react-router-dom';

const UserList = ({ users }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDelete = async (userId, e) => {
    e.stopPropagation();
    if (window.confirm('Bu kullanıcıyı silmek istediğinizden emin misiniz?')) {
      await dispatch(deleteUser(userId));
    }
  };

  const handleEdit = (user, e) => {
    e.stopPropagation();
    setSelectedUserId(user.id);
    setShowEditModal(true);
  };

  const handleCardClick = (user) => {
    dispatch(setSelectedUser(user));
    navigate(`/user/${user.id}`);
  };

  return (
    <>
      <Row>
        {users.map((user) => (
          <Col key={user.id} xs={12} md={6} lg={4} className="mb-4">
            <Card
              className="h-100 shadow-sm position-relative hover-card"
              onClick={() => handleCardClick(user)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Body>
                <Card.Title className="text-primary mb-3">
                  {user.name}
                </Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Telefon:</strong> {user.phone}
                </Card.Text>
                <div
                  className="d-flex justify-content-between mt-3 position-relative"
                  style={{ zIndex: 2 }}
                >
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={(e) => handleDelete(user.id, e)}
                  >
                    Sil
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={(e) => handleEdit(user, e)}
                  >
                    Düzenle
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <EditUserModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        userId={selectedUserId}
      />
    </>
  );
};

export default UserList;
