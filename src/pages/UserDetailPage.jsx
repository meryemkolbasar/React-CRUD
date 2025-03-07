import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { fetchUsers } from '../features/users/userSlice';

const UserDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users, status } = useSelector((state) => state.users);
    const user = users.find((u) => u.id === Number(id));

    useEffect(() => {
        if (status === 'idle' && users.length === 0) {
            dispatch(fetchUsers());
        }
    }, [dispatch, status, users.length]);

    if (!user) {
        return (
            <Container className="py-4">
                <div className="text-center">
                    <h2>Kullanıcı bulunamadı</h2>
                    <Button variant="primary" onClick={() => navigate('/')}>
                        Ana Sayfaya Dön
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <Container className="py-4">
            <Button variant="outline-primary" onClick={() => navigate('/')} className="mb-4">
                ← Geri Dön
            </Button>

            <Card className="shadow-sm">
                <Card.Header>
                    <h2 className="mb-0">{user.name}</h2>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <h4>Kişisel Bilgiler</h4>
                            <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Telefon:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website}</p>
                        </Col>
                        <Col md={6}>
                            <h4>Adres Bilgileri</h4>
                            <p><strong>Sokak:</strong> {user.address.street}</p>
                            <p><strong>Apartman:</strong> {user.address.suite}</p>
                            <p><strong>Şehir:</strong> {user.address.city}</p>
                            <p><strong>Posta Kodu:</strong> {user.address.zipcode}</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <h4>Şirket Bilgileri</h4>
                            <p><strong>Şirket Adı:</strong> {user.company.name}</p>
                            <p><strong>Slogan:</strong> {user.company.catchPhrase}</p>
                            <p><strong>İş Alanı:</strong> {user.company.bs}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserDetailPage; 